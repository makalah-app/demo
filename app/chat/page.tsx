"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import GlobalHeader from "@/components/global-header"

export default function ChatPage() {
  const [theme, setTheme] = useState("dark")
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [showTyping, setShowTyping] = useState(false)
  const [showGate, setShowGate] = useState(true)
  const [messages, setMessages] = useState<Array<{ type: string; content: string }>>([])
  const [inputValue, setInputValue] = useState("")
  const [expandedArtifacts, setExpandedArtifacts] = useState<Record<string, boolean>>({})
  const [approvalStates, setApprovalStates] = useState<Record<string, "pending" | "approved" | "revision">>({})
  const [revisionInputs, setRevisionInputs] = useState<Record<string, string>>({})
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("makalah.theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.style.colorScheme = savedTheme
  }, [])
  
  // Handlers for chat actions
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    setMessages((prev) => [...prev, { type: "user", content: inputValue }])
    setInputValue("")
    setShowTyping(true)
    setTimeout(() => {
      setShowTyping(false)
      setMessages((prev) => [...prev, { type: "assistant", content: `Terima kasih, saya akan memproses: ${inputValue}` }])
    }, 1200)
  }

  const toggleArtifact = (artifactId: string) => {
    setExpandedArtifacts((prev) => ({ ...prev, [artifactId]: !prev[artifactId] }))
  }

  const handleApproval = (gateId: string) => {
    setApprovalStates((prev) => ({ ...prev, [gateId]: "approved" }))
  }

  const handleRevision = (gateId: string) => {
    setApprovalStates((prev) => ({ ...prev, [gateId]: "revision" }))
  }

  const handleRevisionSubmit = (gateId: string) => {
    const revisionText = revisionInputs[gateId]
    if (!revisionText?.trim()) return
    setMessages((prev) => [...prev, { type: "user", content: `Revisi untuk ${gateId}: ${revisionText}` }])
    setRevisionInputs((prev) => ({ ...prev, [gateId]: "" }))
    setApprovalStates((prev) => ({ ...prev, [gateId]: "pending" }))
    setShowTyping(true)
    setTimeout(() => {
      setShowTyping(false)
      setMessages((prev) => [...prev, { type: "assistant", content: "Terima kasih atas revisi Anda. Saya akan memperbarui kerangka analisis sesuai masukan Anda." }])
    }, 2000)
  }


  return (
    <div className="chat-app">
      {/* SVG Icons */}
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
        <symbol id="i-download" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2v10l3-3 1.41 1.41L12 14.83l-4.42-4.42L9 9l3 3V2h2zM5 18h14v2c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-2zm0-2v2h2v-2c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v2h2v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2z"
          />
        </symbol>
        <symbol id="i-eye" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 5c5.523 0 10 4 12 7-2 3-6.477 7-12 7S2 15 0 12c2-3 6.477-7 12-7Zm0 3a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8Z"
          />
        </symbol>
        <symbol id="i-send" viewBox="0 0 24 24">
          <path fill="currentColor" d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </symbol>
        <symbol id="i-user" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4h3V3c0-.55.45-1 1-1zm-3 8c-.83 0-1.5.67-1.5 1.5S8.17 13 9 13s1.5-.67 1.5-1.5S9.83 10 9 10zm6 0c-.83 0-1.5.67-1.5 1.5S14.17 13 15 13s1.5-.67 1.5-1.5S15.83 10 15 10zM8 15h8v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-1z"
          />
        </symbol>
        <symbol id="i-robot" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2c.55 0 1 .45 1 1v1h3c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h3V3c0-.55.45-1 1-1zm-3 8c-.83 0-1.5.67-1.5 1.5S8.17 13 9 13s1.5-.67 1.5-1.5S9.83 10 9 10zm6 0c-.83 0-1.5.67-1.5 1.5S14.17 13 15 13s1.5-.67 1.5-1.5S15.83 10 15 10zM8 15h8v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-1z"
          />
          <circle cx="9" cy="11.5" r="0.5" fill="white" />
          <circle cx="15" cy="11.5" r="0.5" fill="white" />
          <rect x="11" y="7" width="2" height="1" rx="0.5" fill="currentColor" opacity="0.7" />
        </symbol>
        <symbol id="i-chevron-down" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </symbol>
        <symbol id="i-attach" viewBox="0 0 24 24">
          <path fill="currentColor" d="M21.44 11.05 12.35 20.14a4 4 0 0 1-5.66-5.66l9.09-9.09a2.5 2.5 0 1 1 3.54 3.54L11.23 18.1a1.5 1.5 0 0 0 2.12 2.12l8.18-8.18" />
        </symbol>
      </svg>

      <GlobalHeader showUserProfile={true} />

      <div className={`chat-shell ${isCollapsed ? "is-collapsed" : ""}`}>
        {/* Sidebar */}
        <aside className="chat-aside">
          <div className="chat-aside-scroll">
            <section className="chat-section">
              <div className="chat-section-head">
                <h3>Chat</h3>
                <button
                  className="chat-collapse-btn"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  aria-label={isCollapsed ? "Tampilkan sidebar" : "Sembunyikan sidebar"}
                  title={isCollapsed ? "Tampilkan sidebar" : "Sembunyikan sidebar"}
                >
                  <svg width="18" height="18">
                    <use href="#i-analytics" />
                  </svg>
                </button>
              </div>
              <div className="chat-list">
                <div 
                  className="chat-item chat-item-active"
                  title={isCollapsed ? "Chat Baru" : ""}
                  onClick={() => (window.location.href = "/demo/chat-start")}
                  style={{ cursor: "pointer" }}
                >
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
                    <use href="#i-doc" />
                  </svg>
                  <span className="chat-label chat-txt">Jejak Artifact</span>
                </div>
                {/* Individual artifacts - hidden in collapsed */}
                <div className="chat-item chat-detail-item" style={{ padding: "0.75rem" }}>
                  <svg width="18" height="18">
                    <use href="#i-doc" />
                  </svg>
                  <div>
                    <div className="chat-label chat-txt">01-topic-definitive-research.md</div>
                    <div className="chat-meta">2 hari yang lalu • v2</div>
                  </div>
                </div>
                <div className="chat-item chat-detail-item" style={{ padding: "0.75rem" }}>
                  <svg width="18" height="18">
                    <use href="#i-doc" />
                  </svg>
                  <div>
                    <div className="chat-label chat-txt">02-research-foundation.md</div>
                    <div className="chat-meta">2 hari yang lalu • v1</div>
                  </div>
                </div>
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
                    <use href="#i-eye" />
                  </svg>
                  <span className="chat-label chat-txt">Riwayat</span>
                </div>
                {/* Individual history items - hidden in collapsed */}
                <div className="chat-item chat-detail-item" style={{ padding: "0.75rem" }}>
                  <svg width="18" height="18">
                    <use href="#i-chat" />
                  </svg>
                  <div>
                    <div className="chat-label chat-txt">Dampak AI terhadap Pendidikan</div>
                    <div className="chat-meta">3 hari yang lalu</div>
                  </div>
                </div>
                <div className="chat-item chat-detail-item" style={{ padding: "0.75rem" }}>
                  <svg width="18" height="18">
                    <use href="#i-chat" />
                  </svg>
                  <div>
                    <div className="chat-label chat-txt">Analisis Kebijakan Ekonomi</div>
                    <div className="chat-meta">1 minggu yang lalu</div>
                  </div>
                </div>
                <div className="chat-item chat-detail-item" style={{ padding: "0.75rem" }}>
                  <svg width="18" height="18">
                    <use href="#i-chat" />
                  </svg>
                  <div>
                    <div className="chat-label chat-txt">Metodologi Penelitian Kualitatif</div>
                    <div className="chat-meta">2 minggu yang lalu</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="chat-section" style={{ marginTop: "auto" }}>
              <h3>Akun</h3>
              <div className="chat-list">
                <div
                  className="chat-item"
                  onClick={() => (window.location.href = "/demo/settings")}
                  style={{ cursor: "pointer" }}
                  title={isCollapsed ? "Pengaturan" : ""}
                >
                  <svg width="18" height="18">
                    <use href="#i-gear" />
                  </svg>
                  <span className="chat-label chat-txt">Pengaturan</span>
                </div>
                <div 
                  className="chat-item" 
                  onClick={() => (window.location.href = "/demo")} 
                  style={{ cursor: "pointer" }}
                  title={isCollapsed ? "Logout" : ""}
                >
                  <svg width="18" height="18">
                    <use href="#i-exit" />
                  </svg>
                  <span className="chat-label chat-txt">Logout</span>
                </div>
              </div>
            </section>
          </div>
        </aside>

        {/* Main */}
        <main className="chat-main">
          <section className="chat-conversation">
            <div className="chat-message-wrapper chat-message-wrapper--user">
              <div className="chat-message-avatar">
                <svg width="24" height="24">
                  <use href="#i-user" />
                </svg>
              </div>
              <div className="chat-message chat-message--user">
                <div className="chat-message-body">
                  Saya ingin membuat makalah tentang "Dampak Teknologi Digital terhadap Transformasi Ekonomi Indonesia"
                </div>
              </div>
            </div>

            <div className="chat-message-wrapper chat-message-wrapper--assistant">
              <div className="chat-message-avatar">
                <svg width="24" height="24">
                  <use href="#i-robot" />
                </svg>
              </div>
              <div className="chat-message chat-message--assistant">
                <div className="chat-message-body">
                  Topik yang kuat. Kita akan susun fondasi penelitian sistematis agar argumen presisi dan teruji.
                </div>
              </div>
            </div>

            <div className="chat-artifact">
              <div className="chat-artifact-header">
                <span className="chat-artifact-name">01-topic-definitive-research-direction.md</span>
                <div className="chat-actions">
                  <button className="chat-btn" onClick={() => toggleArtifact("artifact-1")}>
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href={expandedArtifacts["artifact-1"] ? "#i-chevron-down" : "#i-eye"} />
                    </svg>
                    {expandedArtifacts["artifact-1"] ? "Sembunyikan" : "Lihat"}
                  </button>
                  <button className="chat-btn chat-btn--ghost">
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href="#i-download" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
              {expandedArtifacts["artifact-1"] && (
                <div className="chat-artifact-content">
                  <pre>
                    <code>{`# Definisi Topik Penelitian

**Judul:** Dampak Teknologi Digital terhadap Transformasi Ekonomi Indonesia: Analisis Multisektoral

**Ruang Lingkup:**
- Perdagangan digital (e-commerce)
- Fintech & sistem pembayaran digital
- Industri kreatif digital
- Transformasi UMKM

**Periode:** 2020-2024`}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="chat-message-wrapper chat-message-wrapper--user">
              <div className="chat-message-avatar">
                <svg width="24" height="24">
                  <use href="#i-user" />
                </svg>
              </div>
              <div className="chat-message chat-message--user">
                <div className="chat-message-body">
                  Bagus! Sekarang saya ingin fokus pada aspek fintech dan sistem pembayaran digital. Bisakah kita buat
                  kerangka penelitian yang lebih detail?
                </div>
              </div>
            </div>

            <div className="chat-artifact">
              <div className="chat-artifact-header">
                <span className="chat-artifact-name">02-fintech-research-framework.md</span>
                <div className="chat-actions">
                  <button className="chat-btn" onClick={() => toggleArtifact("artifact-2")}>
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href={expandedArtifacts["artifact-2"] ? "#i-chevron-down" : "#i-eye"} />
                    </svg>
                    {expandedArtifacts["artifact-2"] ? "Sembunyikan" : "Lihat"}
                  </button>
                  <button className="chat-btn chat-btn--ghost">
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href="#i-download" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
              {expandedArtifacts["artifact-2"] && (
                <div className="chat-artifact-content">
                  <pre>
                    <code>{`# Kerangka Penelitian Fintech Indonesia

## Metodologi Penelitian
- Pendekatan kuantitatif dan kualitatif
- Analisis data sekunder dari Bank Indonesia
- Survey terhadap 500 pengguna fintech
- Wawancara mendalam dengan 20 stakeholder

## Indikator Kunci
- Tingkat adopsi pembayaran digital
- Volume transaksi e-wallet
- Inklusi keuangan digital
- Dampak terhadap UMKM

## Timeline Penelitian
- Fase 1: Pengumpulan data (2 bulan)
- Fase 2: Analisis data (1 bulan)
- Fase 3: Penulisan laporan (1 bulan)`}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="chat-message-wrapper chat-message-wrapper--assistant">
              <div className="chat-message-avatar">
                <svg width="24" height="24">
                  <use href="#i-robot" />
                </svg>
              </div>
              <div className="chat-message chat-message--assistant">
                <div className="chat-message-body">
                  Tentu! Mari kita susun kerangka penelitian yang komprehensif untuk aspek fintech dan sistem pembayaran
                  digital. Saya akan buat struktur penelitian yang mencakup metodologi, data yang diperlukan, dan
                  analisis yang akan dilakukan.
                </div>
              </div>
            </div>

            <div className="chat-artifact">
              <div className="chat-artifact-header">
                <span className="chat-artifact-name">03-asean-comparative-analysis.md</span>
                <div className="chat-actions">
                  <button className="chat-btn" onClick={() => toggleArtifact("artifact-3")}>
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href={expandedArtifacts["artifact-3"] ? "#i-chevron-down" : "#i-eye"} />
                    </svg>
                    {expandedArtifacts["artifact-3"] ? "Sembunyikan" : "Lihat"}
                  </button>
                  <button className="chat-btn chat-btn--ghost">
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href="#i-download" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
              {expandedArtifacts["artifact-3"] && (
                <div className="chat-artifact-content">
                  <pre>
                    <code>{`# Analisis Komparatif Fintech ASEAN

## Negara Pembanding
1. **Singapura** - Regulatory sandbox terdepan
2. **Thailand** - PromptPay dan digital banking
3. **Malaysia** - Islamic fintech innovation
4. **Vietnam** - Mobile payment penetration
5. **Filipina** - Remittance digitalization

## Parameter Perbandingan
- Regulasi dan kebijakan pemerintah
- Tingkat penetrasi smartphone
- Infrastruktur digital
- Literasi keuangan digital
- Ekosistem startup fintech

## Metrik Kuantitatif
- Transaction volume (USD billion)
- User adoption rate (%)
- Market share by platform
- Regulatory compliance score`}</code>
                  </pre>
                </div>
              )}
            </div>

            <div
              className={`chat-gate ${
                approvalStates["kerangka-komparatif"] === "approved"
                  ? "chat-gate--approved"
                  : approvalStates["kerangka-komparatif"] === "revision"
                    ? "chat-gate--revision"
                    : ""
              }`}
            >
              {approvalStates["kerangka-komparatif"] === "approved" ? (
                <>
                  <div className="chat-gate-header">
                    <span className="chat-gate-title">✓ Kerangka Analisis Komparatif ASEAN - Disetujui</span>
                  </div>
                  <div className="chat-gate-body">
                    <p>Kerangka analisis komparatif telah disetujui dan siap untuk dilanjutkan ke fase berikutnya.</p>
                  </div>
                </>
              ) : approvalStates["kerangka-komparatif"] === "revision" ? (
                <>
                  <div className="chat-gate-header">
                    <span className="chat-gate-title">Revisi: Kerangka Analisis Komparatif ASEAN</span>
                  </div>
                  <div className="chat-gate-body">
                    <p>Silakan berikan instruksi revisi atau edit langsung pada kerangka di atas:</p>
                    <div className="chat-revision-input" style={{ marginTop: "1rem" }}>
                      <textarea
                        value={revisionInputs["kerangka-komparatif"] || ""}
                        onChange={(e) =>
                          setRevisionInputs((prev) => ({
                            ...prev,
                            "kerangka-komparatif": e.target.value,
                          }))
                        }
                        placeholder="Berikan instruksi revisi untuk agent atau edit langsung kerangka di atas..."
                        style={{
                          width: "100%",
                          minHeight: "80px",
                          padding: "12px",
                          backgroundColor: theme === "dark" ? "#1f2937" : "#f8fafc",
                          border: `2px solid ${theme === "dark" ? "#374151" : "#e2e8f0"}`,
                          color: theme === "dark" ? "#f9fafb" : "#111827",
                          fontSize: "14px",
                          lineHeight: "1.5",
                          resize: "vertical",
                          outline: "none",
                        }}
                      />
                      <div className="chat-gate-actions" style={{ marginTop: "1rem" }}>
                        <button
                          className="chat-btn"
                          onClick={() => handleRevisionSubmit("kerangka-komparatif")}
                          disabled={!revisionInputs["kerangka-komparatif"]?.trim()}
                        >
                          Kirim Revisi
                        </button>
                        <button
                          className="chat-btn chat-btn--ghost"
                          onClick={() =>
                            setApprovalStates((prev) => ({
                              ...prev,
                              "kerangka-komparatif": "pending",
                            }))
                          }
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="chat-gate-header">
                    <span className="chat-gate-title">Persetujuan Diperlukan: Validasi Kerangka Komparatif</span>
                  </div>
                  <div className="chat-gate-body">
                    <p>Apakah kerangka analisis komparatif ASEAN sudah mencakup aspek-aspek yang Anda inginkan?</p>
                    <div className="chat-gate-actions">
                      <button className="chat-btn" onClick={() => handleApproval("kerangka-komparatif")}>
                        Setujui
                      </button>
                      <button
                        className="chat-btn chat-btn--ghost"
                        onClick={() => handleRevision("kerangka-komparatif")}
                      >
                        Perlu Revisi
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="chat-artifact">
              <div className="chat-artifact-header">
                <span className="chat-artifact-name">04-data-collection-strategy.md</span>
                <div className="chat-actions">
                  <button className="chat-btn" onClick={() => toggleArtifact("artifact-4")}>
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href={expandedArtifacts["artifact-4"] ? "#i-chevron-down" : "#i-eye"} />
                    </svg>
                    {expandedArtifacts["artifact-4"] ? "Sembunyikan" : "Lihat"}
                  </button>
                  <button className="chat-btn chat-btn--ghost">
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href="#i-download" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
              {expandedArtifacts["artifact-4"] && (
                <div className="chat-artifact-content">
                  <pre>
                    <code>{`# Strategi Pengumpulan Data

## Data Primer
### Survey Online (n=1000)
- Target: Pengguna fintech aktif
- Sampling: Stratified random sampling
- Platform: Google Forms + SurveyMonkey
- Durasi: 4 minggu

### Wawancara Mendalam (n=25)
- Regulator: Bank Indonesia, OJK (5 orang)
- Praktisi fintech: CEO/CTO startup (10 orang)
- Akademisi: Ekonomi digital (5 orang)
- UMKM: Pengguna aktif (5 orang)

## Data Sekunder
### Sumber Resmi
- Statistik Bank Indonesia
- Laporan OJK tentang fintech
- Data BPS tentang ekonomi digital
- World Bank financial inclusion data

### Sumber Industri
- Laporan McKinsey & Company
- PwC Indonesia fintech report
- Google-Temasek e-economy report
- ASEAN fintech census`}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="chat-message-wrapper chat-message-wrapper--assistant">
              <div className="chat-message-avatar">
                <svg width="24" height="24">
                  <use href="#i-robot" />
                </svg>
              </div>
              <div className="chat-message chat-message--assistant">
                <div className="chat-message-body">
                  Untuk mendapatkan data yang akurat dan terkini, kita perlu menggunakan pendekatan multi-sumber. Saya
                  akan buatkan strategi pengumpulan data yang komprehensif dengan berbagai metode dan sumber data primer
                  maupun sekunder.
                </div>
              </div>
            </div>

            <div className="chat-artifact">
              <div className="chat-artifact-header">
                <span className="chat-artifact-name">05-risk-challenge-analysis.md</span>
                <div className="chat-actions">
                  <button className="chat-btn" onClick={() => toggleArtifact("artifact-5")}>
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href={expandedArtifacts["artifact-5"] ? "#i-chevron-down" : "#i-eye"} />
                    </svg>
                    {expandedArtifacts["artifact-5"] ? "Sembunyikan" : "Lihat"}
                  </button>
                  <button className="chat-btn chat-btn--ghost">
                    <svg width="16" height="16" style={{ marginRight: "0.5rem" }}>
                      <use href="#i-download" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
              {expandedArtifacts["artifact-5"] && (
                <div className="chat-artifact-content">
                  <pre>
                    <code>{`# Analisis Risiko dan Tantangan Fintech Indonesia

## Risiko Sistemik
### Keamanan Siber
- Data breach dan pencurian identitas
- Fraud dalam transaksi digital
- Kerentanan sistem pembayaran

## Risiko Regulasi
- Ketidakpastian kebijakan
- Compliance cost yang tinggi
- Fragmentasi regulasi antar lembaga

## Tantangan Implementasi
### Infrastruktur
- Ketimpangan akses internet
- Kualitas jaringan di daerah terpencil
- Interoperabilitas antar platform

### Sosial-Ekonomi
- Digital divide antar generasi
- Literasi keuangan yang rendah
- Resistensi terhadap perubahan

## Mitigasi Risiko
### Teknologi
- Multi-factor authentication
- Blockchain untuk transparansi
- AI untuk fraud detection

### Kebijakan
- Regulatory sandbox
- Standardisasi industri
- Edukasi publik berkelanjutan`}</code>
                  </pre>
                </div>
              )}
            </div>

            {messages.map((message, index) => (
              <div key={index} className={`chat-message-wrapper chat-message-wrapper--${message.type}`}>
                <div className="chat-message-avatar">
                  <svg width="24" height="24">
                    <use href={message.type === "user" ? "#i-user" : "#i-robot"} />
                  </svg>
                </div>
                <div className={`chat-message chat-message--${message.type}`}>
                  <div className="chat-message-body">{message.content}</div>
                </div>
              </div>
            ))}
            {showTyping && <div className="chat-message chat-message--system">AI memproses permintaan Anda…</div>}
          </section>

          <div className="chat-prompt-dock">
            <form className="chat-prompt" onSubmit={handleSubmit}>
              <div
                className="chat-input-container"
                style={{
                  backgroundColor: theme === "dark" ? "#1f2937" : "#f8fafc",
                  border: `2px solid ${theme === "dark" ? "#374151" : "#e2e8f0"}`,
                  padding: "12px",
                }}
              >
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ketik pesan Anda di sini…"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    width: "100%",
                    color: theme === "dark" ? "#f9fafb" : "#111827",
                    fontSize: "14px",
                    lineHeight: "1.5",
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
                  <button className="chat-send-btn" type="submit" disabled={!inputValue.trim()} aria-label="Kirim pesan">
                    <svg width="18" height="18">
                      <use href="#i-send" />
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
