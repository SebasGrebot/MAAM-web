"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, MessageSquare, Bot, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Carousel } from "./carousel"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { JoinModal } from "./join-modal"
import { useState, useEffect } from "react"

const scrollToSection = (event, sectionId) => {
  const isSamePage =
    window.location.pathname === "/" ||
    (window.location.pathname !== "/" && sectionId === window.location.pathname.slice(1))

  if (isSamePage) {
    event.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
}

export default function LandingPage({ children, languageContext }) {
  const { t, language } = languageContext || useLanguage()
  const [isNavHovered, setIsNavHovered] = useState(false)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) {
      const section = document.getElementById(hash)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between items-center bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out py-3 px-4 md:px-10">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maam-logo-png-1024_720-5wBA6m2Q2R1WNwIhL7JMp0be8Elc3N.png"
              alt="MAAM Logo"
              width={100}
              height={20}
              priority
              className="w-[50px] md:w-[100px] h-auto transition-all duration-300 ease-in-out"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <NavItems t={t} />
            <LanguageToggle />
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <NavItems t={t} />
                <LanguageToggle />
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main>
        {children ? (
          children
        ) : (
          <>
            <HeroSection t={t} language={language} />
            <MarIASection t={t} />
            <FeaturesSection t={t} />
            <DiscoverSection />
          </>
        )}
      </main>

      <Footer t={t} />
    </div>
  )
}

