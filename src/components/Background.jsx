import { useEffect, useRef } from "react";

// Drifting colour blobs + a soft glow that follows the cursor.
export default function Background() {
  const glow = useRef(null);

  useEffect(() => {
    const el = glow.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (e) => {
      el.style.transform = `translate3d(${e.clientX - 260}px, ${e.clientY - 260}px, 0)`;
      el.style.opacity = "1";
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
      <span className="bg-dots" />
      <span className="cursor-glow" ref={glow} />
    </div>
  );
}
