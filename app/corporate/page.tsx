"use client";

import Image from "next/image";
import { useState } from "react";

type Step = 1 | 2 | 3 | 4 | 5;

const inputStyle = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.04)",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
  fontFamily: "Inter, Arial, sans-serif",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  display: "block",
  fontSize: "13px",
  color: "#9ca3af",
  marginBottom: "8px",
  fontWeight: 500 as const,
};

const selectStyle = {
  ...inputStyle,
  background: "#1a1a1a",
};

const companies = [
  {
    id: 1,
    name: "SparkClean Ltd",
    location: "Lagos Island",
    rating: 4.9,
    reviews: 124,
    clients: 45,
    tag: "Top Rated",
    services: ["Office", "Industrial", "Hospital"],
    price: "From ₦150,000/month",
    desc: "Specialist in corporate and institutional cleaning with a team of 50+ professionals.",
  },
  {
    id: 2,
    name: "PristineForce Nigeria",
    location: "Victoria Island, Lagos",
    rating: 4.8,
    reviews: 98,
    clients: 32,
    tag: "Verified",
    services: ["Office", "Events", "Retail"],
    price: "From ₦120,000/month",
    desc: "Trusted by leading banks and multinationals across Lagos for daily cleaning contracts.",
  },
  {
    id: 3,
    name: "CleanSweep Pro",
    location: "Abuja",
    rating: 4.7,
    reviews: 76,
    clients: 28,
    tag: "Popular",
    services: ["Government", "Schools", "Office"],
    price: "From ₦100,000/month",
    desc: "Experienced in government facilities and institutional spaces across Abuja.",
  },
];

