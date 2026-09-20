import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="Aqsa — home">
          Portfolio<span className="brand-dot">.</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className="nav-link">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {navigation.map((item, i) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className="mobile-link"
            style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
            tabIndex={open ? 0 : -1}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
