"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { INITIAL_DEALS, INITIAL_CREATORS, INITIAL_REQUESTS } from "../data/dummyData";

const DealContext = createContext(null);

export function DealProvider({ children }) {
  const [deals, setDeals] = useState([]);
  const [requests, setRequests] = useState([]);
  const [creators] = useState(INITIAL_CREATORS);
  const [toastMessage, setToastMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize and persist state with localStorage
  useEffect(() => {
    try {
      const savedDeals = localStorage.getItem("collabkit_deals");
      const savedRequests = localStorage.getItem("collabkit_requests");

      if (savedDeals) {
        setDeals(JSON.parse(savedDeals));
      } else {
        setDeals(INITIAL_DEALS);
      }

      if (savedRequests) {
        setRequests(JSON.parse(savedRequests));
      } else {
        setRequests(INITIAL_REQUESTS);
      }
    } catch {
      setDeals(INITIAL_DEALS);
      setRequests(INITIAL_REQUESTS);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("collabkit_deals", JSON.stringify(deals));
      } catch (err) {
        console.error("Failed to save deals to localStorage", err);
      }
    }
  }, [deals, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("collabkit_requests", JSON.stringify(requests));
      } catch (err) {
        console.error("Failed to save requests to localStorage", err);
      }
    }
  }, [requests, isLoaded]);

  // Dynamic calculations: demonstration of automatic recalculation when deals move status
  const totalEarnings = deals.reduce((sum, d) => sum + (Number(d.amount) || 0), 0);
  const paid = deals
    .filter((d) => d.status === "paid")
    .reduce((sum, d) => sum + (Number(d.amount) || 0), 0);
  const pending = deals
    .filter((d) => d.status !== "paid")
    .reduce((sum, d) => sum + (Number(d.amount) || 0), 0);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const addDeal = (dealData) => {
    const newDeal = {
      id: "deal-" + Date.now(),
      brand: dealData.brand || "New Brand",
      brandShort: (dealData.brand?.[0] || "B").toUpperCase(),
      brandColor: dealData.brandColor || "#0F172A",
      title: dealData.title || `${dealData.deliverable || "Collab"} • ${dealData.brand}`,
      amount: Number(dealData.amount) || 15000,
      due: dealData.due || "3d",
      dueLabel: dealData.dueLabel || "ok",
      revisions: 0,
      maxRev: 2,
      status: dealData.status || "pitched",
      deliverable: dealData.deliverable || "YouTube Video Cut",
      clientEmail: dealData.clientEmail || "collab@brand.in",
      notes: dealData.notes || "Inbound collaboration created via CollabKit.",
    };

    setDeals((prev) => [newDeal, ...prev]);
    showToast(`Added deal for ${newDeal.brand} (₹${newDeal.amount.toLocaleString("en-IN")})`);
  };

  const updateDealStatus = (dealId, nextStatus) => {
    setDeals((prev) =>
      prev.map((d) => {
        if (d.id === dealId) {
          return {
            ...d,
            status: nextStatus,
            due: nextStatus === "paid" ? "Paid" : d.due,
            dueLabel: nextStatus === "paid" ? "ok" : d.dueLabel,
          };
        }
        return d;
      })
    );
    showToast(`Deal moved to ${nextStatus.toUpperCase()}`);
  };

  const addRequest = (reqData) => {
    const newReq = {
      id: "req-" + Date.now(),
      title: reqData.title,
      brand: reqData.brand || "Anonymous Brand",
      need: reqData.need,
      budget: reqData.budget.startsWith("₹") ? reqData.budget : `₹${reqData.budget}`,
      budgetValue: Number(String(reqData.budget).replace(/[^0-9]/g, "")) || 10000,
      location: reqData.location || "Remote / India",
      posted: "Just now",
      category: reqData.category || "General",
    };

    setRequests((prev) => [newReq, ...prev]);
    showToast(`Public request posted: "${newReq.title}"`);
  };

  const resetDemoData = () => {
    setDeals(INITIAL_DEALS);
    setRequests(INITIAL_REQUESTS);
    try {
      localStorage.removeItem("collabkit_deals");
      localStorage.removeItem("collabkit_requests");
    } catch {
      // ignore
    }
    showToast("Reset to initial demo data");
  };

  const copyShareableLink = () => {
    const link = typeof window !== "undefined" ? `${window.location.origin}/` : "https://collabkit.vercel.app/";
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(link).then(
        () => showToast("Shareable link copied to clipboard!"),
        () => showToast(`Share link: ${link}`)
      );
    } else {
      showToast(`Share link: ${link}`);
    }
  };

  return (
    <DealContext.Provider
      value={{
        deals,
        requests,
        creators,
        totalEarnings,
        pending,
        paid,
        addDeal,
        updateDealStatus,
        addRequest,
        resetDemoData,
        toastMessage,
        showToast,
        copyShareableLink,
      }}
    >
      {children}
    </DealContext.Provider>
  );
}

export function useDeals() {
  const context = useContext(DealContext);
  if (!context) {
    throw new Error("useDeals must be used within a DealProvider");
  }
  return context;
}
