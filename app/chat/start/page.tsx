"use client"

import type React from "react"

import { useState } from "react"
import { GlobalHeader } from "@/components/global-header"
import { Brain, FileText, Users, Zap } from "lucide-react"

export default function ChatStartPage() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Redirect to main chat page with the message
      window.location.href = `/chat?message=${encodeURIComponent(message.trim())}`
    }
  }

  const examplePrompts = [
    "Saya ingin membuat makalah tentang 'Dampak Teknologi Digital terhadap Transformasi Ekonomi Indonesia'",
    "Bantu saya menyusun penelitian tentang kebijakan pendidikan di Indonesia",
    "Saya perlu bantuan untuk menulis paper tentang sustainable development goals",
    "Buatkan outline untuk makalah tentang artificial intelligence dalam healthcare",
  ]

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <GlobalHeader showNavigation={false} showUserProfile={true} />

      <div className="chat-welcome-container">
        <div className="chat-welcome-content">
          {/* Logo and Branding */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-[var(--accent)] flex items-center justify-center mr-4">
              <span className="text-2xl font-medium text-white">M</span>
            </div>
            <div>
              <h1 className="text-3xl font-medium text-[var(--foreground)]">Makalah AI</h1>
              <p className="text-[var(--muted-foreground)] text-lg">Platform AI untuk Penulisan Akademik</p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-[var(--foreground)] mb-4">
              Mulai Perjalanan Penulisan Akademik Anda
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
              Kolaborasi dengan AI agent untuk menyusun makalah akademik berkualitas tinggi melalui 7 fase terstruktur
              dengan kontrol penuh di tangan Anda.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--accent)] flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-[var(--foreground)] mb-2">AI Guidance</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Panduan AI cerdas di setiap langkah</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-[var(--foreground)] mb-2">7 Fase Terstruktur</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Proses sistematis dan terarah</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-[var(--foreground)] mb-2">Kontrol Penuh</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Anda yang menentukan setiap keputusan</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium text-[var(--foreground)] mb-2">Hasil Berkualitas</h3>
              <p className="text-sm text-[var(--muted-foreground)]">Output akademik yang profesional</p>
            </div>
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="chat-welcome-input">
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ketik topik atau pertanyaan untuk memulai penulisan makalah Anda..."
                className="w-full p-6 pr-16 bg-[var(--input-bg)] border-2 border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] resize-none focus:outline-none focus:border-[var(--accent)] transition-colors"
                rows={4}
                style={{ borderRadius: "0" }}
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:bg-[var(--muted)] disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                style={{ borderRadius: "0" }}
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Example Prompts */}
          <div className="mt-8">
            <p className="text-sm text-[var(--muted-foreground)] mb-4 text-center">Atau coba salah satu contoh ini:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {examplePrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(prompt)}
                  className="text-left p-4 bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] text-[var(--foreground)] text-sm transition-colors"
                  style={{ borderRadius: "0" }}
                >
                  "{prompt}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