export default function Corporate() {
  const [step, setStep] = useState<Step>(1);
  const [industry, setIndustry] = useState("");
  const [frequency, setFrequency] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const steps = ["Company Info", "Requirements", "Choose Company", "Submit Enquiry"];

  return (
    <main style={{ minHeight: "100vh", background: "#0A0A0A", color: "#fff", fontFamily: "Inter, Arial, sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={40} height={40} style={{ borderRadius: "50%" }} />
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>Elyriq Nova</span>
        </a>

        {/* STEPPER */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {steps.map((label, i) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: step > i + 1 ? "#FF3EA5" : step === i + 1 ? "#FF3EA5" : "rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "12px", fontWeight: 700,
                color: step >= i + 1 ? "#fff" : "#6b7280",
              }}>
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span style={{ fontSize: "12px", color: step === i + 1 ? "#fff" : "#6b7280", fontWeight: step === i + 1 ? 600 : 400 }}>
                {label}
              </span>
              {i < steps.length - 1 && (
                <div style={{ width: "24px", height: "1px", background: step > i + 1 ? "#FF3EA5" : "rgba(255,255,255,0.1)" }} />
              )}
            </div>
          ))}
        </div>

        <a href="/auth" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Sign in</a>
      </nav>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "60px 24px" }}>

        {/* STEP 1 — COMPANY INFO */}
        {step === 1 && (
          <div>
            <div style={{ display: "inline-block", background: "rgba(255,62,165,0.1)", border: "1px solid rgba(255,62,165,0.2)", borderRadius: "999px", padding: "6px 14px", marginBottom: "28px" }}>
              <span style={{ color: "#FF3EA5", fontSize: "13px", fontWeight: 600 }}>🏢 Corporate Enquiry</span>
            </div>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>Tell us about your company</h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>We will match you with the right cleaning partner.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              <div>
                <label style={labelStyle}>Company name</label>
                <input type="text" placeholder="e.g. First Bank Nigeria" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Industry</label>
                <select style={selectStyle} value={industry} onChange={e => setIndustry(e.target.value)}>
                  <option value="">Select your industry</option>
                  <option>Banking & Finance</option>
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option>Government</option>
                  <option>Retail</option>
                  <option>Hospitality</option>
                  <option>Technology</option>
                  <option>Manufacturing</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Company size</label>
                  <select style={selectStyle}>
                    <option>1-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>City</label>
                  <input type="text" placeholder="e.g. Lagos, Abuja" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Full address</label>
                <input type="text" placeholder="e.g. 10 Marina Street, Lagos Island" style={inputStyle} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Contact person</label>
                  <input type="text" placeholder="Full name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Job title</label>
                  <input type="text" placeholder="e.g. Facilities Manager" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Email address</label>
                  <input type="email" placeholder="you@company.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone number</label>
                  <input type="tel" placeholder="+234 800 000 0000" style={inputStyle} />
                </div>
              </div>
            </div>
            <button
              onClick={() => industry && setStep(2)}
              style={{ width: "100%", padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: industry ? "#FF3EA5" : "rgba(255,255,255,0.1)", color: industry ? "#fff" : "#6b7280", cursor: industry ? "pointer" : "not-allowed", fontFamily: "Inter, Arial, sans-serif" }}
            >
              Continue →
            </button>
          </div>
        )}

        {/* STEP 2 — REQUIREMENTS */}
        {step === 2 && (
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>What do you need?</h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>Tell us your cleaning requirements.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>

              <div>
                <label style={labelStyle}>Type of cleaning needed</label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  {[
                    { type: "Daily Office Cleaning", icon: "🏢" },
                    { type: "Deep Cleaning", icon: "🧹" },
                    { type: "Industrial Cleaning", icon: "🏭" },
                    { type: "Facility Management", icon: "🔧" },
                  ].map((item) => (
                    <div
                      key={item.type}
                      style={{ border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "16px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.02)" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "#FF3EA5")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                    >
                      <span style={{ fontSize: "20px" }}>{item.icon}</span>
                      <span style={{ fontSize: "14px", fontWeight: 500 }}>{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Cleaning frequency</label>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {["Daily", "Weekly", "Bi-weekly", "Monthly", "One-time"].map((f) => (
                    <div
                      key={f}
                      onClick={() => setFrequency(f)}
                      style={{
                        padding: "8px 18px", borderRadius: "999px", cursor: "pointer", fontSize: "14px", fontWeight: 500,
                        border: `1px solid ${frequency === f ? "#FF3EA5" : "rgba(255,255,255,0.1)"}`,
                        background: frequency === f ? "rgba(255,62,165,0.15)" : "transparent",
                        color: frequency === f ? "#FF3EA5" : "#9ca3af",
                        transition: "all 0.2s",
                      }}
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Total floor space</label>
                  <select style={selectStyle}>
                    <option>Less than 500 sqm</option>
                    <option>500 - 1,000 sqm</option>
                    <option>1,000 - 5,000 sqm</option>
                    <option>5,000+ sqm</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Number of floors</label>
                  <select style={selectStyle}>
                    <option>1 floor</option>
                    <option>2-3 floors</option>
                    <option>4-10 floors</option>
                    <option>10+ floors</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Preferred start date</label>
                <input type="date" style={{ ...inputStyle, colorScheme: "dark" }} />
              </div>

              <div>
                <label style={labelStyle}>Contract duration</label>
                <select style={selectStyle}>
                  <option>1 month</option>
                  <option>3 months</option>
                  <option selected>6 months</option>
                  <option>12 months</option>
                  <option>Ongoing</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Monthly budget range</label>
                <select style={selectStyle}>
                  <option>Under ₦100,000</option>
                  <option>₦100,000 - ₦300,000</option>
                  <option>₦300,000 - ₦500,000</option>
                  <option>₦500,000 - ₦1,000,000</option>
                  <option>Above ₦1,000,000</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Additional requirements (optional)</label>
                <textarea
                  placeholder="e.g. Need cleaners in uniform, require security clearance, specific cleaning products preferred..."
                  style={{ ...inputStyle, height: "100px", resize: "vertical" as const }}
                />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <button onClick={() => setStep(1)} style={{ padding: "15px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                ← Back
              </button>
              <button onClick={() => setStep(3)} style={{ padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                Find Cleaning Companies →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — CHOOSE COMPANY */}
        {step === 3 && (
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>Choose a cleaning company</h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>Verified cleaning companies ready for corporate contracts.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              {companies.map((company) => (
                <div
                  key={company.id}
                  onClick={() => setSelectedCompany(company)}
                  style={{
                    border: `1.5px solid ${selectedCompany?.id === company.id ? "#FF3EA5" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "16px", padding: "24px", cursor: "pointer",
                    background: selectedCompany?.id === company.id ? "rgba(255,62,165,0.04)" : "rgba(255,255,255,0.02)",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", flexShrink: 0 }}>
                      {company.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <h3 style={{ fontWeight: 700, fontSize: "16px" }}>{company.name}</h3>
                        <span style={{ background: "rgba(255,62,165,0.15)", color: "#FF3EA5", fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "999px" }}>{company.tag}</span>
                      </div>
                      <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "8px" }}>📍 {company.location} • ⭐ {company.rating} ({company.reviews} reviews) • {company.clients} active contracts</p>
                      <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.6, marginBottom: "12px" }}>{company.desc}</p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {company.services.map(s => (
                          <span key={s} style={{ background: "rgba(255,255,255,0.06)", color: "#9ca3af", fontSize: "12px", padding: "3px 10px", borderRadius: "999px" }}>{s}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontWeight: 700, color: "#FF3EA5", fontSize: "14px" }}>{company.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <button onClick={() => setStep(2)} style={{ padding: "15px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                ← Back
              </button>
              <button
                onClick={() => selectedCompany && setStep(4)}
                style={{ padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: selectedCompany ? "#FF3EA5" : "rgba(255,255,255,0.1)", color: selectedCompany ? "#fff" : "#6b7280", cursor: selectedCompany ? "pointer" : "not-allowed", fontFamily: "Inter, Arial, sans-serif" }}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 — SUBMIT ENQUIRY */}
        {step === 4 && selectedCompany && !submitted && (
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>Review & Submit</h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>Review your enquiry before submitting.</p>

            {/* Selected company */}
            <div style={{ background: "rgba(255,62,165,0.05)", border: "1px solid rgba(255,62,165,0.2)", borderRadius: "16px", padding: "20px 24px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", flexShrink: 0 }}>
                {selectedCompany.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "15px" }}>{selectedCompany.name}</p>
                <p style={{ color: "#6b7280", fontSize: "13px" }}>📍 {selectedCompany.location} • ⭐ {selectedCompany.rating}</p>
                <p style={{ color: "#FF3EA5", fontSize: "13px", fontWeight: 600 }}>{selectedCompany.price}</p>
              </div>
            </div>

            {/* Summary */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px", marginBottom: "20px" }}>
              <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "16px" }}>Enquiry Summary</p>
              {[
                { label: "Industry", value: industry || "Banking & Finance" },
                { label: "Cleaning type", value: "Daily Office Cleaning" },
                { label: "Frequency", value: frequency || "Daily" },
                { label: "Floor space", value: "500 - 1,000 sqm" },
                { label: "Contract duration", value: "6 months" },
                { label: "Budget range", value: "₦100,000 - ₦300,000/month" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: "#6b7280", fontSize: "14px" }}>{item.label}</span>
                  <span style={{ fontSize: "14px", fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* What happens next */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
              <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "16px" }}>What happens next?</p>
              {[
                { n: "1", text: "Your enquiry is sent to " + selectedCompany.name },
                { n: "2", text: "They will review your requirements and respond within 24 hours" },
                { n: "3", text: "Elyriq Nova will facilitate the contract and onboarding" },
                { n: "4", text: "Service begins on your preferred start date" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "12px", marginBottom: "12px", alignItems: "flex-start" }}>
                  <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>{item.n}</div>
                  <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.6 }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <button onClick={() => setStep(3)} style={{ padding: "15px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                ← Back
              </button>
              <button
                onClick={() => setSubmitted(true)}
                style={{ padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}
              >
                Submit Enquiry →
              </button>
            </div>
          </div>
        )}

        {/* SUCCESS */}
        {submitted && (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(255,62,165,0.15)", border: "2px solid #FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", margin: "0 auto 24px" }}>
              ✓
            </div>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.02em" }}>Enquiry Submitted!</h1>
            <p style={{ color: "#6b7280", fontSize: "16px", maxWidth: "400px", margin: "0 auto 16px", lineHeight: 1.7 }}>
              Your enquiry has been sent to <strong style={{ color: "#fff" }}>{selectedCompany?.name}</strong>. They will respond within 24 hours.
            </p>
            <p style={{ color: "#FF3EA5", fontSize: "14px", marginBottom: "40px" }}>
              Reference: ELY-B2B-{Math.floor(Math.random() * 90000) + 10000}
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <a href="/" style={{ padding: "14px 28px", fontSize: "14px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", textDecoration: "none" }}>
                Back to Home
              </a>
              <a href="/dashboard" style={{ padding: "14px 28px", fontSize: "14px", fontWeight: 700, borderRadius: "10px", border: "none", background: "#FF3EA5", color: "#fff", textDecoration: "none" }}>
                Go to Dashboard
              </a>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}