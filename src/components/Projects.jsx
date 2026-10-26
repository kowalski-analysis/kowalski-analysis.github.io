import s from '../styles/Projects.module.css'

const PROJECTS = [
  {
    name: 'Php2shell-checker',
    lang: 'bash & PowerShell',
    href: 'https://github.com/kowalski-analysis/php2shell-checker',
    desc: 'Detection tooling for CVE-2026-109618 and CVE-2026-109619 (php2shell). Enumerates PHP installations across all discoverable locations on a host, compares each version against the patched release for its branch, and prints the remediation command for the detected package manager. Two scripts, identical in detection logic, built for different host environments.',
    tags: ['Windows', 'Linux', 'PHP', 'php2shell','CVE', 'php2shell', 'detection engineering', 'CVE-2026-109618', 'CVE-2026-109619', 'privilege-escalation', 'exploit'],
  },

  {
    name: 'SprayAllServices',
    lang: 'Bash',
    href: 'https://github.com/kowalski-analysis/SprayAllServices',
    desc: 'Assumed-breach credential validator for Windows and Active Directory environments. Tests a given credential set against SMB, SSH, FTP, WinRM, LDAP, MSSQL, RDP, VNC, WMI, and NFS simultaneously using netexec, with ANSI color-coded output, JSON reporting, NTLM pass-the-hash support, CIDR target expansion, and configurable parallel threading.',
    tags: ['active-directory', 'assumed-breach', 'netexec', 'oscp', 'redteam'],
  }
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