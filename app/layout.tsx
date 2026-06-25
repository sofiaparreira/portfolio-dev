import type { Metadata } from "next";
import { Poppins, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-title",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Sofia Parreira Passos - Portfolio",
  description: "Portfólio de Sofia Parreira Passos, desenvolvedora front-fullstack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${dmSans.variable} ${plusJakarta.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}