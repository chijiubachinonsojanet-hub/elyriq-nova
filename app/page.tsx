"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

function FadeUp({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `all 0.8s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const NAV_LINKS = ["Platform", "For Corporates", "For Cleaners", "Pricing", "About"];

const FEATURES = [
  { icon: "🛡️", title: "Verified providers", desc: "Every cleaner and company is background-checked and certified before joining." },
  { icon: "📋", title: "Managed contracts", desc: "Structured service agreements with clear terms, SLAs, and accountability." },
  { icon: "⚡", title: "Real-time matching", desc: "Intelligent matching connects the right provider to every job instantly." },
  { icon: "📍", title: "Location tracking", desc: "Live tracking of cleaners en route and on-site for full visibility." },
  { icon: "💳", title: "Secure payments", desc: "Automated invoicing, escrow, and instant payouts built into the platform." },
  { icon: "🔔", title: "Smart notifications", desc: "Real-time alerts for bookings, arrivals, completions, and reviews." },
];

const TESTIMONIALS = [
  { quote: "Elyriq Nova completely changed how we manage facility cleaning. We went from chasing vendors to having everything structured and on-time.", name: "Chinedu Adebayo", role: "Facilities Manager, First Bank Nigeria", initials: "CA" },
  { quote: "As a cleaning company, the platform gave us access to corporate clients we could never reach on our own. Our revenue tripled in 6 months.", name: "Ngozi Eze", role: "CEO, SparkClean Ltd", initials: "NE" },
  { quote: "We used Elyriq Nova for our annual conference. 500 guests, seamless cleaning coordination. Will use again without hesitation.", name: "David Okafor", role: "Event Director, Lagos Business Summit", initials: "DO" },
];

const CLIENT_STEPS = [
  { n: "01", title: "Post your requirement", desc: "Tell us your space, frequency, and standards." },
  { n: "02", title: "Get matched", desc: "We surface verified providers that fit your brief." },
  { n: "03", title: "Approve & contract", desc: "Sign a structured agreement with clear SLAs." },
  { n: "04", title: "We manage delivery", desc: "Track performance. We handle the rest." },
];

const CLEANER_STEPS = [
  { n: "01", title: "Create your profile", desc: "List your services, certifications, and location." },
  { n: "02", title: "Get verified", desc: "Pass our background and quality check." },
  { n: "03", title: "Receive opportunities", desc: "Get matched with clients that need you." },
  { n: "04", title: "Earn and grow", desc: "Build reputation, get reviews, scale your business." },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <main style={{ background: "#F8F9FA", color: "#0D1B2A", fontFamily: "'Plus Jakarta Sans', Inter, Arial, sans-serif", overflowX: "hidden" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 56px", height: "68px",
        background: scrolled ? "rgba(13,27,42,0.97)" : "#0D1B2A",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={38} height={38} style={{ borderRadius: "50%" }} />
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#fff", letterSpacing: "-0.01em" }}>Elyriq Nova</span>
        </a>
        <div style={{ display: "flex", gap: "36px" }}>
          {NAV_LINKS.map(link => (
            <a key={link} href="#" style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
              {link}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/auth" style={{ padding: "9px 20px", fontSize: "14px", fontWeight: 600, borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#fff", textDecoration: "none", display: "inline-block" }}>
            Sign In
          </a>
          <a href="/auth" style={{ padding: "9px 20px", fontSize: "14px", fontWeight: 700, borderRadius: "8px", border: "none", background: "#FF3EA5", color: "#fff", textDecoration: "none", display: "inline-block" }}>
            Get Started
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: "#0D1B2A",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "100px 56px 80px",
        gap: "64px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}>
        {/* LEFT */}
        <div>
          <FadeUp>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,62,165,0.12)", border: "1px solid rgba(255,62,165,0.25)", borderRadius: "999px", padding: "6px 14px", marginBottom: "32px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF3EA5" }} />
              <span style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em" }}>Africa&apos;s cleaning operations platform</span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", marginBottom: "24px" }}>
              The infrastructure<br />
              powering trusted<br />
              <span style={{ color: "#FF3EA5" }}>cleaning across Africa.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.75, maxWidth: "480px", marginBottom: "40px" }}>
              Elyriq Nova connects verified cleaning professionals with organisations, institutions, and homes — through a structured, accountable, and technology-driven platform.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
              <a href="/booking" style={{ padding: "14px 28px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", background: "#FF3EA5", color: "#fff", textDecoration: "none", display: "inline-block", transition: "all 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#e0338e")}
                onMouseLeave={e => (e.currentTarget.style.background = "#FF3EA5")}>
                Request a service →
              </a>
              <a href="/auth" style={{ padding: "14px 28px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#fff", textDecoration: "none", display: "inline-block" }}>
                Join as a provider
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={400}>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {["Verified providers", "Managed contracts", "Structured operations"].map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "#22c55e", flexShrink: 0 }}>✓</div>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* RIGHT — Dashboard preview */}
        <FadeUp delay={200}>
          <div style={{ background: "#111827", borderRadius: "16px", padding: "20px", border: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
            {/* Dashboard header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginBottom: "2px" }}>Operations dashboard</p>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}>Good morning, Ada ✦</p>
              </div>
              <div style={{ background: "rgba(255,62,165,0.15)", border: "1px solid rgba(255,62,165,0.25)", borderRadius: "999px", padding: "4px 12px", fontSize: "11px", color: "#FF3EA5", fontWeight: 600 }}>
                Live
              </div>
            </div>

            {/* Metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "14px" }}>
              {[
                { label: "Active jobs", value: "24", color: "#FF3EA5" },
                { label: "Verified cleaners", value: "186", color: "#22c55e" },
                { label: "This month", value: "₦2.4M", color: "#3b82f6" },
              ].map(m => (
                <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "10px 12px" }}>
                  <p style={{ color: m.color, fontWeight: 800, fontSize: "18px", marginBottom: "2px" }}>{m.value}</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}>{m.label}</p>
                </div>
              ))}
            </div>

            {/* Active jobs list */}
            <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "8px", padding: "10px", marginBottom: "12px" }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Active now</p>
              {[
                { name: "Ada Okafor", location: "First Bank, VI", status: "In progress", statusColor: "#22c55e" },
                { name: "SparkClean Ltd", location: "GTBank HQ, Lagos", status: "En route", statusColor: "#FF3EA5" },
                { name: "Chidi Eze", location: "Sheraton Hotel", status: "Confirmed", statusColor: "#3b82f6" },
              ].map((job, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                    {job.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: "#fff", fontSize: "12px", fontWeight: 600, marginBottom: "1px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{job.name}</p>
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px" }}>{job.location}</p>
                  </div>
                  <div style={{ background: `${job.statusColor}18`, border: `1px solid ${job.statusColor}40`, borderRadius: "999px", padding: "2px 8px", fontSize: "10px", fontWeight: 600, color: job.statusColor, flexShrink: 0 }}>
                    {job.status}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini chart */}
            <div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", marginBottom: "8px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Jobs this week</p>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "48px" }}>
                {[35, 55, 40, 70, 60, 85, 75].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: i === 5 ? "#FF3EA5" : "rgba(255,62,165,0.25)", transition: "height 0.3s" }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} style={{ flex: 1, textAlign: "center", fontSize: "9px", color: "rgba(255,255,255,0.25)" }}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section style={{ background: "#fff", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB", padding: "28px 56px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", gap: "40px" }}>
          <p style={{ color: "#9CA3AF", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Trusted by</p>
          <div style={{ display: "flex", gap: "32px", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
            {["First Bank", "GTBank", "Sheraton", "NNPC", "Dangote"].map(name => (
              <span key={name} style={{ color: "#9CA3AF", fontSize: "15px", fontWeight: 700, letterSpacing: "-0.01em" }}>{name}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "32px", flexShrink: 0 }}>
            {[{ n: "500+", l: "Companies" }, { n: "2,400+", l: "Providers" }, { n: "98%", l: "Satisfaction" }].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "18px", fontWeight: 800, color: "#0D1B2A", letterSpacing: "-0.02em" }}>{s.n}</p>
                <p style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 500 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM CAPABILITIES ── */}
      <section style={{ padding: "120px 56px", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp className="text-center">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>Platform</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#0D1B2A", marginBottom: "16px" }}>
                Not just a booking app.<br />A full operations platform.
              </h2>
              <p style={{ color: "#6B7280", fontSize: "17px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
                Built for the way professional cleaning actually works — at scale, across multiple sites, with accountability at every step.
              </p>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 60}>
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "28px", transition: "all 0.3s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF3EA5"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(255,62,165,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontSize: "28px", marginBottom: "16px" }}>{f.icon}</div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B2A", marginBottom: "8px", letterSpacing: "-0.01em" }}>{f.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ background: "#0D1B2A", padding: "120px 56px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>Who it&apos;s for</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", marginBottom: "16px" }}>
                Built for both sides<br />of the marketplace.
              </h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <FadeUp>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "36px", height: "100%" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "20px" }}>🏢</div>
                <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, marginBottom: "12px", letterSpacing: "-0.02em" }}>For organisations</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                  Banks, hospitals, schools, hotels, event venues, and government facilities that need structured, reliable, and accountable cleaning operations.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {["Corporate facility management", "Event cleaning contracts", "Institutional cleaning programs", "Multi-site operations"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(255,62,165,0.2)", border: "1px solid rgba(255,62,165,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "#FF3EA5", flexShrink: 0 }}>✓</div>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/corporate" style={{ display: "inline-block", padding: "12px 24px", background: "#FF3EA5", color: "#fff", fontWeight: 700, borderRadius: "8px", textDecoration: "none", fontSize: "14px" }}>
                  Request a service →
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "36px", height: "100%" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(255,62,165,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "20px" }}>🧹</div>
                <h3 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, marginBottom: "12px", letterSpacing: "-0.02em" }}>For cleaning professionals</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                  Individual cleaners and cleaning companies looking to access quality clients, grow revenue, and build a credible professional reputation.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {["Individual cleaner profiles", "Cleaning company listings", "Corporate contract access", "Earnings and growth tools"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>✓</div>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/auth" style={{ display: "inline-block", padding: "12px 24px", border: "1px solid rgba(255,62,165,0.4)", color: "#FF3EA5", fontWeight: 700, borderRadius: "8px", textDecoration: "none", fontSize: "14px" }}>
                  Join our network →
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "120px 56px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>Process</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#0D1B2A" }}>
                Structured from start to finish.
              </h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#FF3EA5", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px" }}>For clients</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                {CLIENT_STEPS.map((step, i) => (
                  <FadeUp key={step.n} delay={i * 80}>
                    <div style={{ display: "flex", gap: "16px", paddingBottom: "28px", position: "relative" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#0D1B2A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                          {step.n}
                        </div>
                        {i < CLIENT_STEPS.length - 1 && (
                          <div style={{ width: "1px", flex: 1, minHeight: "20px", background: "#E5E7EB", marginTop: "6px" }} />
                        )}
                      </div>
                      <div style={{ paddingTop: "6px" }}>
                        <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0D1B2A", marginBottom: "4px" }}>{step.title}</h4>
                        <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>{step.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px" }}>For cleaners & companies</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {CLEANER_STEPS.map((step, i) => (
                  <FadeUp key={step.n} delay={i * 80}>
                    <div style={{ display: "flex", gap: "16px", paddingBottom: "28px" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #E5E7EB", background: "#F8F9FA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#6B7280", flexShrink: 0 }}>
                          {step.n}
                        </div>
                        {i < CLEANER_STEPS.length - 1 && (
                          <div style={{ width: "1px", flex: 1, minHeight: "20px", background: "#E5E7EB", marginTop: "6px" }} />
                        )}
                      </div>
                      <div style={{ paddingTop: "6px" }}>
                        <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0D1B2A", marginBottom: "4px" }}>{step.title}</h4>
                        <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>{step.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "120px 56px", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>Social proof</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#0D1B2A" }}>
                Trusted by organisations<br />across Africa.
              </h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 80}>
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "28px", height: "100%" }}>
                  <div style={{ color: "#FF3EA5", fontSize: "28px", fontWeight: 900, lineHeight: 1, marginBottom: "16px" }}>&ldquo;</div>
                  <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.8, marginBottom: "24px" }}>{t.quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#0D1B2A", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "13px", flexShrink: 0 }}>
                      {t.initials}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "14px", color: "#0D1B2A", marginBottom: "2px" }}>{t.name}</p>
                      <p style={{ color: "#9CA3AF", fontSize: "12px" }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "40px 56px 80px", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ background: "#0D1B2A", borderRadius: "20px", padding: "72px 60px", textAlign: "center" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Get started</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", marginBottom: "16px" }}>
                Ready to raise the standard<br />of cleaning in Africa?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.7 }}>
                Join thousands of organisations and professionals already using Elyriq Nova.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/booking" style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", background: "#FF3EA5", color: "#fff", textDecoration: "none", display: "inline-block" }}>
                  Request a service
                </a>
                <a href="/auth" style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#fff", textDecoration: "none", display: "inline-block" }}>
                  Join as a provider
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0D1B2A", padding: "72px 56px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "56px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={36} height={36} style={{ borderRadius: "50%" }} />
                <span style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>Elyriq Nova</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.8, maxWidth: "240px", marginBottom: "20px" }}>
                Africa&apos;s technology-enabled cleaning marketplace. Connecting organisations with verified cleaning professionals.
              </p>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>Lagos · Abuja · Port Harcourt</p>
            </div>
            {[
              { heading: "For clients", links: ["Request a service", "Corporate contracts", "Event cleaning", "Pricing", "How it works"] },
              { heading: "For providers", links: ["Join our network", "Cleaning companies", "Verification process", "Earnings", "Support"] },
              { heading: "Company", links: ["About us", "Blog", "Careers", "Press", "Contact"] },
            ].map(col => (
              <div key={col.heading}>
                <p style={{ fontWeight: 700, fontSize: "13px", color: "#fff", marginBottom: "20px", letterSpacing: "0.02em" }}>{col.heading}</p>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ display: "block", color: "rgba(255,255,255,0.4)", fontSize: "13px", marginBottom: "12px", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>© 2025 Elyriq Nova. All rights reserved.</p>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
                <a key={item} href="#" style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", textDecoration: "none" }}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
