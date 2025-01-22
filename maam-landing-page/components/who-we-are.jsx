import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function WhoWeAre() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#86CBED] to-[#FFA8F7]">
          {t("whoWeAre.title")}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/522af8a5-d688-4fdf-a232-4048eb2812d6.JPG-skymqN5vnRmwT3a3ncpj7q1q39zPCj.jpeg"
                alt="A person in a flowing sage green dress creating an artistic portrait that represents motherhood"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4 text-[#4A4A4A]">{t("whoWeAre.paragraph1")}</p>
            <p className="text-lg mb-4 text-[#4A4A4A]">{t("whoWeAre.paragraph2")}</p>
            <p className="text-lg mb-4 text-[#4A4A4A]">{t("whoWeAre.paragraph3")}</p>
            <p className="text-lg text-[#4A4A4A]">{t("whoWeAre.paragraph4")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

