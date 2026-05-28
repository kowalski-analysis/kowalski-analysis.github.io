import s from '../styles/Certifications.module.css'

const OFFENSIVE = [
  {
    issuer: 'OffSec',
    certs: [
      { label: 'OSCP+',  status: 'progress', badge: '[in progress]'},
      
    ],
  },
  {
    issuer: 'HackTheBox',
    certs: [
      { label: 'HTB CPTS', status: 'progress', badge: '[in progress]' },
      { label: 'HTB COAE', status: 'progress', badge: '[planned]'     },
    ],
  },
  {
    issuer: 'Red Team',
    certs: [
      { label: 'CRTO — Zero-Point Security', status: 'progress', badge: '[planned]' },
      { label: 'CRTL — Certified Red Team Lead', status: 'progress', badge: '[planned]'},
    ],
  },
]

const SYSTEMS = [
   {
    issuer: 'Red Hat — OpenShift',
    certs: [
      { label: 'EX280 — OCP Admin',           status: 'progress', badge: '[in progress]' },
      { label: 'EX380 — Adv. OCP Admin',      status: 'progress', badge: '[planned]'     },
      { label: 'EX430 — ACS Specialist',      status: 'progress', badge: '[planned]'     },
      { label: 'EX432 — ACM Specialist',      status: 'progress', badge: '[planned]'     },
      { label: 'EX370 — ODF Specialist',      status: 'progress', badge: '[planned]'     },
      { label: 'RHCA — OpenShift',            status: 'progress', badge: '[goal]'        },
    ],
  },
  
  {
    issuer: 'CNCF Kubernetes',
    certs: [
      { label: 'CKA - Certified Kubernetes Administrator',status: 'progress', badge: '[planned]'},
      { label: 'CKS - Certified Kubernetes Security Specialist', status: 'progress', badge: '[planned]'},
    ],
  },
]

function CertGroup({ group, variant }) {
  const groupCls  = variant === 'systems' ? s.groupSystems   : s.groupOffensive
  const issuerCls = variant === 'systems' ? s.issuerSystems  : s.issuerOffensive

  return (
    <div className={groupCls}>
      <p className={issuerCls}>{group.issuer}</p>
      <ul className={s.list}>
        {group.certs.map(c => (
          <li
            key={c.label}
            className={c.status === 'earned' ? s.earned : s.progress}
          >
            {c.label}
            {c.badge && <span className={s.badge}>{c.badge}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certs">
      <div className="section-wrap reveal">
        <p className="section-label">05</p>
        <h2 className="section-title">
          <span className="num">05.</span> Certifications
        </h2>

        {/* Offensive Security track */}
        <div className={s.trackBlock}>
          <p className={s.offensiveHeading}>Offensive Security</p>
          <div className={s.grid}>
            {OFFENSIVE.map(g => (
              <CertGroup key={g.issuer} group={g} variant="offensive" />
            ))}
          </div>
        </div>

        {/* Systems Engineering track */}
        <div className={s.trackBlock}>
          <p className={s.sysHeading}>Systems Engineering</p>
          <div className={s.grid}>
            {SYSTEMS.map(g => (
              <CertGroup key={g.issuer} group={g} variant="systems" />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
