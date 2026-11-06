"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { DealProvider, useDeals } from "../context/DealContext";

function ToastDisplay() {
  const { toastMessage } = useDeals();
  if (!toastMessage) return null;

  return (
    <div className="toastWrapper">
      <div className="toast">
        <span>⚡</span>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}

export default function ClientLayout({ children }) {
  return (
    <DealProvider>
      <Navbar />
      <main className="mainContainer">{children}</main>
      <footer className="footer">
        <div className="footerInner">
          <div>
            <strong>CollabKit</strong> — Sponsor & Deal CRM for Indian Video Editors & Creators. Inspired by Passionfroot (YC W21).
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span>Built with Next.js 14 + React Context + CSS Modules</span>
            <span>•</span>
            <span>All amounts in ₹</span>
          </div>
        </div>
      </footer>
      <ToastDisplay />
    </DealProvider>
  );
}
