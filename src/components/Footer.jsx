import { Link } from "react-router-dom";
import { site, navigation } from "../data/site";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <Link to="/" className="brand">
            Aqsa<span className="brand-dot">.</span>
          </Link>
          <p className="footer-note">
            Data analyst in the making — turning numbers into clear stories.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </nav>

        <div className="socials">
          <a className="social" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon width={18} height={18} />
          </a>
          <a className="social" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon width={18} height={18} />
          </a>
        </div>
      </div>
      <p className="wrap copyright">© {new Date().getFullYear()} {site.fullName}. Built with React.</p>
    </footer>
  );
}
