import React from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary", // primary | secondary | outline | danger | small
  size = "md", // sm | md | lg
  onClick,
  type = "button",
  disabled = false,
  className = "",
  style = {},
}) {
  const classes = [
    styles.button,
    styles[variant] || styles.primary,
    styles[size] || styles.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}
