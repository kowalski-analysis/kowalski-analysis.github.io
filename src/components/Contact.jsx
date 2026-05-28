import s from '../styles/Contact.module.css'

const CARDS = [
  {
    method: 'email',
    value:  'kowalskianalysis@protonmail.com',
    note:   'Preferred for engagement enquiries and security disclosures.',
    href:   'mailto:kowalskianalysis@protonmail.com',
  },
  {
    method: 'github',
    value:  'github.com/kowalski-analysis',
    note:   'Source code, tools, and writeup archive.',
    href:   'https://github.com/kowalski-analysis',
  },
  {
    method: 'linkedin',
    value:  'Kwadwo Agyapong',
    note:   'Professional enquiries and referrals.',
    href:   'https://www.linkedin.com/in/kwadwo-%E2%A0%B5-agyapong-8b97a8105',
  },
  {
    method: 'x.com',
    value:  '@_KwadwoAgyapong',
    note:   'Security research notes and CTF commentary.',
    href:   'https://x.com/_KwadwoAgyapong',
  },
  {
    method: 'youtube',
    value:  '@kowalskiAnalysis-666',
    note:   'Video walkthroughs, writeups, and lab recordings.',
    href:   'https://www.youtube.com/@kowalskiAnalysis-666/videos',
  },
  {
    method: 'hackthebox',
    value:  'https://app.hackthebox.com/users/43616',
    note:   'HTB profile, machine history, rankings.',
    href:   'https://app.hackthebox.com/users/43616',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-wrap reveal">
        <p className="section-label">09</p>
        <h2 className="section-title">
          <span className="num">09.</span> Contact
        </h2>

        <div className={s.grid}>
          {CARDS.map(c => (
            <a
              key={c.method}
              className={s.card}
              href={c.href}
              target={c.method === 'email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
            >
              <span className={s.method}>{c.method}</span>
              <span className={s.value}>{c.value}</span>
              <span className={s.note}>{c.note}</span>
            </a>
          ))}
        </div>

        <div className={s.pgp}>
          <p className={s.pgpLabel}>Hello Friend...</p>
          <p className={s.pgpKey}>
            I'm looking forward to connecting with you, reach out and lets connect.
          </p>
        </div>
      </div>
    </section>
  )
}
