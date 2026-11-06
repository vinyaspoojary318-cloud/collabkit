import React from "react";
import styles from "./DealCard.module.css";
import Badge from "./Badge";
import { KANBAN_STAGES } from "../data/dummyData";

export default function DealCard({ deal, onStatusChange }) {
  const getNextStage = (current) => {
    switch (current) {
      case "pitched":
        return "editing";
      case "editing":
        return "published";
      case "published":
        return "paid";
      default:
        return null;
    }
  };

  const nextStage = getNextStage(deal.status);

  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <div className={styles.brandGroup}>
          <div
            className={styles.brandDot}
            style={{ backgroundColor: deal.brandColor || "#0F172A" }}
          >
            {deal.brandShort || deal.brand?.[0] || "B"}
          </div>
          <span className={styles.brandName}>{deal.brand}</span>
        </div>

        <span
          className={`${styles.dueBadge} ${
            deal.dueLabel === "warn"
              ? styles.dueWarn
              : deal.dueLabel === "over"
              ? styles.dueOver
              : styles.dueOk
          }`}
        >
          {deal.due}
        </span>
      </div>

      <div className={styles.title}>{deal.title}</div>

      <div className={styles.metaRow}>
        <span className={styles.deliverable}>{deal.deliverable}</span>
        <span className={styles.revisions}>
          {deal.revisions}/{deal.maxRev} revs
        </span>
      </div>

      <div className={styles.footer}>
        <span className={styles.amount}>
          ₹{Number(deal.amount).toLocaleString("en-IN")}
        </span>

        <div className={styles.actionGroup}>
          {nextStage ? (
            <button
              className={styles.nextBtn}
              onClick={() => onStatusChange(deal.id, nextStage)}
              title={`Advance to ${nextStage}`}
            >
              Move to {nextStage} →
            </button>
          ) : (
            <span className={styles.completedTag}>Completed ✓</span>
          )}
        </div>
      </div>
    </div>
  );
}
