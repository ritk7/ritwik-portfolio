import { profile } from "@/data/content";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const cards = [
    {
      icon: <MailIcon size={24} />,
      title: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <LinkedInIcon size={24} />,
      title: "LinkedIn",
      value: profile.linkedinHandle,
      href: profile.linkedin,
    },
    {
      icon: <GitHubIcon size={24} />,
      title: "GitHub",
      value: profile.githubHandle,
      href: profile.github,
    },
    {
      icon: <PhoneIcon size={24} />,
      title: "Phone",
      value: profile.phone,
      href: profile.phoneHref,
    },
  ];

  return (
    <section className="section" id="contact">
      <div className="shell">
        <Reveal>
          <h2 className="section-label">
            <span className="num mono">06.</span> GET IN TOUCH
          </h2>
        </Reveal>

        <Reveal className="contact-head">
          <h3 className="contact-title">Let&apos;s build something that runs.</h3>
          <p className="contact-sub">
            Open to backend, AI-tooling and full-stack roles — and freelance work in the same lane.
          </p>
        </Reveal>

        <Reveal className="contact-grid">
          {cards.map((c) => (
            <a
              className="contact-card"
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="contact-icon">{c.icon}</span>
              <b>{c.title}</b>
              <span className="mono">{c.value}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
