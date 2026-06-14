"use client";

import Image from "next/image";
import { useState } from "react";

type Tab = "overview" | "profile" | "jobs" | "earnings";

export default function Dashboard() {
  const [tab, setTab] = useState<Tab>("overview");
  const [rating] = useState(4.9);

  const stats = [
    { label: "Earnings this month", value: "₦87,500", delta: "+18%", up: true },
    { label: "Jobs completed", value: "34", delta: "+5 this month", up: true },
    { label: "Average rating", value: "4.9 ⭐", delta: "87 reviews", up: true },
    { label: "Response rate", value: "98%", delta: "Excellent", up: true },
  ];

  const upcomingJobs = [
    { name: "Kemi Adeyemi", type: "Home cleaning", date: "Today", time: "9:00am", hrs: 3, amount: 8250, status: "Confirmed" },
    { name: "Bayo Ojo", type: "Deep cleaning", date: "Tomorrow", time: "11:00am", hrs: 4, amount: 11000, status: "Confirmed" },
    { name: "Tolu Nwosu", type: "Laundry", date: "Friday", time: "2:00pm", hrs: 2, amount: 5500, status: "Pending" },
    { name: "Yetunde Ige", type: "Move-in clean", date: "Saturday", time: "10:00am", hrs: 5, amount: 13750, status: "Pending" },
  ];

  const completedJobs = [
    { name: "Chinedu Adebayo", type: "Office cleaning", date: "Mon", amount: 6000, rating: 5 },
    { name: "Amaka Obi", type: "Home cleaning", date: "Last week", amount: 7500, rating: 5 },
    { name: "Sola Martins", type: "Deep cleaning", date: "Last week", amount: 10000, rating: 4 },
  ];

  const earnings = [
    { week: "Week 1", amount: 14000 },
    { week: "Week 2", amount: 18500 },
    { week: "Week 3", amount: 12000 },
    { week: "Week 4", amount: 22000 },
    { week: "Week 5", amount: 19500 },
    { week: "Week 6", amount: 24750 },
  ];

  const maxEarning = Math.max(...earnings.map(e => e.amount));

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
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

  return (
    <main style={{ minHeight: "100vh", background: "#0A0A0A", color: "#fff", fontFamily: "Inter, Arial, sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#0A0A0A", position: "sticky", top: 0, zIndex: 50 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={40} height={40} style={{ borderRadius: "50%" }} />
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>Elyriq Nova</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
          <span style={{ fontSize: "14px", color: "#9ca3af" }}>Ada Okafor</span>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px" }}>AO</div>
        </div>
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>

        {/* PROFILE HEADER */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px 32px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "22px", flexShrink: 0 }}>AO</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <h1 style={{ fontSize: "20px", fontWeight: 800 }}>Ada Okafor</h1>
              <span style={{ background: "rgba(255,62,165,0.15)", color: "#FF3EA5", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px" }}>✓ Verified</span>
            </div>
            <p style={{ color: "#6b7280", fontSize: "14px" }}>Professional Cleaner • Victoria Island, Lagos</p>
            <div style={{ display: "flex", gap: "4px", marginTop: "6px" }}>
              {[1,2,3,4,5].map(s => (
                <span key={s} style={{ color: s <= Math.floor(rating) ? "#FF3EA5" : "#374151", fontSize: "14px" }}>★</span>
              ))}
              <span style={{ color: "#6b7280", fontSize: "13px", marginLeft: "4px" }}>{rating} (87 reviews)</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={{ padding: "10px 20px", fontSize: "13px", fontWeight: 600, borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer" }}>
              Edit Profile
            </button>
            <button style={{ padding: "10px 20px", fontSize: "13px", fontWeight: 600, borderRadius: "8px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer" }}>
              View Public Profile
            </button>
          </div>
        </div>

        {/* TABS */}
        <div style={{ display: "flex", gap: "4px", marginBottom: "32px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "4px", width: "fit-content" }}>
          {(["overview", "profile", "jobs", "earnings"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 20px", fontSize: "14px", fontWeight: 600,
                borderRadius: "8px", border: "none", cursor: "pointer",
                background: tab === t ? "#FF3EA5" : "transparent",
                color: tab === t ? "#fff" : "#6b7280",
                textTransform: "capitalize",
                fontFamily: "Inter, Arial, sans-serif",
                transition: "all 0.2s",
              }}
            >
              {t === "overview" ? "Overview" : t === "profile" ? "My Profile" : t === "jobs" ? "Jobs" : "Earnings"}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {tab === "overview" && (
          <div>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "32px" }}>
              {stats.map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "20px 24px" }}>
                  <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontSize: "24px", fontWeight: 800, marginBottom: "4px" }}>{s.value}</p>
                  <p style={{ color: s.up ? "#22c55e" : "#ef4444", fontSize: "12px" }}>{s.delta}</p>
                </div>
              ))}
            </div>

            {/* Upcoming Jobs */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px" }}>Upcoming Jobs</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {upcomingJobs.map((job, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 0", borderBottom: i < upcomingJobs.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,62,165,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "13px", color: "#FF3EA5", flexShrink: 0 }}>
                      {job.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 600, fontSize: "14px", marginBottom: "2px" }}>{job.name}</p>
                      <p style={{ color: "#6b7280", fontSize: "13px" }}>{job.type} • {job.date} at {job.time} • {job.hrs} hrs</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontWeight: 700, fontSize: "14px", color: "#FF3EA5", marginBottom: "4px" }}>₦{job.amount.toLocaleString()}</p>
                      <span style={{
                        fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px",
                        background: job.status === "Confirmed" ? "rgba(34,197,94,0.15)" : "rgba(234,179,8,0.15)",
                        color: job.status === "Confirmed" ? "#22c55e" : "#eab308",
                      }}>
                        {job.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROFILE TAB */}
        {tab === "profile" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "28px" }}>
              <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Personal Information</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={labelStyle}>First name</label>
                    <input type="text" defaultValue="Ada" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last name</label>
                    <input type="text" defaultValue="Okafor" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" defaultValue="ada@example.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" defaultValue="+234 800 000 0000" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>City</label>
                  <input type="text" defaultValue="Victoria Island, Lagos" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>About me</label>
                  <textarea defaultValue="Professional cleaner with 3 years experience in home and office cleaning." style={{ ...inputStyle, height: "90px", resize: "vertical" as const }} />
                </div>
                <button style={{ padding: "12px", fontSize: "14px", fontWeight: 700, borderRadius: "10px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif" }}>
                  Save Changes
                </button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "28px" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px" }}>Services & Rate</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div>
                    <label style={labelStyle}>Hourly rate</label>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#6b7280" }}>₦</span>
                      <input type="number" defaultValue="2500" style={{ ...inputStyle, width: "120px" }} />
                      <span style={{ color: "#6b7280", fontSize: "13px" }}>per hour</span>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Services offered</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {["Home cleaning", "Deep cleaning", "Office", "Laundry", "Move-in/out"].map(s => (
                        <span key={s} style={{ background: "rgba(255,62,165,0.15)", color: "#FF3EA5", fontSize: "12px", fontWeight: 600, padding: "5px 12px", borderRadius: "999px", cursor: "pointer" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Experience</label>
                    <select style={{ ...inputStyle, background: "#1a1a1a" }}>
                      <option>1-2 years</option>
                      <option selected>3-5 years</option>
                      <option>5+ years</option>
                    </select>
                  </div>
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "28px" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px" }}>Availability</h2>
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} style={{ width: "40px", height: "40px", borderRadius: "8px", border: `1px solid ${["Mon","Tue","Wed","Thu","Fri"].includes(day) ? "#FF3EA5" : "rgba(255,255,255,0.1)"}`, background: ["Mon","Tue","Wed","Thu","Fri"].includes(day) ? "rgba(255,62,165,0.15)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 600, color: ["Mon","Tue","Wed","Thu","Fri"].includes(day) ? "#FF3EA5" : "#6b7280", cursor: "pointer" }}>
                      {day}
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={labelStyle}>From</label>
                    <input type="time" defaultValue="08:00" style={{ ...inputStyle, colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label style={labelStyle}>To</label>
                    <input type="time" defaultValue="18:00" style={{ ...inputStyle, colorScheme: "dark" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* JOBS TAB */}
        {tab === "jobs" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px" }}>
              <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px" }}>Upcoming Jobs</h2>
              {upcomingJobs.map((job, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderBottom: i < upcomingJobs.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,62,165,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "13px", color: "#FF3EA5", flexShrink: 0 }}>
                    {job.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>{job.name}</p>
                    <p style={{ color: "#6b7280", fontSize: "13px" }}>{job.type} • {job.date} at {job.time} • {job.hrs} hrs</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontWeight: 700, color: "#FF3EA5", marginBottom: "6px" }}>₦{job.amount.toLocaleString()}</p>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button style={{ padding: "6px 12px", fontSize: "12px", fontWeight: 600, borderRadius: "6px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer" }}>Message</button>
                      <button style={{ padding: "6px 12px", fontSize: "12px", fontWeight: 600, borderRadius: "6px", border: "none", background: "#FF3EA5", color: "#fff", cursor: "pointer" }}>Accept</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px" }}>
              <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "20px" }}>Completed Jobs</h2>
              {completedJobs.map((job, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 0", borderBottom: i < completedJobs.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "13px", color: "#9ca3af", flexShrink: 0 }}>
                    {job.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>{job.name}</p>
                    <p style={{ color: "#6b7280", fontSize: "13px" }}>{job.type} • {job.date}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontWeight: 700, marginBottom: "4px" }}>₦{job.amount.toLocaleString()}</p>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[1,2,3,4,5].map(s => (
                        <span key={s} style={{ color: s <= job.rating ? "#FF3EA5" : "#374151", fontSize: "13px" }}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EARNINGS TAB */}
        {tab === "earnings" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }}>
              {[
                { label: "Total earned (all time)", value: "₦642,000", sub: "248 jobs" },
                { label: "This month", value: "₦87,500", sub: "+18% vs last month" },
                { label: "Pending payout", value: "₦24,750", sub: "Pays out Friday" },
              ].map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", padding: "24px" }}>
                  <p style={{ color: "#6b7280", fontSize: "12px", marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontSize: "28px", fontWeight: 800, color: "#FF3EA5", marginBottom: "4px" }}>{s.value}</p>
                  <p style={{ color: "#22c55e", fontSize: "12px" }}>{s.sub}</p>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "28px" }}>
              <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Weekly Earnings</h2>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "200px" }}>
                {earnings.map((e) => (
                  <div key={e.week} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", height: "100%" }}>
                    <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                      <div style={{ width: "100%", background: "#FF3EA5", borderRadius: "6px 6px 0 0", height: `${(e.amount / maxEarning) * 100}%`, minHeight: "8px", opacity: 0.85 }} />
                    </div>
                    <p style={{ fontSize: "11px", color: "#6b7280" }}>{e.week}</p>
                    <p style={{ fontSize: "11px", color: "#FF3EA5", fontWeight: 600 }}>₦{Math.round(e.amount / 1000)}k</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}