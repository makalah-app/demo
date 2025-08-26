"use client"

import type React from "react"

import { useState } from "react"
import { GlobalHeader } from "@/components/global-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Lock, Eye, EyeOff, Save, Shield } from "lucide-react"

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [profileData, setProfileData] = useState({
    name: "Erik Supit",
    email: "erik.supit@example.com",
    role: "Peneliti",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Profile update submitted:", profileData)
    // Handle profile update logic here
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Password change submitted")
    // Handle password change logic here
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Password baru tidak cocok!")
      return
    }
    // Reset form after successful submission
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="min-h-screen bg-var-background text-var-text">
      <GlobalHeader showNavigation={false} showUserProfile={true} />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-var-text mb-2">Pengaturan Akun</h1>
          <p className="text-var-text-secondary">Kelola informasi akun dan keamanan Anda</p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {/* Profile Settings Card */}
          <Card className="rounded-none border-var-line bg-var-background-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-var-text">
                <User className="h-5 w-5 text-var-accent" />
                Informasi Profil
              </CardTitle>
              <CardDescription className="text-var-text-secondary">Perbarui informasi dasar akun Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-var-text font-medium">
                    Nama Lengkap
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-var-text-secondary" />
                    <Input
                      id="name"
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="pl-10 rounded-none border-var-line bg-var-background text-var-text focus:border-var-accent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-var-text font-medium">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-var-text-secondary" />
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="pl-10 rounded-none border-var-line bg-var-background text-var-text focus:border-var-accent"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-var-text font-medium">
                    Peran
                  </Label>
                  <div className="relative">
                    <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-var-text-secondary" />
                    <Input
                      id="role"
                      type="text"
                      value={profileData.role}
                      onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
                      className="pl-10 rounded-none border-var-line bg-var-background text-var-text focus:border-var-accent"
                      placeholder="Masukkan peran"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-none bg-var-accent hover:bg-var-accent-hover text-white font-medium"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Simpan Perubahan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Password Settings Card */}
          <Card className="rounded-none border-var-line bg-var-background-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-var-text">
                <Lock className="h-5 w-5 text-var-accent" />
                Keamanan Password
              </CardTitle>
              <CardDescription className="text-var-text-secondary">
                Ubah password untuk menjaga keamanan akun
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-var-text font-medium">
                    Password Saat Ini
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-var-text-secondary" />
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                      className="pl-10 pr-10 rounded-none border-var-line bg-var-background text-var-text focus:border-var-accent"
                      placeholder="Masukkan password saat ini"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-var-text-secondary hover:text-var-text"
                    >
                      {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Separator className="bg-var-line" />

                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-var-text font-medium">
                    Password Baru
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-var-text-secondary" />
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      className="pl-10 pr-10 rounded-none border-var-line bg-var-background text-var-text focus:border-var-accent"
                      placeholder="Masukkan password baru"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-var-text-secondary hover:text-var-text"
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-var-text font-medium">
                    Konfirmasi Password Baru
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-var-text-secondary" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                      className="pl-10 pr-10 rounded-none border-var-line bg-var-background text-var-text focus:border-var-accent"
                      placeholder="Konfirmasi password baru"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-var-text-secondary hover:text-var-text"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="bg-var-background-tertiary border border-var-line rounded-none p-4">
                  <h4 className="text-sm font-medium text-var-text mb-2">Persyaratan Password:</h4>
                  <ul className="text-xs text-var-text-secondary space-y-1">
                    <li>• Minimal 8 karakter</li>
                    <li>• Kombinasi huruf besar dan kecil</li>
                    <li>• Minimal 1 angka</li>
                    <li>• Minimal 1 karakter khusus</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-none bg-var-accent hover:bg-var-accent-hover text-white font-medium"
                  disabled={!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Ubah Password
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Account Actions */}
        <Card className="rounded-none border-var-line bg-var-background-secondary mt-8">
          <CardHeader>
            <CardTitle className="text-var-text">Tindakan Akun</CardTitle>
            <CardDescription className="text-var-text-secondary">Kelola pengaturan akun lanjutan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="rounded-none border-var-line text-var-text hover:bg-var-background-tertiary bg-transparent"
              >
                Ekspor Data
              </Button>
              <Button
                variant="outline"
                className="rounded-none border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
              >
                Hapus Akun
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
