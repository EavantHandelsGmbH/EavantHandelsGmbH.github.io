import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'

const SECTIONS = ['services', 'coverage', 'process', 'about', 'contact']

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = location.pathname === '/'
  // dark = transparent nav over the dark hero (only at top of home, menu closed)
  const dark = isHome && !scrolled && !mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const go = (id) => {
    setMobileOpen(false)
    if (isHome) scrollToId(id)
    else navigate('/', { state: { scrollTo: id } })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        dark ? 'bg-transparent' : 'border-b border-line bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="container-x flex h-[70px] items-center justify-between gap-4">
        <button onClick={() => go('top')} className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-route-500" aria-label="EAVANT — Home">
          <Logo variant={dark ? 'white' : 'navy'} />
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                dark ? 'text-white/85 hover:bg-white/10 hover:text-white' : 'text-slate-body hover:bg-mist hover:text-ink'
              }`}
            >
              {t(`nav.${s}`)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher dark={dark} />
          <button onClick={() => go('contact')} className={`hidden sm:inline-flex !px-4 !py-2.5 text-sm ${dark ? 'btn-ghost-dark' : 'btn-primary'}`}>
            {t('nav.cta')}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
              dark ? 'border-white/25 text-white' : 'border-line text-ink'
            }`}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <div className="relative h-4 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${mobileOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${mobileOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-white lg:hidden transition-[max-height,opacity] duration-300 ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {SECTIONS.map((s) => (
            <button key={s} onClick={() => go(s)} className="rounded-lg px-4 py-3 text-start text-base font-medium text-slate-body transition hover:bg-mist hover:text-ink">
              {t(`nav.${s}`)}
            </button>
          ))}
          <button onClick={() => go('contact')} className="btn-primary mt-2 w-full">
            {t('nav.cta')}
          </button>
        </nav>
      </div>
    </header>
  )
}
