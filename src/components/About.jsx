import { useI18n } from '../i18n/LanguageContext'
import { media } from '../data/media'
import Reveal from './Reveal'

export default function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-navy-800 bg-navy-900 p-8">
            <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
            <div className="pointer-events-none absolute -top-16 end-[-10%] h-56 w-56 rounded-full bg-route-500/25 blur-[90px]" />
            <div className="relative">
              <img src={media('logo_white.png')} alt="EAVANT" className="h-10 w-auto" draggable="false" />
              <img src={media('van.png')} alt="" className="mt-8 w-full max-w-sm drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)] rtl:-scale-x-100" draggable="false" />
              <svg viewBox="0 0 400 24" className="mt-1 w-full" aria-hidden="true">
                <line x1="0" y1="12" x2="400" y2="12" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="0" y1="12" x2="400" y2="12" stroke="#22d3ee" strokeWidth="2" strokeDasharray="14 18" className="animate-dash" opacity="0.7" />
              </svg>
              <p className="mt-6 font-display text-xl font-bold text-white">{t('about.motto')}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <span className="eyebrow">
            <span className="h-px w-6 bg-route-500" />
            {t('about.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('about.title')}</h2>
          <p className="mt-6 leading-relaxed text-slate-body">{t('about.p1')}</p>
          <p className="mt-4 leading-relaxed text-slate-body">{t('about.p2')}</p>
        </Reveal>
      </div>
    </section>
  )
}
