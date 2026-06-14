"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type Message = {
  id: number;
  from: "me" | "them";
  text: string;
  time: string;
};

type Conversation = {
  id: number;
  name: string;
  initials: string;
  role: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  messages: Message[];
};

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Ada Okafor",
    initials: "AO",
    role: "Professional Cleaner",
    lastMessage: "I will be there by 9am!",
    time: "9:14am",
    unread: 0,
    online: true,
    messages: [
      { id: 1, from: "them", text: "Hello! I have confirmed your booking for today at 9am.", time: "8:50am" },
      { id: 2, from: "me", text: "Great! The address is 14 Adeola Odeku, VI. Gate code is 1234.", time: "8:52am" },
      { id: 3, from: "them", text: "Got it, thank you! I will focus on the kitchen and bathrooms as requested.", time: "8:55am" },
      { id: 4, from: "me", text: "Perfect. There is a mop and vacuum in the store room.", time: "9:00am" },
      { id: 5, from: "them", text: "I will be there by 9am!", time: "9:14am" },
    ],
  },
  {
    id: 2,
    name: "SparkClean Ltd",
    initials: "SC",
    role: "Cleaning Company",
    lastMessage: "We have reviewed your enquiry.",
    time: "Yesterday",
    unread: 2,
    online: true,
    messages: [
      { id: 1, from: "them", text: "Hello! Thank you for your corporate enquiry. We have reviewed your requirements.", time: "Yesterday" },
      { id: 2, from: "them", text: "We can start on your preferred date. Our team of 10 professionals will handle your facility.", time: "Yesterday" },
    ],
  },
  {
    id: 3,
    name: "Chidi Eze",
    initials: "CE",
    role: "Professional Cleaner",
    lastMessage: "See you tomorrow at 10.",
    time: "Monday",
    unread: 0,
    online: false,
    messages: [
      { id: 1, from: "them", text: "Thanks for booking! Looking forward to it.", time: "Monday" },
      { id: 2, from: "me", text: "See you tomorrow at 10.", time: "Monday" },
    ],
  },
  {
    id: 4,
    name: "Fatima Bello",
    initials: "FB",
    role: "Professional Cleaner",
    lastMessage: "Do you have cleaning supplies?",
    time: "Sunday",
    unread: 1,
    online: false,
    messages: [
      { id: 1, from: "them", text: "Hi! Do you have cleaning supplies or should I bring my own?", time: "Sunday" },
    ],
  },
];

const quickReplies = [
  "On my way!",
  "Running 10 mins late",
  "Job completed ✓",
  "Can we reschedule?",
];

