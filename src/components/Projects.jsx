import s from '../styles/Projects.module.css'

const PROJECTS = [
  {
    name: 'SprayAllServices',
    lang: 'Bash',
    href: 'https://github.com/kowalski-analysis/SprayAllServices',
    desc: 'Assumed-breach credential validator for Windows and Active Directory environments. Tests a given credential set against SMB, SSH, FTP, WinRM, LDAP, MSSQL, RDP, VNC, WMI, and NFS simultaneously using netexec, with ANSI color-coded output, JSON reporting, NTLM pass-the-hash support, CIDR target expansion, and configurable parallel threading.',
    tags: ['active-directory', 'assumed-breach', 'netexec', 'oscp', 'redteam'],
  },
  {
    name: 'PrivescCheck-Color',
    lang: 'PowerShell',
    href: 'https://github.com/kowalski-analysis/PrivescCheck-Color',
    desc: 'ANSI color-enhanced output wrapper for PrivescCheck by @itm4n. Intercepts the output layer after the original script loads and applies severity-based color coding — Red / Yellow / Cyan / Green — plus inline sensitive-string highlighting for privilege names, credential keywords, and writable system paths. Zero modifications to the upstream detection logic.',
    tags: ['windows', 'privilege-escalation', 'privesc', 'oscp', 'ctf'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap reveal">
        <p className="section-label">04</p>
        <h2 className="section-title">
          <span className="num">04.</span> Open-Source Tools
        </h2>

        <div className={s.grid}>
          {PROJECTS.map(p => (
            <a
              key={p.name}
              className={s.card}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={s.header}>
                <span className={s.name}>{p.name}</span>
                <span className={s.lang}>{p.lang}</span>
              </div>

              <p className={s.desc}>{p.desc}</p>

              <div className={s.tags}>
                {p.tags.map(t => (
                  <span key={t} className={s.tag}>{t}</span>
                ))}
              </div>

              <div className={s.footer}>
                <span className={s.footerLink}>
                  github.com/kowalski-analysis/{p.name} &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
