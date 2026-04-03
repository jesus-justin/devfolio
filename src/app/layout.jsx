import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "../components/ParticleBackground";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Your Name | Frontend Developer",
  description:
    "A modern portfolio built with Next.js and Tailwind CSS showcasing projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-[color:var(--bg)] text-[color:var(--text-strong)]">
        <ParticleBackground />
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
