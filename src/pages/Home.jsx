import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { site, roles, tools, projects } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";
import Typewriter from "../components/Typewriter";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import { PortraitFallback } from "../components/ProjectArt";
import ProjectCard from "../components/ProjectCard";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";

export default function Home() {
  usePageTitle("Portfolio");
  const loop = [...tools, ...tools];

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hello hero-in" style={{ "--d": "0ms" }}>
              Hello, it’s me
            </p>
            <h1 className="hero-name gradient-text hero-in" style={{ "--d": "120ms" }}>Aqsa</h1>
            <p className="hero-role hero-in" style={{ "--d": "260ms" }}>
              And I’m a <Typewriter words={roles} />
            </p>
            <p className="hero-lede hero-in" style={{ "--d": "380ms" }}>
              My main focus is data analysis — turning raw numbers into clear dashboards and stories.
              My frontend skills in HTML, CSS, JavaScript, and React give me an extra edge in
              presenting that data beautifully on the web.
            </p>
            <div className="hero-actions hero-in" style={{ "--d": "500ms" }}>
              <Link to="/about" className="btn btn-primary">
                More about me <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn btn-ghost">View projects</Link>
              <div className="socials">
                <a className="social" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon width={18} height={18} />
                </a>
                <a className="social" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon width={18} height={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual hero-pop">
            <div className="portrait-ring">
              <div className="portrait">
                <SmartImage
                  src="images/aqsa-portrait.jpg"
                  alt="Aqsa, aspiring data analyst"
                  width={1024}
                  height={1024}
                  fallback={<PortraitFallback />}
                />
              </div>
            </div>
           
          </div>
        </div>
        <p className="scroll-cue" aria-hidden="true"><span>↓</span> Scroll to explore</p>
      </section>

      <div className="marquee" aria-label="Skills and tools">
        <div className="marquee-track" aria-hidden="true">
          {loop.map((t, i) => <span key={i} className="marquee-item">{t}</span>)}
        </div>
      </div>

      <section className="section wrap">
        <Reveal className="section-head">
          <h2>Recent work</h2>
          <p>Two of my favourites — one built on data, one built for the web.</p>
        </Reveal>
        <div className="grid-2">
          {["coffee", "pulse"].map((id) => projects.find((x) => x.id === id)).map((p, i) => (
            <Reveal key={p.id} delay={i * 120}><ProjectCard project={p} /></Reveal>
          ))}
        </div>
        <Reveal className="center" delay={200}>
          <Link to="/portfolio" className="btn btn-ghost">See all projects <ArrowRight size={18} /></Link>
        </Reveal>
      </section>

      <section className="section wrap">
        <Reveal className="cta-band">
          <h2>Have data that needs a story?</h2>
          <p>Let’s turn it into something people can act on.</p>
          <Link to="/contact" className="btn btn-primary">Let’s work together <ArrowRight size={18} /></Link>
        </Reveal>
      </section>
    </>
  );
}
