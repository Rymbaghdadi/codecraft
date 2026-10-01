import { useEffect, useRef, useState } from "react";
import { Globe, FileText, UserRound, LayoutGrid, AppWindow, Server, Sparkles, Workflow, Menu, X, ArrowRight, Check, MessageCircle, Mail, Link2 } from "lucide-react";
import { LINKEDIN, WHATSAPP, EMAIL, NAV, SERVICES, STEPS, WHY, CREDIBILITY } from "./data.js";

const ICONS = { Globe, FileText, UserRound, LayoutGrid, AppWindow, Server, Sparkles, Workflow };

function Reveal({ children, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setSeen(true);
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`}>{children}</Tag>;
}

const SectionHead = ({ eyebrow, title, text }) => (
  <Reveal className="section-head">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {text && <p className="lead">{text}</p>}
  </Reveal>
);

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>Codecraft<span>.</span></a>
        <nav aria-label="Main" className={`links ${open ? "open" : ""}`}>
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="btn btn-primary btn-sm" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Start a Project</a>
        </nav>
        <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow light">From idea to launch.</p>
          <h1><span className="hi">Welcome to Codecraft.</span> We build modern websites, web applications &amp; AI-powered solutions.</h1>
          <p className="hero-sub">From business websites and personal brands to custom web applications, APIs and AI-powered solutions — we turn ideas into professional digital products.</p>
          <div className="btn-row">
            <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Start a Project <ArrowRight size={18} /></a>
            <a className="btn btn-ghost" href="#services">Explore Services</a>
          </div>
        </div>
        <div className="code-card" aria-hidden="true">
          <div className="dots"><i /><i /><i /></div>
          <pre>{`const project = {
  idea:   "yours",
  plan:   "together",
  build:  "web + api + ai",
  launch: true,
};

ship(project); // ✔ live`}</pre>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section alt">
      <div className="container">
        <SectionHead eyebrow="Services" title="What We Can Build For You" text="Clear, professional digital solutions — whatever your idea or business needs." />
        <div className="cards">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal as="article" className="card" key={s.title}>
                <span className="icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section dark">
      <div className="container">
        <SectionHead eyebrow="How We Work" title="From Idea to Launch" />
        <ol className="steps">
          {STEPS.map(([n, t, d]) => (
            <Reveal as="li" className="step" key={n}>
              <span className="num">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Benefits" title="Why Work With Us?" />
        <ul className="why">
          {WHY.map((w) => <Reveal as="li" key={w}><Check size={20} aria-hidden="true" /> {w}</Reveal>)}
        </ul>
      </div>
    </section>
  );
}

function Credibility() {
  return (
    <section className="section">
      <div className="container narrow center">
        <SectionHead eyebrow="Experience" title="Building Reliable Digital Solutions" text="Our team has professional experience working on:" />
        <Reveal><ul className="chips center-chips">{CREDIBILITY.map((c) => <li key={c}>{c}</li>)}</ul></Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <h2>Have an idea? Let's build it.</h2>
          <p>Whether you need a business website, personal brand, portfolio, custom web application, API, or AI-powered solution, let's turn your idea into a professional digital product.</p>
          <a className="btn btn-primary btn-lg" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={22} /> Let's Talk on WhatsApp</a>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="container">
        <SectionHead eyebrow="Contact" title="Get in Touch" text="The fastest way to reach us is WhatsApp." />
        <div className="contact">
          <Reveal className="c-card primary">
            <MessageCircle size={28} aria-hidden="true" />
            <h3>WhatsApp</h3><p>+961 71 690 644</p>
            <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </Reveal>
          <Reveal className="c-card">
            <Mail size={28} aria-hidden="true" />
            <h3>Email</h3><p className="break">{EMAIL}</p>
            <a className="btn btn-outline" href={`mailto:${EMAIL}`}>Email Me</a>
          </Reveal>
          <Reveal className="c-card">
            <Link2 size={28} aria-hidden="true" />
            <h3>LinkedIn</h3><p>Rym Baghdadi</p>
            <a className="btn btn-outline" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DeveloperNote() {
  return (
    <section className="dev-note" aria-label="About the developer">
      <div className="container dev-inner">
        <img src="/rym.jpg" alt="Rym Baghdadi, Software Engineer" width="72" height="72" loading="lazy" />
        <p><strong>Rym Baghdadi</strong>, Software Engineer, works with a team of developers to deliver you the best.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div>
          <p className="brand">Codecraft</p>
          <p className="muted">Building digital solutions from idea to reality.</p>
        </div>
        <nav aria-label="Footer">{NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
        <div className="foot-contact">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <p className="container copy">© 2026 Codecraft. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#services">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><Services /><Process /><Why /><Credibility /><CTA /><Contact /><DeveloperNote />
      </main>
      <Footer />
    </>
  );
}
