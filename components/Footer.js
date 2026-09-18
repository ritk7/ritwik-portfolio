import { profile } from "@/data/content";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-inner">
          <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-tag mono">{profile.tagline}</p>
          </div>
          <nav className="footer-nav">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <span className="mono">© {new Date().getFullYear()} {profile.name}</span>
          <span className="mono">psst — hit the ▸_ icon up top for a terminal</span>
        </div>
      </div>
    </footer>
  );
}
