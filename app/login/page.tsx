"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import GlobalHeader from "@/components/global-header"

export default function LoginPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme === "light" ? "var(--bg-900)" : "var(--bg-900)",
        color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
      }}
    >
      <GlobalHeader showNavigation={false} />

      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-6 py-12">
        <div className="w-full max-w-md">
          <Card
            className="rounded-[3px] p-8 border"
            style={{
              backgroundColor: theme === "light" ? "var(--bg-850)" : "var(--bg-850)",
              borderColor: theme === "light" ? "var(--line-500)" : "var(--line-500)",
            }}
          >
            <div className="text-center mb-8">
              <h1
                className="text-3xl font-medium mb-2"
                style={{ color: theme === "light" ? "var(--text-100)" : "var(--text-100)" }}
              >
                Masuk ke Akun
              </h1>
              <p className="text-sm" style={{ color: theme === "light" ? "var(--text-200)" : "var(--text-200)" }}>
                Lanjutkan perjalanan penulisan akademik Anda
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium"
                  style={{ color: theme === "light" ? "var(--text-100)" : "var(--text-100)" }}
                >
                  Email
                </Label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                    style={{ color: theme === "light" ? "var(--text-300)" : "var(--text-300)" }}
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nama@email.com"
                    className="rounded-[3px] pl-10 border"
                    style={{
                      backgroundColor: theme === "light" ? "var(--bg-800)" : "var(--bg-800)",
                      borderColor: theme === "light" ? "var(--line-500)" : "var(--line-500)",
                      color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                    }}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium"
                  style={{ color: theme === "light" ? "var(--text-100)" : "var(--text-100)" }}
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                    style={{ color: theme === "light" ? "var(--text-300)" : "var(--text-300)" }}
                  />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Masukkan password"
                    className="rounded-[3px] pl-10 pr-10 border"
                    style={{
                      backgroundColor: theme === "light" ? "var(--bg-800)" : "var(--bg-800)",
                      borderColor: theme === "light" ? "var(--line-500)" : "var(--line-500)",
                      color: theme === "light" ? "var(--text-100)" : "var(--text-100)",
                    }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff
                        className="w-4 h-4"
                        style={{ color: theme === "light" ? "var(--text-300)" : "var(--text-300)" }}
                      />
                    ) : (
                      <Eye
                        className="w-4 h-4"
                        style={{ color: theme === "light" ? "var(--text-300)" : "var(--text-300)" }}
                      />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded-[3px] border"
                    style={{
                      accentColor: "var(--accent-500)",
                    }}
                  />
                  <span style={{ color: theme === "light" ? "var(--text-200)" : "var(--text-200)" }}>Ingat saya</span>
                </label>
                <Link href="/forgot-password" className="hover:underline" style={{ color: "var(--accent-500)" }}>
                  Lupa password?
                </Link>
              </div>

              <Button
                type="submit"
                className="rounded-[3px] w-full text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--accent-500)",
                  background: "linear-gradient(135deg, var(--accent-400), var(--accent-600))",
                }}
              >
                Masuk
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm" style={{ color: theme === "light" ? "var(--text-200)" : "var(--text-200)" }}>
                Belum punya akun?{" "}
                <Link href="/register" className="font-medium hover:underline" style={{ color: "var(--accent-500)" }}>
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
