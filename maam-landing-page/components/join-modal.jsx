"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

export function JoinModal() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email)
    setIsOpen(false)
    setEmail("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE] text-white hover:from-[#FBC4EE] hover:to-[#BACDFA] text-lg py-3 px-8">
          {t("hero.cta")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE]">
            {t("join.title")}
          </DialogTitle>
          <DialogDescription className="text-center mb-4">{t("join.description")}</DialogDescription>
          <p className="text-center text-sm text-muted-foreground mb-6">{t("join.welcome")}</p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="email"
            type="email"
            placeholder={t("join.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#BACDFA] focus:ring-2 focus:ring-[#BACDFA] focus:ring-opacity-50"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE] text-white hover:from-[#FBC4EE] hover:to-[#BACDFA]"
          >
            {t("join.submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

