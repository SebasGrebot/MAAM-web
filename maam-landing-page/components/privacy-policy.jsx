"use client"

import { useLanguage } from "@/contexts/language-context"

export default function PrivacyPolicy() {
  const { t, language } = useLanguage()

  const englishPolicy = (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFA8F7] to-[#86CBED]">
        Privacy Policy
      </h1>
      <div className="prose max-w-none">
        <h2>1. Introduction</h2>
        <p>
          Welcome to maam.ai ("the App"), operated by Nuup Ltd ("the Company"). This Privacy Policy is designed to help
          you understand how we collect, use, disclose, and safeguard your personal information. By using the App, you
          consent to the practices described in this Privacy Policy.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          <strong>User-Provided Information:</strong> We may collect personal information that you provide directly to
          us when you register for an account, update your profile, post content, or contact us. This may include your
          name, email address, profile picture, and other information you choose to provide.
        </p>
        <p>
          <strong>Automatically Collected Information:</strong> We may automatically collect certain information about
          your use of the App, including your device information, log data, and location information (with your consent,
          where required).
        </p>
        <p>
          <strong>Cookies and Similar Technologies:</strong> We may use cookies and similar technologies to collect
          information about your browsing and usage patterns. You can manage cookie preferences through your browser
          settings.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We may use your personal information for the following purposes:</p>
        <ul>
          <li>To provide and improve the App's features and functionality.</li>
          <li>To communicate with you about the App and related services.</li>
          <li>To personalize your experience on the App.</li>
          <li>To monitor and analyze usage patterns and trends.</li>
          <li>To detect and prevent fraud, spam, and abuse.</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>We may share your personal information with:</p>
        <ul>
          <li>Other users of the App in accordance with your privacy settings and preferences.</li>
          <li>Third-party service providers who help us operate and improve the App.</li>
          <li>
            Law enforcement agencies, government authorities, or other third parties when required by law or to protect
            our legal rights.
          </li>
        </ul>

        <h2>5. Your Rights and Choices</h2>
        <p>You have the following rights and choices regarding your personal information:</p>
        <ul>
          <li>
            <strong>Access and Correction:</strong> You can access and update your personal information through your
            account settings.
          </li>
          <li>
            <strong>Data Portability:</strong> You can request a copy of your data in a structured, machine-readable
            format.
          </li>
          <li>
            <strong>Deletion:</strong> You can request the deletion of your account and associated data.
          </li>
          <li>
            <strong>Marketing Communications:</strong> You can opt out of receiving marketing communications from us by
            following the instructions provided in the communications.
          </li>
        </ul>

        <h2>6. Data Security</h2>
        <p>
          We employ reasonable security measures to protect your personal information from unauthorized access,
          disclosure, or alteration. However, no method of transmission over the internet is entirely secure, and we
          cannot guarantee the absolute security of your data.
        </p>

        <h2>7. International Data Transfers</h2>
        <p>
          Your personal information may be transferred to and processed in countries outside of your jurisdiction,
          including countries that may have different data protection laws than your own. We will take appropriate
          measures to ensure that your data is adequately protected when transferred internationally.
        </p>

        <h2>8. Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any time. We will notify you of significant
          changes through the App or other means. Your continued use of the App after such changes constitute acceptance
          of the revised Privacy Policy.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your
          personal information, please contact us at:
        </p>
        <p>devs@maam.ai</p>

        <h2>10. Governing Law and Jurisdiction</h2>
        <p>
          This Privacy Policy is governed by and construed in accordance with the laws of England and Wales, and you
          agree to submit to the exclusive jurisdiction of the courts of England and Wales for the resolution of any
          disputes.
        </p>

        <p className="mt-8">
          By using the App, you acknowledge that you have read, understood, and agree to the practices described in this
          Privacy Policy.
        </p>
      </div>
    </>
  )

  const spanishPolicy = (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFA8F7] to-[#86CBED]">
        Política de Privacidad
      </h1>
      <div className="prose max-w-none">
        <h2>Introducción</h2>
        <p>
          Bienvenido/a a maam.ai ("la aplicación"), operada por Nuup Ltd ("la empresa"). Esta Política de Privacidad
          está diseñada para ayudarte a comprender cómo recopilamos, utilizamos, divulgamos y protegemos tu información
          personal. Al utilizar la aplicación, estás aceptando las prácticas descritas en esta Política de Privacidad.
        </p>

        <h2>Recopilación de Información</h2>
        <p>
          <strong>a. Información Proporcionada por el Usuario:</strong> Podemos recopilar información personal que nos
          proporciones directamente al registrarte para crear una cuenta, actualizar tu perfil, publicar contenido o
          ponerte en contacto con nosotros. Esto puede incluir datos como tu nombre, dirección de correo electrónico,
          imagen de perfil y cualquier otra información que elijas compartir.
        </p>
        <p>
          <strong>b. Información Recopilada Automáticamente:</strong> Podemos recopilar automáticamente cierta
          información sobre tu uso de la aplicación incluyendo la información de tu dispositivo, datos de registro e
          información de ubicación (con tu consentimiento, cuando sea necesario).
        </p>
        <p>
          <strong>c. Cookies y Tecnologías Similares:</strong> Podemos utilizar cookies y tecnologías similares para
          recopilar información sobre tus patrones de navegación y uso. Puedes gestionar las preferencias de las cookies
          a través de la configuración de tu navegador.
        </p>

        <h2>¿Cómo Utilizamos Tu Información?</h2>
        <p>Podemos utilizar tu información personal para los siguientes fines:</p>
        <ul>
          <li>Proporcionar y mejorar las funciones y la funcionalidad de la aplicación.</li>
          <li>Comunicarnos contigo sobre la aplicación y servicios relacionados.</li>
          <li>Personalizar tu experiencia en la aplicación.</li>
          <li>Supervisar y analizar patrones de uso y tendencias.</li>
          <li>Detectar y prevenir fraudes, correos no deseados y abusos.</li>
        </ul>

        <h2>¿Cómo Compartimos Tu Información?</h2>
        <p>Podemos compartir tu información personal con:</p>
        <ul>
          <li>Otros usuarios de la aplicación de acuerdo con tus configuraciones de privacidad y preferencias.</li>
          <li>Proveedores de servicios externos que nos ayudan a operar y mejorar la aplicación.</li>
          <li>
            Organismos encargados de hacer cumplir la ley, autoridades gubernamentales u otros terceros cuando lo exija
            la ley o para proteger nuestros derechos legales.
          </li>
        </ul>

        <h2>Tus Opciones</h2>
        <p>Tienes los siguientes derechos y opciones con respecto a tu información personal:</p>
        <ul>
          <li>
            <strong>Acceso y Corrección:</strong> Puedes acceder y actualizar tu información personal a través de la
            configuración de tu cuenta.
          </li>
          <li>
            <strong>Portabilidad de Datos:</strong> Puedes solicitar una copia de tus datos en un formato estructurado y
            legible por máquina.
          </li>
          <li>
            <strong>Eliminación:</strong> Puedes solicitar la eliminación de tu cuenta y datos asociados.
          </li>
          <li>
            <strong>Comunicaciones de Marketing:</strong> Puedes optar por no recibir comunicaciones de marketing
            siguiendo las instrucciones proporcionadas en las comunicaciones.
          </li>
        </ul>

        <h2>Seguridad de Datos</h2>
        <p>
          Implementamos medidas de seguridad razonables para proteger tu información personal contra el acceso no
          autorizado, la divulgación o la alteración. Sin embargo, ningún método de transmisión por internet es
          completamente seguro, y no podemos garantizar la seguridad absoluta de tus datos.
        </p>

        <h2>Transferencias Internacionales de Datos</h2>
        <p>
          Tu información personal puede ser transferida y procesada en países fuera de tu jurisdicción, incluyendo
          países que pueden tener leyes de protección de datos diferentes a las de tu jurisdicción. Tomaremos medidas
          adecuadas para garantizar que tus datos estén adecuadamente protegidos al transferirse internacionalmente.
        </p>

        <h2>Cambios en esta Política de Privacidad</h2>
        <p>
          Nos reservamos el derecho de actualizar o modificar en cualquier momento esta Política de Privacidad. Te
          notificaremos de cambios significativos a través de la aplicación u otros medios. El continuar usando la
          aplicación después de tales cambios, constituye la aceptación de la Política de Privacidad revisada.
        </p>

        <h2>Contáctanos</h2>
        <p>
          Si tienes alguna pregunta, inquietud o solicitud con respecto a esta Política de Privacidad o el procesamiento
          de tu información personal, contáctanos a través de:
        </p>
        <p>devs@maam.ai</p>

        <h2>Ley y Jurisdicción Aplicables</h2>
        <p>
          Esta Política de Privacidad está sujeta a la regulación e interpretación conforme a las leyes de Inglaterra y
          Gales. Al aceptar esta política, aceptas someterte a la jurisdicción exclusiva de los tribunales de Inglaterra
          y Gales para la resolución de cualquier disputa.
        </p>

        <p className="mt-8">
          Al utilizar la Aplicación, reconoces que has leído, comprendido y aceptado las prácticas descritas en esta
          Política de Privacidad.
        </p>
      </div>
    </>
  )

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-16">{language === "en" ? englishPolicy : spanishPolicy}</div>
    </div>
  )
}

