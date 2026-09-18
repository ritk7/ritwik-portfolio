import { projects } from "@/data/content";
import { GitHubIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="shell">
        <Reveal>
          <h2 className="section-label">
            <span className="num mono">04.</span> PROJECTS
          </h2>
        </Reveal>

        <Reveal className="proj-grid">
          {projects.map((p) => (
            <article className="proj-card" key={p.name}>
              <div className="proj-top">
                <div>
                  <h3 className="proj-name">{p.name}</h3>
                  <p className="proj-stack mono">{p.stack}</p>
                </div>
                {p.link && (
                  <a
                    className="proj-link"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} on GitHub`}
                  >
                    <GitHubIcon size={20} />
                  </a>
                )}
              </div>

              <ul className="bullets">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="proj-metrics">
                {p.metrics.map((m) => (
                  <div className="metric" key={m.label}>
                    <b>{m.value}</b>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
