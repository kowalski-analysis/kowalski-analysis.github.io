import s from '../styles/About.module.css'

const META = [
  { key: 'location', val: 'Accra, Ghana',             open: false },
  { key: 'languages', val: 'English, Twi',            open: false },
  { key: 'focus',    val: 'AD / Red Team / Windows',  open: false },
  { key: 'interests', val: 'CTF, Tool Dev, OSINT',    open: false },
  { key: 'learning', val: 'CRTO, CPTS, OpenShift',    open: false },
  { key: 'status',   val: 'open to opportunities',    open: true  },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-wrap reveal">
        <p className="section-label">01</p>
        <h2 className="section-title">
          <span className="num">01.</span> About
        </h2>

        <p className={s.body}>
          I am a <strong>penetration tester and security researcher</strong> based
          in Accra, Ghana, focused on offensive security, Active Directory attack
          chains, and red team operations. My work spans CTF competition, authorized
          security assessments, and building open-source tooling for the wider
          community.
        </p>
        <p className={s.body}>
          I spend most of my lab time on <strong>Active Directory
          exploitation</strong> — Kerberos abuse, credential relay attacks, ADCS
          ESC paths, lateral movement and persistence — and document findings in
          writeups. Currently working through HTB CPTS and studying toward CRTO.
        </p>
        <p className={s.body}>
          Alongside offensive work I am pursuing the{' '}
          <strong>Red Hat OpenShift</strong> certification track (RHCSA → RHCA),
          building toward a long-term infrastructure engineering path that
          complements the security background.
        </p>

        <div className={s.meta}>
          {META.map(m => (
            <div key={m.key} className={s.metaRow}>
              <span className={s.metaKey}>{m.key}</span>
              <span className={`${s.metaVal}${m.open ? ' ' + s.open : ''}`}>
                {m.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
