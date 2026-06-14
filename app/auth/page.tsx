"use client";

import Image from "next/image";
import { useState } from "react";

type Mode = "choose" | "choose-client-type" | "choose-cleaner-type" | "login" | "signup";
type UserType = "household" | "corporate" | "institution" | "event" | "individual-cleaner" | "cleaning-company" | null;

export default function Auth() {
  const [mode, setMode] = useState<Mode>("choose");
  const [userType, setUserType] = useState<UserType>(null);

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
    fontWeight: 500,
  };

  const getUserTypeLabel = () => {
    const labels: Record<string, string> = {
      "household": "🏠 Individual / Household",
      "corporate": "🏢 Corporate / Business",
      "institution": "🏥 Institution",
      "event": "🎉 Event Organiser",
      "individual-cleaner": "🧹 Individual Cleaner",
      "cleaning-company": "🏭 Cleaning Company",
    };
    return userType ? labels[userType] : "";
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0A0A0A", color: "#fff", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column" }}>

      {/* NAVBAR */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 48px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={40} height={40} style={{ borderRadius: "50%" }} />
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>Elyriq Nova</span>
        </a>
        {mode !== "choose" && (
          <button onClick={() => {
            if (mode === "signup") setMode(userType?.includes("cleaner") || userType === "cleaning-company" ? "choose-cleaner-type" : "choose-client-type");
            else if (mode === "choose-client-type" || mode === "choose-cleaner-type") setMode("choose");
            else setMode("choose");
          }} style={{ background: "none", border: "none", color: "#FF3EA5", cursor: "pointer", fontSize: "14px", fontWeight: 600 }}>
            ← Back
          </button>
        )}
      </nav>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 24px" }}>

        {/* STEP 1 — CHOOSE GOAL */}
        {mode === "choose" && (
          <div style={{ maxWidth: "680px", width: "100%", textAlign: "center" }}>
            <Image src="/elyriq-nova-logo.jpeg" alt="logo" width={64} height={64} style={{ borderRadius: "50%", marginBottom: "24px" }} />
            <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.02em" }}>
              Welcome to Elyriq Nova
            </h1>
            <p style={{ color: "#6b7280", fontSize: "16px", marginBottom: "48px" }}>
              What would you like to do?
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "36px" }}>
              <div
                onClick={() => setMode("choose-client-type")}
                style={{ border: "1.5px solid rgba(255,62,165,0.3)", borderRadius: "20px", padding: "40px 28px", cursor: "pointer", textAlign: "left", background: "rgba(255,62,165,0.03)", transition: "all 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#FF3EA5")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,62,165,0.3)")}
              >
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "20px" }}>🏢</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>I Need Cleaning Services</h3>
                <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7 }}>For homes, businesses, institutions, and events.</p>
              </div>
              <div
                onClick={() => setMode("choose-cleaner-type")}
                style={{ border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "40px 28px", cursor: "pointer", textAlign: "left", background: "rgba(255,255,255,0.02)", transition: "all 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#FF3EA5")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(255,62,165,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "20px" }}>🧹</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>I Offer Cleaning Services</h3>
                <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7 }}>For individual cleaners and cleaning companies.</p>
              </div>
            </div>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              Already have an account?{" "}
              <button onClick={() => setMode("login")} style={{ background: "none", border: "none", color: "#FF3EA5", cursor: "pointer", fontSize: "14px", fontWeight: 600 }}>
                Sign in
              </button>
            </p>
          </div>
        )}

        {/* STEP 2A — CHOOSE CLIENT TYPE */}
        {mode === "choose-client-type" && (
          <div style={{ maxWidth: "680px", width: "100%", textAlign: "center" }}>
            <h1 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.02em" }}>
              Who are you signing up as?
            </h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>
              Select the option that best describes you.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
              {[
                { type: "household", icon: "🏠", title: "Individual / Household", desc: "I need cleaning for my home or apartment." },
                { type: "corporate", icon: "🏢", title: "Corporate / Business", desc: "I need cleaning for my office or company." },
                { type: "institution", icon: "🏥", title: "Institution", desc: "Hospital, school, or government facility." },
                { type: "event", icon: "🎉", title: "Event Organiser", desc: "I need cleaning for an event or venue." },
              ].map((item) => (
                <div
                  key={item.type}
                  onClick={() => { setUserType(item.type as UserType); setMode("signup"); }}
                  style={{ border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px", cursor: "pointer", textAlign: "left", background: "rgba(255,255,255,0.02)", transition: "all 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#FF3EA5")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <div style={{ fontSize: "28px", marginBottom: "12px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              Already have an account?{" "}
              <button onClick={() => setMode("login")} style={{ background: "none", border: "none", color: "#FF3EA5", cursor: "pointer", fontSize: "14px", fontWeight: 600 }}>
                Sign in
              </button>
            </p>
          </div>
        )}

        {/* STEP 2B — CHOOSE CLEANER TYPE */}
        {mode === "choose-cleaner-type" && (
          <div style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>
            <h1 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.02em" }}>
              How are you joining?
            </h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>
              Select the option that best describes you.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
              {[
                { type: "individual-cleaner", icon: "🧹", title: "Individual Cleaner", desc: "I am a professional cleaner looking for clients." },
                { type: "cleaning-company", icon: "🏭", title: "Cleaning Company", desc: "We are a cleaning business looking for corporate contracts." },
              ].map((item) => (
                <div
                  key={item.type}
                  onClick={() => { setUserType(item.type as UserType); setMode("signup"); }}
                  style={{ border: "1.5px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "36px 28px", cursor: "pointer", textAlign: "left", background: "rgba(255,255,255,0.02)", transition: "all 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#FF3EA5")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  <div style={{ fontSize: "32px", marginBottom: "14px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              Already have an account?{" "}
              <button onClick={() => setMode("login")} style={{ background: "none", border: "none", color: "#FF3EA5", cursor: "pointer", fontSize: "14px", fontWeight: 600 }}>
                Sign in
              </button>
            </p>
          </div>
        )}

        {/* STEP 3 — SIGN UP FORM */}
        {mode === "signup" && (
          <div style={{ maxWidth: "480px", width: "100%" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,62,165,0.1)", border: "1px solid rgba(255,62,165,0.2)", borderRadius: "999px", padding: "6px 14px", marginBottom: "28px" }}>
              <span style={{ color: "#FF3EA5", fontSize: "13px", fontWeight: 600 }}>{getUserTypeLabel()}</span>
            </div>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>
              {userType === "individual-cleaner" || userType === "cleaning-company" ? "Join our network" : "Create your account"}
            </h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "36px" }}>
              {userType === "individual-cleaner" || userType === "cleaning-company" ? "Start earning with Elyriq Nova today." : "Get started in minutes."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>First name</label>
                  <input type="text" placeholder="Ada" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Last name</label>
                  <input type="text" placeholder="Okafor" style={inputStyle} />
                </div>
              </div>
              {userType === "cleaning-company" && (
                <div>
                  <label style={labelStyle}>Company name</label>
                  <input type="text" placeholder="e.g. SparkClean Ltd" style={inputStyle} />
                </div>
              )}
              {userType === "corporate" && (
                <div>
                  <label style={labelStyle}>Company name</label>
                  <input type="text" placeholder="e.g. First Bank Nigeria" style={inputStyle} />
                </div>
              )}
              {userType === "institution" && (
                <div>
                  <label style={labelStyle}>Institution name</label>
                  <input type="text" placeholder="e.g. Lagos University Teaching Hospital" style={inputStyle} />
                </div>
              )}
              <div>
                <label style={labelStyle}>Email address</label>
                <input type="email" placeholder="you@example.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone number</label>
                <input type="tel" placeholder="+234 800 000 0000" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>City</label>
                <input type="text" placeholder="e.g. Lagos, Abuja, Port Harcourt" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Password</label>
                <input type="password" placeholder="••••••••" style={inputStyle} />
              </div>
            </div>
            <button style={{ width: "100%", padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer", marginBottom: "20px", fontFamily: "Inter, Arial, sans-serif" }}>
              {userType === "individual-cleaner" || userType === "cleaning-company" ? "Join Our Network →" : "Create Account →"}
            </button>
            <p style={{ textAlign: "center", color: "#6b7280", fontSize: "13px" }}>
              Already have an account?{" "}
              <button onClick={() => setMode("login")} style={{ background: "none", border: "none", color: "#FF3EA5", cursor: "pointer", fontSize: "13px", fontWeight: 600 }}>
                Sign in
              </button>
            </p>
          </div>
        )}

        {/* LOGIN */}
        {mode === "login" && (
          <div style={{ maxWidth: "440px", width: "100%" }}>
            <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.02em" }}>Sign in</h1>
            <p style={{ color: "#6b7280", fontSize: "15px", marginBottom: "40px" }}>Welcome back to Elyriq Nova.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
              <div>
                <label style={labelStyle}>Email address</label>
                <input type="email" placeholder="you@example.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Password</label>
                <input type="password" placeholder="••••••••" style={inputStyle} />
              </div>
            </div>
            <div style={{ textAlign: "right", marginBottom: "28px" }}>
              <a href="#" style={{ color: "#FF3EA5", fontSize: "13px", textDecoration: "none", fontWeight: 500 }}>Forgot password?</a>
            </div>
            <button style={{ width: "100%", padding: "15px", fontSize: "15px", fontWeight: 700, borderRadius: "10px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer", marginBottom: "24px", fontFamily: "Inter, Arial, sans-serif" }}>
              Sign In
            </button>
            <p style={{ textAlign: "center", color: "#6b7280", fontSize: "14px" }}>
              Don&apos;t have an account?{" "}
              <button onClick={() => setMode("choose")} style={{ background: "none", border: "none", color: "#FF3EA5", cursor: "pointer", fontSize: "14px", fontWeight: 600 }}>
                Get started
              </button>
            </p>
          </div>
        )}

      </div>
    </main>
  );
}