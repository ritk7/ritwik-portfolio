import { experience } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell">
        <Reveal>
          <h2 className="section-label">
            <span className="num mono">02.</span> EXPERIENCE
          </h2>
        </Reveal>

        <div className="exp-list">
          {experience.map((job, i) => (
            <Reveal className="exp-card" key={`${job.role}-${i}`}>
              <div className="exp-top">
                <div>
                  <h3 className="exp-role">
                    <span className="dot" />
                    {job.role}
                  </h3>
                  <p className="exp-org mono">{job.org}</p>
                </div>
                <span className="exp-date mono">{job.dates}</span>
              </div>

              <p className="exp-summary">{job.summary}</p>

              <ul className="bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="tech-row">
                {job.tech.map((t) => (
                  <span className="tech-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
