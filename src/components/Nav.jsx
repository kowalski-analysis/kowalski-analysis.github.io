import { useState, useEffect } from 'react'
import s from '../styles/Nav.module.css'

const NAV_LINKS = [
  { href: '#about',      label: 'about'      },
  { href: '#skills',     label: 'skills'     },
  { href: '#experience', label: 'experience' },
  { href: '#projects',   label: 'tools'      },
  { href: '#certs',      label: 'certs'      },
  { href: '#platforms',  label: 'platforms'  },
  { href: '#writeups',   label: 'writeups'   },
  { href: '#syseng',     label: 'syseng'     },
  { href: '#contact',    label: 'contact'    },
]

export default function Nav() {
  const [open, setOpen]       = useState(false)
  const [active, setActive]   = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const handler = () => {
      let cur = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 90) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={s.nav}>
        <a className={s.brand} href="#hero">
          <span className={s.prompt}>~/</span>kowalski-analysis
        </a>

        <ul className={s.links}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? s.active : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`${s.toggle} ${open ? s.open : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <nav className={`${s.drawer} ${open ? s.open : ''}`}>
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  )
}
