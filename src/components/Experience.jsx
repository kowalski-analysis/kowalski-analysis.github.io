import s from '../styles/Experience.module.css'

const JOBS = [
  {
    date:   '2024 — Present',
    role:   'Security Researcher & Penetration Tester',
    org:    'Independent — Accra, Ghana',
    bullets: [
      'Conducted authorized penetration testing engagements for SMBs across Ghana, covering internal network, Active Directory, and web application scope.',
      'Developed and published SprayAllServices (SAS) — assumed-breach credential validator across 10 protocols using netexec as the execution backend.',
      'Developed PrivescCheck-Color — ANSI color-enhanced wrapper for PrivescCheck by @itm4n; adopted by the OSCP and HTB community.',
      'Active CTF competitor on HackTheBox; consistent top-5% global ranking.',
      'Published technical writeups covering Active Directory attack chains, Windows privilege escalation, and post-exploitation.',
    ],
  },
  {
    date:   '20XX — 20XX',
    role:   'Your Previous Role',
    org:    'Employer Name — Location',
    bullets: [
      'Replace this with your actual responsibilities.',
      'Quantify where possible — scope, tools, systems impacted.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap reveal">
        <p className="section-label">03</p>
        <h2 className="section-title">
          <span className="num">03.</span> Experience
        </h2>

        <div className={s.list}>
          {JOBS.map((job, i) => (
            <div key={i} className={s.item}>
              <div className={s.date}>{job.date}</div>
              <div>
                <p className={s.role}>{job.role}</p>
                <p className={s.org}>{job.org}</p>
                <ul className={s.bullets}>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
