import { Montserrat } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata = {
  title: "MAAM - A Mom's Best Friend",
  description: "Connect, Share, Grow and Have fun with mothers like you",
}

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maam%20Heart%20Only%20icon%20iPhone%20(1)-oRQImCs92tJzh57g8bpnpujV2pLLN2.png"
        />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

