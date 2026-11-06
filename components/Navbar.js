"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Badge from "./Badge";
import Button from "./Button";
import { useDeals } from "../context/DealContext";

export default function Navbar() {
  const pathname = usePathname();
  const { copyShareableLink } = useDeals();

  const navLinks = [
    { href: "/", label: "Public Home" },
    { href: "/marketplace", label: "Find Creators" },
    { href: "/requests", label: "Brand Requests" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIcon}>CK</div>
            <div className={styles.logoText}>
              <span className={styles.brandName}>CollabKit</span>
              <span className={styles.brandTag}>Sponsor & Deal CRM</span>
            </div>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className={styles.rightSection}>
          <Button
            variant="secondary"
            size="sm"
            onClick={copyShareableLink}
            className={styles.shareBtn}
          >
            Share Link ↗
          </Button>

          <Link href="/dashboard" className={styles.dashboardLink}>
            <div
              className={`${styles.dashboardBtn} ${
                pathname === "/dashboard" ? styles.dashboardActive : ""
              }`}
            >
              <span>Dashboard</span>
              <Badge variant="private" dot={false} className={styles.privateTag}>
                PRIVATE
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