export default function Messages() {
  const [active, setActive] = useState(conversations[0]);
  const [convos, setConvos] = useState(conversations);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [active.messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const now = new Date();
    const time = now.getHours() + ":" + String(now.getMinutes()).padStart(2, "0");
    const newMsg: Message = { id: Date.now(), from: "me", text, time };

    const updated = convos.map(c =>
      c.id === active.id
        ? { ...c, messages: [...c.messages, newMsg], lastMessage: text, time }
        : c
    );
    setConvos(updated);
    setActive({ ...active, messages: [...active.messages, newMsg], lastMessage: text, time });
    setInput("");

    // Auto reply after 1.2s
    setTimeout(() => {
      const replies = ["Got it!", "Sure, no problem.", "Understood, thank you!", "I will take care of that.", "On my way!"];
      const reply: Message = { id: Date.now() + 1, from: "them", text: replies[Math.floor(Math.random() * replies.length)], time };
      const withReply = updated.map(c =>
        c.id === active.id
          ? { ...c, messages: [...c.messages, newMsg, reply], lastMessage: reply.text, time }
          : c
      );
      setConvos(withReply);
      setActive(prev => ({ ...prev, messages: [...prev.messages, reply] }));
    }, 1200);
  };

  const filtered = convos.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ height: "100vh", background: "#0A0A0A", color: "#fff", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column" }}>

      {/* NAVBAR */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image src="/elyriq-nova-logo.jpeg" alt="Elyriq Nova" width={40} height={40} style={{ borderRadius: "50%" }} />
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#FF3EA5" }}>Elyriq Nova</span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="/dashboard" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none" }}>Dashboard</a>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "14px" }}>AO</div>
        </div>
      </nav>

      {/* CHAT SHELL */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "320px 1fr", overflow: "hidden" }}>

        {/* SIDEBAR */}
        <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Sidebar header */}
          <div style={{ padding: "20px 20px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>Messages</h2>
            <input
              type="text"
              placeholder="Search conversations..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: "13px", outline: "none", fontFamily: "Inter, Arial, sans-serif", boxSizing: "border-box" }}
            />
          </div>

          {/* Conversation list */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {filtered.map((convo) => (
              <div
                key={convo.id}
                onClick={() => setActive(convo)}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "14px 20px", cursor: "pointer",
                  background: active.id === convo.id ? "rgba(255,62,165,0.08)" : "transparent",
                  borderLeft: active.id === convo.id ? "2px solid #FF3EA5" : "2px solid transparent",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "15px" }}>
                    {convo.initials}
                  </div>
                  {convo.online && (
                    <div style={{ position: "absolute", bottom: "1px", right: "1px", width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e", border: "2px solid #0A0A0A" }} />
                  )}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                    <p style={{ fontWeight: 600, fontSize: "14px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{convo.name}</p>
                    <span style={{ fontSize: "11px", color: "#6b7280", flexShrink: 0, marginLeft: "8px" }}>{convo.time}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ fontSize: "13px", color: "#6b7280", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "160px" }}>{convo.lastMessage}</p>
                    {convo.unread > 0 && (
                      <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, flexShrink: 0 }}>
                        {convo.unread}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CHAT AREA */}
        <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* Chat header */}
          <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "14px", flexShrink: 0 }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "15px" }}>
                {active.initials}
              </div>
              {active.online && (
                <div style={{ position: "absolute", bottom: "1px", right: "1px", width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e", border: "2px solid #0A0A0A" }} />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, fontSize: "15px" }}>{active.name}</p>
              <p style={{ fontSize: "12px", color: active.online ? "#22c55e" : "#6b7280" }}>
                {active.online ? "● Online" : "● Offline"} • {active.role}
              </p>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button style={{ padding: "8px 16px", fontSize: "13px", fontWeight: 600, borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer" }}>
                📞 Call
              </button>
              <button style={{ padding: "8px 16px", fontSize: "13px", fontWeight: 600, borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#fff", cursor: "pointer" }}>
                📋 Booking
              </button>
            </div>
          </div>

          {/* Booking banner */}
          <div style={{ padding: "10px 24px", background: "rgba(255,62,165,0.06)", borderBottom: "1px solid rgba(255,62,165,0.15)", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <span style={{ fontSize: "14px" }}>📅</span>
            <span style={{ fontSize: "13px", color: "#FF3EA5", fontWeight: 500 }}>
              Upcoming: Home cleaning • Today at 9:00am • 3 hrs • ₦8,250
            </span>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ textAlign: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "11px", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "4px 12px", borderRadius: "999px" }}>Today</span>
            </div>
            {active.messages.map((msg) => (
              <div key={msg.id} style={{ display: "flex", flexDirection: msg.from === "me" ? "row-reverse" : "row", alignItems: "flex-end", gap: "8px" }}>
                {msg.from === "them" && (
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#FF3EA5", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "10px", flexShrink: 0 }}>
                    {active.initials}
                  </div>
                )}
                <div style={{ maxWidth: "65%" }}>
                  <div style={{
                    padding: "10px 14px", borderRadius: msg.from === "me" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background: msg.from === "me" ? "#FF3EA5" : "rgba(255,255,255,0.07)",
                    fontSize: "14px", lineHeight: 1.6,
                    color: msg.from === "me" ? "#fff" : "#e5e7eb",
                  }}>
                    {msg.text}
                  </div>
                  <p style={{ fontSize: "11px", color: "#6b7280", marginTop: "4px", textAlign: msg.from === "me" ? "right" : "left" }}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          <div style={{ padding: "8px 24px 0", display: "flex", gap: "8px", flexShrink: 0, flexWrap: "wrap" }}>
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => sendMessage(reply)}
                style={{ padding: "6px 14px", fontSize: "12px", fontWeight: 500, borderRadius: "999px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#9ca3af", cursor: "pointer", fontFamily: "Inter, Arial, sans-serif", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF3EA5"; e.currentTarget.style.color = "#FF3EA5"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#9ca3af"; }}
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: "12px 24px 20px", display: "flex", gap: "10px", alignItems: "center", flexShrink: 0 }}>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage(input)}
              style={{ flex: 1, padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#fff", fontSize: "14px", outline: "none", fontFamily: "Inter, Arial, sans-serif" }}
            />
            <button
              onClick={() => sendMessage(input)}
              style={{ width: "44px", height: "44px", borderRadius: "50%", border: "none", background: "#FF3EA5", color: "#fff", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}