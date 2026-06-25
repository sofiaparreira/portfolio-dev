"use client";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { AiFillCode } from "react-icons/ai";
import { SlMouse } from "react-icons/sl";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { BtnPrimary } from "../ui/BtnPrimary";
import { BtnSecondary } from "../ui/BtnSecondary";

interface Trail {
  x: string;
  y: string;
  opacity: number;
  timestamp: number;
}

export default function Initial() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let trails: Trail[] = [];
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--mouse-x", `${x}%`);
      section.style.setProperty("--mouse-y", `${y}%`);
      trails.push({ x: `${x}%`, y: `${y}%`, opacity: 0.03, timestamp: Date.now() });
      if (trails.length > 20) trails.shift();
    };

    const updateTrails = () => {
      const now = Date.now();
      trails = trails.filter((t) => {
        const age = now - t.timestamp;
        if (age > 800) return false;
        t.opacity = 0.03 * (1 - age / 800);
        return true;
      });
      if (trails.length > 0) {
        section.style.setProperty(
          "--trail-gradients",
          trails
            .map(
              (t) =>
                `radial-gradient(10px circle at ${t.x} ${t.y}, rgba(202,138,4,${t.opacity}), transparent 30%)`
            )
            .join(", ")
        );
      }
      animationFrameId = requestAnimationFrame(updateTrails);
    };

    section.addEventListener("mousemove", handleMouseMove);
    updateTrails();
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        .hero-section {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0%,100% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          40%      { opacity: 1; transform: scaleY(1); }
          80%      { opacity: 0; transform: scaleY(1); }
        }

        .hero-content { animation: fadeIn .6s ease both .08s; }
        .hero-image   { animation: fadeIn .6s ease both .2s; }

        .scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(232,232,240,0.25);
        }
        .scroll-line {
          width: 1px;
          height: 32px;
          background: rgba(250,204,21,0.5);
          animation: scrollLine 2.2s ease-in-out infinite;
        }
      `}</style>

      <section
        id="inicio"
        ref={sectionRef}
        className="hero-section relative overflow-hidden min-h-screen flex flex-col items-center justify-center"
      >
        {/* Mouse glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(202,138,4,0.1), transparent 65%)`,
            pointerEvents: "none",
            zIndex: 0,
            filter: "blur(20px)",
          }}
        />

        {/* Content */}
        <div
          className="relative w-full max-w-6xl mx-auto px-6 py-24 md:grid grid-cols-2 items-center gap-16"
          style={{ zIndex: 1 }}
        >
          {/* Left */}
          <div className="hero-content flex flex-col">

            {/* Eyebrow */}
            <p style={{
              fontSize: ".75rem",
              fontWeight: 600,
              letterSpacing: ".15em",
              textTransform: "uppercase",
            color: "#CA8A04",
              marginBottom: "20px",
            }}>
              Desenvolvedora Full Stack
            </p>

            {/* Name */}
            <h1 style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "#F5F5FA",
              margin: 0,
            }}>
              Sofia Parreira<br />
              <span className="text-primary">Passos</span>
            </h1>

            {/* Divider */}
            <div style={{
              width: "32px",
              height: "2px",
              background: "rgba(202,138,4,0.5)",
              borderRadius: "2px",
              margin: "24px 0",
            }} />

            {/* Bio */}
            <p className="max-w-lg text-white/90 leading-[1.6] m-0">
              Sou desenvolvedora Full Stack com foco em Front-end, com 2 anos de
              experiência em desenvolvimento web. Formada no ensino médio técnico
              pelo COTEMIG e cursando o 4º período de Ciências da Computação na
              mesma instituição. 
            </p>

            {/* Contacts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "28px" }}>
              <a
                href="https://wa.me/5531999050065"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80"
              >
                <span className='w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <FaPhone style={{ transform: "rotate(90deg)" }} />
                </span>
                (31) 99905-0065
              </a>
              <a
                href="mailto:sofiapparreira@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80"
              >
                <span className='w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <FaEnvelope />
                </span>
                sofiapparreira@gmail.com
              </a>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "32px", flexWrap: "wrap" }}>
              <BtnPrimary 
                href="/curriculo_sofia_passos.pdf" 
                text='Currículo' 
                suffixIcon={<HiOutlineDownload style={{ fontSize: "1.4rem" }} />} />
              
              <BtnSecondary 
                href="#projetos" 
                text='Ver Projetos' 
                suffixIcon={<AiFillCode style={{ fontSize: "1.4rem" }} 
              />}
            />
            </div>
          </div>

          {/* Right — image */}
          <div className="hero-image max-md:hidden flex items-center justify-center">
            <Image
              src="/banner.svg"
              alt="Ilustração de Sofia Parreira Passos"
              width={420}
              height={420}
              priority
            />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 scroll-hint" style={{ zIndex: 1 }} aria-hidden>
          <SlMouse style={{ fontSize: "1.2rem" }} />
          <span className="scroll-line" />
        </div>
      </section>
    </>
  );
}