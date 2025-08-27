"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon, ChevronDown, Settings, LogOut } from "lucide-react"

interface GlobalHeaderProps {
  showNavigation?: boolean
  showUserProfile?: boolean
  customNavItems?: Array<{ label: string; href: string }>
}

const GlobalHeader = ({ showNavigation = false, showUserProfile = false, customNavItems }: GlobalHeaderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const savedTheme = (localStorage.getItem("makalah.theme") as "light" | "dark") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
    document.documentElement.style.colorScheme = savedTheme
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".profile-dropdown")) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    document.documentElement.style.colorScheme = newTheme
    localStorage.setItem("makalah.theme", newTheme)
  }

  const handleLogout = () => {
    window.location.href = "/"
    setIsDropdownOpen(false)
  }

  return (
    <header className="chat-header">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link href="/" className="chat-brand">
          <div className="chat-brand-badge">M</div>
          <div className="chat-brand-name">Makalah AI</div>
        </Link>
      </div>
      <div className="chat-header-controls">
        {showNavigation && !customNavItems && (
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide mr-8">
            <Link
              href="#"
              className="transition-colors duration-200"
              style={{
                color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
              }}
            >
              Fitur
            </Link>
            <Link
              href="#"
              className="transition-colors duration-200"
              style={{
                color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
              }}
            >
              Harga
            </Link>
            <Link
              href="#"
              className="transition-colors duration-200"
              style={{
                color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
              }}
            >
              Dokumentasi
            </Link>
          </div>
        )}

        {customNavItems && (
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide mr-8">
            {customNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="transition-colors duration-200 hover:text-orange-500"
                style={{
                  color: theme === "light" ? "var(--text-200)" : "var(--text-200)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {!showNavigation && !showUserProfile && !customNavItems && (
          <Link
            href="/login"
            className="rounded-[3px] text-white font-medium px-6 py-2 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 inline-block mr-4"
            style={{
              backgroundColor: "var(--accent-500)",
            }}
          >
            Masuk
          </Link>
        )}

        {(showNavigation || customNavItems) && (
          <Link
            href="/login"
            className="rounded-[3px] text-white font-medium px-6 py-2 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 inline-block mr-4"
            style={{
              backgroundColor: "var(--accent-500)",
            }}
          >
            Masuk
          </Link>
        )}

        {showUserProfile && (
          <div className="profile-dropdown relative mr-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="chat-usercard hover:bg-opacity-80 transition-colors duration-200 cursor-pointer"
              title="Profil"
            >
              <div className="chat-avatar" aria-hidden="true">
                EP
              </div>
              <div className="chat-user-meta">
                <span className="chat-user-name">Erik Supit</span>
                <span className="chat-user-role">Peneliti</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                style={{ color: theme === "light" ? "var(--text-200)" : "var(--text-200)" }}
              />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-48 py-2 shadow-lg border z-50"
                style={{
                  backgroundColor: theme === "light" ? "#ffffff" : "#111824",
                  borderColor: theme === "light" ? "#d7dee7" : "#2a3a4f",
                }}
              >
                <Link
                  href="/settings"
                  className="flex items-center px-4 py-2 text-sm transition-colors duration-200"
                  style={{
                    color: theme === "light" ? "#0f172a" : "#e6edf5",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme === "light" ? "#e2e8f0" : "#374151"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                  }}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Setting
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm transition-colors duration-200 text-left"
                  style={{
                    color: theme === "light" ? "#0f172a" : "#e6edf5",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme === "light" ? "#e2e8f0" : "#374151"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                  }}
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        <button
          onClick={toggleTheme}
          className="theme-toggle relative inline-flex items-center justify-between w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          data-theme={theme}
          style={{
            backgroundColor: theme === "dark" ? "#1a1a1a" : "var(--accent-500)",
          }}
          aria-label="Toggle theme"
        >
          <Sun
            className={`sun-icon w-4 h-4 ml-1 transition-opacity duration-300 ${
              theme === "light" ? "opacity-100 text-white" : "opacity-50 text-gray-400"
            }`}
          />

          <Moon
            className={`moon-icon w-4 h-4 mr-1 transition-opacity duration-300 ${
              theme === "dark" ? "opacity-100 text-white" : "opacity-50 text-gray-400"
            }`}
          />

          <div
            className="absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"
            style={{
              transform: theme === "dark" ? "translateX(2px)" : "translateX(34px)",
            }}
          />
        </button>
      </div>
    </header>
  )
}

export { GlobalHeader }
export default GlobalHeader
