import React from "react";
import styles from "./RequestCard.module.css";
import Badge from "./Badge";
import Button from "./Button";

export default function RequestCard({ request, onApply, onViewBrand }) {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <Badge variant="public">PUBLIC REQUEST</Badge>
        <span className={styles.meta}>
          {request.posted} • {request.location}
        </span>
      </div>

      <h3 className={styles.title}>{request.title}</h3>

      <div className={styles.brandBudgetRow}>
        <span className={styles.brand}>{request.brand}</span>
        <span className={styles.divider}>•</span>
        <span className={styles.budget}>Budget: {request.budget}</span>
      </div>

      <p className={styles.need}>{request.need}</p>

      <div className={styles.actionRow}>
        <Button
          variant="primary"
          size="sm"
          onClick={() => onApply?.(request)}
        >
          Apply Now →
        </Button>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => onViewBrand?.(request)}
        >
          View Brand
        </Button>
      </div>
    </div>
  );
}