function HeroSection({ t, language }) {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 w-full md:w-2/3 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6d4978ae-f987-4d7a-a502-87c29e8c7f34__1__720.jpg-wBi9bOEi352b4uadjRL3GFyFKjZXGu.jpeg"
              alt="Background image of a mother with twins"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
              style={{ objectPosition: "center 20%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-white"></div>
          </div>
          <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-transparent to-white/70"></div>
        </div>
      </div>

      {/* Diamond decorations */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamondmaam5-x4yvG9TknFHSIwhiVCchY6Bon8FLbk.png"
        alt=""
        width={150}
        height={150}
        className="floating-diamond absolute top-20 left-[10%] opacity-60 z-10"
      />
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamondmaam7-8hsKD9J9w9hCuq3ggo5Sw8vGZVanlY.png"
        alt=""
        width={120}
        height={120}
        className="floating-diamond-reverse absolute bottom-40 right-[15%] opacity-50 z-10"
      />

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-left p-6 rounded-lg md:ml-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              {t("hero.subtitle1")}
            </p>
            <p className="text-xl md:text-2xl font-bold text-[#FFFFFF] mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              {t("hero.subtitle2")}
            </p>
            <div className="flex flex-col space-y-4">
              <div>
                <JoinModal />
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  href="https://apps.apple.com/us/app/maam/id6593659953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-opacity hover:opacity-80"
                >
                  <div className="w-[160px] h-[48px] relative">
                    <Image
                      src={
                        language === "en"
                          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917-UJjKj6HBosphesHmENExqS97sTM1wx.svg"
                          : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Download_on_the_App_Store_Badge_ES_RGB_blk_100217-6FHuAOOZGe3ixLN2X6UK6EoVvilUo7.svg"
                      }
                      alt={language === "en" ? "Download on the App Store" : "Descargar en el App Store"}
                      fill
                      style={{ objectFit: "contain", objectPosition: "left" }}
                      priority
                    />
                  </div>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.maam.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-opacity hover:opacity-80"
                >
                  <div className="w-[160px] h-[48px] relative">
                    <Image
                      src={
                        language === "en"
                          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-play-badge-82nUJOIzVsJZBjWde588ro3F3bfMD4.png"
                          : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-play-badge%20(1)-v7hmyeOTBWublCB1mrXdT3Hu1HiWPx.png"
                      }
                      alt={language === "en" ? "Get it on Google Play" : "Disponible en Google Play"}
                      fill
                      style={{ objectFit: "contain", objectPosition: "left" }}
                      priority
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="flex justify-center items-center gap-4 [&>div:has(~div:hover)]:scale-95 [&>div:has(~div:hover)]:opacity-70">
              <div className="transform transition-all duration-300 hover:scale-110 hover:z-10 relative peer ">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homepage_photo_for_website2_720-v9OYUUiDOW2eiZsR5RgTsZhFSnLDv7.png"
                  alt="MAAM app community feed showing parenting tips and discussions"
                  width={280}
                  height={560}
                  className="rounded-3xl shadow-xl"
                />
              </div>
              <div className="transform transition-all duration-300 hover:scale-110 hover:z-10 relative peer ">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maria_photo_for_website2_720-WpabmKuLYwaKjHJPnaLsMZ8JrpKI10.png"
                  alt="MarIA chatbot interface showing a conversation with an AI assistant"
                  width={280}
                  height={560}
                  className="rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MarIASection({ t }) {
  return (
    <section
      id="maria"
      className="relative min-h-screen pt-20 flex items-center bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFA8F7]/30 rounded-full -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#86CBED]/30 rounded-full translate-y-1/4 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      {/* Diamond decorations */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamondmaam6-6WkQ4Sh3ZckbnRivBCOu5m1VP7agGF.png"
        alt=""
        width={200}
        height={200}
        className="floating-diamond absolute top-40 left-[5%] opacity-40"
      />
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamondmaam4-4qjcbE0fcIAOLkzANnYNCcYETLpvo9.png"
        alt=""
        width={180}
        height={180}
        className="floating-diamond-reverse absolute bottom-20 right-[10%] opacity-40"
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">{t("maria.title")}</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="MarIA AI Companion Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-2xl"
              ></iframe>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl text-white mb-8">{t("maria.description")}</p>
            <Button className="bg-white text-[#4A4A4A] hover:bg-opacity-90 text-lg py-3 px-8">{t("maria.cta")}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection({ t }) {
  return (
    <section id="features" className="relative min-h-screen pt-20 flex items-center bg-white overflow-hidden">
      {/* Diamond decorations */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamondmaam2-KpBYnS4j1nb2g3N7dALSsrVI9Gdl6f.png"
        alt=""
        width={250}
        height={250}
        className="floating-diamond absolute top-20 right-[5%] opacity-30"
      />
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamondmaam3-6YUm0OW4zaVFzIa5AqVOVKJB3n2mQy.png"
        alt=""
        width={200}
        height={200}
        className="floating-diamond-reverse absolute bottom-40 left-[8%] opacity-30"
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 py-2 text-transparent bg-clip-text bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE]">
          {t("features.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Heart className="w-16 h-16 text-[#FBC4EE]" />}
            title={t("features.community.title")}
            description={t("features.community.description")}
          />
          <FeatureCard
            icon={<Bot className="w-16 h-16 text-[#BACDFA]" />}
            title={t("features.expert.title")}
            description={t("features.expert.description")}
          />
          <FeatureCard
            icon={<MessageSquare className="w-16 h-16 text-[#FBC4EE]" />}
            title={t("features.conversation.title")}
            description={t("features.conversation.description")}
          />
        </div>
      </div>
    </section>
  )
}

function DiscoverSection() {
  return (
    <section
      id="discover"
      className="relative min-h-screen pt-20 bg-gradient-to-br from-[#BACDFA] via-[#FBC4EE] to-[#BACDFA] overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFA8F7]/30 rounded-full -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#86CBED]/30 rounded-full translate-y-1/4 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Diamond decorations */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamond1maam-8IlQdpWlq5h98nHMiHMaUmpTlUh61n.png"
        alt=""
        width={180}
        height={180}
        className="floating-diamond absolute top-40 right-[15%] opacity-40 z-10"
      />
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamondmaam5-x4yvG9TknFHSIwhiVCchY6Bon8FLbk.png"
        alt=""
        width={150}
        height={150}
        className="floating-diamond-reverse absolute bottom-20 left-[10%] opacity-40 z-10"
      />

      <div className="relative z-20">
        <Carousel />
      </div>
    </section>
  )
}

function Footer({ t }) {
  return (
    <footer className="relative bg-white text-black py-12 overflow-hidden">
      {/* Diamond decorations */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diamondmaam7-8hsKD9J9w9hCuq3ggo5Sw8vGZVanlY.png"
        alt=""
        width={120}
        height={120}
        className="floating-diamond absolute top-10 right-[5%] opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE]">
              MAAM
            </h3>
            <p>{t("footer.description")}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE]">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#FBC4EE]">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="hover:text-[#FBC4EE]">
                  {t("nav.whoWeAre")}
                </Link>
              </li>
              <li>
                <Link href="/#maria" onClick={(e) => scrollToSection(e, "maria")} className="hover:text-[#FBC4EE]">
                  {t("nav.maria")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  onClick={(e) => scrollToSection(e, "features")}
                  className="hover:text-[#FBC4EE]"
                >
                  {t("nav.features")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#discover"
                  onClick={(e) => scrollToSection(e, "discover")}
                  className="hover:text-[#FBC4EE]"
                >
                  {t("nav.discover")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FBC4EE]">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#BACDFA] to-[#FBC4EE]">
              {t("footer.connect")}
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="https://www.linkedin.com/company/maam-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FBC4EE]"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/maam.aiapp?igsh=MXZ6NG55aTVwZG16eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FBC4EE]"
              >
                Instagram
              </Link>
              <span className="text-gray-400 cursor-not-allowed">Facebook (Coming Soon)</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>{t("footer.rights")}</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy-policy" className="text-sm hover:text-[#FBC4EE]">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="/terms-conditions" className="text-sm hover:text-[#FBC4EE]">
              {t("footer.termsConditions")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="text-center h-full flex flex-col justify-between backdrop-blur-sm bg-white/90 relative overflow-hidden">
      <CardContent className="pt-6 flex flex-col h-full">
        <div className="mb-4 flex-grow-0">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 holographic-text">{title}</h3>
        <p className="text-[#6B6B6B] flex-grow">{description}</p>
      </CardContent>
    </Card>
  )
}

function NavItems({ t }) {
  return (
    <>
      <Link
        href="/who-we-are"
        className="text-sm font-semibold text-[#4A4A4A] hover:text-[#FBC4EE] hover:text-base transition-all duration-300 ease-in-out"
      >
        {t("nav.whoWeAre")}
      </Link>
      <Link
        href="/#maria"
        onClick={(e) => scrollToSection(e, "maria")}
        className="text-sm font-semibold text-[#4A4A4A] hover:text-[#FBC4EE] hover:text-base transition-all duration-300 ease-in-out"
      >
        {t("nav.maria")}
      </Link>
      <Link
        href="/#features"
        onClick={(e) => scrollToSection(e, "features")}
        className="text-sm font-semibold text-[#4A4A4A] hover:text-[#FBC4EE] hover:text-base transition-all duration-300 ease-in-out"
      >
        {t("nav.features")}
      </Link>
      <Link
        href="/#discover"
        onClick={(e) => scrollToSection(e, "discover")}
        className="text-sm font-semibold text-[#4A4A4A] hover:text-[#FBC4EE] hover:text-base transition-all duration-300 ease-in-out"
      >
        {t("nav.discover")}
      </Link>
      <Link
        href="/contact"
        className="text-sm font-semibold text-[#4A4A4A] hover:text-[#FBC4EE] hover:text-base transition-all duration-300 ease-in-out"
      >
        {t("nav.contact")}
      </Link>
    </>
  )
}

