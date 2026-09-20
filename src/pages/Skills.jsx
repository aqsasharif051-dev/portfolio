import { BarChart3, Braces, ChartColumn, Database, Lightbulb, Search } from "lucide-react";
import { skillBars, tools } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";
import { useInView } from "../hooks/useInView";
import Reveal from "../components/Reveal";
import Spotlight from "../components/Spotlight";

const capabilities = [
  { icon: ChartColumn, color: "#34e3a0", title: "Data storytelling", copy: "Findings presented so people understand them fast." },
  { icon: Database, color: "#38d5f5", title: "Growing analyst toolkit", copy: "Actively learning more of the data stack every week." },
  { icon: Search, color: "#ffc857", title: "Curiosity", copy: "Asking the right questions before touching the data." },
  { icon: Lightbulb, color: "#ff7a59", title: "Problem solving", copy: "Breaking big questions into small, testable steps." },
  { icon: Braces, color: "#a78bfa", title: "Clean code", copy: "Readable, structured HTML, CSS, and JavaScript." },
  { icon: BarChart3, color: "#34e3a0", title: "Dashboards that work", copy: "Responsive interfaces built around the numbers." },
];

function Bars() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <div ref={ref} className={`bars ${inView ? "in" : ""}`}>
      {skillBars.map(({ label, value, color }, i) => (
        <div key={label} className="bar-row">
          <div className="bar-label">
            <span>{label}</span>
            <span style={{ color }}>{value}%</span>
          </div>
          <div className="bar-track">
            <div
              className="bar-fill"
              style={{ "--w": `${value}%`, "--c": color, "--d": `${i * 140}ms` }}
              role="progressbar"
              aria-valuenow={value}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={label}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  usePageTitle("Skills — Aqsa");
  return (
    <div className="page-pad">
      <section className="wrap">
        <Reveal as="header">
          <h1 className="page-title">Data sense first, <span className="gradient-text">frontend craft</span> beside it.</h1>
          <p className="lede">
            My main focus is data analysis — exploring datasets and presenting what they mean. HTML,
            CSS, JavaScript, and React are my edge: they let me put every insight into clean,
            responsive web work myself.
          </p>
        </Reveal>

        <div className="skills-grid">
          <Bars />

          <div>
            <Reveal className="section-head tight">
              <h2>How I like to work</h2>
            </Reveal>
            <div className="grid-cap">
              {capabilities.map(({ icon: Icon, color, title, copy }, i) => (
                <Reveal key={title} delay={i * 70}>
                  <Spotlight className="card capability" style={{ "--c": color }} tilt={false}>
                    <Icon size={22} style={{ color }} />
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="toolbox">
          <h2>Tools &amp; topics</h2>
          <div className="tags big">
            {tools.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
