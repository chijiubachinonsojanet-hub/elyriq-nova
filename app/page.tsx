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
      transform: inView ? "translateY(24px)" : "translateY(0)",
      animation: inView ? `fadeUpEffect 0.8s ease ${delay}ms forwards` : "none"
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
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main style={{ background: "#F8F9FA", color: "#0D1B2A", fontFamily: "'Plus Jakarta Sans', Inter, Arial, sans-serif", overflowX: "hidden" }}>
      
      {/* Dynamic Keyframe Injection for the custom fade element */}
      <style>{`
        @keyframes fadeUpEffect {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: isMobile ? "0 20px" : "0 56px", height: "68px",
        background: scrolled || mobileMenuOpen ? "rgba(13,27,42,0.97)" : "#0D1B2A",
        backdropFilter: scrolled || mobileMenuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || mobileMenuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={38} height={38} style={{ borderRadius: "50%" }} />
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#fff", letterSpacing: "-0.01em" }}>Elyriq Nova</span>
        </a>

        {!isMobile && (
          <>
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
          </>
        )}

        {isMobile && (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: "transparent", border: "none", color: "#fff", fontSize: "24px", cursor: "pointer", padding: "4px" }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* ── MOBILE NAV MENU ── */}
      {isMobile && mobileMenuOpen && (
        <div style={{
          position: "fixed", top: "68px", left: 0, right: 0, bottom: 0,
          background: "#0D1B2A", zIndex: 99, display: "flex", flexDirection: "column",
          padding: "30px 20px", gap: "24px", overflowY: "auto"
        }}>
          {NAV_LINKS.map(link => (
            <a key={link} href="#" onClick={() => setMobileMenuOpen(false)} style={{ color: "#fff", fontSize: "18px", textDecoration: "none", fontWeight: 500 }}>
              {link}
            </a>
          ))}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "10px 0" }} />
          <a href="/auth" style={{ padding: "14px", textAlign: "center", fontSize: "16px", fontWeight: 600, borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", textDecoration: "none" }}>
            Sign In
          </a>
          <a href="/auth" style={{ padding: "14px", textAlign: "center", fontSize: "16px", fontWeight: 700, borderRadius: "8px", background: "#FF3EA5", color: "#fff", textDecoration: "none" }}>
            Get Started
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{
        background: "#0D1B2A",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        alignItems: "center",
        padding: isMobile ? "110px 20px 60px" : "100px 56px 80px",
        gap: isMobile ? "40px" : "64px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}>
        {/* LEFT */}
        <div>
          <FadeUp>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,62,165,0.12)", border: "1px solid rgba(255,62,165,0.25)", borderRadius: "999px", padding: "6px 14px", marginBottom: "24px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF3EA5" }} />
              <span style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 600, letterSpacing: "0.04em" }}>Africa&apos;s cleaning operations platform</span>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em", color: "#fff", marginBottom: "20px" }}>
              The infrastructure<br />
              powering trusted<br />
              <span style={{ color: "#FF3EA5" }}>cleaning across Africa.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", lineHeight: 1.65, maxWidth: "480px", marginBottom: "32px" }}>
              Elyriq Nova connects verified cleaning professionals with organisations, institutions, and homes — through a structured, accountable, and technology-driven platform.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div style={{ display: "flex", gap: "12px", marginBottom: "32px", flexDirection: isMobile ? "column" : "row" }}>
              <a href="/booking" style={{ padding: "14px 28px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", background: "#FF3EA5", color: "#fff", textDecoration: "none", textAlign: "center" }}>
                Request a service →
              </a>
              <a href="/auth" style={{ padding: "14px 28px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#fff", textDecoration: "none", textAlign: "center" }}>
                Join as a provider
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={400}>
            <div style={{ display: "flex", gap: "16px 20px", flexWrap: "wrap" }}>
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
          <div style={{ background: "#111827", borderRadius: "16px", padding: "20px", border: "1px solid rgba(255,255,255,0.06)" }}>
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
                <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "10px 8px", textAlign: "center" }}>
                  <p style={{ color: m.color, fontWeight: 800, fontSize: "16px", marginBottom: "2px" }}>{m.value}</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "9px", whiteSpace: "nowrap", overflow: "hidden" }}>{m.label}</p>
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
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{job.location}</p>
                  </div>
                  <div style={{ background: `${job.statusColor}18`, border: `1px solid ${job.statusColor}40`, borderRadius: "999px", padding: "2px 8px", fontSize: "9px", fontWeight: 600, color: job.statusColor, flexShrink: 0 }}>
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
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: i === 5 ? "#FF3EA5" : "rgba(255,62,165,0.25)" }} />
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
      <section style={{ background: "#fff", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB", padding: isMobile ? "24px 20px" : "28px 56px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: "24px" }}>
          <p style={{ color: "#9CA3AF", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Trusted by</p>
          <div style={{ display: "flex", gap: "20px 24px", alignItems: "center", flex: 1, flexWrap: "wrap" }}>
            {["First Bank", "GTBank", "Sheraton", "NNPC", "Dangote"].map(name => (
              <span key={name} style={{ color: "#9CA3AF", fontSize: "14px", fontWeight: 700 }}>{name}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "24px", width: isMobile ? "100%" : "auto", justifyContent: "space-between", borderTop: isMobile ? "1px solid #F3F4F6" : "none", paddingTop: isMobile ? "16px" : 0 }}>
            {[{ n: "500+", l: "Companies" }, { n: "2,400+", l: "Providers" }, { n: "98%", l: "Satisfaction" }].map(s => (
              <div key={s.l} style={{ textAlign: isMobile ? "left" : "center" }}>
                <p style={{ fontSize: "16px", fontWeight: 800, color: "#0D1B2A" }}>{s.n}</p>
                <p style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: 500 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM CAPABILITIES ── */}
      <section style={{ padding: isMobile ? "60px 20px" : "120px 56px", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "44px" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Platform</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#0D1B2A", marginBottom: "16px" }}>
                Not just a booking app.<br />A full operations platform.
              </h2>
              <p style={{ color: "#6B7280", fontSize: "16px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
                Built for the way professional cleaning actually works — at scale, across multiple sites, with accountability at every step.
              </p>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "16px" }}>
            {FEATURES.map((f, i) => (
              <FadeUp key={f.title} delay={i * 40}>
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "24px" }}>
                  <div style={{ fontSize: "28px", marginBottom: "14px" }}>{f.icon}</div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B2A", marginBottom: "8px" }}>{f.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ background: "#0D1B2A", padding: isMobile ? "60px 20px" : "120px 56px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "44px" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Who it&apos;s for</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", marginBottom: "16px" }}>
                Built for both sides<br />of the marketplace.
              </h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "20px" }}>
            <FadeUp>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "20px" }}>🏢</div>
                <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>For organisations</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                  Banks, hospitals, schools, hotels, event venues, and government facilities that need structured, reliable, and accountable cleaning operations.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {["Corporate facility management", "Event cleaning contracts", "Institutional cleaning programs", "Multi-site operations"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(255,62,165,0.2)", border: "1px solid rgba(255,62,165,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "#FF3EA5", flexShrink: 0 }}>✓</div>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/corporate" style={{ display: "block", textAlign: "center", padding: "12px 24px", background: "#FF3EA5", color: "#fff", fontWeight: 700, borderRadius: "8px", textDecoration: "none", fontSize: "14px" }}>
                  Request a service →
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(255,62,165,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", marginBottom: "20px" }}>🧹</div>
                <h3 style={{ color: "#fff", fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>For cleaning professionals</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                  Individual cleaners and cleaning companies looking to access quality clients, grow revenue, and build a credible professional reputation.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {["Individual cleaner profiles", "Cleaning company listings", "Corporate contract access", "Earnings and growth tools"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>✓</div>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/auth" style={{ display: "block", textAlign: "center", padding: "12px 24px", border: "1px solid rgba(255,62,165,0.4)", color: "#FF3EA5", fontWeight: 700, borderRadius: "8px", textDecoration: "none", fontSize: "14px" }}>
                  Join our network →
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: isMobile ? "60px 20px" : "120px 56px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "44px" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Process</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#0D1B2A" }}>
                Structured from start to finish.
              </h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "32px" : "48px" }}>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#FF3EA5", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>For clients</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {CLIENT_STEPS.map((step, i) => (
                  <FadeUp key={step.n} delay={i * 40}>
                    <div style={{ display: "flex", gap: "16px", paddingBottom: "20px" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#0D1B2A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#fff" }}>
                          {step.n}
                        </div>
                        {i < CLIENT_STEPS.length - 1 && (
                          <div style={{ width: "1px", flex: 1, minHeight: "16px", background: "#E5E7EB", marginTop: "6px" }} />
                        )}
                      </div>
                      <div style={{ paddingTop: "4px" }}>
                        <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0D1B2A", marginBottom: "4px" }}>{step.title}</h4>
                        <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.5 }}>{step.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px" }}>For cleaners & companies</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {CLEANER_STEPS.map((step, i) => (
                  <FadeUp key={step.n} delay={i * 40}>
                    <div style={{ display: "flex", gap: "16px", paddingBottom: "20px" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #E5E7EB", background: "#F8F9FA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#6B7280" }}>
                          {step.n}
                        </div>
                        {i < CLEANER_STEPS.length - 1 && (
                          <div style={{ width: "1px", flex: 1, minHeight: "16px", background: "#E5E7EB", marginTop: "6px" }} />
                        )}
                      </div>
                      <div style={{ paddingTop: "4px" }}>
                        <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0D1B2A", marginBottom: "4px" }}>{step.title}</h4>
                        <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.5 }}>{step.desc}</p>
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
      <section style={{ padding: isMobile ? "60px 20px" : "120px 56px", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "44px" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Social proof</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#0D1B2A" }}>
                Trusted by organisations<br />across Africa.
              </h2>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "20px" }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 40}>
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "24px" }}>
                  <div style={{ color: "#FF3EA5", fontSize: "28px", fontWeight: 900, lineHeight: 1, marginBottom: "12px" }}>&ldquo;</div>
                  <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>{t.quote}</p>
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
      <section style={{ padding: "20px 20px 60px", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ background: "#0D1B2A", borderRadius: "20px", padding: isMobile ? "48px 24px" : "72px 60px", textAlign: "center" }}>
              <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Get started</p>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", marginBottom: "16px" }}>
                Ready to raise the standard<br />of cleaning in Africa?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "480px", margin: "0 auto 32px", lineHeight: 1.6 }}>
                Join thousands of organisations and professionals already using Elyriq Nova.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexDirection: isMobile ? "column" : "row" }}>
                <a href="/booking" style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", background: "#FF3EA5", color: "#fff", textDecoration: "none", textAlign: "center" }}>
                  Request a service
                </a>
                <a href="/auth" style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#fff", textDecoration: "none", textAlign: "center" }}>
                  Join as a provider
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0D1B2A", padding: isMobile ? "48px 20px 32px" : "72px 56px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "48px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={36} height={36} style={{ borderRadius: "50%" }} />
                <span style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>Elyriq Nova</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.7, maxWidth: "240px", marginBottom: "16px" }}>
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
                <p style={{ fontWeight: 700, fontSize: "13px", color: "#fff", marginBottom: "16px", letterSpacing: "0.02em" }}>{col.heading}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {col.links.map(link => (
                    <a key={link} href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", textDecoration: "none" }}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>&copy; 2026 Elyriq Nova. All rights reserved.</span>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textDecoration: "none" }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}