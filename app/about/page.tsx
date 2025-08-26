"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Award, BookOpen, Zap, Mail, Briefcase } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import GlobalHeader from "@/components/global-header"

export default function TentangPage() {
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
    { label: "Tentang", href: "/about" },
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
            Tentang <span style={{ color: "var(--accent-500)" }}>MAKALAH AI</span>
          </h1>
          <p
            className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{
              color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
            }}
          >
            Platform kolaborasi penulisan makalah akademik berbahasa Indonesia yang menggunakan kecerdasan buatan untuk
            membantu peneliti dan mahasiswa menghasilkan karya akademik berkualitas tinggi melalui metodologi
            terstruktur.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card
              className="rounded-none p-8 border transition-all hover:-translate-y-1"
              style={{
                background:
                  theme === "light"
                    ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                    : "linear-gradient(to bottom, #111824, #0e141b)",
                borderColor: theme === "light" ? "#d7dee7" : "#33465f",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#ff802b] to-[#e85c00] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                }}
              >
                Misi Kami
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                }}
              >
                Memberdayakan peneliti dan mahasiswa Indonesia dengan teknologi AI yang membantu menghasilkan makalah
                akademik berkualitas tinggi, sambil mempertahankan integritas akademik dan kreativitas manusia dalam
                proses penulisan.
              </p>
            </Card>

            <Card
              className="rounded-none p-8 border transition-all hover:-translate-y-1"
              style={{
                background:
                  theme === "light"
                    ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                    : "linear-gradient(to bottom, #111824, #0e141b)",
                borderColor: theme === "light" ? "#d7dee7" : "#33465f",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                }}
              >
                Visi Kami
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                }}
              >
                Menjadi platform terdepan dalam penulisan akademik berbasis AI di Indonesia, yang memungkinkan setiap
                peneliti dan mahasiswa untuk menghasilkan karya ilmiah yang berkualitas dengan efisiensi dan akurasi
                tinggi.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            style={{
              color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
            }}
          >
            Pendekatan <span style={{ color: "var(--accent-500)" }}>7 Fase Terstruktur</span>
          </h2>
          <p
            className="text-xl mb-16 max-w-3xl mx-auto leading-relaxed"
            style={{
              color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
            }}
          >
            MAKALAH AI menggunakan metodologi SOLC (Structured Outline Learning Cycle) yang membagi proses penulisan
            menjadi 7 fase yang sistematis dan terukur.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                phase: "Fase 1-2",
                title: "Klarifikasi & Perencanaan",
                description: "Mendefinisikan topik penelitian dan menyusun kerangka kerja yang solid",
                icon: Target,
                color: "from-[#ff802b] to-[#e85c00]",
              },
              {
                phase: "Fase 3-4",
                title: "Penelitian & Analisis",
                description: "Melakukan tinjauan literatur dan mengembangkan kerangka teoretis",
                icon: BookOpen,
                color: "from-[#3b82f6] to-[#1d4ed8]",
              },
              {
                phase: "Fase 5-7",
                title: "Penulisan & Finalisasi",
                description: "Menyusun metodologi, analisis data, dan kesimpulan penelitian",
                icon: Zap,
                color: "from-[#10b981] to-[#059669]",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="rounded-none p-8 border transition-all hover:-translate-y-1"
                style={{
                  background:
                    theme === "light"
                      ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                      : "linear-gradient(to bottom, #111824, #0e141b)",
                  borderColor: theme === "light" ? "#d7dee7" : "#33465f",
                }}
              >
                <Badge
                  className="rounded-none text-white text-xs font-medium px-3 py-1 mb-4"
                  style={{ backgroundColor: "var(--accent-500)" }}
                >
                  {item.phase}
                </Badge>
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 mx-auto`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{
                    color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                  }}
                >
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black mb-16 text-center leading-tight"
            style={{
              color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
            }}
          >
            Nilai-Nilai <span style={{ color: "var(--accent-500)" }}>Kami</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Integritas Akademik",
                description:
                  "Kami berkomitmen untuk mempertahankan standar etika akademik tertinggi. AI kami dirancang untuk membantu, bukan menggantikan proses berpikir kritis dan kreativitas peneliti.",
                icon: Award,
              },
              {
                title: "Kolaborasi Manusia-AI",
                description:
                  "Kami percaya pada kekuatan kolaborasi antara kecerdasan manusia dan buatan. Platform kami memungkinkan kontrol penuh di tangan pengguna dengan dukungan AI yang cerdas.",
                icon: Users,
              },
              {
                title: "Kualitas & Akurasi",
                description:
                  "Setiap fitur yang kami kembangkan berfokus pada peningkatan kualitas dan akurasi penulisan akademik, dengan mempertimbangkan standar internasional dan lokal.",
                icon: Target,
              },
              {
                title: "Aksesibilitas",
                description:
                  "Kami berkomitmen untuk membuat teknologi penulisan akademik canggih dapat diakses oleh semua kalangan peneliti dan mahasiswa di Indonesia.",
                icon: BookOpen,
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="rounded-none p-8 border transition-all hover:-translate-y-1"
                style={{
                  background:
                    theme === "light"
                      ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                      : "linear-gradient(to bottom, #111824, #0e141b)",
                  borderColor: theme === "light" ? "#d7dee7" : "#33465f",
                }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#ff802b] to-[#e85c00] flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{
                    color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                  }}
                >
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            style={{
              color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
            }}
          >
            Bergabunglah dengan <span style={{ color: "var(--accent-500)" }}>Revolusi</span> Penulisan Akademik
          </h2>
          <p
            className="text-xl mb-8 leading-relaxed"
            style={{
              color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
            }}
          >
            Mulai perjalanan penulisan akademik Anda dengan dukungan AI yang cerdas dan metodologi yang terbukti
            efektif.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/chat">
              <Button
                className="rounded-none text-white font-medium px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105"
                style={{
                  backgroundColor: "var(--accent-500)",
                  background: "linear-gradient(135deg, var(--accent-400), var(--accent-600))",
                }}
              >
                Mulai Menulis
              </Button>
            </Link>
            <Link href="/docs">
              <Button
                className="rounded-none text-white font-medium px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105 border-2"
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
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Career Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Section */}
            <Card
              id="hubungi-kami"
              className="rounded-none p-8 border transition-all hover:-translate-y-1"
              style={{
                background:
                  theme === "light"
                    ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                    : "linear-gradient(to bottom, #111824, #0e141b)",
                borderColor: theme === "light" ? "#d7dee7" : "#33465f",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                }}
              >
                Hubungi Kami
              </h3>
              <p
                className="leading-relaxed mb-6"
                style={{
                  color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                }}
              >
                Punya pertanyaan, saran, atau ingin berkolaborasi? Tim kami siap membantu Anda. Jangan ragu untuk
                menghubungi kami kapan saja.
              </p>
              <a href="mailto:contact@makalah.ai" target="_blank" rel="noopener noreferrer">
                <Button
                  className="rounded-none text-white font-medium px-6 py-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--accent-500)",
                    background: "linear-gradient(135deg, var(--accent-400), var(--accent-600))",
                  }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  contact@makalah.ai
                </Button>
              </a>
            </Card>

            {/* Career Section */}
            <Card
              id="bergabung-dengan-tim"
              className="rounded-none p-8 border transition-all hover:-translate-y-1"
              style={{
                background:
                  theme === "light"
                    ? "linear-gradient(to bottom, #ffffff, #f8fafc)"
                    : "linear-gradient(to bottom, #111824, #0e141b)",
                borderColor: theme === "light" ? "#d7dee7" : "#33465f",
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                }}
              >
                Bergabung dengan Tim
              </h3>
              <p
                className="leading-relaxed mb-6"
                style={{
                  color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                }}
              >
                Kami selalu mencari talenta terbaik untuk bergabung dalam misi mengembangkan teknologi penulisan
                akademik. Mari bersama membangun masa depan pendidikan Indonesia.
              </p>
              <div className="space-y-3">
                <div
                  className="text-sm font-medium"
                  style={{
                    color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                  }}
                >
                  Posisi yang tersedia:
                </div>
                <ul
                  className="text-sm space-y-2"
                  style={{
                    color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                  }}
                >
                  <li>• AI/ML Engineer</li>
                  <li>• Full-Stack Developer</li>
                  <li>• Academic Content Specialist</li>
                  <li>• Product Manager</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
