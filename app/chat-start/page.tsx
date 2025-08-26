"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import GlobalHeader from "@/components/global-header"

export default function ChatStartPage() {
  const [theme, setTheme] = useState("dark")
  const [inputValue, setInputValue] = useState("")
  const router = useRouter()

  useEffect(() => {
    const savedTheme = localStorage.getItem("makalah.theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.style.colorScheme = savedTheme
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    router.push("/chat")
  }

  const handleExampleClick = (example: string) => {
    setInputValue(example)
  }

  return (
    <div className="chat-app">
      <GlobalHeader showUserProfile={true} />
      <div className="chat-shell">
        <div className="chat-welcome">
          <div className="chat-welcome-content">
            <div className="chat-welcome-icon">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#ff6a00",
                  borderRadius: "12px",
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
            <h1>Selamat Datang di Makalah AI</h1>
            <p>Platform AI untuk penulisan makalah akademik yang terstruktur dan berkualitas tinggi.</p>
            
            <div className="chat-examples">
              <button onClick={() => handleExampleClick("Saya ingin membuat makalah tentang dampak AI terhadap pendidikan")}>
                💡 Contoh: "Saya ingin membuat makalah tentang dampak AI terhadap pendidikan"
              </button>
              <button onClick={() => handleExampleClick("Bantu saya menyusun kerangka penelitian tentang ekonomi digital")}>
                📚 Contoh: "Bantu saya menyusun kerangka penelitian tentang ekonomi digital"
              </button>
            </div>
          </div>
        </div>

        <div className="chat-prompt-dock">
          <form className="chat-prompt" onSubmit={handleSubmit}>
            <div className="chat-input-container">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ketik pesan Anda di sini untuk memulai…"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
              />
              <button type="submit" disabled={!inputValue.trim()}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}