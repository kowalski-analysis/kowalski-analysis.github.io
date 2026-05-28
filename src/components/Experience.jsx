import s from '../styles/Experience.module.css'

const JOBS = [
  {
    date:   '2025 — Present',
    role:   'Network & Security Analyst',
    org:    'OSTEC LTD — Accra, Ghana',
    bullets: [
      'Monitoring enterprise network traffic using SIEM tools (Elastic, Exabeam, Darktrace, QRadar) to identify, analyze, and mitigate potential security threats and anomalies.',
      'Engineering vulnerability Assessments and Penetration testing, prioritizing patches based on exploitability and asset criticality.',
      'collaborating on incident response efforts for security alerts, successfully containing malware infections, phishing attempts, and unauthorized access vectors.',
      
    ],
  },
  {
    date:   '2023 — 2025',
    role:   'Systems Administrator',
    org:    'Adjaye & Associates — Accra Studio',
    bullets: [
      'Managed and configured Windows and Linux servers, ensuring 97% uptime for core business applications.',
      'Maintained Active Directory and Microsoft 365, managing user accounts, security groups, and access permissions.',
      'Configured and tested daily system backups using Synology, ensuring reliable disaster recovery options.',
      'Deployed critical security patches and updates across all servers and workstations using WSUS and SCCM.',
      'Managed endpoint security software, ensuring enterprise-wide protection against malware.',
      'Enforced data retention policies to meet internal governance and external regulatory compliance standards',
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
