"use client";

import Image from "next/image";
import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

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

const cleaners = [
  { id: 1, name: "Ada Okafor", location: "Victoria Island, Lagos", rating: 4.9, reviews: 87, rate: 2500, tag: "Top Rated", services: ["Home", "Deep Clean"] },
  { id: 2, name: "Chidi Eze", location: "Lekki Phase 1, Lagos", rating: 4.8, reviews: 64, rate: 2000, tag: "Verified", services: ["Home", "Office"] },
  { id: 3, name: "Fatima Bello", location: "Ikeja, Lagos", rating: 4.7, reviews: 52, rate: 1800, tag: "Popular", services: ["Home", "Event"] },
  { id: 4, name: "Emeka Nweze", location: "Surulere, Lagos", rating: 4.6, reviews: 41, rate: 1500, tag: "Verified", services: ["Office", "Deep Clean"] },
];

export default function Booking() {
  const [step, setStep] = useState<Step>(1);
  const [serviceType, setServiceType] = useState("");
  const [selectedCleaner, setSelectedCleaner] = useState<typeof cleaners[0] | null>(null);
  const [hours, setHours] = useState(3);

  const total = selectedCleaner ? selectedCleaner.rate * hours + Math.round(selectedCleaner.rate * hours * 0.05) : 0;

  return (
    <main style={{ minHeight: "100vh", background: "#0A0A0A", color: "#fff", fontFamily: "Inter, Arial, sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={40} height={40} style={{ borderRadius: "50%" }} />
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>Elyriq Nova</span>
        </a>
        <div style={{ display: "flex", gap: "8px" }}>
          {["Service", "Details", "Choose Cleaner", "Confirm"].map((label, i) => (
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
              <span style={{ fontSize: "13px", color: step === i + 1 ? "#fff" : "#6b7280", fontWeight: step === i + 1 ? 600 : 400 }}>
                {label}
              </span>
              {i < 3 && <div style={{ width: "32px", height: "1px", background: step > i + 1 ? "#FF3EA5" : "rgba(255,255,255,0.1)" }} />}
            </div>
          ))}
        </div>
        <a href="/auth" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Sign in</a>
      </nav>

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "60px 24px" }}>

        {/* STEP 1 — SERVICE TYPE */}
        {step === 1 && (
          <div>
            <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Step 1 of 4</p>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>What needs cleaning?</h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>Select the type of space you need cleaned.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "40px" }}>
              {[
                { type: "Home", icon: "🏠", desc: "House, apartment, or flat" },
                { type: "Office", icon: "🏢", desc: "Office or commercial space" },
                { type: "Institution", icon: "🏥", desc: "Hospital, school, or facility" },
                { type: "Event", icon: "🎉", desc: "Event venue or conference hall" },
              ].map((item) => (
                <div
                  key={item.type}
                  onClick={() => setServiceType(item.type)}
                  style={{
                    border: `1.5px solid ${serviceType === item.type ? "#FF3EA5" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "16px", padding: "28px", cursor: "pointer",
                    background: serviceType === item.type ? "rgba(255,62,165,0.05)" : "rgba(255,255,255,0.02)",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "6px" }}>{item.type}</h3>
                  <p style={{ color: "#6b7280", fontSize: "13px" }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => serviceType && setStep(2)}
              style={{ width: "100%", padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: serviceType ? "#FF3EA5" : "rgba(255,255,255,0.1)", color: serviceType ? "#fff" : "#6b7280", cursor: serviceType ? "pointer" : "not-allowed", fontFamily: "Inter, Arial, sans-serif" }}
            >
              Continue →
            </button>
          </div>
        )}

        {/* STEP 2 — DETAILS */}
        {step === 2 && (
          <div>
            <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Step 2 of 4</p>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>Tell us the details</h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>Help us match you with the right cleaner.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              <div>
                <label style={labelStyle}>Full address</label>
                <input type="text" placeholder="e.g. 14 Adeola Odeku St, Victoria Island, Lagos" style={inputStyle} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Date</label>
                  <input type="date" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Start time</label>
                  <input type="time" style={{ ...inputStyle, colorScheme: "dark" }} defaultValue="09:00" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Number of hours</label>
                  <select style={{ ...inputStyle, background: "#1a1a1a" }}>
                    <option>2 hours</option>
                    <option selected>3 hours</option>
                    <option>4 hours</option>
                    <option>6 hours</option>
                    <option>8 hours</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Space size</label>
                  <select style={{ ...inputStyle, background: "#1a1a1a" }}>
                    <option>Small (1-2 rooms)</option>
                    <option>Medium (3-4 rooms)</option>
                    <option>Large (5+ rooms)</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={labelStyle}>Special instructions (optional)</label>
                <textarea
                  placeholder="e.g. Focus on kitchen and bathrooms, pet in the house..."
                  style={{ ...inputStyle, height: "100px", resize: "vertical" as const }}
                />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <button onClick={() => setStep(1)} style={{ padding: "15px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                ← Back
              </button>
              <button onClick={() => setStep(3)} style={{ padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                Find Cleaners →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — CHOOSE CLEANER */}
        {step === 3 && (
          <div>
            <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Step 3 of 4</p>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>Choose your cleaner</h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>Verified professionals near you.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              {cleaners.map((cleaner) => (
                <div
                  key={cleaner.id}
                  onClick={() => setSelectedCleaner(cleaner)}
                  style={{
                    border: `1.5px solid ${selectedCleaner?.id === cleaner.id ? "#FF3EA5" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "16px", padding: "20px 24px", cursor: "pointer",
                    background: selectedCleaner?.id === cleaner.id ? "rgba(255,62,165,0.05)" : "rgba(255,255,255,0.02)",
                    display: "flex", alignItems: "center", gap: "16px",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", flexShrink: 0 }}>
                    {cleaner.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <p style={{ fontWeight: 700, fontSize: "15px" }}>{cleaner.name}</p>
                      <span style={{ background: "rgba(255,62,165,0.15)", color: "#FF3EA5", fontSize: "11px", fontWeight: 600, padding: "2px 8px", borderRadius: "999px" }}>{cleaner.tag}</span>
                    </div>
                    <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "6px" }}>📍 {cleaner.location}</p>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {cleaner.services.map(s => (
                        <span key={s} style={{ background: "rgba(255,255,255,0.06)", color: "#9ca3af", fontSize: "11px", padding: "2px 8px", borderRadius: "999px" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>₦{cleaner.rate.toLocaleString()}</p>
                    <p style={{ color: "#6b7280", fontSize: "12px" }}>per hour</p>
                    <p style={{ color: "#fff", fontSize: "13px", marginTop: "4px" }}>⭐ {cleaner.rating} ({cleaner.reviews})</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <button onClick={() => setStep(2)} style={{ padding: "15px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                ← Back
              </button>
              <button
                onClick={() => selectedCleaner && setStep(4)}
                style={{ padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: selectedCleaner ? "#FF3EA5" : "rgba(255,255,255,0.1)", color: selectedCleaner ? "#fff" : "#6b7280", cursor: selectedCleaner ? "pointer" : "not-allowed", fontFamily: "Inter, Arial, sans-serif" }}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 — CONFIRM */}
        {step === 4 && selectedCleaner && (
          <div>
            <p style={{ color: "#FF3EA5", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Step 4 of 4</p>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>Confirm your booking</h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>Review your details before confirming.</p>

            {/* Cleaner summary */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "24px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "16px", flexShrink: 0 }}>
                {selectedCleaner.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "16px" }}>{selectedCleaner.name}</p>
                <p style={{ color: "#6b7280", fontSize: "13px" }}>📍 {selectedCleaner.location}</p>
                <p style={{ color: "#FF3EA5", fontSize: "13px", fontWeight: 600 }}>⭐ {selectedCleaner.rating} ({selectedCleaner.reviews} reviews)</p>
              </div>
            </div>

            {/* Booking details */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "24px", marginBottom: "20px" }}>
              <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "16px" }}>Booking Details</p>
              {[
                { label: "Service type", value: serviceType },
                { label: "Date & time", value: "Selected date at 9:00 AM" },
                { label: "Duration", value: `${hours} hours` },
                { label: "Location", value: "14 Adeola Odeku St, VI, Lagos" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: "#6b7280", fontSize: "14px" }}>{item.label}</span>
                  <span style={{ fontSize: "14px", fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Price breakdown */}
            <div style={{ background: "rgba(255,62,165,0.05)", border: "1px solid rgba(255,62,165,0.2)", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
              <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "16px" }}>Price Breakdown</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ color: "#6b7280", fontSize: "14px" }}>₦{selectedCleaner.rate.toLocaleString()} × {hours} hrs</span>
                <span style={{ fontSize: "14px" }}>₦{(selectedCleaner.rate * hours).toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ color: "#6b7280", fontSize: "14px" }}>Service fee (5%)</span>
                <span style={{ fontSize: "14px" }}>₦{Math.round(selectedCleaner.rate * hours * 0.05).toLocaleString()}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,62,165,0.2)", paddingTop: "16px" }}>
                <span style={{ fontWeight: 700, fontSize: "16px" }}>Total</span>
                <span style={{ fontWeight: 800, fontSize: "20px", color: "#FF3EA5" }}>₦{total.toLocaleString()}</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <button onClick={() => setStep(3)} style={{ padding: "15px", fontSize: "15px", fontWeight: 600, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                ← Back
              </button>
              <button style={{ padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                Confirm Booking ✓
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}