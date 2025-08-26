"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

interface GlobalFooterProps {
  showFullFooter?: boolean
}

export default function GlobalFooter({ showFullFooter = false }: GlobalFooterProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const pathname = usePathname()

  useEffect(() => {
    const savedTheme = (localStorage.getItem("makalah.theme") as "light" | "dark") || "dark"
    setTheme(savedTheme)
  }, [])

  // Don't show footer on chat pages
  if (pathname?.startsWith("/chat")) {
    return null
  }

  return (
    <footer
      className="border-t px-6 py-12 transition-colors duration-300"
      style={{
        borderColor: theme === "light" ? "#d7dee7" : "#2a3a4f",
        background:
          theme === "light"
            ? "linear-gradient(to bottom, #f8fafc, #f1f5f9)"
            : "linear-gradient(to bottom, #0e141b, #0b0f14)",
      }}
    >
      {showFullFooter && (
        <div className="max-w-4xl mx-auto flex justify-center mb-12">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h4
                className="font-bold mb-4 text-sm tracking-widest uppercase"
                style={{
                  color: theme === "light" ? "#0f172a" : "#e6edf5",
                }}
              >
                Produk
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#e6edf5] transition-colors"
                    style={{
                      color: theme === "light" ? "#64748b" : "#8fa1b8",
                    }}
                  >
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#e6edf5] transition-colors"
                    style={{
                      color: theme === "light" ? "#64748b" : "#8fa1b8",
                    }}
                  >
                    Harga
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#e6edf5] transition-colors"
                    style={{
                      color: theme === "light" ? "#64748b" : "#8fa1b8",
                    }}
                  >
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="font-bold mb-4 text-sm tracking-widest uppercase"
                style={{
                  color: theme === "light" ? "#0f172a" : "#e6edf5",
                }}
              >
                Sumber Daya
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-[#e6edf5] transition-colors"
                    style={{
                      color: theme === "light" ? "#64748b" : "#8fa1b8",
                    }}
                  >
                    Dokumentasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorial"
                    className="hover:text-[#e6edf5] transition-colors"
                    style={{
                      color: theme === "light" ? "#64748b" : "#8fa1b8",
                    }}
                  >
                    Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#e6edf5] transition-colors"
                    style={{
                      color: theme === "light" ? "#64748b" : "#8fa1b8",
                    }}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="font-bold mb-4 text-sm tracking-widest uppercase"
                style={{
                  color: theme === "light" ? "#0f172a" : "#e6edf5",
                }}
              >
                Perusahaan
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#e6edf5] transition-colors"
                    style={{
                      color: theme === "light" ? "#64748b" : "#8fa1b8",
                    }}
                  >
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#e6edf5] transition-colors"
                    style={{
                      color: theme === "light" ? "#64748b" : "#8fa1b8",
                    }}
                  >
                    Karir
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#e6edf5] transition-colors"
                    style={{
                      color: theme === "light" ? "#64748b" : "#8fa1b8",
                    }}
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div
          className={`flex items-center justify-between ${showFullFooter ? "border-t pt-8" : ""}`}
          style={{
            borderColor: showFullFooter ? (theme === "light" ? "#d7dee7" : "#2a3a4f") : "transparent",
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-br from-[#ff802b] to-[#e85c00] flex items-center justify-center">
              <span className="text-white font-black text-xs">M</span>
            </div>
            <span
              className="font-semibold"
              style={{
                color: theme === "light" ? "#64748b" : "#8fa1b8",
              }}
            >
              Makalah AI
            </span>
          </div>
          <p
            className="text-sm"
            style={{
              color: theme === "light" ? "#64748b" : "#8fa1b8",
            }}
          >
            &copy; 2025 Makalah AI. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
