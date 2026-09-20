import { useInView } from "../hooks/useInView";

// Fades content in as it scrolls into view. `delay` (ms) staggers siblings.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ "--d": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
