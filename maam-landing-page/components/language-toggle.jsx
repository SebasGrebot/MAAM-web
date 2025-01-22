"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { toggleLanguage, t, language } = useLanguage()

  return (
    <Button
      variant="default"
      size="sm"
      onClick={toggleLanguage}
      className="bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE] text-white hover:from-[#FBC4EE] hover:to-[#BACDFA] transition-all duration-300"
    >
      <Globe className="h-4 w-4 mr-2" />
      <span>{language === "en" ? "ES" : "EN"}</span>
    </Button>
  )
}

