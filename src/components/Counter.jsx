import { useEffect, useState } from "react";
import { useInView, prefersReducedMotion } from "../hooks/useInView";

// Counts up from 0 when scrolled into view.
export default function Counter({ to, suffix = "", duration = 1400 }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setN(to);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round((1 - Math.pow(1 - t, 3)) * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{n}{suffix}</span>;
}
