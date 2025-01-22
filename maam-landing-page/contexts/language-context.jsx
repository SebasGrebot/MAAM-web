"use client"

import { createContext, useContext, useState } from "react"

const translations = {
  en: {
    // Header
    "nav.maria": "MarIA",
    "nav.home": "Home",
    "nav.features": "The MAAM app",
    "nav.discover": "Discover",
    "nav.whoWeAre": "Who We Are",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "MAAM a mom's best friend",
    "hero.subtitle1": "Connect, Share, Grow and Have fun with mothers like you",
    "hero.subtitle2": "Mothers empowered by AI, united in purpose",
    "hero.cta": "Join MAAM Today",

    // MarIA Section
    "maria.title": "Meet MarIA, Your AI Companion",
    "maria.description":
      "MarIA is here to provide instant support, answer your questions, and offer guidance on your motherhood journey. Available 24/7, she's your reliable friend in times of need.",
    "maria.cta": "Chat with MarIA",

    // Features
    "features.title": "Empowering Mothers",
    "features.community.title": "Chats between Moms",
    "features.community.description":
      "​Interact with our lively community where moms like you ask for help, share experiences, and offer advice and emotional support.",
    "features.expert.title": "Your Smart Personal Assistant",
    "features.expert.description":
      "Use our cutting-edge Artificial Intelligence virtual assistant to help you be a better mom.",
    "features.conversation.title": "Start your own chat",
    "features.conversation.description":
      "​Start a conversation whether to ask for help, share your experiences, or just to brighten another mom's day.",

    // Discover
    "discover.title": "A taste of MAAM",

    // Footer
    "footer.description": "Empowering mothers through connection and support.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect With Us",
    "footer.rights": "© 2025 MAAM. All rights reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsConditions": "Terms & Conditions",

    // Language
    "language.toggle": "ES",

    // Who We Are
    "whoWeAre.title": "Who We Are",
    "whoWeAre.paragraph1":
      "MAAM is an AI-powered platform designed to revolutionize community engagement for women worlwide.",
    "whoWeAre.paragraph2":
      "It offers a safe, accessible, and transformative space for women to flourish individually and together. MAAM is more than just a platform, it's a movement driven by connection and collective empowerment.",
    "whoWeAre.paragraph3":
      "The platform harnesses AI's potential to connect, share experience, aid, and empower each other. MAAM is committed to continually evolve, ensuring that every voice is heard and every story matters.",
    "whoWeAre.paragraph4":
      "Join MAAM in creating a world where mothers are supported and celebrated, laying the foundation for future generation's success.",

    // Contact page
    "contact.title": "Contact Us",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.getInTouch": "Get in Touch",

    // Join Modal
    "join.title": "Join MAAM Today",
    "join.welcome": "Enter your email to get started on your journey with MAAM.",
    "join.emailPlaceholder": "Enter your email",
    "join.submit": "Join Now",
    "join.description": "Welcome to MAAM! We're excited to have you join our community of empowered mothers.",

    // Privacy Policy
    "privacyPolicy.title": "Privacy Policy",
    "privacyPolicy.intro":
      "This Privacy Policy describes how MAAM collects, uses, and protects your personal information.",
    "privacyPolicy.infoCollected.title": "Information We Collect",
    "privacyPolicy.infoCollected.content":
      "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.",
    "privacyPolicy.infoUse.title": "How We Use Your Information",
    "privacyPolicy.infoUse.content":
      "We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.",
    "privacyPolicy.infoProtection.title": "How We Protect Your Information",
    "privacyPolicy.infoProtection.content":
      "We implement a variety of security measures to maintain the safety of your personal information.",
    "privacyPolicy.cookies.title": "Cookies",
    "privacyPolicy.cookies.content":
      "We use cookies to enhance your experience on our site and to analyze our traffic.",
    "privacyPolicy.changes.title": "Changes to This Privacy Policy",
    "privacyPolicy.changes.content":
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",

    // Terms & Conditions
    "termsConditions.title": "Terms & Conditions",
    "termsConditions.intro": "These Terms & Conditions govern your use of the MAAM platform and services.",
    "termsConditions.useOfService.title": "Use of Service",
    "termsConditions.useOfService.content":
      "By accessing or using MAAM, you agree to be bound by these Terms & Conditions.",
    "termsConditions.userAccounts.title": "User Accounts",
    "termsConditions.userAccounts.content":
      "You are responsible for maintaining the confidentiality of your account and password.",
    "termsConditions.intellectualProperty.title": "Intellectual Property",
    "termsConditions.intellectualProperty.content":
      "The content on MAAM is owned by or licensed to us and is protected by copyright and other intellectual property laws.",
    "termsConditions.liability.title": "Limitation of Liability",
    "termsConditions.liability.content":
      "MAAM shall not be liable for any indirect, incidental, special, consequential or punitive damages.",
    "termsConditions.governingLaw.title": "Governing Law",
    "termsConditions.governingLaw.content":
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].",
    "termsConditions.changes.title": "Changes to Terms & Conditions",
    "termsConditions.changes.content":
      "We reserve the right to modify or replace these Terms & Conditions at any time.",
  },
  es: {
    // Header
    "nav.maria": "MarIA",
    "nav.features": "La app MAAM",
    "nav.discover": "Descubre",
    "nav.whoWeAre": "Quiénes Somos",
    "nav.contact": "Contacto",
    "nav.home": "Inicio",

    // Hero
    "hero.title": "MAAM, la mejor amiga de mamá",
    "hero.subtitle1": "Conéctate, Comparte, Crece y Diviértete con madres como tú",
    "hero.subtitle2": "Madres empoderadas por IA, unidas en propósito",
    "hero.cta": "Únete a MAAM Hoy",

    // MarIA Section
    "hero.title": "MAAM, la mejor amiga de mamá",
    "maria.title": "Conoce a MarIA, Tu Compañera IA",
    "maria.description":
      "MarIA está aquí para brindarte apoyo instantáneo, responder tus preguntas y ofrecerte orientación en tu viaje de maternidad. Disponible 24/7, ella es tu amiga confiable cuando la necesitas.",
    "maria.cta": "Chatea con MarIA",

    // Features
    "features.title": "Empoderando Madres",
    "features.community.title": "Chats Entre Mamás",
    "features.community.description":
      "​Interactúa con nuestra calurosa comunidad donde mamás como tú piden ayuda, comparten experiencias y ofrecen consejos y apoyo emocional.",
    "features.expert.title": "Tu asistente personal inteligente",
    "features.expert.description":
      "​ Interactúa con nuestra asistente virtual de IA de última tecnología para ser la mejor mamá",
    "features.conversation.title": "Inicia tu proprio Chat",
    "features.conversation.description":
      "​Empieza una conversación sea para pedir ayuda, compartir tus experiencias, o simplemente alégrarle el día a otra mamá.",

    // Discover
    "discover.title": "Descubre MAAM",

    // Footer
    "footer.description": "Empoderando madres a través de la conexión y el apoyo.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.connect": "Conéctate con Nosotros",
    "footer.rights": "© 2025 MAAM. Todos los derechos reservados.",
    "footer.privacyPolicy": "Política de Privacidad",
    "footer.termsConditions": "Términos y Condiciones",

    // Language
    "language.toggle": "EN",

    // Who We Are (Spanish)
    "whoWeAre.title": "Quiénes Somos",
    "whoWeAre.paragraph1":
      "MAAM es una plataforma impulsada por inteligencia artificial que revoluciona la participación comunitaria de mujeres en todo el mundo. Ofrece un espacio seguro, accesible y tranformador para que las mujeres puedan crecer individualmente y juntas. ¡Únete ahora y sé parte de esta revolución!",
    "whoWeAre.paragraph2":
      "MAAM es más que une plataforma; es un movimiento impulsado por la conexión y el empoderamiento colectivo. La plataforma aprovecha el potencial de la IA para conectarse, compartir experiencias, ayudarse y empoderarse mutuamente. MAAM se compromete a evolucionar continuamente, asegurando que cada voz sea escuchada y que cada historia importe. ¡Únete a MAAM y haz que tu voz se escuche!",
    "whoWeAre.paragraph3":
      "Únete a MAAM para crear un mundo donde las madres sean apoyadas y celebradas, sentando las bases para el éxito de las futuras generaciones.",
    "whoWeAre.paragraph4": "¡Tejiendo Lazos, Creando Sueños!",

    // Contact page
    "contact.title": "Contáctanos",
    "contact.name": "Nombre",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.submit": "Enviar mensaje",
    "contact.getInTouch": "Ponte en contacto",

    // Join Modal
    "join.title": "Únete a MAAM Hoy",
    "join.description": "Ingresa tu correo electrónico para comenzar tu viaje con MAAM.",
    "join.emailPlaceholder": "Ingresa tu correo electrónico",
    "join.submit": "Unirse Ahora",
    "join.welcome": "¡Bienvenida a MAAM! Estamos emocionados de que te unas a nuestra comunidad de madres empoderadas.",

    // Privacy Policy
    "privacyPolicy.title": "Política de Privacidad",
    "privacyPolicy.intro":
      "Esta Política de Privacidad describe cómo MAAM recopila, utiliza y protege su información personal.",
    "privacyPolicy.infoCollected.title": "Información que Recopilamos",
    "privacyPolicy.infoCollected.content":
      "Recopilamos la información que nos proporciona directamente, como cuando crea una cuenta, utiliza nuestros servicios o se pone en contacto con nosotros para obtener asistencia.",
    "privacyPolicy.infoUse.title": "Cómo Utilizamos su Información",
    "privacyPolicy.infoUse.content":
      "Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, así como para comunicarnos con usted.",
    "privacyPolicy.infoProtection.title": "Cómo Protegemos su Información",
    "privacyPolicy.infoProtection.content":
      "Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal.",
    "privacyPolicy.cookies.title": "Cookies",
    "privacyPolicy.cookies.content":
      "Utilizamos cookies para mejorar su experiencia en nuestro sitio y analizar nuestro tráfico.",
    "privacyPolicy.changes.title": "Cambios en esta Política de Privacidad",
    "privacyPolicy.changes.content":
      "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.",

    // Terms & Conditions
    "termsConditions.title": "Términos y Condiciones",
    "termsConditions.intro": "Estos Términos y Condiciones rigen su uso de la plataforma y los servicios de MAAM.",
    "termsConditions.useOfService.title": "Uso del Servicio",
    "termsConditions.useOfService.content":
      "Al acceder o utilizar MAAM, usted acepta estar sujeto a estos Términos y Condiciones.",
    "termsConditions.userAccounts.title": "Cuentas de Usuario",
    "termsConditions.userAccounts.content":
      "Usted es responsable de mantener la confidencialidad de su cuenta y contraseña.",
    "termsConditions.intellectualProperty.title": "Propiedad Intelectual",
    "termsConditions.intellectualProperty.content":
      "El contenido de MAAM es propiedad o está licenciado por nosotros y está protegido por leyes de derechos de autor y otras leyes de propiedad intelectual.",
    "termsConditions.liability.title": "Limitación de Responsabilidad",
    "termsConditions.liability.content":
      "MAAM no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo.",
    "termsConditions.governingLaw.title": "Ley Aplicable",
    "termsConditions.governingLaw.content":
      "Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de [Su Jurisdicción].",
    "termsConditions.changes.title": "Cambios en los Términos y Condiciones",
    "termsConditions.changes.content":
      "Nos reservamos el derecho de modificar o reemplazar estos Términos y Condiciones en cualquier momento.",
  },
}

// Language options: "en" | "es"
const LanguageContext = createContext(undefined)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"))
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

