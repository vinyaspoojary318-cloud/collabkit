"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import CreatorCard from "../../components/CreatorCard";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Badge from "../../components/Badge";
import { useDeals } from "../../context/DealContext";

const CATEGORIES = ["All", "Tech", "Beauty", "Fitness", "Finance", "Food"];

export default function MarketplacePage() {
  const { creators, addDeal } = useDeals();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCreator, setActiveCreator] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [collabForm, setCollabForm] = useState({
    brand: "",
    email: "",
    budget: "",
    deliverable: "Custom Sponsorship Reel",
    notes: "",
  });

  const handleRequestCollab = (creator) => {
    setActiveCreator(creator);
    setCollabForm({
      brand: "",
      email: "",
      budget: creator.rate?.replace(/[^0-9]/g, "") ? `${creator.rateValue}` : "15000",
      deliverable: `${creator.niche} Integration`,
      notes: `Reaching out to ${creator.name} for upcoming brand campaign.`,
    });
    setIsModalOpen(true);
  };

  const handleCollabSubmit = (e) => {
    e.preventDefault();
    if (!collabForm.brand) return;

    addDeal({
      brand: collabForm.brand,
      clientEmail: collabForm.email,
      amount: Number(String(collabForm.budget).replace(/[^0-9]/g, "")) || 15000,
      deliverable: collabForm.deliverable,
      title: `${collabForm.deliverable} • ${collabForm.brand}`,
      status: "pitched",
      notes: collabForm.notes,
    });

    setIsModalOpen(false);
  };

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.niche.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.brands.some((b) =>
        b.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" ||
      creator.niche.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.badgeRow}>
            <Badge variant="public">PUBLIC DIRECTORY</Badge>
            <span className={styles.cityTag}>Mangalore • Bangalore • Mysore • Mumbai</span>
          </div>
          <h1 className={styles.title}>Find Creators & Video Editors</h1>
          <p className={styles.subtitle}>
            Connect with verified short-form editors and content creators. Transparent ₹ rates and proven brand track records.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className={styles.filterSection}>
        <div className={styles.searchWrapper}>
          <Input
            icon="🔍"
            placeholder="Search by creator name, niche, city, or past brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.categories}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.catButton} ${
                selectedCategory === cat ? styles.catActive : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Creator Count & Results */}
      <div className={styles.countRow}>
        <span className={styles.countText}>
          Showing <strong>{filteredCreators.length}</strong> creators available for collab
        </span>
      </div>

      {/* Creators Grid */}
      {filteredCreators.length > 0 ? (
        <div className={styles.grid}>
          {filteredCreators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onRequestCollab={handleRequestCollab}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>🔍</span>
          <h3>No creators found</h3>
          <p>Try searching for a different niche (e.g. Tech, Beauty) or reset your filter.</p>
          <Button
            variant="secondary"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}

      {/* Collab Request Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={activeCreator ? `Collab with ${activeCreator.name}` : "Book Collab"}
        subtitle={`Reach out directly. ${activeCreator?.name} responds within 2 hours.`}
      >
        <form onSubmit={handleCollabSubmit} className={styles.modalForm}>
          <Input
            label="Brand / Company"
            placeholder="e.g. boAt, Mamaearth, Noise"
            value={collabForm.brand}
            onChange={(e) =>
              setCollabForm({ ...collabForm, brand: e.target.value })
            }
            required
          />

          <Input
            label="Work Email"
            type="email"
            placeholder="collabs@brand.in"
            value={collabForm.email}
            onChange={(e) =>
              setCollabForm({ ...collabForm, email: e.target.value })
            }
            required
          />

          <div className={styles.formRow}>
            <Input
              label="Proposed Budget (₹)"
              placeholder="e.g. 18000"
              value={collabForm.budget}
              onChange={(e) =>
                setCollabForm({ ...collabForm, budget: e.target.value })
              }
              required
            />

            <Input
              label="Deliverable"
              value={collabForm.deliverable}
              onChange={(e) =>
                setCollabForm({ ...collabForm, deliverable: e.target.value })
              }
              required
            />
          </div>

          <Input
            label="Campaign Brief"
            as="textarea"
            placeholder="Describe product angle, timeline, and script references..."
            value={collabForm.notes}
            onChange={(e) =>
              setCollabForm({ ...collabForm, notes: e.target.value })
            }
            rows={3}
          />

          <div className={styles.modalActions}>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Send Collaboration Pitch →
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
