import { useState } from "react";
import { projects } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";

const filters = ["All", "Data analysis", "Frontend"];

export default function Portfolio() {
  usePageTitle("Projects — Aqsa");
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.type === filter);

  return (
    <div className="page-pad">
      <section className="wrap">
        <Reveal as="header">
          <h1 className="page-title">Data insights, <span className="gradient-text">delivered on the web.</span></h1>
          <p className="lede">
            My data analysis projects come first, and my frontend work shows the same care — the two
            sides of my toolkit supporting each other.
          </p>
        </Reveal>

        <div className="filters" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={`filter ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid-2" key={filter}>
          {shown.map((p, i) => (
            <div key={p.id} className="pop" style={{ "--d": `${i * 90}ms` }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
