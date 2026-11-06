import React from "react";
import styles from "./Input.module.css";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  helperText,
  icon,
  as = "input", // input | textarea | select
  children,
  rows = 3,
  className = "",
  style = {},
}) {
  return (
    <div className={`${styles.wrapper} ${className}`} style={style}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.inputContainer}>
        {icon && <span className={styles.icon}>{icon}</span>}

        {as === "textarea" ? (
          <textarea
            className={`${styles.input} ${styles.textarea} ${icon ? styles.hasIcon : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
          />
        ) : as === "select" ? (
          <select
            className={`${styles.input} ${styles.select} ${icon ? styles.hasIcon : ""}`}
            value={value}
            onChange={onChange}
            required={required}
          >
            {children}
          </select>
        ) : (
          <input
            type={type}
            className={`${styles.input} ${icon ? styles.hasIcon : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
          />
        )}
      </div>

      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
}
