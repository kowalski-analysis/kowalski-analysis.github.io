import s from '../styles/Platforms.module.css'

const PLATFORMS = [
  {
    name: 'HackTheBox',
    stats: [
      { label: 'rank',           val: 'Hacker',       style: ''  },
      { label: 'machines owned', val: '50+',           style: ''  },
      { label: 'global rank',    val: 'Top 5%',        style: ''  },
      { label: 'active since',   val: '20XX',          style: ''  },
    ],
  },
  {
    name: 'OffSec PG / Labs',
    stats: [
      { label: 'machines', val: 'Active',          style: ''  },
      { label: 'focus',    val: 'AD, Windows',     style: ''  },
      { label: 'labs',     val: 'OSCP, OSEP prep', style: ''  },
    ],
  },
  {
    name: 'CTF Competition',
    stats: [
      { label: 'team',       val: 'Your Team Name', style: ''  },
      { label: 'ctftime',    val: 'Add profile',    style: ''  },
      { label: 'categories', val: 'AD, Web, Misc',  style: ''  },
    ],
  },
]

const AWARDS = [
  { year: '2025', tag: '[cert]', text: 'OSCP — OffSec Certified Professional' },
  { year: '2025', tag: '[tool]', text: 'SprayAllServices (SAS) — open-source release' },
  { year: '2025', tag: '[tool]', text: 'PrivescCheck-Color — open-source release' },
  { year: '2024', tag: '[ctf]',  text: 'Add your competition placements here' },
]

export default function Platforms() {
  return (
    <section id="platforms">
      <div className="section-wrap reveal">
        <p className="section-label">06</p>
        <h2 className="section-title">
          <span className="num">06.</span> Platforms &amp; CTF
        </h2>

        <div className={s.grid}>
          {PLATFORMS.map(p => (
            <div key={p.name} className={s.card}>
              <p className={s.cardName}>{p.name}</p>
              <div className={s.stats}>
                {p.stats.map(st => (
                  <div key={st.label} className={s.stat}>
                    <span className={s.statLabel}>{st.label}</span>
                    <span className={`${s.statVal}${st.style ? ' ' + s[st.style] : ''}`}>
                      {st.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="divider" />

        <p className={s.awardsHeading}>
          <span className="num">06b.</span> Awards &amp; Achievements
        </p>

        <div className={s.awardsList}>
          {AWARDS.map((a, i) => (
            <div key={i} className={s.award}>
              <span className={s.awardYear}>{a.year}</span>
              <span className={s.awardText}>
                <span className={s.tag}>{a.tag}</span>
                {a.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
