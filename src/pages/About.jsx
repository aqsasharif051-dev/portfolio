import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Code2, GraduationCap, Presentation } from "lucide-react";
import { education, stats } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import Spotlight from "../components/Spotlight";
import SmartImage from "../components/SmartImage";
import { PortraitFallback } from "../components/ProjectArt";

const services = [
  { icon: BarChart3, color: "#34e3a0", title: "Data Analysis", copy: "Exploring datasets, finding patterns, and presenting results people can act on." },
  { icon: Presentation, color: "#ffc857", title: "Data Storytelling", copy: "Dashboards and reports that turn numbers into a clear, visual narrative." },
  { icon: Code2, color: "#a78bfa", title: "Frontend Edge", copy: "Responsive websites and interfaces built with HTML, CSS, JavaScript, and React." },
];

export default function About() {
  usePageTitle("About Aqsa — Aspiring Data Analyst");
  return (
    <div className="page-pad">
      <section className="wrap about-grid">
        <Reveal className="portrait-frame">
          <SmartImage
            src="images/aqsa-portrait.jpg"
            alt="Aqsa, aspiring data analyst"
            width={1024}
            height={1024}
            loading="lazy"
            fallback={<PortraitFallback />}
          />
        </Reveal>

        <div>
          <Reveal as="header" delay={80}>
            <h1 className="page-title">I turn raw data into <span className="gradient-text">clear answers.</span></h1>
            <p className="lede">
              I’m Aqsa, an aspiring data analyst actively building in the field. My main focus is
              understanding and presenting data; my frontend skills in HTML, CSS, JavaScript, and
              React are my edge — they let me showcase every insight on the web myself.
            </p>
          </Reveal>

          <Reveal className="stats" delay={160}>
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <strong className="gradient-text"><Counter to={s.value} suffix={s.suffix} /></strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={240}>
            <Link to="/contact" className="btn btn-primary">Let’s work together <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section wrap">
        <Reveal className="section-head">
          <h2>Where I’m studying</h2>
        </Reveal>
        <div className="timeline">
          {education.map((item, i) => (
            <Reveal key={item.degree} className="timeline-item" delay={i * 130}>
              <span className="timeline-dot"><GraduationCap size={16} /></span>
              <Spotlight className="card" tilt={false}>
                <span className="period">{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <Reveal className="section-head">
          <h2>What I do</h2>
          <p>Data first. Frontend as my edge.</p>
        </Reveal>
        <div className="grid-3">
          {services.map(({ icon: Icon, color, title, copy }, i) => (
            <Reveal key={title} delay={i * 110}>
              <Spotlight className="card service" style={{ "--c": color }}>
                <span className="icon-box"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
