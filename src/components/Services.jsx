import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'
import { SERVICE_KEYS, SERVICE_META } from '../i18n/translations'
import { scrollToId } from './Nav'
import Reveal from './Reveal'

const ICONS = {
  bolt: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" fill="currentColor" />,
  van: <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" /><circle cx="7" cy="17" r="1.8" /><circle cx="17.5" cy="17" r="1.8" /></g>,
  globe: <g fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.6 6 3.6 9s-1.1 6.5-3.6 9c-2.5-2.5-3.6-6-3.6-9S9.5 5.5 12 3Z" /></g>,
  shield: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Zm-1.4 12L8 12.6l1.4-1.4 1.2 1.2 3.1-3.1L15.2 10l-4.6 5Z" fill="currentColor" />,
  recycle: <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7 9.5 3l2.5 4M7 7 4 8l1.5 4M16 8l3 1-1 4M14 4l2 4-4 .5M9 20l-4-1 1.5-4M18 15l1 5-4-1" /></g>,
  clock: <g fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" /></g>,
}

function Card({ k, index, onOpen }) {
  const { t } = useI18n()
  const meta = SERVICE_META[k]
  const isResource = meta.pillar === 'resource'
  return (
    <Reveal delay={(index % 3) * 0.07} className="h-full">
      <button
        onClick={() => onOpen(k)}
        className="card group flex h-full w-full flex-col p-6 text-start transition-all duration-300 hover:-translate-y-1 hover:border-route-400/60 hover:shadow-soft"
      >
        <div className="flex items-center justify-between">
          <span className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${isResource ? 'bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500/20' : 'bg-route-500/10 text-route-600 group-hover:bg-route-500/20'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">{ICONS[meta.icon]}</svg>
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${isResource ? 'bg-emerald-500/10 text-emerald-700' : 'bg-navy-500/5 text-navy-600'}`}>
            {t(`services.items.${k}.tag`)}
          </span>
        </div>
        <h3 className="mt-5 font-display text-xl font-bold text-ink">{t(`services.items.${k}.name`)}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-body">{t(`services.items.${k}.short`)}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-route-600">
          {t('services.more')}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </Reveal>
  )
}

function Modal({ k, onClose }) {
  const { t } = useI18n()
  const meta = SERVICE_META[k]
  const isResource = meta.pillar === 'resource'
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])
  return (
    <motion.div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-navy-950/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 260 }}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-t-2xl border border-line bg-white shadow-soft sm:rounded-2xl"
      >
        <div className={`flex items-center gap-4 p-6 ${isResource ? 'bg-emerald-500/5' : 'bg-route-500/5'}`}>
          <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${isResource ? 'bg-emerald-500/15 text-emerald-600' : 'bg-route-500/15 text-route-600'}`}>
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">{ICONS[meta.icon]}</svg>
          </span>
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${isResource ? 'text-emerald-700' : 'text-navy-600'}`}>{t(`services.items.${k}.tag`)}</span>
            <h3 className="heading text-2xl">{t(`services.items.${k}.name`)}</h3>
          </div>
          <button onClick={onClose} className="ms-auto flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:bg-mist" aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
        <div className="p-6">
          <p className="text-sm leading-relaxed text-slate-body">{t(`services.items.${k}.long`)}</p>
          <button onClick={() => { onClose(); setTimeout(() => scrollToId('contact'), 60) }} className="btn-primary mt-6 w-full">
            {t('services.modalCta')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const { t } = useI18n()
  const [active, setActive] = useState(null)
  return (
    <section id="services" className="relative bg-mist py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-route-500" />
            {t('services.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('services.title')}</h2>
          <p className="mt-4 text-slate-body">{t('services.lead')}</p>
        </Reveal>

        {/* pillar legend */}
        <Reveal delay={0.05} className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-navy-600">
            <span className="h-2.5 w-2.5 rounded-full bg-route-500" />
            {t('services.pillarTransport')}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-emerald-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            {t('services.pillarResource')}
          </span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_KEYS.map((k, i) => (
            <Card key={k} k={k} index={i} onOpen={setActive} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <button onClick={() => scrollToId('contact')} className="btn-ghost group">
            {t('services.cta')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Reveal>
      </div>

      <AnimatePresence>{active && <Modal k={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}
