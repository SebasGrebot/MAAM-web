"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from "@/contexts/language-context"

const slides = {
  en: [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_764156218_720.jpg-1TcKRSO7FRHUlPZX1guW86VtkOiOoY.jpeg",
      alt: "Baby with healthy food",
      title: "What do I feed my baby with?",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_121605250_720.jpg-zPHdvEC4liPF6DJDnJlpNfIebkJpmN.jpeg",
      alt: "Pregnancy progress art",
      title: "Pregnancy week by week",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_769617040_720.jpg-e2HRPxbwJ7mPm6qmJQqdeDhjHEJTln.jpeg",
      alt: "Friends reacting to phone content",
      title: "Have a laugh chatting about the last soap opera",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_153693311_720.jpg-xPX9N3sdMmdKCYZ7OHIxPeQZp1mg59.jpeg",
      alt: "Superhero themed pregnancy photo",
      title: "The superpowers of pregnancy",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_4218_720.jpg-rPmZv0wEG6R3iUfw19IUT6NbKslMcR.jpeg",
      alt: "Young girl playing on a tropical beach",
      title: "Share your ultimate family holidays",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-joyful-toddler-is-laughing-while-playing-on-a-yellow-slide-at-a-playground-3dug4ffy_720.jpg-d3LfA47MsQlDr3LTPzbrtnOJxSRAJw.jpeg",
      alt: "Joyful toddler laughing on playground",
      title: "Happy Toddler! Happy Mom!",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_136580996_720.jpg-Gd4cTv6jAkyl8a8POGqn40CDS1UZqc.jpeg",
      alt: "Surprised woman by bathtub",
      title: "Share the great news with MAAM",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_622420562_720.jpg-tCdkXVYVqPkqQ69udo1LEaGzxP1Tes.jpeg",
      alt: "Mother and daughter playing together",
      title: "Things to do with your daughter",
    },
  ],
  es: [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_764156218_720.jpg-1TcKRSO7FRHUlPZX1guW86VtkOiOoY.jpeg",
      alt: "Bebé con comida saludable",
      title: "¿Qué le doy de comer a mi bebé?",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_121605250_720.jpg-zPHdvEC4liPF6DJDnJlpNfIebkJpmN.jpeg",
      alt: "Arte del progreso del embarazo",
      title: "Sigue tu embarazo semana a semana",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_769617040_720.jpg-e2HRPxbwJ7mPm6qmJQqdeDhjHEJTln.jpeg",
      alt: "Amigas reaccionando al contenido del teléfono",
      title: "Diviértete charlando sobre la última telenovela",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_153693311_720.jpg-xPX9N3sdMmdKCYZ7OHIxPeQZp1mg59.jpeg",
      alt: "Foto de embarazo temática de superhéroes",
      title: "Los superpoderes del embarazo",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img_4218_720.jpg-rPmZv0wEG6R3iUfw19IUT6NbKslMcR.jpeg",
      alt: "Niña jugando en una playa tropical",
      title: "Comparte tus vacaciones familiares",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-joyful-toddler-is-laughing-while-playing-on-a-yellow-slide-at-a-playground-3dug4ffy_720.jpg-d3LfA47MsQlDr3LTPzbrtnOJxSRAJw.jpeg",
      alt: "Bebé feliz riendo en el parque",
      title: "¡Bebé Feliz! ¡Mamá Feliz!",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_136580996_720.jpg-Gd4cTv6jAkyl8a8POGqn40CDS1UZqc.jpeg",
      alt: "Mujer sorprendida junto a la bañera",
      title: "Comparte las buenas noticias con MAAM",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shutterstock_622420562_720.jpg-tCdkXVYVqPkqQ69udo1LEaGzxP1Tes.jpeg",
      alt: "Madre e hija jugando juntas",
      title: "Actividades para hacer con tu hija",
    },
  ],
}

export function Carousel() {
  const { language, t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const currentSlides = slides[language]

  const goToNext = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % currentSlides.length)
  }, [currentSlides.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + currentSlides.length) % currentSlides.length)
  }, [currentSlides.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext])

  const visibleSlides = []
  for (let i = -1; i <= 1; i++) {
    const index = (currentIndex + i + currentSlides.length) % currentSlides.length
    visibleSlides.push({ ...currentSlides[index], position: i })
  }

  return (
    <div className="relative overflow-hidden">
      <div className="relative container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
          {t("discover.title")}
        </h2>

        <div className="relative h-[600px] flex items-center justify-center">
          {visibleSlides.map(({ image, alt, title, position }) => (
            <div
              key={image}
              className={`absolute w-[300px] transition-all duration-500 ease-in-out overflow-hidden rounded-3xl ${
                position === 0
                  ? "scale-100 opacity-100 z-20"
                  : position === -1
                    ? "-translate-x-[calc(100%+2rem)] scale-90 opacity-70 z-10"
                    : "translate-x-[calc(100%+2rem)] scale-90 opacity-70 z-10"
              }`}
            >
              <div className="relative h-[400px] rounded-t-3xl overflow-hidden">
                <Image src={image || "/placeholder.svg"} alt={alt} fill className="object-cover" />
              </div>
              <div className="p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-[#4A4A4A]">{title}</h3>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white z-30"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white z-30"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="flex justify-center gap-2 mt-8">
          {currentSlides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "w-4 bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

