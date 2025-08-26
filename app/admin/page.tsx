"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Brain, Save, RotateCcw, CheckCircle, ChevronDown, History } from "lucide-react"
import GlobalHeader from "@/components/global-header"

export default function AdminPage() {
  const [activeModel, setActiveModel] = useState("openai")
  const [fallbackModel, setFallbackModel] = useState("openrouter")
  const [openaiApiKey, setOpenaiApiKey] = useState("sk-proj-****************************")
  const [openrouterApiKey, setOpenrouterApiKey] = useState("sk-or-****************************")

  const [openaiVersion, setOpenaiVersion] = useState("gpt-4o")
  const [openrouterVersion, setOpenrouterVersion] = useState("google/gemini-2.0-flash-exp")

  const [promptVersion, setPromptVersion] = useState("v2.1")
  const [showPromptHistory, setShowPromptHistory] = useState(false)

  const systemPrompt =
    useState(`Anda adalah asisten AI yang membantu penulisan makalah akademik berbahasa Indonesia. Anda akan memandu pengguna melalui 7 fase terstruktur:

1. Klarifikasi Topik - Memahami dan memperjelas topik penelitian
2. Riset Fondasi - Mengumpulkan sumber dan referensi yang relevan
3. Kerangka Analisis - Menyusun struktur argumen dan analisis
4. Pengembangan Konten - Menulis bagian-bagian utama makalah
5. Sintesis & Integrasi - Menggabungkan semua elemen menjadi satu kesatuan
6. Review & Refinement - Meninjau dan memperbaiki kualitas tulisan
7. Finalisasi - Memastikan format dan standar akademik terpenuhi

Selalu berikan respons yang terstruktur, akademis, dan sesuai dengan standar penulisan ilmiah Indonesia. Gunakan bahasa yang formal namun mudah dipahami.`)

  const [isSaved, setIsSaved] = useState(false)

  const openaiVersions = [
    { value: "gpt-4o", label: "GPT-4o (Latest)" },
    { value: "gpt-4o-mini", label: "GPT-4o Mini" },
    { value: "gpt-4-turbo", label: "GPT-4 Turbo" },
    { value: "gpt-4", label: "GPT-4" },
    { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
  ]

  const openrouterVersions = [
    { value: "google/gemini-2.0-flash-exp", label: "Gemini 2.0 Flash (Experimental)" },
    { value: "google/gemini-pro-1.5", label: "Gemini Pro 1.5" },
    { value: "google/gemini-pro", label: "Gemini Pro" },
    { value: "meta-llama/llama-3.1-405b-instruct", label: "Llama 3.1 405B Instruct" },
    { value: "meta-llama/llama-3.1-70b-instruct", label: "Llama 3.1 70B Instruct" },
    { value: "anthropic/claude-3.5-sonnet", label: "Claude 3.5 Sonnet" },
  ]

  const promptHistory = [
    { version: "v2.1", date: "2025-01-26", description: "Current - Enhanced academic structure" },
    { version: "v2.0", date: "2025-01-20", description: "Added 7-phase methodology" },
    { value: "v1.5", date: "2025-01-15", description: "Improved Indonesian language support" },
    { version: "v1.0", date: "2025-01-10", description: "Initial system prompt" },
  ]

  const handleSave = () => {
    // Simulate saving configuration
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 2000)
  }

  const handleReset = () => {
    setActiveModel("openai")
    setFallbackModel("openrouter")
    setOpenaiApiKey("sk-proj-****************************")
    setOpenrouterApiKey("sk-or-****************************")
    setOpenaiVersion("gpt-4o")
    setOpenrouterVersion("google/gemini-2.0-flash-exp")
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-900)", color: "var(--text-100)" }}>
      <GlobalHeader />

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: "var(--accent-500)" }}
            >
              <Settings className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold" style={{ color: "var(--text-100)" }}>
              Admin Panel
            </h1>
          </div>
          <p className="text-lg" style={{ color: "var(--text-200)" }}>
            Kelola konfigurasi model AI dan system prompt untuk platform Makalah AI
          </p>
        </div>

        {/* Model Configuration */}
        <Card
          className="mb-8 p-6 border-2"
          style={{
            backgroundColor: "var(--bg-800)",
            borderColor: "var(--line-500)",
          }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="w-6 h-6" style={{ color: "var(--accent-500)" }} />
            <h2 className="text-xl font-bold" style={{ color: "var(--text-100)" }}>
              Konfigurasi Model LLM
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* OpenAI Model */}
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: "var(--text-200)" }}>
                Model Utama
              </label>
              <div
                className="p-4 border-2"
                style={{
                  backgroundColor: "var(--bg-750)",
                  borderColor: "var(--accent-500)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium" style={{ color: "var(--text-100)" }}>
                      OpenAI
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-300)" }}>
                      Model utama untuk generasi konten
                    </p>
                  </div>
                  <Badge className="text-white text-xs" style={{ backgroundColor: "var(--success-500)" }}>
                    Aktif
                  </Badge>
                </div>

                {/* API Key Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-200)" }}>
                    API Key
                  </label>
                  <input
                    type="password"
                    value={openaiApiKey}
                    onChange={(e) => setOpenaiApiKey(e.target.value)}
                    className="w-full p-2 border-2 focus:outline-none focus:ring-0"
                    style={{
                      backgroundColor: "var(--bg-700)",
                      borderColor: "var(--line-500)",
                      color: "var(--text-100)",
                    }}
                    placeholder="sk-proj-..."
                  />
                </div>

                {/* Model Selection */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-200)" }}>
                    Model
                  </label>
                  <select
                    value={openaiVersion}
                    onChange={(e) => setOpenaiVersion(e.target.value)}
                    className="w-full p-2 border-2 appearance-none focus:outline-none focus:ring-0"
                    style={{
                      backgroundColor: "var(--bg-700)",
                      borderColor: "var(--line-500)",
                      color: "var(--text-100)",
                    }}
                  >
                    {openaiVersions.map((version) => (
                      <option key={version.value} value={version.value}>
                        {version.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-2 top-9 w-4 h-4 pointer-events-none"
                    style={{ color: "var(--text-300)" }}
                  />
                </div>
              </div>
            </div>

            {/* OpenRouter Fallback Model */}
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: "var(--text-200)" }}>
                Model Fallback
              </label>
              <div
                className="p-4 border-2"
                style={{
                  backgroundColor: "var(--bg-750)",
                  borderColor: "var(--warning-500)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium" style={{ color: "var(--text-100)" }}>
                      OpenRouter
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-300)" }}>
                      Backup otomatis via OpenRouter
                    </p>
                  </div>
                  <Badge className="text-white text-xs" style={{ backgroundColor: "var(--warning-500)" }}>
                    Fallback
                  </Badge>
                </div>

                {/* API Key Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-200)" }}>
                    API Key
                  </label>
                  <input
                    type="password"
                    value={openrouterApiKey}
                    onChange={(e) => setOpenrouterApiKey(e.target.value)}
                    className="w-full p-2 border-2 focus:outline-none focus:ring-0"
                    style={{
                      backgroundColor: "var(--bg-700)",
                      borderColor: "var(--line-500)",
                      color: "var(--text-100)",
                    }}
                    placeholder="sk-or-..."
                  />
                </div>

                {/* Model Selection */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-200)" }}>
                    Model
                  </label>
                  <select
                    value={openrouterVersion}
                    onChange={(e) => setOpenrouterVersion(e.target.value)}
                    className="w-full p-2 border-2 appearance-none focus:outline-none focus:ring-0"
                    style={{
                      backgroundColor: "var(--bg-700)",
                      borderColor: "var(--line-500)",
                      color: "var(--text-100)",
                    }}
                  >
                    {openrouterVersions.map((version) => (
                      <option key={version.value} value={version.value}>
                        {version.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-2 top-9 w-4 h-4 pointer-events-none"
                    style={{ color: "var(--text-300)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* System Prompt Configuration */}
        <Card
          className="mb-8 p-6 border-2"
          style={{
            backgroundColor: "var(--bg-800)",
            borderColor: "var(--line-500)",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Settings className="w-6 h-6" style={{ color: "var(--accent-500)" }} />
              <h2 className="text-xl font-bold" style={{ color: "var(--text-100)" }}>
                System Prompt
              </h2>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="text-white text-xs px-3 py-1" style={{ backgroundColor: "var(--accent-500)" }}>
                {promptVersion}
              </Badge>
              <Button
                onClick={() => setShowPromptHistory(!showPromptHistory)}
                className="text-sm px-3 py-1 border-2"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "var(--line-500)",
                  color: "var(--text-200)",
                }}
              >
                <History className="w-4 h-4 mr-1" />
                Riwayat
              </Button>
            </div>
          </div>

          {showPromptHistory && (
            <div
              className="mb-6 p-4 border-2"
              style={{ backgroundColor: "var(--bg-750)", borderColor: "var(--line-500)" }}
            >
              <h3 className="font-medium mb-3" style={{ color: "var(--text-100)" }}>
                Riwayat Versi System Prompt
              </h3>
              <div className="space-y-2">
                {promptHistory.map((item) => (
                  <div
                    key={item.version}
                    className="flex items-center justify-between p-2 hover:bg-[var(--bg-700)] cursor-pointer"
                  >
                    <div>
                      <span className="font-medium" style={{ color: "var(--text-100)" }}>
                        {item.version}
                      </span>
                      <span className="text-sm ml-2" style={{ color: "var(--text-300)" }}>
                        ({item.date})
                      </span>
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-200)" }}>
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <label className="block text-sm font-medium" style={{ color: "var(--text-200)" }}>
              Instruksi Sistem untuk AI Agent
            </label>
            <textarea
              value={systemPrompt[0]}
              onChange={(e) => systemPrompt[1](e.target.value)}
              rows={16}
              className="w-full p-4 font-mono text-sm border-2 resize-none focus:outline-none focus:ring-0"
              style={{
                backgroundColor: "var(--bg-700)",
                borderColor: "var(--line-500)",
                color: "var(--text-100)",
              }}
              placeholder="Masukkan system prompt untuk AI agent..."
            />
            <p className="text-sm" style={{ color: "var(--text-300)" }}>
              System prompt ini akan digunakan untuk menginstruksikan AI agent dalam membantu penulisan makalah
              akademik.
            </p>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={handleSave}
            className="text-white font-medium px-6 py-3 flex items-center space-x-2"
            style={{ backgroundColor: "var(--success-500)" }}
            disabled={isSaved}
          >
            {isSaved ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Tersimpan</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Simpan Konfigurasi</span>
              </>
            )}
          </Button>

          <Button
            onClick={handleReset}
            className="font-medium px-6 py-3 flex items-center space-x-2 border-2"
            style={{
              backgroundColor: "transparent",
              borderColor: "var(--line-500)",
              color: "var(--text-200)",
            }}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset ke Default</span>
          </Button>
        </div>

        {/* Status Information */}
        <div
          className="mt-8 p-4 border-l-4"
          style={{
            backgroundColor: "var(--bg-750)",
            borderColor: "var(--accent-500)",
          }}
        >
          <h3 className="font-medium mb-2" style={{ color: "var(--text-100)" }}>
            Status Konfigurasi
          </h3>
          <div className="space-y-1 text-sm" style={{ color: "var(--text-200)" }}>
            <p>
              • Model Aktif: <span className="font-medium">OpenAI {openaiVersion}</span>
            </p>
            <p>
              • Model Fallback: <span className="font-medium">{openrouterVersion}</span> via OpenRouter
            </p>
            <p>
              • System Prompt: <span className="font-medium">{systemPrompt[0].length} karakter</span> ({promptVersion})
            </p>
            <p>
              • API Keys: <span className="font-medium">2 configured</span>
            </p>
            <p>
              • Terakhir diperbarui: <span className="font-medium">Hari ini, 21:35 WIB</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
