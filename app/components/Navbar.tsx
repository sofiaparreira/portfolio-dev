import React from 'react'
import styles from "../navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#inicio" className={styles.navLink}>
            Início
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#habilidades" className={styles.navLink}>
            Habilidades
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#experiencias" className={styles.navLink}>
            Experiências Profissionais
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#projetos" className={styles.navLink}>
            Projetos
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
