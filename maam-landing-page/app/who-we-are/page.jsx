import WhoWeAre from "@/components/who-we-are"
import LandingPage from "@/components/landing-page"
import { useLanguage } from "@/contexts/language-context"

export default function WhoWeArePage() {
  const languageContext = useLanguage()
  return (
    <LandingPage languageContext={languageContext}>
      <WhoWeAre />
    </LandingPage>
  )
}

