import s from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <span className={s.copy}>
        &copy; 2026 kowalski-analysis &mdash; Accra, Ghana
      </span>
      <span className={s.typeNote}>
        Typeset in Special Elite &amp; IM Fell English &mdash; after the
        tradition of the 1973 Bell Telephone Laboratories Unix Programmer's Manual
      </span>
    </footer>
  )
}
