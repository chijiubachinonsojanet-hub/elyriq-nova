"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <main style={{ background: "#0A0A0A", color: "#fff", fontFamily: "Inter, Arial, sans-serif", overflowX: "hidden" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 48px",
        background: scrolled ? "rgba(10,10,10,0.97)" : "#0A0A0A",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={44} height={44} style={{ borderRadius: "50%" }} />
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>Elyriq Nova</span>
        </div>
        <div style={{ display: "flex", gap: "36px" }}>
          {["Home", "About Us", "How It Works", "Services", "Contact"].map((item) => (
            <a key={item} href="#" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none", fontWeight: 500 }}>
              {item}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button style={{ padding: "10px 24px", fontSize: "14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
            Sign In
          </button>
          <button style={{ padding: "10px 24px", fontSize: "14px", borderRadius: "8px", border: "none", background: "#FF3EA5", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "120px 64px 60px",
        gap: "60px",
        maxWidth: "1400px", margin: "0 auto",
      }}>
        <div>
          <div style={{ display: "inline-block", background: "#FF3EA5", color: "#fff", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "999px", marginBottom: "28px" }}>
            #1 Cleaning Platform in Africa
          </div>
          <h1 style={{ fontSize: "clamp(36px, 4.5vw, 58px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em" }}>
            The Platform<br />
            Powering Trusted<br />
            <span style={{ color: "#FF3EA5" }}>Cleaning Across Africa</span>
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "16px", lineHeight: 1.8, marginBottom: "20px", maxWidth: "480px" }}>
            Elyriq Nova connects organisations, institutions, homes, and cleaning professionals through reliable solutions built on professionalism, accountability, and trust.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}>
            <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px" }}>✓</div>
            <span style={{ color: "#9ca3af", fontSize: "14px" }}>Verified cleaners • Trusted companies • Professional service</span>
          </div>
          <div style={{ display: "flex", gap: "14px" }}>
            <button style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 700, borderRadius: "8px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer" }}>
              Request a Service
            </button>
            <button style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 600, borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#fff", cursor: "pointer" }}>
              Join As a Cleaner
            </button>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=90" alt="Professional cleaning" style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ position: "absolute", top: "20%", left: "-40px", background: "#fff", color: "#0A0A0A", borderRadius: "12px", padding: "12px 18px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", fontSize: "13px", fontWeight: 600 }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff0f7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>🏠</div>
            Households
          </div>
          <div style={{ position: "absolute", top: "45%", right: "-40px", background: "#fff", color: "#0A0A0A", borderRadius: "12px", padding: "12px 18px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", fontSize: "13px", fontWeight: 600 }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff0f7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>🏢</div>
            Corporates
          </div>
          <div style={{ position: "absolute", bottom: "15%", left: "-20px", background: "#fff", color: "#0A0A0A", borderRadius: "12px", padding: "12px 18px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", fontSize: "13px", fontWeight: 600 }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff0f7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>🧹</div>
            Cleaners
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "60px 64px", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#111", display: "flex", justifyContent: "center", gap: "80px", flexWrap: "wrap" }}>
        {[
          { num: "2,400+", label: "Verified Cleaners" },
          { num: "98%", label: "Satisfaction Rate" },
          { num: "12,000+", label: "Jobs Completed" },
          { num: "500+", label: "Corporate Partners" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <p style={{ fontSize: "44px", fontWeight: 800, color: "#FF3EA5", lineHeight: 1 }}>{s.num}</p>
            <p style={{ color: "#6b7280", fontSize: "13px", marginTop: "8px" }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* WHO IS IT FOR */}
      <section style={{ padding: "100px 64px", background: "#fff", color: "#0A0A0A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Who It&apos;s For</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>Built for everyone.</h2>
          <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "56px", fontSize: "15px" }}>Simple process, maximum results.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { icon: "🏢", title: "Businesses & Institutions", desc: "Offices, banks, hospitals, and schools looking for reliable, ongoing cleaning solutions." },
              { icon: "🎉", title: "Events & Venues", desc: "Before, during, and after event cleaning for conferences, weddings, and exhibitions." },
              { icon: "🧹", title: "Cleaning Professionals", desc: "Individual cleaners and companies looking to grow and access quality clients." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f9f9", border: "1.5px solid #f0f0f0", borderRadius: "16px", padding: "36px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "#fff0f7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "20px" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 64px", background: "#0A0A0A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Services</p>
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, marginBottom: "56px", letterSpacing: "-0.02em" }}>Every space. Every need.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {[
              { title: "Corporate", sub: "Offices & banks", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
              { title: "Institutions", sub: "Hospitals & schools", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
              { title: "Events", sub: "Venues & conferences", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80" },
              { title: "Homes", sub: "Houses & apartments", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
            ].map((item) => (
              <div key={item.title} style={{ position: "relative", borderRadius: "16px", overflow: "hidden", height: "360px" }}>
                <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)" }} />
                <div style={{ position: "absolute", top: "14px", right: "14px" }}>
                  <Image src="/elyriq-nova-logo.jpeg" alt="logo" width={28} height={28} style={{ borderRadius: "50%", opacity: 0.85 }} />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px" }}>
                  <p style={{ fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>{item.title}</p>
                  <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 600 }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "100px 64px", background: "#f9f9f9", color: "#0A0A0A" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Process</p>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, marginBottom: "64px", letterSpacing: "-0.02em" }}>Getting started is simple.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
            {[
              { n: "1", icon: "🔍", label: "Choose your path" },
              { n: "2", icon: "👤", label: "Create account" },
              { n: "3", icon: "📋", label: "Submit request" },
              { n: "4", icon: "✅", label: "We handle it" },
            ].map((item) => (
              <div key={item.n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "#fff", border: "1.5px solid #f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
                  {item.icon}
                </div>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#fff" }}>
                  {item.n}
                </div>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#0A0A0A" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PINK CTA BANNER */}
      <section style={{ padding: "40px 64px", background: "#0A0A0A" }}>
        <div style={{ background: "#FF3EA5", borderRadius: "20px", padding: "80px 60px", textAlign: "center", maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Elyriq Nova is where trusted cleaning professionals are verified, connected, and empowered.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            Professional standards, accountability, and peace of mind — every single time.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 700, borderRadius: "8px", border: "none", background: "#fff", color: "#FF3EA5", cursor: "pointer" }}>
              Request a Service
            </button>
            <button style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 700, borderRadius: "8px", border: "2px solid #fff", background: "transparent", color: "#fff", cursor: "pointer" }}>
              Join As a Cleaner
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 64px", background: "#fff", color: "#0A0A0A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#FF3EA5", color: "#fff", fontSize: "12px", fontWeight: 700, padding: "6px 16px", borderRadius: "999px", marginBottom: "20px" }}>Success Stories</div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>Trusted by Thousands</h2>
          <p style={{ color: "#6b7280", marginBottom: "48px", fontSize: "15px" }}>See what clients and professionals are saying about Elyriq Nova.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { quote: "Elyriq Nova transformed how we manage office cleaning. We now have a reliable team every week without chasing anyone.", name: "Chinedu Adebayo", role: "Facilities Manager, Lagos • 1 year" },
              { quote: "As a cleaner, I now have steady clients and get paid on time. My income has doubled since joining the network.", name: "Amina Bello", role: "Professional Cleaner, Abuja • 8 months" },
              { quote: "We used Elyriq Nova for our company event and the results were outstanding. Very professional and thorough.", name: "David Okafor", role: "Event Manager, Port Harcourt • 6 months" },
            ].map((item) => (
              <div key={item.name} style={{ background: "#f9f9f9", border: "1.5px solid #f0f0f0", borderRadius: "16px", padding: "32px" }}>
                <div style={{ color: "#FF3EA5", fontSize: "32px", fontWeight: 900, marginBottom: "16px" }}>&ldquo;</div>
                <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.8, marginBottom: "24px" }}>{item.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "14px" }}>
                    {item.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "14px" }}>{item.name}</p>
                    <p style={{ color: "#9ca3af", fontSize: "12px" }}>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111", padding: "80px 64px 40px", color: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "64px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={40} height={40} style={{ borderRadius: "50%" }} />
                <span style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>Elyriq Nova</span>
              </div>
              <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.8, maxWidth: "260px" }}>
                Building Africa&apos;s most trusted cleaning ecosystem where professionals earn more and businesses stay spotless.
              </p>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "20px" }}>For Clients</p>
              {["Request a Service", "How It Works", "Pricing", "Business Solutions"].map(item => (
                <a key={item} href="#" style={{ display: "block", color: "#6b7280", fontSize: "13px", marginBottom: "12px", textDecoration: "none" }}>{item}</a>
              ))}
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "20px" }}>For Cleaners</p>
              {["Join Our Network", "How It Works", "Earnings", "Support"].map(item => (
                <a key={item} href="#" style={{ display: "block", color: "#6b7280", fontSize: "13px", marginBottom: "12px", textDecoration: "none" }}>{item}</a>
              ))}
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "20px" }}>Company</p>
              {["About Us", "Careers", "Blog", "Contact", "Press"].map(item => (
                <a key={item} href="#" style={{ display: "block", color: "#6b7280", fontSize: "13px", marginBottom: "12px", textDecoration: "none" }}>{item}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ color: "#4b5563", fontSize: "13px" }}>© 2025 Elyriq Nova. All rights reserved. | Lagos • Abuja • Port Harcourt</p>
            <div style={{ display: "flex", gap: "24px" }}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
                <a key={item} href="#" style={{ color: "#4b5563", fontSize: "13px", textDecoration: "none" }}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}