"use client"

import { useState, useEffect } from "react"
import GlobalHeader from "@/components/global-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Eye } from "lucide-react"

export default function TutorialPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const savedTheme = (localStorage.getItem("makalah.theme") as "light" | "dark") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.style.colorScheme = savedTheme

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

  const tutorials = [
    {
      id: 1,
      title: "Pengenalan MAKALAH AI - Memulai Perjalanan Akademik Anda",
      description: "Pelajari dasar-dasar platform MAKALAH AI dan cara memulai proyek penulisan akademik pertama Anda.",
      duration: "12:34",
      views: "2.1K",
      category: "Pemula",
      thumbnail: "/academic-writing-introduction-tutorial.png",
      featured: true,
    },
    {
      id: 2,
      title: "7 Fase Penulisan Akademik - Panduan Lengkap",
      description: "Memahami metodologi 7 fase terstruktur dalam penulisan makalah akademik dengan bantuan AI.",
      duration: "18:45",
      views: "1.8K",
      category: "Metodologi",
      thumbnail: "/7-phases-academic-writing-methodology.png",
      featured: true,
    },
    {
      id: 3,
      title: "Fase 1: Klarifikasi Topik dan Ruang Lingkup",
      description: "Cara mendefinisikan topik penelitian yang jelas dan menentukan ruang lingkup yang tepat.",
      duration: "15:22",
      views: "1.5K",
      category: "Fase 1",
      thumbnail: "/topic-clarification-research-scope.png",
    },
    {
      id: 4,
      title: "Fase 2: Riset Literatur dan Analisis Sumber",
      description: "Teknik pencarian literatur yang efektif dan cara menganalisis sumber akademik berkualitas.",
      duration: "22:18",
      views: "1.3K",
      category: "Fase 2",
      thumbnail: "/literature-review-research-analysis.png",
    },
    {
      id: 5,
      title: "Fase 3: Kerangka Teoritis dan Konseptual",
      description: "Membangun fondasi teoritis yang kuat untuk mendukung argumen penelitian Anda.",
      duration: "19:56",
      views: "1.1K",
      category: "Fase 3",
      thumbnail: "/theoretical-framework-conceptual-model.png",
    },
    {
      id: 6,
      title: "Fase 4: Metodologi Penelitian",
      description: "Memilih dan menerapkan metodologi penelitian yang sesuai dengan topik Anda.",
      duration: "25:43",
      views: "980",
      category: "Fase 4",
      thumbnail: "/research-methodology-design.png",
    },
    {
      id: 7,
      title: "Fase 5: Analisis Data dan Temuan",
      description: "Teknik analisis data kualitatif dan kuantitatif untuk menghasilkan temuan yang valid.",
      duration: "28:12",
      views: "856",
      category: "Fase 5",
      thumbnail: "/data-analysis-research-findings.png",
    },
    {
      id: 8,
      title: "Fase 6: Pembahasan dan Interpretasi",
      description: "Cara menginterpretasi hasil penelitian dan menghubungkannya dengan teori yang ada.",
      duration: "21:37",
      views: "742",
      category: "Fase 6",
      thumbnail: "/research-discussion-interpretation.png",
    },
    {
      id: 9,
      title: "Fase 7: Kesimpulan dan Rekomendasi",
      description: "Menyusun kesimpulan yang kuat dan memberikan rekomendasi untuk penelitian selanjutnya.",
      duration: "16:29",
      views: "698",
      category: "Fase 7",
      thumbnail: "/conclusion-recommendations-research.png",
    },
    {
      id: 10,
      title: "Tips Kolaborasi dengan AI Agent",
      description: "Strategi efektif untuk berkolaborasi dengan AI agent dalam proses penulisan akademik.",
      duration: "14:55",
      views: "1.2K",
      category: "Tips",
      thumbnail: "/ai-collaboration-academic-writing-tips.png",
    },
    {
      id: 11,
      title: "Mengelola Artifact dan Versi Dokumen",
      description: "Cara mengelola artifact penelitian dan melacak perubahan versi dokumen dengan efisien.",
      duration: "11:48",
      views: "567",
      category: "Tips",
      thumbnail: "/document-management-version-control.png",
    },
    {
      id: 12,
      title: "Troubleshooting: Mengatasi Masalah Umum",
      description: "Solusi untuk masalah umum yang sering dihadapi pengguna MAKALAH AI.",
      duration: "13:26",
      views: "423",
      category: "Troubleshooting",
      thumbnail: "/troubleshooting-common-problems-solutions.png",
    },
  ]

  const categories = [
    "Semua",
    "Pemula",
    "Metodologi",
    "Fase 1",
    "Fase 2",
    "Fase 3",
    "Fase 4",
    "Fase 5",
    "Fase 6",
    "Fase 7",
    "Tips",
    "Troubleshooting",
  ]
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  const filteredTutorials =
    selectedCategory === "Semua" ? tutorials : tutorials.filter((tutorial) => tutorial.category === selectedCategory)

  const featuredTutorials = tutorials.filter((tutorial) => tutorial.featured)

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
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{
              color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
            }}
          >
            Tutorial <span style={{ color: "var(--accent-500)" }}>MAKALAH AI</span>
          </h1>
          <p
            className="text-xl mb-8 leading-relaxed"
            style={{
              color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
            }}
          >
            Pelajari cara menggunakan platform MAKALAH AI untuk menghasilkan karya akademik berkualitas tinggi melalui
            tutorial video komprehensif.
          </p>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl font-bold mb-8"
            style={{
              color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
            }}
          >
            Tutorial Unggulan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredTutorials.map((tutorial) => (
              <Card
                key={tutorial.id}
                className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 rounded-none"
                style={{
                  backgroundColor: theme === "light" ? "var(--bg-850)" : "var(--bg-800)",
                  borderColor: theme === "light" ? "var(--line-500)" : "var(--line-500)",
                }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={tutorial.thumbnail || "/placeholder.svg"}
                    alt={tutorial.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <div
                      className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform rounded-none"
                      style={{ backgroundColor: "var(--accent-500)" }}
                    >
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="text-white font-medium" style={{ backgroundColor: "var(--accent-500)" }}>
                      Unggulan
                    </Badge>
                  </div>
                  <div
                    className="absolute bottom-4 right-4 px-2 py-1 text-white text-sm font-medium"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                  >
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className="text-xs"
                      style={{
                        borderColor: "var(--accent-500)",
                        color: "var(--accent-500)",
                      }}
                    >
                      {tutorial.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm" style={{ color: "var(--text-200)" }}>
                      <Eye className="w-4 h-4" />
                      {tutorial.views}
                    </div>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors"
                    style={{
                      color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                    }}
                  >
                    {tutorial.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    {tutorial.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category ? "text-white" : "hover:scale-105"
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? "var(--accent-500)" : "transparent",
                  borderColor: "var(--accent-500)",
                  color: selectedCategory === category ? "white" : "var(--accent-500)",
                  border: "1px solid var(--accent-500)",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Gallery */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <Card
                key={tutorial.id}
                className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 rounded-none"
                style={{
                  backgroundColor: theme === "light" ? "var(--bg-850)" : "var(--bg-800)",
                  borderColor: theme === "light" ? "var(--line-500)" : "var(--line-500)",
                }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={tutorial.thumbnail || "/placeholder.svg"}
                    alt={tutorial.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <div
                      className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform rounded-none"
                      style={{ backgroundColor: "var(--accent-500)" }}
                    >
                      <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div
                    className="absolute bottom-3 right-3 px-2 py-1 text-white text-xs font-medium"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                  >
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className="text-xs"
                      style={{
                        borderColor: "var(--accent-500)",
                        color: "var(--accent-500)",
                      }}
                    >
                      {tutorial.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs" style={{ color: "var(--text-200)" }}>
                      <Eye className="w-3 h-3" />
                      {tutorial.views}
                    </div>
                  </div>
                  <h3
                    className="text-base font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2"
                    style={{
                      color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                    }}
                  >
                    {tutorial.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed line-clamp-2"
                    style={{
                      color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                    }}
                  >
                    {tutorial.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
