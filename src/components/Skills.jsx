import s from '../styles/Skills.module.css'

const GROUPS = [
  {
    title: 'Offensive Techniques',
    tags: [
      { label: 'Kerberoasting',       hi: true  },
      { label: 'AS-REP Roasting',     hi: true  },
      { label: 'Pass-the-Hash',       hi: true  },
      { label: 'Pass-the-Ticket',     hi: true  },
      { label: 'DCSync',              hi: true  },
      { label: 'ADCS / ESC1-16',       hi: true  },
      { label: 'BloodHound Path Abuse', hi: true },
      { label: 'NTLM Relay',          hi: false },
      { label: 'Lateral Movement',    hi: false },
      { label: 'Windows Privesc',     hi: false },
      { label: 'Web Exploitation',    hi: false },
    ],
  },
  {
    title: 'Tools',
    tags: [
      { label: 'netexec (nxc)',           hi: true  },
      { label: 'impacket',                hi: true  },
      { label: 'BloodHound / SharpHound', hi: true  },
      { label: 'mimikatz / Rubeus',       hi: true  },
      { label: 'Burp Suite',              hi: false },
      { label: 'Metasploit',              hi: false },
      { label: 'Nmap',                    hi: false },
      { label: 'ffuf / gobuster',         hi: false },
      { label: 'Responder',               hi: false },
      { label: 'PrivescCheck',            hi: false },
    ],
  },
  {
    title: 'Programming & Scripting',
    tags: [
      { label: 'Python',       hi: true  },
      { label: 'Bash',         hi: true  },
      { label: 'PowerShell',   hi: true  },
      { label: 'C',            hi: false },
      { label: 'Go (studying)', hi: false },
      { label: 'HTML / CSS',   hi: false },
    ],
  },
  {
    title: 'Platforms & Infrastructure',
    tags: [
      { label: 'Kali Linux',          hi: true  },
      { label: 'Windows Server / AD', hi: true  },
      { label: 'RHEL / Ubuntu',       hi: false },
      { label: 'Web App',              hi: false },
      { label: 'virtualization',          hi: false },
      { label: 'containers',              hi: false },
      { label: 'OpenShift (learning)', hi: false },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap reveal">
        <p className="section-label">02</p>
        <h2 className="section-title">
          <span className="num">02.</span> Skills &amp; Arsenal
        </h2>

        <div className={s.grid}>
          {GROUPS.map(group => (
            <div key={group.title} className={s.group}>
              <p className={s.groupTitle}>{group.title}</p>
              <div className={s.tags}>
                {group.tags.map(tag => (
                  <span
                    key={tag.label}
                    className={tag.hi ? s.tagHi : s.tag}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
