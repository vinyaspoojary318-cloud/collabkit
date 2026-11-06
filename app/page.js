"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Button from "../components/Button";
import Input from "../components/Input";
import CreatorCard from "../components/CreatorCard";
import RequestCard from "../components/RequestCard";
import Modal from "../components/Modal";
import Badge from "../components/Badge";
import { useDeals } from "../context/DealContext";

export default function HomePage() {
  const { creators, requests, addDeal, showToast } = useDeals();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [isCollabModalOpen, setIsCollabModalOpen] = useState(false);

  // Inbound request form state
  const [inboundForm, setInboundForm] = useState({
    brand: "",
    email: "",
    budget: "",
    deliverable: "YouTube Video Edit (8-10 min)",
    brief: "",
  });

  const handleOpenCollab = (creator) => {
    setSelectedCreator(creator);
    setInboundForm((prev) => ({
      ...prev,
      deliverable: `${creator.niche} Collab`,
    }));
    setIsCollabModalOpen(true);
  };

  const handleApplyRequest = (req) => {
    showToast(`Applied to "${req.title}" — brand will view your public profile!`);
  };

  const handleViewBrand = (req) => {
    showToast(`Viewing requirements from ${req.brand}`);
  };

  const handleSubmitInbound = (e) => {
    e.preventDefault();
    if (!inboundForm.brand) return;

    addDeal({
      brand: inboundForm.brand,
      clientEmail: inboundForm.email,
      amount: Number(String(inboundForm.budget).replace(/[^0-9]/g, "")) || 15000,
      deliverable: inboundForm.deliverable,
      title: `${inboundForm.deliverable} • ${inboundForm.brand}`,
      status: "pitched",
      notes: inboundForm.brief,
    });

    setInboundForm({
      brand: "",
      email: "",
      budget: "",
      deliverable: "YouTube Video Edit (8-10 min)",
      brief: "",
    });
    setIsCollabModalOpen(false);
  };

  const filteredCreators = creators.filter((c) => {
    const q = searchTerm.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.niche.toLowerCase().includes(q) ||
      c.city.toLowerCase().includes(q) ||
      c.brands.some((b) => b.toLowerCase().includes(q))
    );
  });

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBadgeWrapper}>
          <Badge variant="public">PUBLIC DISCOVERY PLATFORM</Badge>
          <span className={styles.heroBadgeSubtitle}>
            Inspired by Passionfroot & Product Hunt
          </span>
        </div>

        <h1 className={styles.heroTitle}>
          Brands who need collab come here & find creators across India
        </h1>

        <p className={styles.heroSubtitle}>
          The dedicated sponsor CRM & public discovery marketplace for video editors,
          shorts creators, and regional influencers in Mangalore, Bangalore, and Mysore.
        </p>

        {/* Search Bar */}
        <div className={styles.searchBox}>
          <Input
            icon="🔍"
            placeholder="Search creators by tech, beauty, city (e.g. Mangalore), or brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Hero Actions */}
        <div className={styles.heroActions}>
          <Link href="/marketplace">
            <Button variant="primary" size="lg">
              Explore All Creators →
            </Button>
          </Link>
          <Link href="/requests">
            <Button variant="secondary" size="lg">
              View Brand Requests ({requests.length})
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg">
              Creator Private Dashboard 🔒
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Creators Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Featured Indian Creators</h2>
            <p className={styles.sectionSubtitle}>
              Top editors and niche creators ready for brand collaborations with transparent ₹ rates.
            </p>
          </div>
          <Link href="/marketplace" className={styles.viewAllLink}>
            See All Creators →
          </Link>
        </div>

        <div className={styles.grid}>
          {filteredCreators.slice(0, 3).map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onRequestCollab={handleOpenCollab}
            />
          ))}
        </div>
      </section>

      {/* Recent Brand Requests Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Recent Brand Collab Requests</h2>
            <p className={styles.sectionSubtitle}>
              Live requirements posted by regional brands, college fest teams, and startups.
            </p>
          </div>
          <Link href="/requests" className={styles.viewAllLink}>
            Browse All Requests ({requests.length}) →
          </Link>
        </div>

        <div className={styles.grid}>
          {requests.slice(0, 3).map((req) => (
            <RequestCard
              key={req.id}
              request={req}
              onApply={handleApplyRequest}
              onViewBrand={handleViewBrand}
            />
          ))}
        </div>
      </section>

      {/* Inbound Collaboration Modal */}
      <Modal
        isOpen={isCollabModalOpen}
        onClose={() => setIsCollabModalOpen(false)}
        title={
          selectedCreator
            ? `Collab with ${selectedCreator.name}`
            : "Work with Creator"
        }
        subtitle="Submit your project brief. Creator receives instant notification in their Private Pipeline."
      >
        <form onSubmit={handleSubmitInbound} className={styles.inboundForm}>
          <Input
            label="Brand / Company"
            placeholder="e.g. boAt, Mamaearth, Local Cafe"
            value={inboundForm.brand}
            onChange={(e) =>
              setInboundForm({ ...inboundForm, brand: e.target.value })
            }
            required
          />

          <Input
            label="Work Email"
            type="email"
            placeholder="growth@brand.com"
            value={inboundForm.email}
            onChange={(e) =>
              setInboundForm({ ...inboundForm, email: e.target.value })
            }
            required
          />

          <div className={styles.formRow}>
            <Input
              label="Budget (₹)"
              placeholder="e.g. 18000"
              value={inboundForm.budget}
              onChange={(e) =>
                setInboundForm({ ...inboundForm, budget: e.target.value })
              }
              required
            />

            <Input
              label="Deliverable"
              as="select"
              value={inboundForm.deliverable}
              onChange={(e) =>
                setInboundForm({ ...inboundForm, deliverable: e.target.value })
              }
            >
              <option>YouTube Video Edit (8-10 min)</option>
              <option>Reels / Shorts Pack (3x)</option>
              <option>Cinematic Launch Cut + Thumbnails</option>
              <option>UGC Ad Integration</option>
            </Input>
          </div>

          <Input
            label="Campaign Brief / References"
            as="textarea"
            placeholder="Tell the creator about your product goals, timeline, and deliverables..."
            value={inboundForm.brief}
            onChange={(e) =>
              setInboundForm({ ...inboundForm, brief: e.target.value })
            }
            rows={3}
          />

          <div className={styles.modalActions}>
            <Button
              variant="secondary"
              onClick={() => setIsCollabModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Send Collab Request →
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
