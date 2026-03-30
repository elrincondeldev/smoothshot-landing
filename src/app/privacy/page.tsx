"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/shared/ui/icon";

const content = {
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 30 de marzo de 2026",
    sections: [
      {
        heading: "Política de Privacidad",
        body: (
          <p>
            Esta política de privacidad describe cómo SmoothShot (&quot;la
            app&quot;) trata la información del usuario. SmoothShot es una
            aplicación gratuita de capturas de pantalla y grabación de pantalla
            para macOS, desarrollada por Jose Ramon Montes Hermida y distribuida
            a través del Mac App Store.
          </p>
        ),
      },
      {
        heading: "Recopilación de datos",
        body: (
          <>
            <p>
              SmoothShot{" "}
              <strong>
                no recopila, almacena ni transmite datos personales
              </strong>{" "}
              de ningún tipo. En concreto:
            </p>
            <ul>
              <li>
                No utiliza herramientas de análisis (analytics) ni seguimiento
                (tracking).
              </li>
              <li>No envía datos a servidores externos.</li>
              <li>No requiere creación de cuentas ni inicio de sesión.</li>
              <li>
                No accede a contactos, calendario, ubicación ni ningún otro dato
                personal.
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: "Almacenamiento local",
        body: (
          <p>
            Todas las capturas de pantalla y grabaciones de pantalla se guardan
            exclusivamente en el dispositivo del usuario, en las carpetas que
            este elija (por defecto, Descargas o Imágenes). SmoothShot no sube
            estos archivos a ningún servidor ni servicio en la nube.
          </p>
        ),
      },
      {
        heading: "Permisos del sistema",
        body: (
          <>
            <p>
              SmoothShot requiere los siguientes permisos de macOS para
              funcionar correctamente:
            </p>
            <ul>
              <li>
                <strong>Grabación de pantalla:</strong> necesario para capturar y
                grabar el contenido de la pantalla. Este permiso es gestionado
                por macOS y el usuario puede revocarlo en cualquier momento desde
                Ajustes del Sistema.
              </li>
              <li>
                <strong>Acceso a carpetas:</strong> necesario para guardar los
                archivos generados en las carpetas de Descargas e Imágenes del
                usuario.
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: "Acceso a red",
        body: (
          <p>
            SmoothShot utiliza acceso a red únicamente para la función de
            captura de páginas web completas. Cuando el usuario proporciona una
            URL, la app carga dicha página localmente mediante WKWebView para
            generar la captura.{" "}
            <strong>
              No se envían datos del usuario a servidores externos
            </strong>{" "}
            durante este proceso.
          </p>
        ),
      },
      {
        heading: "Servicios de terceros",
        body: (
          <p>
            SmoothShot no integra servicios de terceros que recopilen datos del
            usuario. La distribución a través del Mac App Store está sujeta a la{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Política de Privacidad de Apple
            </a>
            .
          </p>
        ),
      },
      {
        heading: "Privacidad infantil",
        body: (
          <p>
            SmoothShot no recopila información de ningún usuario, incluidos
            menores de edad.
          </p>
        ),
      },
      {
        heading: "Cambios en esta política",
        body: (
          <p>
            Si se realizan cambios en esta política de privacidad, se actualizará
            esta página con la nueva fecha de revisión. Se recomienda revisar
            esta página periódicamente.
          </p>
        ),
      },
      {
        heading: "Contacto",
        body: (
          <p>
            Si tienes preguntas sobre esta política de privacidad, puedes
            escribir a:{" "}
            <a
              href="mailto:jrmh.business@gmail.com"
              className="text-primary hover:underline"
            >
              jrmh.business@gmail.com
            </a>
          </p>
        ),
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: March 30, 2026",
    sections: [
      {
        heading: "Privacy Policy",
        body: (
          <p>
            This privacy policy describes how SmoothShot (&quot;the app&quot;)
            handles user information. SmoothShot is a free screenshot and screen
            recording application for macOS, developed by Jose Ramon Montes
            Hermida and distributed through the Mac App Store.
          </p>
        ),
      },
      {
        heading: "Data Collection",
        body: (
          <>
            <p>
              SmoothShot{" "}
              <strong>
                does not collect, store, or transmit any personal data
              </strong>
              . Specifically:
            </p>
            <ul>
              <li>It does not use analytics or tracking tools.</li>
              <li>It does not send data to external servers.</li>
              <li>It does not require account creation or login.</li>
              <li>
                It does not access contacts, calendar, location, or any other
                personal data.
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: "Local Storage",
        body: (
          <p>
            All screenshots and screen recordings are saved exclusively on the
            user&apos;s device, in the folders the user chooses (by default,
            Downloads or Pictures). SmoothShot does not upload these files to any
            server or cloud service.
          </p>
        ),
      },
      {
        heading: "System Permissions",
        body: (
          <>
            <p>
              SmoothShot requires the following macOS permissions to function
              properly:
            </p>
            <ul>
              <li>
                <strong>Screen Recording:</strong> required to capture and record
                screen content. This permission is managed by macOS and can be
                revoked at any time from System Settings.
              </li>
              <li>
                <strong>Folder Access:</strong> required to save generated files
                to the user&apos;s Downloads and Pictures folders.
              </li>
            </ul>
          </>
        ),
      },
      {
        heading: "Network Access",
        body: (
          <p>
            SmoothShot uses network access solely for the full webpage capture
            feature. When the user provides a URL, the app loads that page
            locally via WKWebView to generate the capture.{" "}
            <strong>No user data is sent to external servers</strong> during this
            process.
          </p>
        ),
      },
      {
        heading: "Third-Party Services",
        body: (
          <p>
            SmoothShot does not integrate any third-party services that collect
            user data. Distribution through the Mac App Store is subject to{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Apple&apos;s Privacy Policy
            </a>
            .
          </p>
        ),
      },
      {
        heading: "Children's Privacy",
        body: (
          <p>
            SmoothShot does not collect information from any user, including
            children.
          </p>
        ),
      },
      {
        heading: "Changes to This Policy",
        body: (
          <p>
            If changes are made to this privacy policy, this page will be updated
            with the new revision date. We recommend checking this page
            periodically.
          </p>
        ),
      },
      {
        heading: "Contact",
        body: (
          <p>
            If you have questions about this privacy policy, you can reach out
            at:{" "}
            <a
              href="mailto:jrmh.business@gmail.com"
              className="text-primary hover:underline"
            >
              jrmh.business@gmail.com
            </a>
          </p>
        ),
      },
    ],
  },
} as const;

type Lang = keyof typeof content;

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("es");
  const { title, updated, sections } = content[lang];

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-on-surface-variant text-sm hover:text-primary transition-colors"
        >
          <Icon name="arrow_back" className="text-base" />
          <span>SmoothShot</span>
        </Link>
      </div>

      <article className="max-w-3xl mx-auto px-6 pt-8 pb-20">
        {/* Header */}
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          {title}
        </h1>

        {/* Language toggle */}
        <div className="flex items-center gap-2 mb-10">
          <button
            onClick={() => setLang("es")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${
              lang === "es"
                ? "bg-primary text-on-primary border-primary"
                : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            Español
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${
              lang === "en"
                ? "bg-primary text-on-primary border-primary"
                : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            English
          </button>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {sections.map((section, i) => (
            <section key={i}>
              {i > 0 && (
                <h2 className="text-lg font-semibold text-white mb-3">
                  {section.heading}
                </h2>
              )}
              <div className="text-on-surface-variant text-[15px] leading-relaxed [&_p]:mb-3 [&_ul]:mt-2 [&_ul]:mb-3 [&_ul]:ml-5 [&_ul]:list-disc [&_li]:mb-1.5 [&_strong]:text-white">
                {section.body}
              </div>
            </section>
          ))}
        </div>

        {/* Updated date */}
        <p className="mt-12 pt-6 border-t border-white/5 text-xs text-outline text-center">
          {updated}
        </p>
      </article>
    </div>
  );
}
