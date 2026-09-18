import { skills } from "@/data/content";
import { skillIcons } from "./Icons";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="shell">
        <Reveal>
          <h2 className="section-label">
            <span className="num mono">03.</span> SKILLS
          </h2>
        </Reveal>

        <Reveal className="skill-grid">
          {skills.map((group) => {
            const Icon = skillIcons[group.icon] || skillIcons.code;
            return (
              <div className="skill-card" key={group.title}>
                <div className={`skill-head ${group.accent}`}>
                  <Icon />
                  {group.title}
                </div>
                <div className="skill-body">
                  {group.items.map((item) => (
                    <span className="skill-item" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
