import { useI18n } from '../i18n/LanguageContext'
import { HUBS } from '../i18n/translations'
import Reveal from './Reveal'

function CheckPoint({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-route-500/15 text-route-600">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 13l4 4 10-11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span className="text-sm leading-relaxed text-white/75">{children}</span>
    </li>
  )
}

export default function Coverage() {
  const { t } = useI18n()
  const home = HUBS.find((h) => h.home)
  const others = HUBS.filter((h) => !h.home)

  return (
    <section id="coverage" className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" />
      <div className="pointer-events-none absolute -top-20 start-1/3 h-96 w-96 rounded-full bg-route-500/20 blur-[130px]" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow text-sky-bright">
            <span className="h-px w-6 bg-sky-bright" />
            {t('coverage.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl text-white sm:text-5xl">{t('coverage.title')}</h2>
          <p className="mt-5 max-w-md text-white/70">{t('coverage.lead')}</p>
          <ul className="mt-8 space-y-4">
            <CheckPoint>{t('coverage.point1')}</CheckPoint>
            <CheckPoint>{t('coverage.point2')}</CheckPoint>
            <CheckPoint>{t('coverage.point3')}</CheckPoint>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-2xl border border-white/10 bg-navy-950/40 p-4 backdrop-blur">
            <svg viewBox="330 120 320 190" className="w-full" role="img" aria-label="EAVANT coverage network across Europe">
              {/* faint dot grid */}
              <defs>
                <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.06)" />
                </pattern>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect x="330" y="120" width="320" height="190" fill="url(#dots)" />

              {/* routes from home to each hub */}
              {others.map((h, i) => {
                const mx = (home.x + h.x) / 2
                const my = (home.y + h.y) / 2 - 24
                return (
                  <path
                    key={h.id}
                    d={`M ${home.x} ${home.y} Q ${mx} ${my} ${h.x} ${h.y}`}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="1.2"
                    strokeDasharray="4 6"
                    className="animate-dash"
                    style={{ animationDelay: `${i * 0.3}s`, opacity: 0.55 }}
                  />
                )
              })}

              {/* hub dots */}
              {others.map((h) => (
                <g key={h.id}>
                  <circle cx={h.x} cy={h.y} r="3" fill="#cbd5e1" />
                  <text x={h.x} y={h.y - 7} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="Inter, sans-serif">
                    {h.label}
                  </text>
                </g>
              ))}

              {/* home hub */}
              <circle cx={home.x} cy={home.y} r="16" fill="url(#hubGlow)" />
              <circle cx={home.x} cy={home.y} r="6" fill="#22d3ee" />
              <circle cx={home.x} cy={home.y} r="6" fill="none" stroke="#22d3ee" strokeWidth="1.5">
                <animate attributeName="r" from="6" to="15" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.8" to="0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <text x={home.x} y={home.y + 20} textAnchor="middle" fill="#22d3ee" fontSize="9" fontWeight="700" fontFamily="Sora, Inter, sans-serif">
                {home.label}
              </text>
            </svg>

            <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between text-[11px] text-white/50">
              <span>{t('coverage.homeLabel')}</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-route-400" />
                {t('stats.coverageV')}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
