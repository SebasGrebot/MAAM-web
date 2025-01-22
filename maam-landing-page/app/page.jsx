import LandingPage from "@/components/landing-page"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const languageContext = useLanguage()
  return <LandingPage languageContext={languageContext} />
}

