"use client"

import type React from "react"

import { useState } from "react"

interface FeedbackFormProps {
  onSubmit: (text: string) => void
  onCancel: () => void
}

export default function FeedbackForm({ onSubmit, onCancel }: FeedbackFormProps) {
  const [feedbackText, setFeedbackText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (feedbackText.trim()) {
      onSubmit(feedbackText)
      setFeedbackText("")
    }
  }

  return (
    <div className="chat-feedback">
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="Jelaskan aspek yang perlu direvisi…"
          style={{
            backgroundColor: "#1f2937",
            border: "2px solid #374151",
            padding: "12px",
            color: "#f9fafb",
            width: "100%",
            minHeight: "80px",
            resize: "vertical",
          }}
        />

        <div style={{ marginTop: ".6rem", display: "flex", gap: ".5rem" }}>
          <button type="submit" className="chat-btn" disabled={!feedbackText.trim()}>
            Kirim Revisi
          </button>
          <button type="button" className="chat-btn chat-btn--ghost" onClick={onCancel}>
            Batal
          </button>
        </div>
      </form>
    </div>
  )
}
