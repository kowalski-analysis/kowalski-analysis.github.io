import s from '../styles/Platforms.module.css'

const PLATFORMS = [
  {
    name: 'HackTheBox',
    stats: [
      { label: 'rank',           val: 'Grandmaster lvl 92', style: ''  },
      { label: 'machines owned', val: '137',           style: ''  },
      { label: 'global rank',    val: '437',        style: ''  },
      { label: 'active since',   val: '2022',          style: ''  },
    ],
  },
  {
    name: 'OffSec PG / Labs',
    stats: [
      { label: 'machines', val: 'Active',          style: ''  },
      { label: 'focus',    val: 'AD, Windows & Linux Privesc',     style: ''  },
      { label: 'labs',     val: 'OSCP+ prep', style: ''  },
    ],
  },
  {
    name: 'CTF Competition',
    stats: [
      { label: 'team',       val: 'Midnyt', style: ''  },
      { label: 'categories', val: 'Boot2root, jeopardy',  style: ''  },
    ],
  },
]

const AWARDS = [
   { year: '2026', tag: '[tool]', text: 'SprayAllServices (SAS) — open-source release' },
  { year: '2026', tag: '[tool]', text: 'PrivescCheck-Color — open-source release' },
  { year: '2023', tag: '[ctf]',  text: 'BrCTF 2023- Winners' },
  { year: '2022', tag: '[cert]', text: 'CompTIA Security+' },
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
