import { ArrowUpRight } from "lucide-react";
import Spotlight from "./Spotlight";
import SmartImage from "./SmartImage";
import ProjectArt from "./ProjectArt";

export default function ProjectCard({ project }) {
  const { id, title, type, image, alt, copy, tags, color, link } = project;
  return (
    <Spotlight as="article" className="project" style={{ "--c": color }}>
      <div className="project-visual">
        {image ? (
          <SmartImage src={image} alt={alt} loading="lazy" fallback={<ProjectArt id={id} />} />
        ) : (
          <ProjectArt id={id} />
        )}
      </div>
      <div className="project-body">
        <span className="project-type">{type}</span>
        <h3>{title}</h3>
        <p>{copy}</p>
        <div className="tags">
          {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        {link && (
          <a className="project-link" href={link} target="_blank" rel="noreferrer">
            View project <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </Spotlight>
  );
}
