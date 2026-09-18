"use client";

import { useEffect, useRef, useState } from "react";
import { profile, heroPanel } from "@/data/content";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  CodeIcon,
  TrophyIcon,
  FileIcon,
  SparkIcon,
  ResumeArrow,
} from "./Icons";

const POINTS = 32;

function formatPrice(n) {
  return n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* Deterministic opening walk so server and client render the same first frame. */
function seedSeries(base) {
  const out = [];
  let v = base * 0.9975;
  for (let i = 0; i < POINTS; i += 1) {
    v += Math.sin(i / 2.6) * base * 0.00035 + (i / POINTS) * base * 0.00012;
    out.push(v);
  }
  return out;
}

export default function Hero() {
  const base = heroPanel.base;
  const seed = seedSeries(base);
  const [price, setPrice] = useState(seed[seed.length - 1]);
  const [series, setSeries] = useState(seed);
  const priceRef = useRef(seed[seed.length - 1]);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = setInterval(() => {
      const drift = (Math.random() - 0.47) * base * 0.0008;
      const next = Math.max(priceRef.current + drift, base * 0.985);
      priceRef.current = next;
      setPrice(next);
      setSeries((prev) => [...prev.slice(1), next]);
    }, 1400);

    return () => clearInterval(id);
  }, [base]);

  const pct = ((price - base) / base) * 100;
  const up = pct >= 0;

  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = Math.max(max - min, 0.01);
  const step = 300 / (series.length - 1);
  const points = series
    .map((v, i) => `${(i * step).toFixed(1)},${(6 + (1 - (v - min) / range) * 68).toFixed(1)}`)
    .join(" ");

  return (
    <section className="hero" id="home">
      <div className="shell hero-grid">
        <div>
          <p className="hero-greeting hero-anim d1">Hi there! 👋</p>

          <h1 className="hero-name hero-anim d2">
            I&apos;m <span className="mark">{profile.name}</span>.
          </h1>

          <p className="hero-bio hero-anim d3">{profile.heroBio}</p>

          <div className="hero-chip-row hero-anim d3">
            <span className="hero-chip">
              <SparkIcon size={16} />
              {profile.heroChip}
            </span>
          </div>

          <div className="hero-socials hero-anim d4">
            <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="social-btn" href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
            <a className="social-btn" href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <CodeIcon />
            </a>
            <a
              className="social-btn"
              href={profile.hackerrank}
              target="_blank"
              rel="noreferrer"
              aria-label="HackerRank"
            >
              <TrophyIcon />
            </a>
          </div>

          <div className="hero-cta-row hero-anim d5">
            <a className="btn-primary" href="#contact">
              Get in Touch!
            </a>

            <div className="resume-note">
              <span className="hand">Grab my resume</span>
              <ResumeArrow />
              <a
                className="resume-btn"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                aria-label="Open resume PDF"
              >
                <FileIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-panel hero-anim d4">
          <div className="panel-card">
            <div className="panel-bar">
              <span className="panel-dot" style={{ background: "var(--lilac)" }} />
              <span className="panel-dot" style={{ background: "var(--periwinkle)" }} />
              <span className="panel-dot" style={{ background: "var(--mint)" }} />
              <span className="panel-live">
                <span className="live-pulse" />
                {heroPanel.label}
              </span>
            </div>

            <div className="panel-price-row">
              <span className="panel-symbol mono">{heroPanel.symbol}</span>
              <span className="panel-price">{formatPrice(price)}</span>
              <span className={`panel-delta ${up ? "up" : "down"}`}>
                {up ? "+" : ""}
                {pct.toFixed(2)}%
              </span>
            </div>

            <div className="spark">
              <svg viewBox="0 0 300 80" preserveAspectRatio="none" role="img" aria-label="Simulated price movement">
                <polyline
                  points={points}
                  fill="none"
                  stroke={up ? "var(--mint)" : "var(--lilac)"}
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="panel-stats">
              {heroPanel.stats.map((s) => (
                <div className="panel-stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <p className="panel-caption mono">{heroPanel.caption}</p>
          </div>

          <span className="panel-badge">Python · Kite Connect</span>
          <span className="panel-sticker">CSE (AI) Student</span>
        </div>
      </div>
    </section>
  );
}
