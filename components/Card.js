import React from "react";
import styles from "./Card.module.css";

export default function Card({
  children,
  className = "",
  padding = "md", // sm | md | lg | none
  interactive = false,
  onClick,
  style = {},
}) {
  const classes = [
    styles.card,
    styles[`pad_${padding}`],
    interactive ? styles.interactive : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} onClick={onClick} style={style}>
      {children}
    </div>
  );
}
