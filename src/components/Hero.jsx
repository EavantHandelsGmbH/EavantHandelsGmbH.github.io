import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'
import { media } from '../data/media'
import { scrollToId } from './Nav'

function Stat({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="font-display text-lg font-bold text-white sm:text-xl">{value}</div>
      <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/55 sm:text-xs">{label}</div>
    </motion.div>
  )
}

export default function Hero() {
  const { t } = useI18n()
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 pt-[70px] text-white">
      {/* gradient + grid */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950" />
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div className="pointer-events-none absolute -top-24 end-[-6%] h-[440px] w-[440px] rounded-full bg-route-500/25 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-10%] start-[-6%] h-[380px] w-[380px] rounded-full bg-sky-bright/10 blur-[120px]" />

      <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-[1.14fr_0.86fr] lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-bright opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-bright" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/80 sm:text-xs sm:tracking-[0.16em]">{t('hero.badge')}</span>
          </motion.div>

          <h1 className="heading text-[1.85rem] [overflow-wrap:anywhere] [hyphens:auto] sm:text-[2.9rem] lg:text-[3.05rem]">
            <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="block text-white">
              {t('hero.titleTop')}
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.13 }} className="block bg-gradient-to-r from-route-400 to-sky-bright bg-clip-text text-transparent">
              {t('hero.titleAccent')}
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.21 }} className="block text-white">
              {t('hero.titleEnd')}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-white/75"
          >
            {t('hero.lead')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button onClick={() => scrollToId('contact')} className="btn-primary">
              {t('hero.ctaPrimary')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="rtl:rotate-180" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => scrollToId('services')} className="btn-ghost-dark">
              {t('hero.ctaSecondary')}
            </button>
          </motion.div>

          <div className="mt-12 grid max-w-xl grid-cols-2 gap-x-5 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-4">
            <Stat value={t('stats.coverageV')} label={t('stats.coverage')} delay={0.5} />
            <Stat value={t('stats.speedV')} label={t('stats.speed')} delay={0.57} />
            <Stat value={t('stats.capacityV')} label={t('stats.capacity')} delay={0.64} />
            <Stat value={t('stats.reliabilityV')} label={t('stats.reliability')} delay={0.71} />
          </div>
        </div>

        {/* Van */}
        <div className="relative z-10">
          <div className="relative">
            {/* route line */}
            <svg viewBox="0 0 500 120" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
              <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
              <line x1="0" y1="100" x2="500" y2="100" stroke="#22d3ee" strokeWidth="2" strokeDasharray="16 20" className="animate-dash" opacity="0.7" />
            </svg>
            <motion.img
              src={media('van.png')}
              alt={t('hero.vanAlt')}
              initial={{ opacity: 0, x: 90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative z-10 mx-auto w-full max-w-[560px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] rtl:-scale-x-100"
              draggable="false"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute end-2 top-2 flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-sky-bright animate-pulseDot" />
              {t('stats.coverageV')}
            </motion.div>
          </div>
        </div>
      </div>

      {/* wave divider into light content */}
      <div className="relative z-10 -mb-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block h-[46px] w-full" aria-hidden="true">
          <path d="M0 60 L0 30 Q 360 0 720 24 T 1440 20 L1440 60 Z" fill="#f4f6fa" />
        </svg>
      </div>
    </section>
  )
}
