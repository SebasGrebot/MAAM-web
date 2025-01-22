"use client"

import { useLanguage } from "@/contexts/language-context"

export default function TermsConditions() {
  const { t, language } = useLanguage()

  const englishTerms = (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFA8F7] to-[#86CBED]">
        Terms and Conditions of Use
      </h1>
      <div className="prose max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          Welcome to maam.ai ("the App"), operated by Nuup Ltd. ("the Company"). By using the App, you agree to comply
          with and be bound by these Terms and Conditions of Use ("Terms"). If you do not agree to these Terms, please
          do not use the App and uninstall it from your device.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          The Company reserves the right to update or modify these Terms at any time without notice. It is your
          responsibility to review these Terms periodically. Your continued use of the App after any changes constitutes
          acceptance of those changes.
        </p>

        <h2>3. User Eligibility</h2>
        <p>
          You must be at least 13 years of age to use the App. If you are under 18 years of age, you must have the
          consent of a parent or legal guardian to use the App.
        </p>

        <h2>4. User Registration</h2>
        <p>
          To access certain features of the App, you may be required to register for an account. You agree to provide
          accurate and complete information during the registration process and to keep your account information up to
          date. You are responsible for maintaining the confidentiality of your account credentials.
        </p>

        <h2>5. User Content</h2>
        <p>
          You retain ownership of any content you post, upload, or submit on the App ("User Content"). However, by
          posting User Content on the App, you grant the Company a worldwide, non-exclusive, royalty-free license to
          use, reproduce, modify, adapt, publish, translate, distribute, and display your User Content for the purpose
          of operating and improving the App.
        </p>
        <p>
          You are solely responsible for the User Content you submit and the consequences of posting or sharing it. You
          agree not to post or share User Content that is illegal, defamatory, infringing, or violates the rights of
          others.
        </p>

        <h2>6. Prohibited Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful purpose or in violation of these Terms.</li>
          <li>
            Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with any person
            or entity.
          </li>
          <li>Use the App to harass, threaten, or intimidate other users.</li>
          <li>Attempt to gain unauthorized access to the App, user accounts, or any related systems or networks.</li>
          <li>Use the App to transmit any viruses, worms, or malicious code.</li>
          <li>Interfere with or disrupt the operation of the App or the servers and networks connected to it.</li>
        </ul>

        <h2>7. Privacy</h2>
        <p>
          Your use of the App is subject to our Privacy Policy, which is incorporated by reference into these Terms.
          Please review our Privacy Policy to understand how we collect, use, and disclose information about you.
        </p>

        <h2>8. Termination</h2>
        <p>
          The Company reserves the right to suspend or terminate your access to the App, with or without notice, for any
          reason, including but not limited to a violation of these Terms.
        </p>

        <h2>9. Disclaimers</h2>
        <p>The App is provided "as is" and "as available" without warranties of any kind, either express or implied.</p>
        <p>The Company does not guarantee the accuracy, reliability, or availability of the App or its content.</p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, the Company shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
          indirectly, or any loss of data, use, goodwill, or other intangible losses.
        </p>

        <h2>11. Governing Law and Jurisdiction</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of England and Wales, and you agree to
          submit to the exclusive jurisdiction of the courts of England and Wales for the resolution of any disputes.
        </p>

        <h2>12. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at devs@maam.ai.</p>

        <p className="mt-8">
          By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms and the
          Privacy Policy.
        </p>
      </div>
    </>
  )

  const spanishTerms = (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFA8F7] to-[#86CBED]">
        Términos y Condiciones de Uso
      </h1>
      <div className="prose max-w-none">
        <h2>Aceptación de Términos</h2>
        <p>
          Bienvenido/a a maam.ai ("la Aplicación"), operada por Nuup Ltd. ("la Empresa"). Al utilizar la Aplicación,
          aceptas cumplir y estar sujeto/a a estos Términos y Condiciones de Uso ("Términos"). Si no estás de acuerdo
          con estos Términos, por favor, no utilices la Aplicación y desinstala la Aplicación de tu dispositivo.
        </p>

        <h2>Cambios en los Términos</h2>
        <p>
          La Empresa se reserva el derecho de actualizar o modificar estos Términos en cualquier momento sin previo
          aviso. Es tu responsabilidad revisar estos Términos periódicamente. Si continuas usando la Aplicación después
          de cualquier cambio en los Términos de Uso, esto constituye la aceptación de dichos cambios.
        </p>

        <h2>Requisitos del Usuario</h2>
        <p>
          Debes tener al menos 13 años para usar la aplicación. Si tienes menos de 18 años, debes tener el
          consentimiento de uno de tus padres o tutor legal para usar la aplicación.
        </p>

        <h2>Registro de Usuario</h2>
        <p>
          Para acceder a ciertas funciones de la Aplicación, es posible que necesites registrarte para obtener una
          cuenta y poder tener acceso a dichas funciones. Aceptas proporcionar información precisa y completa durante el
          proceso de registro y mantener actualizada tu información en tu cuenta. Eres responsable de mantener la
          confidencialidad de tus credenciales de cuenta.
        </p>

        <h2>Contenido del Usuario</h2>
        <p>
          <strong>a.</strong> Conservas la propiedad de cualquier contenido que publiques, cargues o envíes a la
          Aplicación ("Contenido del Usuario"). Sin embargo, al publicar Contenido del Usuario en la Aplicación, otorgas
          a la Empresa una licencia mundial, no exclusiva y libre de regalías para usar, reproducir, modificar, adaptar,
          publicar, traducir, distribuir y mostrar tu Contenido del Usuario con el fin de operar y mejorar la
          Aplicación.
        </p>
        <p>
          <strong>b.</strong> Eres el único responsable del Contenido del Usuario que envías/presentas en la aplicación
          y de las consecuencias de publicarlo o compartirlo. Te comprometes a no publicar o compartir Contenido del
          Usuario que sea ilegal, difamatorio, infractor o que viole los derechos de terceros.
        </p>

        <h2>Conducta Prohibida</h2>
        <p>Te comprometes a no:</p>
        <ul>
          <li>Utilizar la Aplicación con fines ilícitos o en violación de estos Términos.</li>
          <li>
            Suplantar a cualquier persona o entidad o declarar falsamente o de otra manera tergiversar tu afiliación con
            cualquier persona o entidad.
          </li>
          <li>Utilizar la Aplicación para acosar, amenazar o intimidar a otros usuarios.</li>
          <li>
            Intentar obtener acceso no autorizado a la Aplicación, a cuentas de usuario o cualquier sistema o red
            relacionado con la Aplicación.
          </li>
          <li>Utilizar la Aplicación para transmitir viruses, programas de gusanos o código malicioso.</li>
          <li>
            Interferir o interrumpir el funcionamiento de la Aplicación o los servidores y redes conectadas a ella.
          </li>
        </ul>

        <h2>Privacidad</h2>
        <p>
          Tu uso de la Aplicación está sujeto a nuestra Política de Privacidad, que se incorpora por referencia a estos
          Términos. Por favor, revisa nuestra Política de Privacidad para entender cómo recopilamos, utilizamos y
          divulgamos información sobre tí.
        </p>

        <h2>Terminación de acceso a la Aplicación</h2>
        <p>
          La Empresa se reserva el derecho de suspender o terminar tu acceso a la Aplicación, con o sin previo aviso,
          por cualquier motivo, incluido, pero no limitado, a una violación de estos Términos.
        </p>

        <h2>Exención de Responsabilidad</h2>
        <p>
          <strong>a.</strong> La Aplicación se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún
          tipo, ya sean expresas o implícitas.
        </p>
        <p>
          <strong>b.</strong> La Empresa no garantiza la precisión, confiabilidad o disponibilidad de la Aplicación o su
          contenido.
        </p>

        <h2>Limitación de Responsabilidad</h2>
        <p>
          En la medida máxima permitida por la ley, la Empresa no será responsable de ningún daño indirecto, incidental,
          especial, consecuente o punitivo, o de ninguna pérdida de ganancias o ingresos, ya sea incurrida directa o
          indirectamente, o de ninguna pérdida de datos, uso, buena voluntad u otras pérdidas intangibles.
        </p>

        <h2>Ley y Jurisdicción Aplicables</h2>
        <p>
          Estos Términos se rigen y se interpretan de acuerdo con las leyes de Inglaterra y Gales. Con estos Términos
          aceptas someterte a la jurisdicción exclusiva de los tribunales de Inglaterra y Gales para la resolución de
          cualquier disputa.
        </p>

        <h2>Información de Contacto</h2>
        <p>Si tienes alguna pregunta sobre estos Términos, contáctanos a través de:</p>
        <p>devs@maam.ai</p>

        <p className="mt-8">
          Al utilizar la Aplicación, reconoces que has leído, comprendido y aceptas quedar vinculado/a a estos Términos
          y la nuestra a Política de Privacidad.
        </p>
      </div>
    </>
  )

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-16">{language === "en" ? englishTerms : spanishTerms}</div>
    </div>
  )
}

