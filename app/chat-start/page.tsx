"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import GlobalHeader from "@/components/global-header"

export default function ChatStartPage() {
  const [theme, setTheme] = useState("dark")
  const [inputValue, setInputValue] = useState("")
  const [isCollapsed, setIsCollapsed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("makalah.theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.style.colorScheme = savedTheme
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Redirect to main chat page when user starts conversation
    router.push("/demo/chat")
  }

  const handleExampleClick = (example: string) => {
    setInputValue(example)
  }

  return (
    <div className="chat-app">
      <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
        <symbol id="i-chat" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2 4h12v2H6V8Zm0 4h9v2H6v-2Z"
          />
        </symbol>
        <symbol id="i-flask" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10 2h4v2h-1v4.586l5.657 7.071A4 4 0 0 1 14.657 22H9.343a4 4 0 0 1-3.999-6.343L11 8.586V4h-1V2Z"
          />
        </symbol>
        <symbol id="i-analytics" viewBox="0 0 24 24">
          <path fill="currentColor" d="M5 3h2v18H5V3Zm6 6h2v12h-2V9Zm6-4h2v16h-2V5Z" />
        </symbol>
        <symbol id="i-doc" viewBox="0 0 24 24">
          <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6" />
        </symbol>
        <symbol id="i-gear" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m10.325 4.317 1.35-2.34 1.95 1.125-.675 2.34c.495 .18 .975 .42 1.41 .72l2.19-.93 1.05 1.86-1.8 1.47c.15 .51 .24 1.05 .24 1.62s-.09 1.11-.24 1.62l1.8 1.47-1.05 1.86-2.19-.93a8 8 0 0 1-1.41 .72l-.675 2.34 1.95-1.125 1.35 2.34c.54-.09 1.11-.09 1.65 0ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          />
        </symbol>
        <symbol id="i-exit" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10 3H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h5v-2H5V5h5V3Zm4.086 4.914L16.5 9.328 14.828 11H21v2h-6.172L16.5 14.672l-2.414 2.414L9 12l5.086-4.086Z"
          />
        </symbol>
        <symbol id="i-archive" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3 4h18v4H3V4Zm0 6h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10Zm6 4h6v2H9v-2Z"
          />
        </symbol>
        <symbol id="i-history" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z"
          />
        </symbol>
        <symbol id="i-menu" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 6h18M3 18h18"/>
        </symbol>
      </svg>

      <GlobalHeader showUserProfile={true} />

      <div className={`chat-shell ${isCollapsed ? "is-collapsed" : ""}`}>
      {/* Sidebar */}
        <aside className="chat-aside">
          <div className="chat-aside-scroll" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <section className="chat-section">
              <div className="chat-section-head">
                <h3>Chat</h3>
                <button
                  className="chat-collapse-btn"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label="Sembunyikan sidebar"
                >
                  <svg width="18" height="18">
                    <use href="#i-menu" />
                  </svg>
                </button>
              </div>
              <div className="chat-list">
                <div className="chat-item">
                  <svg width="18" height="18">
                    <use href="#i-chat" />
                  </svg>
                  <span className="chat-label chat-txt">Chat Baru</span>
                </div>


              </div>
            </section>

            <section className="chat-section" style={{ marginTop: "2rem" }}>
              <h3>Jejak Artifact</h3>
              <div className="chat-list">
                {/* Summary icon for collapsed state */}
                <div 
                  className="chat-item chat-section-summary"
                  title={isCollapsed ? "Jejak Artifact" : ""}
                >
                  <svg width="18" height="18">
                    <use href="#i-archive" />
                  </svg>
                  <span className="chat-label chat-txt">Jejak Artifact</span>
                </div>
                {/* Empty - belum ada artifacts */}
              </div>
            </section>

            <section className="chat-section" style={{ marginTop: "2rem" }}>
              <h3>Riwayat</h3>
              <div className="chat-list">
                {/* Summary icon for collapsed state */}
                <div 
                  className="chat-item chat-section-summary"
                  title={isCollapsed ? "Riwayat" : ""}
                >
                  <svg width="18" height="18">
                    <use href="#i-history" />
                  </svg>
                  <span className="chat-label chat-txt">Riwayat</span>
                </div>
                {/* Empty - belum ada riwayat */}
              </div>
            </section>

            <div style={{ flex: 1 }}></div>

            <section className="chat-section">
              <h3>Akun</h3>
              <div className="chat-list">
                <div
                  className="chat-item"
                  onClick={() => (window.location.href = "/settings")}
                  style={{ cursor: "pointer" }}
                >
                  <svg width="18" height="18">
                    <use href="#i-gear" />
                  </svg>
                  <span className="chat-label chat-txt">Pengaturan</span>
                </div>
                <div className="chat-item" onClick={() => (window.location.href = "/")} style={{ cursor: "pointer" }}>
                  <svg width="18" height="18">
                    <use href="#i-exit" />
                  </svg>
                  <span className="chat-label chat-txt">Logout</span>
                </div>
              </div>
            </section>
          </div>
        </aside>

        <main className="chat-main">
          <div className="chat-welcome">
            <div className="chat-welcome-content">
              <div className="chat-welcome-icon">
                <div
                  className="rounded-[3px]"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#ff6a00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    fontWeight: "600",
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  M
                </div>
              </div>
              <h1
                style={{
                  fontSize: "28px",
                  fontWeight: "500",
                  color: theme === "dark" ? "#f9fafb" : "#111827",
                  marginBottom: "12px",
                  textAlign: "center",
                }}
              >
                Selamat Datang di Makalah AI
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: theme === "dark" ? "#9ca3af" : "#6b7280",
                  textAlign: "center",
                  maxWidth: "500px",
                  lineHeight: "1.6",
                  marginBottom: "32px",
                }}
              >
                Platform AI untuk penulisan makalah akademik yang terstruktur dan berkualitas tinggi. Mulai percakapan
                Anda untuk mendapatkan bantuan dalam menyusun penelitian akademik.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "center",
                  marginBottom: "32px",
                }}
              >
                <button
                  onClick={() => handleExampleClick("Saya ingin membuat makalah tentang dampak AI terhadap pendidikan")}
                  className="rounded-[3px]"
                  style={{
                    padding: "12px 20px",
                    backgroundColor: theme === "dark" ? "#1f2937" : "#f8fafc",
                    border: `2px solid ${theme === "dark" ? "#374151" : "#e2e8f0"}`,
                    color: theme === "dark" ? "#9ca3af" : "#6b7280",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme === "dark" ? "#374151" : "#e2e8f0"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme === "dark" ? "#1f2937" : "#f8fafc"
                  }}
                >
                  💡 Contoh: "Saya ingin membuat makalah tentang dampak AI terhadap pendidikan"
                </button>
                <button
                  onClick={() => handleExampleClick("Bantu saya menyusun kerangka penelitian tentang ekonomi digital")}
                  className="rounded-[3px]"
                  style={{
                    padding: "12px 20px",
                    backgroundColor: theme === "dark" ? "#1f2937" : "#f8fafc",
                    border: `2px solid ${theme === "dark" ? "#374151" : "#e2e8f0"}`,
                    color: theme === "dark" ? "#9ca3af" : "#6b7280",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme === "dark" ? "#374151" : "#e2e8f0"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme === "dark" ? "#1f2937" : "#f8fafc"
                  }}
                >
                  📚 Contoh: "Bantu saya menyusun kerangka penelitian tentang ekonomi digital"
                </button>
              </div>
            </div>
          </div>

          <div className="chat-prompt-dock">
            <form className="chat-prompt" onSubmit={handleSubmit}>
              <div
                className="chat-input-container rounded-[3px]"
                style={{
                  backgroundColor: theme === "dark" ? "#1f2937" : "#f8fafc",
                  border: `2px solid ${theme === "dark" ? "#374151" : "#e2e8f0"}`,
                  padding: "12px",
                }}
              >
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ketik pesan Anda di sini untuk memulai…"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    width: "100%",
                    color: theme === "dark" ? "#f9fafb" : "#111827",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    minHeight: "60px",
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement
                    target.style.height = "auto"
                    target.style.height = Math.min(target.scrollHeight, 160) + "px"
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e)
                    }
                  }}
                />
                <button
                  className="chat-send-btn rounded-[3px]"
                  type="submit"
                  disabled={!inputValue.trim()}
                  aria-label="Mulai percakapan"
                  style={{
                    alignSelf: "center",
                    backgroundColor: !inputValue.trim() ? "#6b7280" : "#ff6a00",
                    color: "#ffffff",
                    border: "none",
                    padding: "8px",
                    cursor: !inputValue.trim() ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease",
                    opacity: !inputValue.trim() ? 0.5 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (inputValue.trim()) {
                      e.currentTarget.style.backgroundColor = "#e55a00"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (inputValue.trim()) {
                      e.currentTarget.style.backgroundColor = "#ff6a00"
                    }
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}
