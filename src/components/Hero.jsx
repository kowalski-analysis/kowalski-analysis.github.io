import { useEffect, useRef } from 'react'
import s from '../styles/Hero.module.css'

const ROLES = [
  'Information Security Enthusiast',
  'SOC Analyst',
  'CTF Competitor',
  'System Engineer',
]

const SOCIALS = [
  {
    label: 'github',
    href:  'https://github.com/kowalski-analysis',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303
          3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
          C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
          1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305
          3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
          0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
          0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405
          1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
          3.285-1.23.645 1.653.24 2.873.12 3.176.765.84
          1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475
          5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015
          3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592
          24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: 'linkedin',
    href:  'https://www.linkedin.com/in/kwadwo-%E2%A0%B5-agyapong-8b97a8105',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
          -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
          c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
          5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065
          2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
      </svg>
    ),
  },
  {
    label: 'x.com',
    href:  'https://x.com/_KwadwoAgyapong',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584
          -6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61
          20.644h2.039L6.486 3.24H4.298Z"/>
      </svg>
    ),
  },
  {
    label: 'youtube',
    href:  'https://www.youtube.com/@kowalskiAnalysis-666/videos',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505
          3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0
          00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016
          0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0
          9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24
          12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273
          3.568z"/>
      </svg>
    ),
  },
  {
    label: 'hackthebox',
    href:  'https://app.hackthebox.com/users/43616',
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.996 0L2 5.976V18l9.996 6L22 18V5.976zm0 2.31l7.994
          4.778v9.768l-7.994 4.832-7.994-4.832V7.088z"/>
      </svg>
    ),
  },
]

const STATS = [
  { val: '137',    label: 'HTB MACHINES OWNED' },
  { val: 'OSCP+',   label: 'CANDIDATE'          },
  { val: 'Grandmaster lvl 92', label: 'HTB GLOBAL RANK'},
  { val: '2',      label: 'OPEN-SOURCE TOOLS'  },
]

export default function Hero() {
  const rolesRef = useRef(null)

  useEffect(() => {
    const el = rolesRef.current
    if (!el) return
    let ri = 0, ci = 0, deleting = false, timer

    function tick() {
      const word = ROLES[ri]
      if (!deleting) {
        el.textContent = word.slice(0, ci + 1)
        ci++
        if (ci === word.length) {
          deleting = true
          timer = setTimeout(tick, 1900)
          return
        }
      } else {
        el.textContent = word.slice(0, ci - 1)
        ci--
        if (ci === 0) {
          deleting = false
          ri = (ri + 1) % ROLES.length
        }
      }
      timer = setTimeout(tick, deleting ? 42 : 78)
    }

    tick()
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className={s.hero}>
      <p className={s.pre}>$ whoami</p>

      <h1 className={s.name}>
        Kwadwo<br />Agyapong.
      </h1>

      <p className={`${s.handle} cursor`}>kowalski@Onyank0Pwn:~# </p>

      <p className={s.roles} ref={rolesRef}>&nbsp;</p>

      <p className={s.tagline}>
        Security Operations analyst based in Accra, Ghana. Focused on
        security and systems engineering, Penetration testing, and
        open-source tooling for my infosec profession and the community.
      </p>

      <div className={s.socials}>
        {SOCIALS.map(link => (
          <a
            key={link.label}
            className={s.socialLink}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>

      <div className={s.stats}>
        {STATS.map(stat => (
          <div key={stat.label}>
            <span className={s.statVal}>{stat.val}</span>
            <span className={s.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
