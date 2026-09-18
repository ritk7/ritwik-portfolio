"use client";

import { useEffect, useRef, useState } from "react";
import { profile, skills, projects, experience, education } from "@/data/content";
import { CloseIcon } from "./Icons";

const BANNER = [
  { type: "key", text: `${profile.name} — ${profile.tagline}` },
  { type: "out", text: "Type a command to look around. `help` lists everything." },
];

const commands = {
  help: () => [
    { type: "key", text: "available commands" },
    { type: "out", text: "about       who I am and what I build" },
    { type: "out", text: "experience  where I've worked" },
    { type: "out", text: "projects    what I've shipped" },
    { type: "out", text: "skills      the toolkit" },
    { type: "out", text: "education   degree and standing" },
    { type: "out", text: "contact     how to reach me" },
    { type: "out", text: "resume      open my resume" },
    { type: "out", text: "clear       wipe the screen" },
  ],
  about: () => [
    { type: "out", text: profile.heroBio },
  ],
  whoami: () => [{ type: "out", text: `${profile.name} · ${profile.role} · ${profile.location}` }],
  experience: () =>
    experience.map((e) => ({
      type: "out",
      text: `${e.dates} — ${e.role}, ${e.org}\n            ${e.summary}`,
    })),
  projects: () =>
    projects.map((p) => ({
      type: "out",
      text: `${p.name}\n            ${p.stack}\n            ${p.link}`,
    })),
  skills: () =>
    skills.map((g) => ({ type: "out", text: `${g.title.padEnd(18)} ${g.items.join(", ")}` })),
  education: () => [
    { type: "out", text: `${education.degree}` },
    { type: "out", text: `${education.school} · ${education.dates} · ${education.detail}` },
  ],
  contact: () => [
    { type: "out", text: `email     ${profile.email}` },
    { type: "out", text: `phone     ${profile.phone}` },
    { type: "out", text: `github    ${profile.github}` },
    { type: "out", text: `linkedin  ${profile.linkedin}` },
  ],
  resume: () => {
    if (typeof window !== "undefined") window.open(profile.resume, "_blank", "noopener");
    return [{ type: "key", text: "opening resume…" }];
  },
  ls: () => [{ type: "out", text: "about  experience  projects  skills  education  contact  resume" }],
};

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState(BANNER);
  const [value, setValue] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-terminal", onOpen);
    return () => window.removeEventListener("open-terminal", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    inputRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, open]);

  function run(e) {
    if (e) e.preventDefault();
    const raw = value.trim();
    setValue("");
    if (!raw) return;

    const cmd = raw.toLowerCase();
    if (cmd === "clear") {
      setLines(BANNER);
      return;
    }

    const handler = commands[cmd];
    const output = handler
      ? handler()
      : [{ type: "err", text: `command not found: ${raw} — try \`help\`` }];

    setLines((prev) => [...prev, { type: "cmd", text: `ritwik@portfolio:~$ ${raw}` }, ...output]);
  }

  if (!open) return null;

  return (
    <div className="term-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="term" role="dialog" aria-label="Portfolio terminal">
        <div className="term-bar">
          <span className="panel-dot" style={{ background: "#ff8c7a" }} />
          <span className="panel-dot" style={{ background: "#ffd479" }} />
          <span className="panel-dot" style={{ background: "#7cd9c4" }} />
          <span className="term-title mono">ritwik@portfolio</span>
          <button className="term-close" type="button" aria-label="Close terminal" onClick={() => setOpen(false)}>
            <CloseIcon size={14} />
          </button>
        </div>

        <div className="term-body" ref={bodyRef}>
          {lines.map((line, i) => (
            <div key={i} className={`term-line ${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>

        <form className="term-form" onSubmit={run}>
          <span className="term-prompt">$</span>
          <input
            ref={inputRef}
            id="terminal-input"
            className="term-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") run(e);
            }}
            placeholder="type help"
            autoComplete="off"
            spellCheck="false"
            aria-label="Terminal command"
          />
        </form>
      </div>
    </div>
  );
}
