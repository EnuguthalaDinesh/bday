"use client";
import { useState } from "react";
import Link from "next/link";
import Panda from "@/components/Panda";
import Confetti from "@/components/Confetti";
import { config } from "@/data/config";

const tiles = [
  { href: "/letter", title: "A letter for you", text: "Words from the heart, unfolding line by line." },
  { href: "/hangouts", title: "Our hangouts", text: "Your photos, hanging on a rope with a little quote each." },
  { href: "/pranks", title: "Gentle pranks", text: "A few harmless tricks. Nothing scary, promise." },
  { href: "/wishes", title: "World of wishes", text: "Your name in the middle, wishes in Indian languages around it." },
  { href: "/cards", title: "Scratch cards", text: "Six wishes in six styles. Scratch to reveal." },
  { href: "/finale", title: "The grand finale", text: "Cake, candles and fireworks. Save this for last." },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <section className="gate">
        <div className="eyebrow fade-up">Psst, {config.name}</div>
        <h1 className="fade-up" style={{ animationDelay: ".2s" }}>
          Someone made something for you.
        </h1>
        <div className="gift">
          <svg viewBox="0 0 240 240" width="240" height="240" role="img" aria-label="A wrapped gift box">
            <rect x="40" y="112" width="160" height="108" rx="8" fill="#F58FB1" />
            <rect x="28" y="82" width="184" height="40" rx="8" fill="#E8528A" />
            <rect x="108" y="82" width="24" height="138" fill="#fff" />
            <ellipse cx="94" cy="66" rx="26" ry="16" transform="rotate(-24 94 66)" fill="#fff" />
            <ellipse cx="146" cy="66" rx="26" ry="16" transform="rotate(24 146 66)" fill="#fff" />
            <circle cx="120" cy="74" r="10" fill="#FFD9C7" />
          </svg>
        </div>
        <button className="btn btn-primary" onClick={() => setOpen(true)}>
          Tap to open
        </button>
      </section>
    );
  }

  return (
    <div className="page">
      <Confetti count={36} once />
      <section className="hero">
        <div className="hero-pill">Made with love, just for you</div>
        <h1 className="hero-title script">Happy Birthday</h1>
        <div className="hero-name">{config.name}</div>
        <Panda size={110} hat label="A panda in a party hat waving hello" />
        <p>Six little pages, a few gentle surprises, and wishes in the languages closest to your heart. Start anywhere.</p>
        <Link href="/letter" className="btn btn-primary" style={{ marginTop: 8, animation: "fadeUp 1s ease .8s both" }}>
          Begin with your letter
        </Link>
      </section>

      <section className="tiles">
        {tiles.map((t, i) => (
          <Link key={t.href} href={t.href} className="tile" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
            <div className="num">0{i + 1}</div>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
