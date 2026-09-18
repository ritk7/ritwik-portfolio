"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll reveal that re-arms every time a block leaves the viewport, so the
 * animation plays on every visit, every refresh and every scroll back up.
 */
export default function Reveal({ children, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          el.classList.toggle("in", entry.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
