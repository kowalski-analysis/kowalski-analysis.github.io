import { useState } from 'react'
import s from '../styles/Writeups.module.css'

const FILTERS = [
  { key: 'all',        label: 'All'        },
  { key: 'hackthebox', label: 'HackTheBox' },
  { key: 'offsec',     label: 'OffSec'     },
]

// Replace href values with your actual writeup URLs.
// diff values: easy | medium | hard | insane
const WRITEUPS = [
  { platform: 'hackthebox', name: 'Machine Name', diff: 'hard',   date: '2025-04', href: '#' },
  { platform: 'hackthebox', name: 'Machine Name', diff: 'insane', date: '2025-03', href: '#' },
  { platform: 'hackthebox', name: 'Machine Name', diff: 'medium', date: '2025-02', href: '#' },
  { platform: 'hackthebox', name: 'Machine Name', diff: 'easy',   date: '2025-01', href: '#' },
  { platform: 'offsec',     name: 'Machine Name', diff: 'hard',   date: '2024-11', href: '#' },
]

const PLATFORM_LABELS = {
  hackthebox: 'HackTheBox',
  offsec:     'OffSec PG',
}

export default function Writeups() {
  const [active, setActive] = useState('all')

  const visible = WRITEUPS.filter(
    w => active === 'all' || w.platform === active
  )

  return (
    <section id="writeups">
      <div className="section-wrap reveal">
        <p className="section-label">07</p>
        <h2 className="section-title">
          <span className="num">07.</span> Writeups
        </h2>

        <p className={s.intro}>
          Selected machine and challenge writeups. Each writeup documents the
          full attack chain from enumeration to root — methodology, tools used,
          and lessons noted.
        </p>

        <div className={s.filters}>
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`${s.filterBtn}${active === f.key ? ' ' + s.active : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={s.list}>
          {visible.map((w, i) => (
            <a
              key={i}
              className={s.item}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={s.platform}>
                {PLATFORM_LABELS[w.platform]}
              </span>
              <span className={s.machineName}>{w.name}</span>
              <span className={`${s.diff} ${s[w.diff]}`}>{w.diff}</span>
              <span className={s.date}>{w.date}</span>
            </a>
          ))}
        </div>

        <p className={s.more}>
          <a
            href="https://github.com/kowalski-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            view all writeups on github &rarr;
          </a>
        </p>
      </div>
    </section>
  )
}
