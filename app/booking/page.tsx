"use client";

import { useState } from "react";
import Image from "next/image";

const CORPORATE_SERVICES = [
  { id: "corp-std", title: "Daily Janitorial Fleet", icon: "🏢", desc: "Structured daily cleaning for banks, insurance firms, and corporate offices." },
  { id: "corp-deep", title: "Industrial Deep Clean", icon: "✨", desc: "Heavy-duty post-renovation or quarterly sanitization for facilities." },
  { id: "corp-event", title: "Event Post-Clean Handover", icon: "🎪", desc: "Rapid venue restoration during and after large summits or corporate events." },
];

const HOUSEHOLD_SERVICES = [
  { id: "home-std", title: "Standard House Keep", icon: "🏡", desc: "Mopping, dusting, bed-making, and general single-family home upkeep." },
  { id: "home-deep", title: "Detailed Deep Clean", icon: "🧼", desc: "Inside cabinets, appliances, detailing tiles, and intensive stain extraction." },
];

export default function BookingPage() {
  const [track, setTrack] = useState<"corporate" | "household" | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    serviceId: "",
    frequency: "one-time",
    spaceSize: 100, // For corporate (sqm)
    bedrooms: 1,    // For household
    bathrooms: 1,   // For household
    location: "",
    date: "",
    specialInstructions: ""
  });

  const selectTrack = (chosenTrack: "corporate" | "household") => {
    setTrack(chosenTrack);
    setFormData({
      ...formData,
      serviceId: "", // reset specific service selection
      frequency: chosenTrack === "corporate" ? "daily" : "one-time"
    });
    setStep(2);
  };

  const calculateEstimate = () => {
    if (track === "corporate") {
      let ratePerSqm = 400;
      if (formData.serviceId === "corp-deep") ratePerSqm = 750;
      if (formData.serviceId === "corp-event") ratePerSqm = 900;
      
      let base = formData.spaceSize * ratePerSqm;
      if (formData.frequency === "daily") base *= 0.80; // Long-term volume discount
      return Math.round(base);
    } else {
      // Household flat calculations
      let basePrice = 25000; // Base flat entry fee
      if (formData.serviceId === "home-deep") basePrice = 45000;
      
      const extraRooms = (formData.bedrooms - 1) * 7000 + (formData.bathrooms - 1) * 5000;
      return basePrice + extraRooms;
    }
  };

  const handleSubmitBooking = () => {
    setStep(4); // Advance to matching screen
  };

  return (
    <main style={{ minHeight: "100vh", background: "#F8F9FA", color: "#0D1B2A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* ── HEADER ── */}
      <header style={{ background: "#0D1B2A", height: "64px", display: "flex", alignItems: "center", padding: "0 20px" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/elyriq-nova-logo.jpeg" alt="Logo" width={34} height={34} style={{ borderRadius: "50%" }} />
          <span style={{ fontWeight: 700, color: "#fff", fontSize: "15px", letterSpacing: "-0.01em" }}>Elyriq Nova Operations</span>
        </a>
      </header>

      {/* ── STEP TRACKER ── */}
      {track && (
        <div style={{ maxWidth: "600px", margin: "24px auto 0", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {[1, 2, 3].map((s) => (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: s < 3 ? 1 : "none" }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%", 
                background: step >= s ? "#FF3EA5" : "#E5E7EB", 
                color: step >= s ? "#fff" : "#9CA3AF",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700
              }}>
                {s}
              </div>
              {s < 3 && <div style={{ height: "2px", flex: 1, margin: "0 12px", background: step > s ? "#FF3EA5" : "#E5E7EB" }} />}
            </div>
          ))}
        </div>
      )}

      {/* ── MAIN INTAKE WORKSPACE ── */}
      <section style={{ maxWidth: "620px", margin: "20px auto", padding: "0 16px" }}>
        <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
          
          {/* STEP 1: SEGREGATION ARCHITECTURE (GATEWAY) */}
          {step === 1 && (
            <div>
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <span style={{ fontSize: "11px", color: "#FF3EA5", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Deployment Classification</span>
                <h2 style={{ fontSize: "22px", fontWeight: 800, marginTop: "6px", color: "#0D1B2A" }}>What environment are we cleaning?</h2>
                <p style={{ color: "#6B7280", fontSize: "14px", marginTop: "4px" }}>Select a track to initialize specific compliance parameters.</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div 
                  onClick={() => selectTrack("corporate")}
                  style={{
                    border: "1px solid #E5E7EB", borderRadius: "12px", padding: "20px", cursor: "pointer", transition: "all 0.2s",
                    display: "flex", alignItems: "center", gap: "20px"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#FF3EA5")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#E5E7EB")}
                >
                  <div style={{ fontSize: "32px", background: "#F3F4F6", width: "60px", height: "60px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>🏢</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B2A", marginBottom: "4px" }}>Corporate & Enterprise Space</h3>
                    <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.4 }}>B2B deployment for banks, offices, and events. Managed corporate vendors with rigid SLA adherence.</p>
                  </div>
                </div>

                <div 
                  onClick={() => selectTrack("household")}
                  style={{
                    border: "1px solid #E5E7EB", borderRadius: "12px", padding: "20px", cursor: "pointer", transition: "all 0.2s",
                    display: "flex", alignItems: "center", gap: "20px"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#FF3EA5")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#E5E7EB")}
                >
                  <div style={{ fontSize: "32px", background: "#F3F4F6", width: "60px", height: "60px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>🏡</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B2A", marginBottom: "4px" }}>Private Household (On-Demand)</h3>
                    <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.4 }}>B2C Uber-style dispatch. Instant connection to single verified, background-vetted independent cleaners.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: TAILORED FIELDS & CAPACITIES */}
          {step === 2 && track && (
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "4px" }}>
                {track === "corporate" ? "Configure Enterprise Brief" : "Household Parameters"}
              </h2>
              <p style={{ color: "#6B7280", fontSize: "13px", marginBottom: "20px" }}>Define requirements to structure matching constraints.</p>

              {/* SERVICE SCOPE SELECTOR */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ fontSize: "13px", fontWeight: 700, display: "block", marginBottom: "8px" }}>Select Service Scope</label>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {(track === "corporate" ? CORPORATE_SERVICES : HOUSEHOLD_SERVICES).map(service => (
                    <div 
                      key={service.id}
                      onClick={() => setFormData({ ...formData, serviceId: service.id })}
                      style={{
                        border: formData.serviceId === service.id ? "2px solid #FF3EA5" : "1px solid #E5E7EB",
                        background: formData.serviceId === service.id ? "rgba(255,62,165,0.01)" : "transparent",
                        borderRadius: "10px", padding: "14px", cursor: "pointer", display: "flex", gap: "12px", alignItems: "center"
                      }}
                    >
                      <span style={{ fontSize: "20px" }}>{service.icon}</span>
                      <div>
                        <h4 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "2px" }}>{service.title}</h4>
                        <p style={{ fontSize: "12px", color: "#6B7280" }}>{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DYNAMIC TRACK SWITCHING LAYOUT METRICS */}
              {track === "corporate" ? (
                <>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, display: "block", marginBottom: "6px" }}>Company / Corporate Entity Name</label>
                    <input 
                      type="text" placeholder="e.g. Access Bank PLC"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      style={{ width: "100%", padding: "12px", border: "1px solid #E5E7EB", borderRadius: "8px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div style={{ marginBottom: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <label style={{ fontSize: "13px", fontWeight: 700 }}>Approximate Total Area Size</label>
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#FF3EA5" }}>{formData.spaceSize} sqm</span>
                    </div>
                    <input 
                      type="range" min="30" max="3000" step="20"
                      value={formData.spaceSize}
                      onChange={e => setFormData({ ...formData, spaceSize: parseInt(e.target.value) })}
                      style={{ width: "100%", accentColor: "#FF3EA5" }}
                    />
                  </div>
                </>
              ) : (
                <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, display: "block", marginBottom: "6px" }}>Bedrooms</label>
                    <input 
                      type="number" min="1" max="10" value={formData.bedrooms}
                      onChange={e => setFormData({ ...formData, bedrooms: parseInt(e.target.value) || 1 })}
                      style={{ width: "100%", padding: "12px", border: "1px solid #E5E7EB", borderRadius: "8px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, display: "block", marginBottom: "6px" }}>Bathrooms</label>
                    <input 
                      type="number" min="1" max="10" value={formData.bathrooms}
                      onChange={e => setFormData({ ...formData, bathrooms: parseInt(e.target.value) || 1 })}
                      style={{ width: "100%", padding: "12px", border: "1px solid #E5E7EB", borderRadius: "8px", boxSizing: "border-box" }}
                    />
                  </div>
                </div>
              )}

              {/* METRIC ESCROW ESTIMATE VALUE */}
              {formData.serviceId && (
                <div style={{ background: "#F8F9FA", border: "1px dashed #E5E7EB", borderRadius: "10px", padding: "16px", marginBottom: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: "11px", color: "#6B7280", fontWeight: 600 }}>{track === "corporate" ? "PROJECTED BASIS COST" : "ESCROW QUOTE"}</p>
                    <p style={{ fontSize: "20px", fontWeight: 800, color: "#0D1B2A", marginTop: "2px" }}>₦{calculateEstimate().toLocaleString()}</p>
                  </div>
                  <span style={{ fontSize: "10px", color: "#FF3EA5", background: "rgba(255,62,165,0.08)", padding: "4px 8px", borderRadius: "4px", fontWeight: 600 }}>
                    {track === "corporate" ? "B2B SLA Track" : "Secured via Escrow"}
                  </span>
                </div>
              )}

              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => { setStep(1); setTrack(null); }} style={{ flex: 1, padding: "12px", background: "transparent", border: "1px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Back</button>
                <button 
                  disabled={!formData.serviceId || (track === "corporate" && !formData.companyName)}
                  onClick={() => setStep(3)}
                  style={{ flex: 2, padding: "12px", background: (formData.serviceId && (track === "household" || formData.companyName)) ? "#0D1B2A" : "#9CA3AF", color: "#fff", fontWeight: 700, border: "none", borderRadius: "8px", fontSize: "14px", cursor: "pointer" }}
                >
                  Proceed to Schedule →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SCHEDULING LOGISTICS & IDENTITY DISCLAIMER */}
          {step === 3 && (
            <div>
              <h2 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "4px" }}>Deployment Logistics</h2>
              <p style={{ color: "#6B7280", fontSize: "13px", marginBottom: "20px" }}>Where and when should operations activate?</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 700, display: "block", marginBottom: "6px" }}>Site Location Address</label>
                  <input 
                    type="text" placeholder="e.g. 14 Broad Street, Marina, Lagos"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    style={{ width: "100%", padding: "12px", border: "1px solid #E5E7EB", borderRadius: "8px", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "13px", fontWeight: 700, display: "block", marginBottom: "6px" }}>Activation Target Date</label>
                  <input 
                    type="date" value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    style={{ width: "100%", padding: "12px", border: "1px solid #E5E7EB", borderRadius: "8px", boxSizing: "border-box" }}
                  />
                </div>
              </div>

              {/* SAFETY VALUE INLINE TRUST BUILDER */}
              {track === "household" && (
                <div style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: "8px", padding: "14px", marginBottom: "24px" }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#1e40af", display: "flex", alignItems: "center", gap: "6px" }}>🛡️ Secure Token Verification Enabled</p>
                  <p style={{ fontSize: "12px", color: "#1e3a8a", marginTop: "4px", lineHeight: 1.4 }}>
                    To beat traditional marketplace safety risks, you will receive a secure entry code on your dashboard. Your assigned cleaner cannot clock in or begin operations until you physically provide them with this token.
                  </p>
                </div>
              )}

              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, padding: "12px", background: "transparent", border: "1px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Back</button>
                <button 
                  disabled={!formData.location || !formData.date}
                  onClick={handleSubmitBooking}
                  style={{ flex: 2, padding: "12px", background: (formData.location && formData.date) ? "#FF3EA5" : "#9CA3AF", color: "#fff", fontWeight: 700, border: "none", borderRadius: "8px", fontSize: "14px", cursor: "pointer" }}
                >
                  Initialize Matching Engine
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: INTUITIVE DISPATCH MATCHING ENGINE SCREEN */}
          {step === 4 && (
            <div style={{ textAlign: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid #22c55e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", margin: "0 auto 16px" }}>✓</div>
              <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "6px" }}>Requirements Dispatched</h2>
              <p style={{ color: "#6B7280", fontSize: "14px", maxWidth: "420px", margin: "0 auto 24px", lineHeight: 1.5 }}>
                {track === "corporate" 
                  ? "Corporate service profiles have been captured. Outlining formal custom SLA documentation requirements for registered vendor matching."
                  : "Household parameters are locked in escrow. Matching closest background-vetted, real-time cleaner profiles with active identity badges nearby."
                }
              </p>

              <div style={{ background: "#F8F9FA", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "16px", textAlign: "left", fontSize: "13px", display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
                <div><span style={{ color: "#6B7280" }}>Deployment: </span><strong>{track === "corporate" ? formData.companyName : "Private Residence"}</strong></div>
                <div><span style={{ color: "#6B7280" }}>Location Axis: </span><strong>{formData.location}</strong></div>
                <div><span style={{ color: "#6B7280" }}>Target Window: </span><strong>{formData.date}</strong></div>
                <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "8px", display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: 700 }}>
                  <span>Outlay Amount:</span>
                  <span style={{ color: "#FF3EA5" }}>₦{calculateEstimate().toLocaleString()}</span>
                </div>
              </div>

              <a href="/dashboard" style={{ display: "block", textAlign: "center", padding: "14px", background: "#0D1B2A", color: "#fff", fontWeight: 700, borderRadius: "8px", textDecoration: "none", fontSize: "14px" }}>
                Enter Control Center Dashboard
              </a>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}