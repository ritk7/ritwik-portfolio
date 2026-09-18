import { marqueeTags, profile } from "@/data/content";

export default function Marquee() {
  const loop = [...marqueeTags, ...marqueeTags];

  return (
    <div className="marquee-wrap">
      <div className="shell">
        <p className="marquee-title">
          What I&apos;ve been shipping on{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.githubHandle}
          </a>
          .
        </p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((tag, i) => (
            <span className="marquee-chip" key={`${tag}-${i}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
