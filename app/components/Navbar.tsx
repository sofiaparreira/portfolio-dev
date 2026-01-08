"use client";

import React from "react";
import styles from "../navbar.module.css";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <button
            onClick={() => scrollToSection("inicio")}
            className={styles.navLink}
          >
            Início
          </button>
        </li>

        <li className={styles.navItem}>
          <button
            onClick={() => scrollToSection("habilidades")}
            className={styles.navLink}
          >
            Habilidades
          </button>
        </li>

        <li className={styles.navItem}>
          <button
            onClick={() => scrollToSection("experiencias")}
            className={styles.navLink}
          >
            Experiências Profissionais
          </button>
        </li>

        <li className={styles.navItem}>
          <button
            onClick={() => scrollToSection("projetos")}
            className={styles.navLink}
          >
            Projetos
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
