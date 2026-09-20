import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../hooks/useInView";

// Types and deletes each word in turn.
export default function Typewriter({ words, typeSpeed = 85, deleteSpeed = 45, pause = 1500 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const still = prefersReducedMotion();

  useEffect(() => {
    if (still) return;
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) delay = pause;
    if (deleting && text === "") delay = 350;

    const id = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((i) => (i + 1) % words.length);
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, still]);

  return (
    <span className="type gradient-text">
      {still ? words[0] : text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
