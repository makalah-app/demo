"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import GlobalHeader from "@/components/global-header"

export default function BlogPage() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("makalah.theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.style.colorScheme = savedTheme
  }, [])

  const customNavItems = [
    { label: "Dokumentasi", href: "/docs" },
    { label: "Tutorial", href: "/tutorial" },
    { label: "Tentang", href: "/about" },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Panduan Lengkap Metodologi Penulisan Akademik dengan AI",
      excerpt: "Pelajari bagaimana memanfaatkan kekuatan AI untuk mengoptimalkan proses penulisan akademik melalui 7 fase terstruktur yang telah terbukti efektif.",
      date: "27 Agustus 2025",
      category: "Metodologi",
      readTime: "8 menit",
      featured: true,
    },
    {
      id: 2,
      title: "Tips Mengoptimalkan Riset Literatur dengan Bantuan AI",
      excerpt: "Strategi efektif untuk mempercepat proses riset literatur dan analisis sumber menggunakan teknologi AI terkini.",
      date: "26 Agustus 2025",
      category: "Riset",
      readTime: "6 menit",
      featured: false,
    },
    {
      id: 3,
      title: "Menyusun Kerangka Teoritis yang Kuat untuk Makalah Akademik",
      excerpt: "Langkah-langkah praktis dalam membangun fondasi teoritis yang solid sebagai dasar penelitian akademik berkualitas.",
      date: "25 Agustus 2025",
      category: "Teori",
      readTime: "7 menit",
      featured: false,
    },
    {
      id: 4,
      title: "Analisis Data Kualitatif vs Kuantitatif: Kapan Menggunakan Masing-masing?",
      excerpt: "Panduan komprehensif untuk memilih metodologi analisis data yang tepat sesuai dengan jenis penelitian dan tujuan akademik.",
      date: "24 Agustus 2025",
      category: "Analisis",
      readTime: "9 menit",
      featured: true,
    },
    {
      id: 5,
      title: "Menulis Kesimpulan yang Impactful untuk Makalah Penelitian",
      excerpt: "Teknik menulis kesimpulan yang tidak hanya merangkum temuan, tetapi juga memberikan kontribusi nyata bagi bidang studi.",
      date: "23 Agustus 2025",
      category: "Penulisan",
      readTime: "5 menit",
      featured: false,
    },
    {
      id: 6,
      title: "Etika Penggunaan AI dalam Penulisan Akademik",
      excerpt: "Memahami batasan dan prinsip etis dalam memanfaatkan teknologi AI untuk mendukung integritas akademik.",
      date: "22 Agustus 2025",
      category: "Etika",
      readTime: "6 menit",
      featured: false,
    },
  ]

  const categories = ["Semua", "Metodologi", "Riset", "Teori", "Analisis", "Penulisan", "Etika"]
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  const filteredPosts = selectedCategory === "Semua" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme === "light" ? "var(--bg-900)" : "var(--bg-900)",
        color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
      }}
    >
      <GlobalHeader showNavigation={true} customNavItems={customNavItems} />

      {/* Featured Article Headline */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <article 
            className="p-8 mb-16 transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: theme === "light" ? "var(--bg-850)" : "var(--bg-850)",
              border: `1px solid ${theme === "light" ? "var(--line-500)" : "var(--line-500)"}`,
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="px-4 py-2 text-sm font-medium rounded-full"
                    style={{
                      backgroundColor: "var(--accent-500)",
                      color: "white",
                    }}
                  >
                    Metodologi
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      color: theme === "light" ? "var(--text-300)" : "var(--text-300)",
                    }}
                  >
                    8 menit
                  </span>
                </div>
                <h1
                  className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                  style={{
                    color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                  }}
                >
                  Panduan Lengkap Metodologi Penulisan Akademik dengan AI
                </h1>
                <p
                  className="text-lg mb-6 leading-relaxed"
                  style={{
                    color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                  }}
                >
                  Pelajari bagaimana memanfaatkan kekuatan AI untuk mengoptimalkan proses penulisan akademik melalui 7 fase terstruktur yang telah terbukti efektif.
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm"
                    style={{
                      color: theme === "light" ? "var(--text-300)" : "var(--text-300)",
                    }}
                  >
                    27 Agustus 2025
                  </span>
                  <Link
                    href="/blog/1"
                    className="font-medium hover:underline text-lg"
                    style={{
                      color: "var(--accent-500)",
                    }}
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src="/7-phases-academic-writing-methodology.png"
                  alt="7 Fase Metodologi Penulisan Akademik"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                  style={{
                    border: `1px solid ${theme === "light" ? "var(--line-500)" : "var(--line-500)"}`,
                  }}
                />
              </div>
            </div>
          </article>
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

      {/* All Posts */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{
              color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
            }}
          >
            {selectedCategory === "Semua" ? "Semua Artikel" : `Artikel ${selectedCategory}`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="p-6 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: theme === "light" ? "var(--bg-850)" : "var(--bg-850)",
                  border: `1px solid ${theme === "light" ? "var(--line-500)" : "var(--line-500)"}`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="px-3 py-1 text-sm font-medium"
                    style={{
                      backgroundColor: post.featured ? "var(--accent-500)" : "transparent",
                      color: post.featured ? "white" : "var(--accent-500)",
                      border: post.featured ? "none" : "1px solid var(--accent-500)",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      color: theme === "light" ? "var(--text-300)" : "var(--text-300)",
                    }}
                  >
                    {post.readTime}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  className="mb-4 leading-relaxed text-sm"
                  style={{
                    color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                  }}
                >
                  {post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + "..." : post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm"
                    style={{
                      color: theme === "light" ? "var(--text-300)" : "var(--text-300)",
                    }}
                  >
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-sm font-medium hover:underline"
                    style={{
                      color: "var(--accent-500)",
                    }}
                  >
                    Baca →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
            }}
          >
            Dapatkan Update Artikel Terbaru
          </h2>
          <p
            className="text-lg mb-8"
            style={{
              color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
            }}
          >
            Berlangganan newsletter kami untuk mendapatkan tips dan panduan penulisan akademik terbaru langsung di inbox Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-4 py-3 text-sm"
              style={{
                backgroundColor: theme === "light" ? "var(--bg-800)" : "var(--bg-800)",
                border: `1px solid ${theme === "light" ? "var(--line-500)" : "var(--line-500)"}`,
                color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
              }}
            />
            <button
              className="px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105"
              style={{
                backgroundColor: "var(--accent-500)",
              }}
            >
              Berlangganan
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
