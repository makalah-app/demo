"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, CheckCircle, Brain, Target } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import GlobalHeader from "@/components/global-header"

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    const savedTheme = (localStorage.getItem("makalah.theme") as "light" | "dark") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.style.colorScheme = savedTheme

    // Update meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      metaTheme.setAttribute("content", savedTheme === "light" ? "#ffffff" : "#0b0f14")
    }
  }, [])

  const customNavItems = [
    { label: "Dokumentasi", href: "/docs" },
    { label: "Tutorial", href: "/tutorial" },
    { label: "Tentang", href: "/about" }, // Updated navigation link to point to /about
  ]

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme === "light" ? "var(--bg-900)" : "var(--bg-900)",
        color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
      }}
    >
      <GlobalHeader showNavigation={true} customNavItems={customNavItems} />

      {/* Hero Section */}
      <section className="px-6 py-20 text-center relative">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              theme === "light"
                ? "radial-gradient(circle at 1px 1px, rgba(203, 213, 225, 0.3) 1px, transparent 0)"
                : "radial-gradient(circle at 1px 1px, rgba(42, 58, 79, 0.3) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        ></div>

        <div className="relative z-10">
          <h1
            className="text-5xl md:text-7xl font-medium mb-6 leading-tight"
            style={{
              color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
            }}
          >
            Bikin <span style={{ color: "var(--accent-500)" }}>Paper Akademik</span>
            <br />
            Jadi Lebih Mudah
          </h1>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{
              color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
            }}
          >
            Platform kolaborasi penulisan makalah akademik berbahasa Indonesia berbasis AI. Dipandu agen AI melalui 7
            fase terstruktur dengan kontrol penuh di tangan Anda.
          </p>
          <div className="flex justify-center">
            <Link href="/chat">
              <Button
                className="rounded-none text-white font-medium px-8 py-4 text-lg transition-all hover:-translate-y-1 hover:scale-105"
                style={{
                  backgroundColor: "var(--accent-500)",
                  background: "linear-gradient(135deg, var(--accent-400), var(--accent-600))",
                }}
              >
                <Brain className="w-5 h-5 mr-2" />
                Chat With Agent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-gradient-to-b from-[#111824] to-[#0e141b] p-8 border border-[#2a3a4f] relative transition-colors duration-300"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                  : "linear-gradient(to bottom, #111824, #0e141b)",
              borderColor: theme === "light" ? "#d7dee7" : "#33465f",
            }}
          >
            <div
              className="absolute top-4 left-4 w-2 h-2 bg-[#2a3a4f]"
              style={{
                backgroundColor: theme === "light" ? "#d7dee7" : "#2a3a4f",
              }}
            ></div>
            <div
              className="absolute top-4 right-4 w-2 h-2 bg-[#2a3a4f]"
              style={{
                backgroundColor: theme === "light" ? "#d7dee7" : "#2a3a4f",
              }}
            ></div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left side - Chat interface mockup */}
              <div
                className="p-6 border transition-colors duration-300"
                style={{
                  backgroundColor: theme === "light" ? "var(--bg-850)" : "var(--bg-700)",
                  borderColor: theme === "light" ? "var(--line-500)" : "var(--line-500)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3" style={{ backgroundColor: "var(--danger-500)" }}></div>
                    <div className="w-3 h-3" style={{ backgroundColor: "var(--warning-500)" }}></div>
                    <div className="w-3 h-3" style={{ backgroundColor: "var(--success-500)" }}></div>
                  </div>
                  <Badge
                    className="rounded-none text-white text-xs font-medium px-3 py-1"
                    style={{ backgroundColor: "var(--accent-500)" }}
                  >
                    Fase 1/7: Klarifikasi Topik
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="text-white p-4 text-sm font-medium" style={{ backgroundColor: "var(--accent-500)" }}>
                    Saya ingin menulis makalah tentang dampak AI terhadap pendidikan tinggi di Indonesia
                  </div>
                  <div
                    className="p-4 text-sm"
                    style={{
                      background: `linear-gradient(180deg, color-mix(in srgb, var(--bg-750), #000 6%), var(--bg-800))`,
                      borderLeft: `3px solid var(--accent-500)`,
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <Brain className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "var(--accent-500)" }} />
                      <div>
                        <p className="font-medium mb-2">
                          Topik yang menarik! Mari kita klarifikasi arah penelitian Anda...
                        </p>
                        <div className="mt-3 space-y-2 text-xs font-normal" style={{ color: "var(--text-200)" }}>
                          <p>• Fokus pada aspek pedagogis atau teknologi?</p>
                          <p>• Tingkat pendidikan spesifik (S1, S2, S3)?</p>
                          <p>• Metodologi kualitatif atau kuantitatif?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="rounded-none text-white font-medium"
                      style={{ backgroundColor: "var(--success-500)" }}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Setujui
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-none bg-transparent border font-medium transition-colors"
                      style={{
                        borderColor: "var(--warning-500)",
                        color: "var(--warning-500)",
                      }}
                    >
                      Minta Revisi
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right side - Artifact preview */}
              <div
                className="bg-gradient-to-b from-[#1b2838] to-[#141d2a] p-6 border border-[#33465f] relative transition-colors duration-300"
                style={{
                  background:
                    theme === "light"
                      ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                      : "linear-gradient(to bottom, #1b2838, #141d2a)",
                  borderColor: theme === "light" ? "#d7dee7" : "#33465f",
                }}
              >
                <div
                  className="absolute top-3 left-3 w-2 h-2 bg-[#33465f]"
                  style={{
                    backgroundColor: theme === "light" ? "#d7dee7" : "#2a3a4f",
                  }}
                ></div>
                <div
                  className="absolute top-3 right-3 w-2 h-2 bg-[#33465f]"
                  style={{
                    backgroundColor: theme === "light" ? "#d7dee7" : "#2a3a4f",
                  }}
                ></div>
                <div className="flex items-center justify-between mb-6 pt-2">
                  <h3 className="text-sm font-bold text-[#e6edf5]">01-topic-definitive-research-direction.md</h3>
                  <Badge className="bg-[#33465f] text-[#b7c3d4] text-xs font-bold px-3 py-1">v1.0</Badge>
                </div>
                <div className="bg-[#0b0f14] border border-[#2a3a4f] p-4 font-mono text-sm text-[#b7c3d4] space-y-3">
                  <h4 className="font-bold text-[#e6edf5]"># Arah Penelitian Definitif</h4>
                  <p>**Topik:** Dampak Implementasi AI dalam Pembelajaran...</p>
                  <p>**Ruang Lingkup:** Pendidikan tinggi di Indonesia...</p>
                  <p>**Metodologi:** Penelitian kualitatif dengan pendekatan...</p>
                  <div className="text-xs text-[#8fa1b8] mt-4 pt-3 border-t border-[#2a3a4f]">
                    Generated • 2 minutes ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-6 py-20 text-center">
        <h2
          className="text-4xl md:text-5xl font-black mb-4 leading-tight"
          style={{
            color: theme === "light" ? "#0f172a" : "#e6edf5",
          }}
        >
          AI yang akan <span className="text-[#ff6a00] font-bold">bekerja dengan Anda</span>,
        </h2>
        <h2
          className="text-4xl md:text-5xl font-black mb-16 leading-tight"
          style={{
            color: theme === "light" ? "#0f172a" : "#e6edf5",
          }}
        >
          bukan menggantikan Anda
        </h2>

        <p
          className="text-lg text-[#b7c3d4] mb-16 font-medium"
          style={{
            color: theme === "light" ? "#334155" : "#b7c3d4",
          }}
        >
          MAKALAH AI hadir dengan <span className="text-[#ff6a00] font-bold">alur SOLC</span>
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            className="rounded-none bg-gradient-to-b from-[#111824] to-[#0e141b] border-[#2a3a4f] p-8 transition-all hover:-translate-y-1"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                  : "linear-gradient(to bottom, #111824, #0e141b)",
              borderColor: theme === "light" ? "#d7dee7" : "#33465f",
            }}
          >
            <div
              className="w-14 h-14 bg-gradient-to-br from-[#ff802b] to-[#e85c00] flex items-center justify-center mb-6 mx-auto"
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#1b2838",
                borderColor: theme === "light" ? "#c8d3e0" : "#33465f",
              }}
            >
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3
              className="text-xl font-bold mb-4 text-[#e6edf5]"
              style={{
                color: theme === "light" ? "#0f172a" : "#e6edf5",
              }}
            >
              Pemahaman dan Perencanaan
            </h3>
            <p
              className="text-[#b7c3d4] leading-relaxed"
              style={{
                color: theme === "light" ? "#334155" : "#b7c3d4",
              }}
            >
              Delegasi memerlukan pemahaman dan perencanaan yang mendalam. Buat rencana yang jelas.
            </p>
          </Card>

          <Card
            className="rounded-none bg-gradient-to-b from-[#111824] to-[#0e141b] border-[#2a3a4f] p-8 transition-all hover:-translate-y-1"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                  : "linear-gradient(to bottom, #111824, #0e141b)",
              borderColor: theme === "light" ? "#d7dee7" : "#33465f",
            }}
          >
            <div
              className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center mb-6 mx-auto"
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#1b2838",
                borderColor: theme === "light" ? "#c8d3e0" : "#33465f",
              }}
            >
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3
              className="text-xl font-bold mb-4 text-[#e6edf5]"
              style={{
                color: theme === "light" ? "#0f172a" : "#e6edf5",
              }}
            >
              Manajemen PR yang Cerdas
            </h3>
            <p
              className="text-[#b7c3d4] leading-relaxed"
              style={{
                color: theme === "light" ? "#334155" : "#b7c3d4",
              }}
            >
              Melampaui otomatisasi dan berpikir tentang cara kerja yang lebih cerdas dan efisien.
            </p>
          </Card>

          <Card
            className="rounded-none bg-gradient-to-b from-[#111824] to-[#0e141b] border-[#2a3a4f] p-8 transition-all hover:-translate-y-1"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                  : "linear-gradient(to bottom, #111824, #0e141b)",
              borderColor: theme === "light" ? "#d7dee7" : "#33465f",
            }}
          >
            <div
              className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-6 mx-auto"
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#1b2838",
                borderColor: theme === "light" ? "#c8d3e0" : "#33465f",
              }}
            >
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h3
              className="text-xl font-bold mb-4 text-[#e6edf5]"
              style={{
                color: theme === "light" ? "#0f172a" : "#e6edf5",
              }}
            >
              Respons Insiden
            </h3>
            <p
              className="text-[#b7c3d4] leading-relaxed"
              style={{
                color: theme === "light" ? "#334155" : "#b7c3d4",
              }}
            >
              Buat seolah-olah menyelesaikan tugas yang memerlukan konteks dari seluruh basis kode Anda.
            </p>
          </Card>
        </div>
      </section>

      <section className="px-6 py-20 text-center flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            style={{
              color: theme === "light" ? "#0f172a" : "#e6edf5",
            }}
          >
            Siap untuk menulis makalah akademik yang lebih baik?
          </h2>
          <p
            className="text-xl text-[#b7c3d4] mb-8 leading-relaxed"
            style={{
              color: theme === "light" ? "#334155" : "#b7c3d4",
            }}
          >
            Bergabunglah dengan ribuan peneliti dan mahasiswa yang telah mempercayai MAKALAH AI untuk menghasilkan karya
            akademik berkualitas tinggi.
          </p>
          <div className="flex justify-center mb-12">
            <Link href="/tutorial">
              <Button
                className="rounded-none text-white font-medium px-8 py-4 text-lg transition-all hover:-translate-y-1 hover:scale-105 border-2"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "var(--accent-500)",
                  color: "var(--accent-500)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-500)"
                  e.currentTarget.style.color = "white"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = "var(--accent-500)"
                }}
              >
                Lihat Tutorial
              </Button>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="relative group cursor-pointer overflow-hidden border-2 transition-all hover:-translate-y-2"
              style={{
                borderColor: theme === "light" ? "#d7dee7" : "#33465f",
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <img
                  src="/youtube-tutorial-thumbnail-for-academic-paper-writ.png"
                  alt="Tutorial: Cara Menulis Makalah Akademik dengan MAKALAH AI"
                  className="w-full h-full object-cover"
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "var(--accent-500)" }}
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Video duration badge */}
                <div
                  className="absolute bottom-4 right-4 px-2 py-1 text-white text-sm font-medium"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                >
                  12:34
                </div>
              </div>

              {/* Video title and description */}
              <div
                className="p-6 border-t"
                style={{
                  backgroundColor: theme === "light" ? "#ffffff" : "#111824",
                  borderColor: theme === "light" ? "#d7dee7" : "#33465f",
                }}
              >
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    color: theme === "light" ? "#0f172a" : "#e6edf5",
                  }}
                >
                  Tutorial Lengkap: Menulis Makalah Akademik dengan MAKALAH AI
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: theme === "light" ? "#64748b" : "#b7c3d4",
                  }}
                >
                  Pelajari cara menggunakan platform MAKALAH AI untuk menghasilkan makalah akademik berkualitas tinggi
                  melalui 7 fase terstruktur dengan panduan AI yang cerdas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-16 border-t"
        style={{
          backgroundColor: theme === "light" ? "var(--bg-850)" : "var(--bg-800)",
          borderColor: theme === "light" ? "var(--line-500)" : "var(--line-500)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-48 mb-12 text-center md:text-left">
            {/* Sumber Daya Column */}
            <div>
              <h3
                className="text-lg font-bold mb-6"
                style={{
                  color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                }}
              >
                Sumber Daya
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/docs"
                    className="transition-colors hover:text-[#ff6a00]"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    Dokumentasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorial"
                    className="transition-colors hover:text-[#ff6a00]"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    Tutorial Video
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="transition-colors hover:text-[#ff6a00]"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="transition-colors hover:text-[#ff6a00]"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Perusahaan Column */}
            <div>
              <h3
                className="text-lg font-bold mb-6"
                style={{
                  color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                }}
              >
                Perusahaan
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-[#ff6a00]"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#bergabung-dengan-tim"
                    className="transition-colors hover:text-[#ff6a00]"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    Karir
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#hubungi-kami"
                    className="transition-colors hover:text-[#ff6a00]"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    Kontak
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs#privacy-policy"
                    className="transition-colors hover:text-[#ff6a00]"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    Kebijakan Privasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
