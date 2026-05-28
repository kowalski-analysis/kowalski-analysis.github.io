import s from '../styles/About.module.css'

const META = [
  { key: 'location', val: 'Accra, Ghana',             open: false },
  { key: 'languages', val: 'English, Twi',            open: false },
  { key: 'focus',    val: 'SOC / AI Pentesting / OpenShift',open: false },
  { key: 'interests', val: 'CTF, Automation, SRE',    open: false },
  { key: 'learning', val: 'OSCP+, CPTS, OpenShift',    open: false },
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
          I am a <strong>Security Operations engineer and Red Team Operations enthusiast</strong> based
          in Accra, Ghana, focused on detection engineering, Enterprise Systems infrastructure engineering, 
          and red team operations. My work spans CTF competition, authorized
          security assessments, Penetration testing and building open-source tooling for the wider
          community.
        </p>
        <p className={s.body}>
          I spend most of my lab time on <strong>HackTheBox Season machine drops and ProLabs</strong> — 
          Kerberos abuse, credential relay attacks, ADCS
          ESC paths, lateral movement and persistence — and document findings in
          writeups. Currently working through OffSec's PEN200 course and studying towards OSCP+.
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
