import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import { CONTACT } from '../i18n/translations'
import Logo from './Logo'
import { scrollToId } from './Nav'

const SECTIONS = ['services', 'coverage', 'process', 'about', 'contact']

export default function Footer() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const year = new Date().getFullYear()

  const go = (id) => {
    if (location.pathname === '/') scrollToId(id)
    else navigate('/', { state: { scrollTo: id } })
  }

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">{t('footer.blurb')}</p>
          <p className="mt-4 font-display text-lg font-bold text-white">{t('footer.tagline')}</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{t('footer.nav')}</h4>
          <ul className="space-y-2.5">
            {SECTIONS.map((s) => (
              <li key={s}>
                <button onClick={() => go(s)} className="text-sm text-white/70 transition hover:text-sky-bright">{t(`nav.${s}`)}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{t('footer.legalCol')}</h4>
          <ul className="space-y-2.5">
            <li><Link to="/impressum" className="text-sm text-white/70 transition hover:text-sky-bright">{t('footer.impressum')}</Link></li>
            <li><Link to="/datenschutz" className="text-sm text-white/70 transition hover:text-sky-bright">{t('footer.datenschutz')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{t('footer.contactCol')}</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={CONTACT.phoneHref} className="text-white/70 transition hover:text-sky-bright">{CONTACT.phone}</a></li>
            <li><a href={CONTACT.emailHref} className="text-white/70 transition hover:text-sky-bright">{CONTACT.email}</a></li>
            <li className="pt-1 leading-relaxed text-white/55">{CONTACT.addressLines.join(', ')}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-white/50">© {year} EAVANT Handels GmbH · {t('footer.rights')}</p>
          <p className="text-xs text-white/40">FN 633636 v · Handelsgericht Wien · {CONTACT.domain}</p>
        </div>
      </div>
    </footer>
  )
}
