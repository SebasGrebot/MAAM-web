"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export default function Contact() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { name, email, message })
    // Reset form fields
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#86CBED] to-[#FFA8F7] bg-clip-text text-transparent">
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-lg text-[#4A4A4A] mb-2">
                {t("contact.name")}
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#C5B4E3] focus:ring-2 focus:ring-[#C5B4E3] focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-[#4A4A4A] mb-2">
                {t("contact.email")}
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#C5B4E3] focus:ring-2 focus:ring-[#C5B4E3] focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg text-[#4A4A4A] mb-2">
                {t("contact.message")}
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#C5B4E3] focus:ring-2 focus:ring-[#C5B4E3] focus:ring-opacity-50 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full py-4 text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE] hover:opacity-90 transition-opacity"
              onClick={handleSubmit}
            >
              {t("contact.submit")}
            </Button>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#4A4A4A]">{t("contact.getInTouch")}</h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FBC4EE]/10">
                  <Mail className="w-6 h-6 text-[#FBC4EE]" />
                </div>
                <span className="text-lg text-[#4A4A4A]">info@maam.ai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

