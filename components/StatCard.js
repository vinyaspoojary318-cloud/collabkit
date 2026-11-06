import React from "react";
import styles from "./StatCard.module.css";
import Badge from "./Badge";

export default function StatCard({
  label,
  value,
  trend,
  meta,
  isPrivate = true,
  className = "",
}) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        {isPrivate && (
          <Badge variant="private" dot={false} className={styles.badge}>
            PRIVATE
          </Badge>
        )}
      </div>

      <div className={styles.valueRow}>
        <span className={styles.value}>{value}</span>
      </div>

      {(trend || meta) && (
        <div className={styles.metaRow}>
          {trend && <span className={styles.trendPill}>{trend}</span>}
          {meta && <span className={styles.metaText}>{meta}</span>}
        </div>
      )}
    </div>
  );
}
