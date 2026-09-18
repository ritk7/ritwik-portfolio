import { about } from "@/data/content";
import Reveal from "./Reveal";

function renderText(text) {
  return text.split(/(\{\{[^}]+\}\})/g).map((part, i) => {
    if (part.startsWith("{{") && part.endsWith("}}")) {
      return (
        <span className="hl" key={i}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <Reveal>
          <h2 className="section-label">
            <span className="num mono">01.</span> ABOUT
          </h2>
        </Reveal>

        <Reveal className="about-grid">
          <div className="about-card">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{renderText(p.text)}</p>
            ))}
          </div>

          <div className="fact-list">
            {about.facts.map((f) => (
              <div className="fact" key={f.label}>
                <b>{f.label}</b>
                <span className="mono">{f.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
