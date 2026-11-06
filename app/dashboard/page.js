"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import StatCard from "../../components/StatCard";
import DealCard from "../../components/DealCard";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Badge from "../../components/Badge";
import { useDeals } from "../../context/DealContext";
import { KANBAN_STAGES } from "../../data/dummyData";

export default function DashboardPage() {
  const {
    deals,
    totalEarnings,
    pending,
    paid,
    addDeal,
    updateDealStatus,
    resetDemoData,
    copyShareableLink,
    showToast,
  } = useDeals();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [dealFilterSearch, setDealFilterSearch] = useState("");
  const [activeTab, setActiveTab] = useState("pipeline"); // pipeline | deals

  // Add Collab Modal Form State
  const [newDealForm, setNewDealForm] = useState({
    brand: "",
    title: "",
    amount: "",
    deliverable: "YouTube Short + IG Reel",
    due: "3d",
    status: "pitched",
    clientEmail: "",
    notes: "",
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newDealForm.brand || !newDealForm.amount) return;

    addDeal({
      brand: newDealForm.brand,
      title: newDealForm.title || `${newDealForm.deliverable} • ${newDealForm.brand}`,
      amount: Number(newDealForm.amount),
      deliverable: newDealForm.deliverable,
      due: newDealForm.due,
      status: newDealForm.status,
      clientEmail: newDealForm.clientEmail,
      notes: newDealForm.notes,
    });

    setNewDealForm({
      brand: "",
      title: "",
      amount: "",
      deliverable: "YouTube Short + IG Reel",
      due: "3d",
      status: "pitched",
      clientEmail: "",
      notes: "",
    });

    setIsAddModalOpen(false);
  };

  const filteredDeals = deals.filter((d) => {
    const q = dealFilterSearch.toLowerCase();
    return (
      d.brand.toLowerCase().includes(q) ||
      d.title.toLowerCase().includes(q) ||
      d.deliverable.toLowerCase().includes(q) ||
      d.status.toLowerCase().includes(q)
    );
  });

  return (
    <div className={styles.container}>
      {/* Privacy Notice Banner */}
      <div className={styles.privacyBanner}>
        <div className={styles.privacyLeft}>
          <Badge variant="private" dot={true}>
            PRIVATE — ONLY YOU SEE THIS
          </Badge>
          <span className={styles.privacyText}>
            Your deals, pipeline, client emails, and ₹ earnings are private to your workspace.
          </span>
        </div>

        <div className={styles.headerActions}>
          <Button variant="secondary" size="sm" onClick={copyShareableLink}>
            Copy Public Rate Card Link ↗
          </Button>
          <Button variant="outline" size="sm" onClick={resetDemoData}>
            Reset Demo
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsAddModalOpen(true)}
          >
            + Add Collab / Deal
          </Button>
        </div>
      </div>

      {/* KPI Stat Cards Row */}
      <div className={styles.statGrid}>
        <StatCard
          label="Total Deal Pipeline"
          value={`₹${(totalEarnings / 1000).toFixed(0)}k`}
          trend="↑ 18%"
          meta="All active and realized deals"
          isPrivate={true}
        />
        <StatCard
          label="Active Pending"
          value={`₹${(pending / 1000).toFixed(0)}k`}
          trend={`${deals.filter((d) => d.status !== "paid").length} deals`}
          meta="In Pitched, Editing, or Published"
          isPrivate={true}
        />
        <StatCard
          label="Collected & Paid"
          value={`₹${(paid / 1000).toFixed(0)}k`}
          trend="Paid in ₹"
          meta="Realized earnings deposited"
          isPrivate={true}
        />
      </div>

      {/* View Switcher Tabs */}
      <div className={styles.tabBar}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabBtn} ${
              activeTab === "pipeline" ? styles.tabActive : ""
            }`}
            onClick={() => setActiveTab("pipeline")}
          >
            Kanban Pipeline ({deals.length})
          </button>
          <button
            className={`${styles.tabBtn} ${
              activeTab === "deals" ? styles.tabActive : ""
            }`}
            onClick={() => setActiveTab("deals")}
          >
            Deals Table & Invoicing
          </button>
        </div>

        <div className={styles.searchWrap}>
          <Input
            icon="🔍"
            placeholder="Search deals by brand or deliverable..."
            value={dealFilterSearch}
            onChange={(e) => setDealFilterSearch(e.target.value)}
          />
        </div>
      </div>

      {/* View 1: Kanban Board */}
      {activeTab === "pipeline" && (
        <div className={styles.kanbanBoard}>
          {KANBAN_STAGES.map((stage) => {
            const stageDeals = filteredDeals.filter(
              (deal) => deal.status === stage.id
            );
            const stageTotal = stageDeals.reduce(
              (sum, d) => sum + (Number(d.amount) || 0),
              0
            );

            return (
              <div key={stage.id} className={styles.column}>
                <div className={styles.columnHeader}>
                  <div className={styles.columnTitleGroup}>
                    <Badge variant={stage.id} dot={true}>
                      {stage.label}
                    </Badge>
                    <span className={styles.colCount}>{stageDeals.length}</span>
                  </div>
                  <span className={styles.columnTotal}>
                    ₹{(stageTotal / 1000).toFixed(0)}k
                  </span>
                </div>

                <div className={styles.columnHint}>{stage.hint}</div>

                <div className={styles.cardList}>
                  {stageDeals.map((deal) => (
                    <DealCard
                      key={deal.id}
                      deal={deal}
                      onStatusChange={updateDealStatus}
                    />
                  ))}

                  {stageDeals.length === 0 && (
                    <div className={styles.emptyColumn}>
                      <span>No deals in this stage</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* View 2: Deals Table */}
      {activeTab === "deals" && (
        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <h3 className={styles.tableTitle}>All Collab Deals</h3>
            <span className={styles.tableCount}>
              {filteredDeals.length} deals listed
            </span>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Deliverable</th>
                  <th>Amount</th>
                  <th>Due</th>
                  <th>Revisions</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDeals.map((deal) => (
                  <tr key={deal.id}>
                    <td>
                      <div className={styles.tableBrand}>
                        <div
                          className={styles.tableDot}
                          style={{ backgroundColor: deal.brandColor }}
                        >
                          {deal.brandShort}
                        </div>
                        <strong>{deal.brand}</strong>
                      </div>
                    </td>
                    <td>{deal.title}</td>
                    <td className={styles.tableAmount}>
                      ₹{Number(deal.amount).toLocaleString("en-IN")}
                    </td>
                    <td>
                      <span className={styles.tableDue}>{deal.due}</span>
                    </td>
                    <td>
                      {deal.revisions}/{deal.maxRev}
                    </td>
                    <td>
                      <Badge variant={deal.status} dot={true}>
                        {deal.status}
                      </Badge>
                    </td>
                    <td>
                      {deal.status !== "paid" ? (
                        <button
                          className={styles.actionBtn}
                          onClick={() => updateDealStatus(deal.id, "paid")}
                        >
                          Mark Paid ✓
                        </button>
                      ) : (
                        <button
                          className={styles.actionBtnSecondary}
                          onClick={() => showToast(`Invoice generated for ${deal.brand}`)}
                        >
                          Invoice #CK-{deal.id.slice(-4)}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Deal Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="+ Add My Collab / Product"
        subtitle="Log a brand sponsorship into your private deal pipeline."
      >
        <form onSubmit={handleAddSubmit} className={styles.modalForm}>
          <div className={styles.formRow}>
            <Input
              label="Brand Name"
              placeholder="e.g. boAt, Mamaearth, Noise"
              value={newDealForm.brand}
              onChange={(e) =>
                setNewDealForm({ ...newDealForm, brand: e.target.value })
              }
              required
            />

            <Input
              label="Amount in ₹"
              type="number"
              placeholder="e.g. 25000"
              value={newDealForm.amount}
              onChange={(e) =>
                setNewDealForm({ ...newDealForm, amount: e.target.value })
              }
              required
            />
          </div>

          <Input
            label="Campaign Deliverable / Title"
            placeholder="e.g. Rockerz Launch Reel + 2 Shorts"
            value={newDealForm.title}
            onChange={(e) =>
              setNewDealForm({ ...newDealForm, title: e.target.value })
            }
          />

          <div className={styles.formRow}>
            <Input
              label="Pipeline Stage"
              as="select"
              value={newDealForm.status}
              onChange={(e) =>
                setNewDealForm({ ...newDealForm, status: e.target.value })
              }
            >
              <option value="pitched">Pitched (Awaiting reply)</option>
              <option value="editing">Editing (In production)</option>
              <option value="published">Published (Live • Pending)</option>
              <option value="paid">Paid (Payment completed)</option>
            </Input>

            <Input
              label="Due In"
              placeholder="e.g. 2d, 1d, Today"
              value={newDealForm.due}
              onChange={(e) =>
                setNewDealForm({ ...newDealForm, due: e.target.value })
              }
            />
          </div>

          <Input
            label="Client Contact Email (Private)"
            type="email"
            placeholder="partnerships@brand.com"
            value={newDealForm.clientEmail}
            onChange={(e) =>
              setNewDealForm({ ...newDealForm, clientEmail: e.target.value })
            }
          />

          <Input
            label="Internal Notes"
            as="textarea"
            placeholder="Delivery requirements, music license references, invoice terms..."
            value={newDealForm.notes}
            onChange={(e) =>
              setNewDealForm({ ...newDealForm, notes: e.target.value })
            }
            rows={3}
          />

          <div className={styles.modalActions}>
            <Button variant="secondary" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Add to Private Pipeline →
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
