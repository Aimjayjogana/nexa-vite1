import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="nexa">
      {/* HEADER */}
      <header className="header">
        <div className="logo">nexa<span>.</span></div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
        </nav>
        <button className="btn-talk">Let's Talk <span>↗</span></button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="pill"><span className="dot"></span> YOUR DIGITAL GROWTH PARTNER</div>
        <h1>We turn big ideas<br/>into <span className="purple">digital reality.</span></h1>
        <p className="hero-sub">We design beautiful websites, build powerful software, and create digital experiences that help businesses grow.</p>
        
        <div className="hero-btns">
          <button className="btn-primary">Explore our work <span>↗</span></button>
          <button className="btn-secondary">What we do</button>
        </div>

        <div className="hero-mini">
          <div className="star-icon">✳</div>
          <div>
            <strong>Ideas meet innovation.</strong><br/>
            <span>We build for what comes next.</span>
          </div>
        </div>

        <div className="cards-stack">
          <div className="float-card card-1">
            <div className="card-top">✳ nexalabs</div>
            <div className="n-circle"><span>N</span></div>
            <h3>Built for the future.</h3>
            <p>Creative thinking. Smart technology.</p>
            <div className="progress"><div className="bar"></div><span>100%</span></div>
            <div className="tag">✈ Creative ideas</div>
            <div className="tag bottom">↗ Digital solutions</div>
          </div>
        </div>
      </section>

      <div className="section-label">01 — BUILDING WHAT'S NEXT</div>

      {/* WHAT WE DO */}
      <section id="services" className="section">
        <span className="small-title">WHAT WE DO</span>
        <h2>Good ideas deserve<br/><span className="purple">great execution.</span></h2>
        <p className="sec-sub">From the first sketch to the final product, we help you bring your vision to life.</p>

        <div className="services-grid">
          <div className="service-card">
            <div className="card-head"><div className="icon-box">✳</div><span>01</span></div>
            <h3>Web Development</h3>
            <p>Fast, responsive and beautiful websites that turn visitors into customers.</p>
            <div className="card-foot"><span>WEBSITES & WEB APPS</span><span>↗</span></div>
          </div>
          <div className="service-card">
            <div className="card-head"><div className="icon-box">⌘</div><span>02</span></div>
            <h3>Software Solutions</h3>
            <p>Smart digital tools that simplify your work and solve real business problems.</p>
            <div className="card-foot"><span>CUSTOM SOFTWARE</span><span>↗</span></div>
          </div>
          <div className="service-card">
            <div className="card-head"><div className="icon-box">◈</div><span>03</span></div>
            <h3>UI/UX Design</h3>
            <p>Thoughtful, user-friendly designs that make every digital interaction feel easy.</p>
            <div className="card-foot"><span>DESIGN & EXPERIENCE</span><span>↗</span></div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="projects" className="section">
        <span className="small-title">SELECTED WORK</span>
        <h2>Small details.<br/><span className="purple">Big impact.</span></h2>
        <p className="sec-sub">A few concept projects showing how thoughtful design and technology can work together.</p>

        <div className="work-grid">
          <div className="work-card">
            <div className="work-preview purple-bg">
              <span className="work-num">01 / 02</span>
              <div className="big-letter">F.</div>
            </div>
            <div className="work-info">
              <span>WEB APPLICATION</span>
              <div className="work-title-row"><h3>Finora Finance</h3><button className="arrow-btn">↗</button></div>
              <p>A cleaner way to manage your money.</p>
            </div>
          </div>
          <div className="work-card">
            <div className="work-preview green-bg">
              <span className="work-num">02 / 02</span>
              <div className="big-letter">H.</div>
            </div>
            <div className="work-info">
              <span>DIGITAL MARKETPLACE</span>
              <div className="work-title-row"><h3>Harvest Hub</h3><button className="arrow-btn">↗</button></div>
              <p>Connecting producers with new opportunities.</p>
            </div>
          </div>
        </div>
        <p className="disclaimer">✳ These are concept projects created for demonstration.</p>
      </section>

      {/* CTA */}
      <section className="cta">
        <span className="small-title">HAVE AN IDEA?</span>
        <h2>Let's build<br/>something<br/><span className="purple">remarkable.</span></h2>
        <button className="btn-primary center">Start a conversation <span>↗</span></button>
      </section>

      <footer className="footer">
        <div className="logo">nexa<span>.</span></div>
        <p>Creative minds. Meaningful technology.</p>
        <p className="copy">© 2026 Nexa Digital. All rights reserved.</p>
      </footer>
    </div>
  );
}