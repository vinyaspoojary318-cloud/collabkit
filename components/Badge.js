import React from "react";
import styles from "./Badge.module.css";

export default function Badge({
  children,
  variant = "public", // private | public | pitched | editing | published | paid | neutral
  dot = true,
  className = "",
  style = {},
}) {
  const badgeClasses = [
    styles.badge,
    styles[variant] || styles.neutral,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={badgeClasses} style={style}>
      {dot && <span className={styles.dot} />}
      {children}
    </span>
  );
}
