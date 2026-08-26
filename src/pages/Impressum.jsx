import { useI18n } from '../i18n/LanguageContext'
import LegalLayout from './LegalLayout'

function H({ children }) {
  return <h2 className="font-display text-xl font-bold text-ink">{children}</h2>
}

export default function Impressum() {
  const { t } = useI18n()
  return (
    <LegalLayout title={t('legal.impressumTitle')}>
      <p className="rounded-lg border border-line bg-white px-4 py-3 text-sm text-slate-muted">
        Angaben gemäß § 5 ECG und § 14 UGB. / Legal information under Austrian law (in German).
      </p>

      <div>
        <H>EAVANT Handels GmbH</H>
        <p className="mt-3 leading-relaxed">
          Frauenstiftgasse 12A/6<br />
          1210 Wien, Österreich
        </p>
        <p className="mt-3 leading-relaxed">
          Telefon: <a href="tel:+436645295689" className="text-route-600 hover:underline">+43 664 5295689</a><br />
          E-Mail: <a href="mailto:office@eavant.at" className="text-route-600 hover:underline">office@eavant.at</a>
        </p>
      </div>

      <div>
        <H>Unternehmensdaten</H>
        <ul className="mt-3 space-y-1.5 leading-relaxed">
          <li><span className="text-slate-muted">Firmenbuchnummer (FN):</span> 633636 v</li>
          <li><span className="text-slate-muted">Firmenbuchgericht:</span> Handelsgericht Wien</li>
          <li><span className="text-slate-muted">Sitz:</span> 1210 Wien</li>
          <li><span className="text-slate-muted">Aufsichtsbehörde:</span> Magistrat der Stadt Wien</li>
          <li><span className="text-slate-muted">Mitglied:</span> Wirtschaftskammer Wien (WKW)</li>
        </ul>
      </div>

      <div>
        <H>Gewerbeberechtigungen</H>
        <div className="mt-3 space-y-4">
          <div className="rounded-xl border border-line bg-white p-4">
            <h3 className="font-semibold text-ink">FG Kleintransporteure</h3>
            <p className="mt-1 text-sm leading-relaxed">
              Güterbeförderung mit Kraftfahrzeugen oder Kraftfahrzeugen mit Anhängern, deren höchst zulässiges
              Gesamtgewicht im grenzüberschreitenden Güterverkehr insgesamt 2.500 kg bzw. im innerstaatlichen
              Güterverkehr 3.500 kg nicht übersteigt.
            </p>
            <p className="mt-2 text-sm"><span className="text-slate-muted">Gewerberechtl. GF:</span> Mohammed Waheed Sadek Fohiel · <span className="text-slate-muted">GISA-Zahl:</span> 38263439</p>
          </div>
          <div className="rounded-xl border border-line bg-white p-4">
            <h3 className="font-semibold text-ink">FG Entsorgungs- und Ressourcenmanagement</h3>
            <p className="mt-1 text-sm leading-relaxed">Sammeln und Behandeln von Abfällen und Abwässern.</p>
            <p className="mt-2 text-sm"><span className="text-slate-muted">Gewerberechtl. GF:</span> Mohammed Waheed Sadek Fohiel · <span className="text-slate-muted">GISA-Zahl:</span> 38263583</p>
          </div>
        </div>
      </div>

      <div>
        <H>Anwendbare Rechtsvorschriften</H>
        <p className="mt-3 leading-relaxed">
          Gewerbeordnung (GewO), Unternehmensgesetzbuch (UGB), GmbH-Gesetz (GmbHG), E-Commerce-Gesetz (ECG),
          Güterbeförderungsgesetz (GütbefG), Abfallwirtschaftsgesetz (AWG). Abrufbar über das Rechtsinformationssystem
          des Bundes: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer" className="text-route-600 hover:underline">ris.bka.gv.at</a>.
        </p>
      </div>
    </LegalLayout>
  )
}
