import React from "react";
import styles from "./CreatorCard.module.css";
import Badge from "./Badge";
import Button from "./Button";

export default function CreatorCard({ creator, onRequestCollab }) {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <Badge variant="public">PUBLIC PROFILE</Badge>
        <span className={styles.followers}>
          {creator.followers} • {creator.collabs} collabs
        </span>
      </div>

      <div className={styles.profileRow}>
        <div
          className={styles.avatar}
          style={{
            background: `linear-gradient(135deg, ${creator.color1 || "#0F172A"}, ${
              creator.color2 || "#475569"
            })`,
          }}
        >
          {creator.letter || creator.name[0]}
        </div>

        <div className={styles.info}>
          <div className={styles.nameRow}>
            <span className={styles.name}>{creator.name}</span>
            <span className={styles.niche}>• {creator.niche}</span>
          </div>
          <div className={styles.location}>
            {creator.city}, India
          </div>
        </div>
      </div>

      <p className={styles.bio}>{creator.bio}</p>

      <div className={styles.brandsRow}>
        <span className={styles.brandsLabel}>Past Collabs:</span>
        <div className={styles.brandPills}>
          {creator.brands.map((b) => (
            <span key={b} className={styles.brandPill}>
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.rateBlock}>
          <span className={styles.rateLabel}>Avg Deal</span>
          <span className={styles.rate}>{creator.rate}</span>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => onRequestCollab?.(creator)}
        >
          Request Collab →
        </Button>
      </div>
    </div>
  );
}
