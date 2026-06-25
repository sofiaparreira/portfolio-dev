"use client";
import { useState } from "react";
import styles from "../../navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Habilidades", id: "habilidades" },
    { label: "Experiências Profissionais", id: "experiencias" },
    { label: "Projetos", id: "projetos" },
  ];

  return (
    <nav className={styles.navbar}>

      {/* DESKTOP */}
      <ul className="hidden md:flex items-center gap-4">
        {navItems.map((item) => (
          <li key={item.id} className={styles.navItem}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={styles.navLink}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* MOBILE — botão hamburguer */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] transition-all duration-200"
        aria-label="Abrir menu"
      >
        <span
          className={`block h-px w-5 bg-white/80 transition-all duration-300 origin-center ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block h-px w-5 bg-white/80 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-px w-5 bg-white/80 transition-all duration-300 origin-center ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* MOBILE — drawer lateral */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-[min(70vw,320px)] bg-zinc-950/95 border-r border-white/10 backdrop-blur-xl shadow-2xl p-6 pt-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/50 mb-1">Menu</p>
                <h2 className="text-lg font-semibold text-white">Navegação</h2>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] transition-all duration-200"
                aria-label="Fechar menu"
              >
                <span className="block h-px w-5 bg-white rotate-45" />
                <span className="block h-px w-5 bg-white -rotate-45 absolute" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left rounded-2xl py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/[0.08] transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </aside>
        </>
      )}

    </nav>
  );
};

export default Navbar;