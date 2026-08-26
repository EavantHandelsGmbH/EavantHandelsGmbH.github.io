import { useI18n } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const ICONS = {
  reliable: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Zm-1.5 10.5L8 11l1.4-1.4 1.1 1.1 3-3L15 9l-4.5 4.5Z" fill="currentColor" />,
  transparent: <g fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></g>,
  flexible: <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  punctual: <g fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" /></g>,
  sustainable: <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7 9.5 3l2.5 4M16 8l3 1-1 4M9 20l-4-1 1.5-4" /></g>,
  personal: <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" /></g>,
}
const KEYS = ['reliable', 'transparent', 'flexible', 'punctual', 'sustainable', 'personal']

export default function Why() {
  const { t } = useI18n()
  return (
    <section className="relative bg-mist py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <span className="eyebrow">
            <span className="h-px w-6 bg-route-500" />
            {t('why.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('why.title')}</h2>
          <p className="mt-5 max-w-md text-slate-body">{t('why.lead')}</p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {KEYS.map((k, i) => (
            <Reveal key={k} delay={(i % 2) * 0.06} className="h-full">
              <div className="card group h-full p-6 transition-colors duration-300 hover:border-route-400/50">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-route-500/10 text-route-600 transition group-hover:bg-route-500/20">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">{ICONS[k]}</svg>
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{t(`why.points.${k}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">{t(`why.points.${k}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
