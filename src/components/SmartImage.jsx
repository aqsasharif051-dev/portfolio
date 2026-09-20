import { useState } from "react";

// Shows your real image from /public/images. If the file isn't there yet,
// it shows the designed placeholder instead of a broken picture.
export default function SmartImage({ src, alt, fallback, className = "", ...rest }) {
  const [failed, setFailed] = useState(false);
  if (failed) return fallback;
  return (
    <img
      src={`${import.meta.env.BASE_URL}${src}`}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
