import { useI18n } from '../i18n/LanguageContext'
import LegalLayout from './LegalLayout'

function H({ children }) {
  return <h2 className="font-display text-xl font-bold text-ink">{children}</h2>
}

export default function Datenschutz() {
  const { t } = useI18n()
  return (
    <LegalLayout title={t('legal.datenschutzTitle')}>
      <p className="leading-relaxed">
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie, wie wir mit
        Ihren Daten umgehen.
      </p>

      <div>
        <H>1. Verantwortlicher</H>
        <p className="mt-3 leading-relaxed">
          EAVANT Handels GmbH<br />
          Frauenstiftgasse 12A/6, 1210 Wien<br />
          Telefon: +43 664 5295689<br />
          E-Mail: <a href="mailto:office@eavant.at" className="text-route-600 hover:underline">office@eavant.at</a>
        </p>
      </div>

      <div>
        <H>2. Erhebung und Verarbeitung personenbezogener Daten</H>
        <p className="mt-3 leading-relaxed">
          Wir speichern keine personenbezogenen Daten automatisch oder über Tracking-Tools. Eine Datenverarbeitung
          erfolgt ausschließlich dann, wenn Sie uns über das Kontaktformular Informationen übermitteln (Name, E-Mail,
          Betreff, Nachricht).
        </p>
        <p className="mt-3 leading-relaxed">
          Die im Formular eingegebenen Daten werden über den Dienst <strong className="text-ink">FormSubmit</strong> an
          unsere E-Mail-Adresse übermittelt, ohne dass wir sie auf eigenen Servern speichern. FormSubmit ist für die
          Verarbeitung verantwortlich.
        </p>
      </div>

      <div>
        <H>3. Cookies und Tracking</H>
        <p className="mt-3 leading-relaxed">
          Unsere Website verwendet keine Cookies, Web Beacons oder andere Tracking-Technologien. Wir setzen keine
          Analyse-Tools ein.
        </p>
      </div>

      <div>
        <H>4. Lokale Speicherung im Browser</H>
        <p className="mt-3 leading-relaxed">
          Zur Verbesserung der Nutzererfahrung speichern wir Ihre Sprachauswahl lokal in Ihrem Browser (Local Storage).
          Diese Information ist technisch notwendig und enthält keine personenbezogenen Daten.
        </p>
      </div>

      <div>
        <H>5. Ihre Rechte</H>
        <p className="mt-3 leading-relaxed">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten. Bei Fragen erreichen Sie uns jederzeit unter{' '}
          <a href="mailto:office@eavant.at" className="text-route-600 hover:underline">office@eavant.at</a>.
        </p>
      </div>
    </LegalLayout>
  )
}
