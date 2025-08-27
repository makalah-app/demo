"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Book, FileText, Zap, Settings, Users, HelpCircle, Search } from "lucide-react"
import GlobalHeader from "@/components/global-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DokumentasiPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [activeSection, setActiveSection] = useState("welcome")

  useEffect(() => {
    const savedTheme = (localStorage.getItem("makalah.theme") as "light" | "dark") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.style.colorScheme = savedTheme
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash === "privacy-policy") {
        setActiveSection("privacy-policy")
      } else if (hash === "faq") {
        setActiveSection("faq")
      }
    }

    // Check hash on component mount
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const customNavItems = [
    { label: "Dokumentasi", href: "/docs" },
    { label: "Tutorial", href: "/tutorial" },
    { label: "Tentang", href: "/about" },
  ]

  const navigationSections = [
    {
      title: "Mulai",
      items: [
        { id: "welcome", label: "Selamat Datang", icon: Book },
        { id: "installation", label: "Instalasi", icon: Settings },
        { id: "quickstart", label: "Panduan Cepat", icon: Zap },
        { id: "concepts", label: "Konsep Dasar", icon: FileText },
      ],
    },
    {
      title: "Fitur Utama",
      items: [
        { id: "chat-agent", label: "Chat dengan Agent", icon: Users },
        { id: "artifact-system", label: "Sistem Artifact", icon: FileText },
        { id: "approval-gates", label: "Approval Gates", icon: Settings },
        { id: "collaboration", label: "Kolaborasi", icon: Users },
      ],
    },
    {
      title: "Panduan Lanjutan",
      items: [
        { id: "7-phases", label: "7 Fase Penulisan", icon: Book },
        { id: "best-practices", label: "Best Practices", icon: Zap },
        { id: "troubleshooting", label: "Troubleshooting", icon: HelpCircle },
        { id: "faq", label: "FAQ", icon: HelpCircle },
        { id: "privacy-policy", label: "Kebijakan Privasi", icon: FileText },
      ],
    },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "welcome":
        return (
          <div className="space-y-8">
            <div>
              <div className="text-sm text-gray-400 mb-2">Mulai</div>
              <h1 className="text-4xl font-bold mb-4" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                Selamat Datang
              </h1>
              <p className="text-lg mb-8" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                Pelajari tentang Makalah AI dan cara memulai menulis makalah akademik yang lebih baik
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                Makalah AI adalah platform kolaborasi penulisan makalah akademik berbasis AI yang memandu Anda melalui 7
                fase terstruktur untuk menghasilkan karya akademik berkualitas tinggi. Platform ini dirancang khusus
                untuk peneliti dan mahasiswa Indonesia yang ingin meningkatkan kualitas penulisan akademik mereka.
              </p>

              <div
                className="p-6 border-l-4 my-8"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "var(--accent-500)",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--accent-500)" }}>
                  Fitur Utama
                </h3>
                <ul className="space-y-2" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  <li>
                    • <strong>Chat dengan AI Agent</strong> - Berinteraksi langsung dengan AI untuk panduan penulisan
                  </li>
                  <li>
                    • <strong>Sistem Artifact</strong> - Kelola dokumen dan file penelitian dengan mudah
                  </li>
                  <li>
                    • <strong>7 Fase Terstruktur</strong> - Proses penulisan yang sistematis dan terarah
                  </li>
                  <li>
                    • <strong>Approval Gates</strong> - Kontrol kualitas di setiap tahap penulisan
                  </li>
                  <li>
                    • <strong>Kolaborasi Real-time</strong> - Bekerja sama dengan tim peneliti lainnya
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div
                  className="p-6 border rounded-[3px]"
                  style={{
                    backgroundColor: theme === "light" ? "#ffffff" : "#1b2838",
                    borderColor: theme === "light" ? "#d7dee7" : "#33465f",
                  }}
                >
                  <Zap className="w-8 h-8 mb-4" style={{ color: "var(--accent-500)" }} />
                  <h3 className="text-lg font-bold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                    Panduan Cepat
                  </h3>
                  <p className="text-sm" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                    Mulai menulis makalah pertama Anda dalam 5 menit dengan panduan langkah demi langkah.
                  </p>
                  <Button
                    className="mt-4 text-sm rounded-[3px]"
                    style={{ backgroundColor: "var(--accent-500)", color: "white" }}
                    onClick={() => setActiveSection("quickstart")}
                  >
                    Mulai Sekarang
                  </Button>
                </div>

                <div
                  className="p-6 border rounded-[3px]"
                  style={{
                    backgroundColor: theme === "light" ? "#ffffff" : "#1b2838",
                    borderColor: theme === "light" ? "#d7dee7" : "#33465f",
                  }}
                >
                  <Book className="w-8 h-8 mb-4" style={{ color: "var(--accent-500)" }} />
                  <h3 className="text-lg font-bold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                    7 Fase Penulisan
                  </h3>
                  <p className="text-sm" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                    Pelajari penggunaan metode structured outline learning cycle yang telah terbukti efektif untuk penulisan akademik.
                  </p>
                  <Button
                    className="mt-4 text-sm rounded-[3px]"
                    style={{ backgroundColor: "var(--accent-500)", color: "white" }}
                    onClick={() => setActiveSection("7-phases")}
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      case "quickstart":
        return (
          <div className="space-y-8">
            <div>
              <div className="text-sm text-gray-400 mb-2">Mulai</div>
              <h1 className="text-4xl font-bold mb-4" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                Panduan Cepat
              </h1>
              <p className="text-lg mb-8" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                Mulai menulis makalah akademik pertama Anda dalam 5 menit
              </p>
            </div>

            <div className="space-y-6">
              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "var(--accent-500)",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--accent-500)" }}>
                  Langkah 1: Mulai Chat Baru
                </h3>
                <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  Klik tombol "Chat Baru" di sidebar atau gunakan tombol "Chat With Agent" di halaman utama. Jelaskan
                  topik makalah yang ingin Anda tulis dengan detail.
                </p>
              </div>

              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "#10b981",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#10b981" }}>
                  Langkah 2: Klarifikasi Topik
                </h3>
                <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  AI Agent akan membantu Anda mengklarifikasi topik penelitian, ruang lingkup, dan metodologi yang akan
                  digunakan. Berikan feedback yang jelas untuk hasil yang optimal.
                </p>
              </div>

              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "#3b82f6",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#3b82f6" }}>
                  Langkah 3: Review dan Approve
                </h3>
                <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  Setiap fase akan menghasilkan artifact yang dapat Anda review. Gunakan tombol "Setujui" untuk
                  melanjutkan atau "Perlu Revisi" untuk memberikan feedback tambahan.
                </p>
              </div>
            </div>
          </div>
        )

      case "7-phases":
        return (
          <div className="space-y-8">
            <div>
              <div className="text-sm text-gray-400 mb-2">Panduan Lanjutan</div>
              <h1 className="text-4xl font-bold mb-4" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                7 Fase Penulisan
              </h1>
              <p className="text-lg mb-8" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                Penggunaan metode structured outline learning cycle yang sistematis untuk menghasilkan makalah akademik berkualitas tinggi
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  phase: 1,
                  title: "Klarifikasi Topik",
                  desc: "Mendefinisikan topik penelitian dengan jelas dan spesifik",
                },
                { phase: 2, title: "Kerangka Penelitian", desc: "Menyusun struktur dan metodologi penelitian" },
                { phase: 3, title: "Literature Review", desc: "Menganalisis dan mensintesis literatur yang relevan" },
                { phase: 4, title: "Pengumpulan Data", desc: "Merancang dan melaksanakan pengumpulan data" },
                { phase: 5, title: "Analisis Data", desc: "Menganalisis data dengan metode yang tepat" },
                { phase: 6, title: "Penulisan Draft", desc: "Menyusun draft lengkap makalah akademik" },
                { phase: 7, title: "Review & Finalisasi", desc: "Review akhir dan penyempurnaan makalah" },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="p-6 border rounded-[3px]"
                  style={{
                    backgroundColor: theme === "light" ? "#ffffff" : "#1b2838",
                    borderColor: theme === "light" ? "#d7dee7" : "#33465f",
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="w-8 h-8 rounded-[3px] flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: "var(--accent-500)" }}
                    >
                      {item.phase}
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case "privacy-policy":
        return (
          <div className="space-y-8" id="privacy-policy">
            <div>
              <div className="text-sm text-gray-400 mb-2">Panduan Lanjutan</div>
              <h1 className="text-4xl font-bold mb-4" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                Kebijakan Privasi
              </h1>
              <p className="text-lg mb-8" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                Komitmen kami dalam melindungi privasi dan data pengguna Makalah AI
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "var(--accent-500)",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--accent-500)" }}>
                  Informasi yang Kami Kumpulkan
                </h3>
                <ul className="space-y-2" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  <li>• Data akun pengguna (nama, email, preferensi)</li>
                  <li>• Konten makalah dan dokumen yang dibuat</li>
                  <li>• Riwayat interaksi dengan AI Agent</li>
                  <li>• Data penggunaan platform untuk peningkatan layanan</li>
                </ul>
              </div>

              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "#10b981",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#10b981" }}>
                  Penggunaan Data
                </h3>
                <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  Data yang dikumpulkan digunakan untuk menyediakan layanan penulisan akademik, meningkatkan kualitas AI
                  Agent, dan memberikan pengalaman pengguna yang lebih baik. Kami tidak akan membagikan konten makalah
                  Anda kepada pihak ketiga tanpa persetujuan eksplisit.
                </p>
              </div>

              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "#3b82f6",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#3b82f6" }}>
                  Keamanan Data
                </h3>
                <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  Kami menggunakan enkripsi end-to-end untuk melindungi data Anda. Semua komunikasi dengan server
                  menggunakan protokol HTTPS dan data disimpan dengan standar keamanan tinggi. Akses ke data dibatasi
                  hanya untuk personel yang berwenang.
                </p>
              </div>

              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "#f59e0b",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#f59e0b" }}>
                  Hak Pengguna
                </h3>
                <ul className="space-y-2" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  <li>• Mengakses dan mengunduh data pribadi Anda</li>
                  <li>• Meminta penghapusan akun dan data terkait</li>
                  <li>• Mengubah pengaturan privasi kapan saja</li>
                  <li>• Menarik persetujuan penggunaan data</li>
                </ul>
              </div>

              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "#ef4444",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#ef4444" }}>
                  Kontak
                </h3>
                <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak-hak Anda,
                  silakan hubungi kami di <strong>privacy@makalah.ai</strong> atau melalui formulir kontak di website
                  kami.
                </p>
              </div>

              <div className="text-sm" style={{ color: theme === "light" ? "#64748b" : "#8fa1b8" }}>
                <p>Terakhir diperbarui: 26 Agustus 2025</p>
                <p>
                  Kebijakan ini dapat berubah sewaktu-waktu. Perubahan akan diberitahukan melalui email atau notifikasi
                  platform.
                </p>
              </div>
            </div>
          </div>
        )

      case "faq":
        return (
          <div className="space-y-8">
            <div>
              <div className="text-sm text-gray-400 mb-2">Panduan Lanjutan</div>
              <h1 className="text-4xl font-bold mb-4" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                FAQ (Pertanyaan yang Sering Diajukan)
              </h1>
              <p className="text-lg mb-8" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                Temukan jawaban atas pertanyaan yang paling sering diajukan tentang Makalah AI
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-6">
              {/* Pertanyaan Umum */}
              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "var(--accent-500)",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--accent-500)" }}>
                  Pertanyaan Umum
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      Apa itu Makalah AI?
                    </h4>
                    <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                      Makalah AI adalah platform kolaborasi penulisan makalah akademik berbasis AI yang memandu Anda melalui 7 fase terstruktur untuk menghasilkan karya akademik berkualitas tinggi.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      Apakah Makalah AI gratis untuk digunakan?
                    </h4>
                    <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                      Ya, Makalah AI menyediakan akses gratis untuk fitur-fitur dasar. Kami juga menyediakan paket premium dengan fitur-fitur lanjutan untuk kebutuhan penelitian yang lebih kompleks.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      Bahasa apa saja yang didukung?
                    </h4>
                    <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                      Saat ini, Makalah AI mendukung bahasa Indonesia dan Bahasa Inggris. Kami sedang mengembangkan dukungan untuk bahasa-bahasa lainnya.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fitur dan Penggunaan */}
              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "#10b981",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#10b981" }}>
                  Fitur dan Penggunaan
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      Bagaimana cara memulai menggunakan Makalah AI?
                    </h4>
                    <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                      Mulai dengan membuat akun, kemudian ikuti panduan cepat di dashboard. Anda dapat langsung memulai chat dengan AI agent untuk mendapatkan panduan penulisan.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      Apa itu 7 Fase Penulisan?
                    </h4>
                    <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                      7 Fase Penulisan adalah metodologi sistematis yang kami kembangkan: Perencanaan Topic, Riset Literatur, Kerangka Teoritis, Metodologi, Analisis Data, Diskusi Hasil, dan Kesimpulan & Rekomendasi.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      Bisakah saya berkolaborasi dengan peneliti lain?
                    </h4>
                    <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                      Ya, fitur kolaborasi real-time memungkinkan Anda bekerja sama dengan tim peneliti lain, memberikan feedback, dan melakukan review bersama.
                    </p>
                  </div>
                </div>
              </div>

              {/* Teknis dan Keamanan */}
              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "#3b82f6",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#3b82f6" }}>
                  Teknis dan Keamanan
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      Apakah data saya aman?
                    </h4>
                    <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                      Ya, kami menggunakan enkripsi end-to-end dan mematuhi standar keamanan internasional. Data Anda tidak akan dibagikan kepada pihak ketiga tanpa persetujuan eksplisit.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      Bagaimana jika saya mengalami masalah teknis?
                    </h4>
                    <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                      Anda dapat mengakses halaman Troubleshooting di dokumentasi ini, atau menghubungi tim support kami melalui chat support atau email.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                      Apakah ada batasan ukuran dokumen?
                    </h4>
                    <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                      Akun gratis memiliki batas 10MB per dokumen dan 100MB total storage. Akun premium memiliki batas yang lebih tinggi sesuai paket yang dipilih.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bantuan Lebih Lanjut */}
              <div
                className="p-6 border-l-4"
                style={{
                  backgroundColor: theme === "light" ? "#f8fafc" : "#111824",
                  borderColor: "#8b5cf6",
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#8b5cf6" }}>
                  Bantuan Lebih Lanjut
                </h3>
                <p style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                  Jika pertanyaan Anda tidak terjawab di sini, silakan hubungi tim support kami atau kunjungi halaman Tutorial untuk panduan langkah demi langkah.
                </p>
                <div className="flex gap-4 mt-4">
                  <Button
                    className="bg-accent-500 hover:bg-accent-600 text-white"
                    onClick={() => window.location.href = "/tutorial"}
                  >
                    Lihat Tutorial
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
                    onClick={() => window.location.href = "/chat"}
                  >
                    Chat Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4" style={{ color: theme === "light" ? "#0f172a" : "#e6edf5" }}>
                Dokumentasi
              </h1>
              <p className="text-lg" style={{ color: theme === "light" ? "#64748b" : "#b7c3d4" }}>
                Pilih topik dari sidebar untuk mempelajari lebih lanjut tentang Makalah AI.
              </p>
            </div>
          </div>
        )
    }
  }

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme === "light" ? "var(--bg-900)" : "var(--bg-900)",
        color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
      }}
    >
      <GlobalHeader showNavigation={true} customNavItems={customNavItems} />

      <div className="flex">
        {/* Sidebar */}
        <div
          className="w-80 min-h-screen border-r p-6 overflow-y-auto"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#111824",
            borderColor: theme === "light" ? "#d7dee7" : "#33465f",
          }}
        >
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Cari dokumentasi..."
                className="pl-10 bg-transparent border rounded-[3px]"
                style={{
                  borderColor: theme === "light" ? "#d7dee7" : "#33465f",
                  color: theme === "light" ? "#0f172a" : "#e6edf5",
                }}
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-8">
            {navigationSections.map((section) => (
              <div key={section.title}>
                <h3
                  className="text-sm font-bold mb-4 tracking-wider uppercase"
                  style={{ color: theme === "light" ? "#64748b" : "#8fa1b8" }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.id
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full flex items-center px-3 py-2 text-sm transition-colors hover:bg-opacity-50 ${
                            isActive ? "font-medium" : ""
                          }`}
                          style={{
                            backgroundColor: isActive ? (theme === "light" ? "#f1f5f9" : "#1b2838") : "transparent",
                            color: isActive ? "var(--accent-500)" : theme === "light" ? "#64748b" : "#b7c3d4",
                          }}
                        >
                          <Icon className="w-4 h-4 mr-3" />
                          {item.label}
                          {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 max-w-4xl">{renderContent()}</div>
      </div>
    </div>
  )
}
