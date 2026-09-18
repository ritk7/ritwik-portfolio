import { achievements, education } from "@/data/content";
import { ArrowUpRight } from "./Icons";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="shell">
        <Reveal>
          <h2 className="section-label">
            <span className="num mono">05.</span> ACHIEVEMENTS
          </h2>
        </Reveal>

        <Reveal className="ach-grid">
          {achievements.map((a) => {
            const inner = (
              <>
                <span className="ach-badge">{a.badge}</span>
                <h3 className="ach-title">{a.title}</h3>
                <p className="ach-note">{a.note}</p>
              </>
            );

            return a.link ? (
              <a className="ach-card" href={a.link} target="_blank" rel="noreferrer" key={a.title}>
                {inner}
                <span className="proj-stack mono" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  view profile <ArrowUpRight size={14} />
                </span>
              </a>
            ) : (
              <div className="ach-card" key={a.title}>
                {inner}
              </div>
            );
          })}
        </Reveal>

        <Reveal className="edu-card">
          <div>
            <h3 className="edu-degree">{education.degree}</h3>
            <p className="edu-school mono">
              {education.school} · {education.place}
            </p>
          </div>
          <div className="edu-meta">
            <span className="edu-pill mono">{education.dates}</span>
            <span className="edu-pill mono">{education.detail}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
