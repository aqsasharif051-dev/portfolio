import { useState } from "react";
import { Check, Mail, MapPin, Send } from "lucide-react";
import { site } from "../data/site";
import { usePageTitle } from "../hooks/usePageTitle";
import Reveal from "../components/Reveal";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";

export default function Contact() {
  usePageTitle("Contact Aqsa — Let’s Talk");
  const [sent, setSent] = useState(false);

  // No server needed: this opens the visitor's email app with everything filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const subject = `${d.topic} — message from ${d.name}`;
    const body = `${d.message}\n\n— ${d.name} (${d.email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="page-pad">
      <section className="wrap contact-grid">
        <div>
          <Reveal as="header">
            <h1 className="page-title">Let’s make data <span className="gradient-text">useful together.</span></h1>
            <p className="lede">
              Have a dataset to explore, a dashboard to build, or a junior data analyst role in mind?
              Send me the details and I’ll get back to you.
            </p>
          </Reveal>

          <Reveal className="contact-lines" delay={120}>
            <a href={`mailto:${site.email}`} className="contact-line">
              <span className="icon-box"><Mail size={20} /></span>
              <span><small>Email</small>{site.email}</span>
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="contact-line">
              <span className="icon-box"><LinkedInIcon width={20} height={20} /></span>
              <span><small>LinkedIn</small>Aqsa Sharif</span>
            </a>
            <div className="contact-line">
              <span className="icon-box"><MapPin size={20} /></span>
              <span><small>Location</small>{site.availability}</span>
            </div>
          </Reveal>

          <Reveal className="socials" delay={200}>
            <a className="social" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon width={18} height={18} />
            </a>
            <a className="social" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon width={18} height={18} />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-row">
              <label className="field">Your name
                <input name="name" placeholder="Jane Smith" required />
              </label>
              <label className="field">Email address
                <input type="email" name="email" placeholder="jane@company.com" required />
              </label>
            </div>
            <label className="field">What is it about?
              <select name="topic">
                <option>Data analysis</option>
                <option>Website or frontend work</option>
                <option>Job or internship</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="field">Tell me about it
              <textarea name="message" rows={6} placeholder="A few details about your idea, timeline, and goals…" required />
            </label>
            <button type="submit" className="btn btn-primary">
              Send message <Send size={18} />
            </button>
            {sent && (
              <p className="form-ok" role="status">
                <Check size={16} /> Your email app should open with the message ready to send.
                Nothing opened? Write to {site.email}.
              </p>
            )}
          </form>
        </Reveal>
      </section>
    </div>
  );
}
