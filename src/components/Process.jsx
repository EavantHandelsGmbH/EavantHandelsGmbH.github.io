import { useI18n } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const STEPS = ['s1', 's2', 's3', 's4']

export default function Process() {
  const { t } = useI18n()
  return (
    <section id="process" className="relative bg-white py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-route-500" />
            {t('process.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('process.title')}</h2>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-7 hidden h-0.5 bg-gradient-to-r from-transparent via-line to-transparent md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s} delay={i * 0.1} className="relative">
              <div className="flex flex-col items-center text-center md:items-start md:text-start">
                <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-500 font-display text-xl font-bold text-white shadow-card">
                  {String(i + 1).padStart(2, '0')}
                  <span className="absolute -end-1 -top-1 h-3.5 w-3.5 rounded-full bg-sky-bright ring-4 ring-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{t(`process.steps.${s}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">{t(`process.steps.${s}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
