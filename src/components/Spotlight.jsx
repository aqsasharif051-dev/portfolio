// Card wrapper: a glow follows the cursor and the card tilts slightly toward it.
export default function Spotlight({ as: Tag = "div", className = "", tilt = true, style, children, ...rest }) {
  const onMove = (e) => {
    if (e.pointerType === "touch") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    if (tilt) {
      el.style.setProperty("--ry", `${((x / r.width) - 0.5) * 6}deg`);
      el.style.setProperty("--rx", `${(0.5 - (y / r.height)) * 6}deg`);
    }
  };
  const onLeave = (e) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <Tag className={`spot ${className}`} style={style} onPointerMove={onMove} onPointerLeave={onLeave} {...rest}>
      {children}
    </Tag>
  );
}
