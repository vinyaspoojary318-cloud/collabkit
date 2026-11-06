"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import RequestCard from "../../components/RequestCard";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Badge from "../../components/Badge";
import { useDeals } from "../../context/DealContext";

export default function RequestsPage() {
  const { requests, addRequest, showToast } = useDeals();
  const [searchTerm, setSearchTerm] = useState("");
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  // New Request Form State
  const [postForm, setPostForm] = useState({
    title: "",
    brand: "",
    need: "",
    budget: "",
    location: "Mangalore / Bangalore",
    category: "Tech",
  });

  const handleApply = (req) => {
    showToast(`Application sent for "${req.title}". The brand team has been notified!`);
  };

  const handleViewBrand = (req) => {
    showToast(`Viewing brand requirement from ${req.brand} (${req.location})`);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postForm.title || !postForm.need) return;

    addRequest({
      title: postForm.title,
      brand: postForm.brand || "Anonymous Brand",
      need: postForm.need,
      budget: postForm.budget || "₹10,000",
      location: postForm.location || "India",
      category: postForm.category,
    });

    setPostForm({
      title: "",
      brand: "",
      need: "",
      budget: "",
      location: "Mangalore / Bangalore",
      category: "Tech",
    });

    setIsPostModalOpen(false);
  };

  const filteredRequests = requests.filter((r) => {
    const q = searchTerm.toLowerCase();
    return (
      r.title.toLowerCase().includes(q) ||
      r.brand.toLowerCase().includes(q) ||
      r.need.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q)
    );
  });

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.badgeRow}>
            <Badge variant="public">PUBLIC REQUEST BULLETIN</Badge>
            <span className={styles.noticeText}>Open to all regional video editors & creators</span>
          </div>
          <h1 className={styles.title}>Public Brand Requests</h1>
          <p className={styles.subtitle}>
            Brands, local startups, and college fests post their creator needs here. Apply directly with zero friction.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => setIsPostModalOpen(true)}
        >
          + Post Brand Request
        </Button>
      </div>

      {/* Search Bar */}
      <div className={styles.searchSection}>
        <Input
          icon="🔍"
          placeholder="Search brand requests by campaign title, location, or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Requests Count */}
      <div className={styles.countRow}>
        <span className={styles.countText}>
          Active Requests: <strong>{filteredRequests.length}</strong> opportunities
        </span>
      </div>

      {/* Requests Grid */}
      {filteredRequests.length > 0 ? (
        <div className={styles.grid}>
          {filteredRequests.map((req) => (
            <RequestCard
              key={req.id}
              request={req}
              onApply={handleApply}
              onViewBrand={handleViewBrand}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>📢</span>
          <h3>No matching requests</h3>
          <p>Be the first brand to post a collaboration requirement on the open bulletin.</p>
          <Button variant="primary" onClick={() => setIsPostModalOpen(true)}>
            Post a Request Now
          </Button>
        </div>
      )}

      {/* Post Brand Request Modal */}
      <Modal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        title="Post a Brand Collab Request"
        subtitle="This request will appear publicly on the marketplace. Verified creators can apply directly."
      >
        <form onSubmit={handlePostSubmit} className={styles.modalForm}>
          <Input
            label="Campaign / Opportunity Title"
            placeholder="e.g. Revels Fest Teaser Cut / boAt Earbuds UGC"
            value={postForm.title}
            onChange={(e) =>
              setPostForm({ ...postForm, title: e.target.value })
            }
            required
          />

          <Input
            label="Brand / Organization Name"
            placeholder="e.g. Cafe Udupi, MIT Fest Team, Local Startup"
            value={postForm.brand}
            onChange={(e) =>
              setPostForm({ ...postForm, brand: e.target.value })
            }
            required
          />

          <div className={styles.formRow}>
            <Input
              label="Budget (₹)"
              placeholder="e.g. ₹15,000"
              value={postForm.budget}
              onChange={(e) =>
                setPostForm({ ...postForm, budget: e.target.value })
              }
              required
            />

            <Input
              label="Location / Region"
              placeholder="e.g. Mangalore, Bangalore, Remote"
              value={postForm.location}
              onChange={(e) =>
                setPostForm({ ...postForm, location: e.target.value })
              }
              required
            />
          </div>

          <Input
            label="Collab Details & Creator Requirements"
            as="textarea"
            placeholder="Describe what creator niche you need, turnaround expectations, and deliverable specs..."
            value={postForm.need}
            onChange={(e) => setPostForm({ ...postForm, need: e.target.value })}
            required
            rows={4}
          />

          <div className={styles.modalActions}>
            <Button
              variant="secondary"
              onClick={() => setIsPostModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Publish Request Publicly →
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
