import useScrollReveal  from './hooks/useScrollReveal'
import Nav              from './components/Nav'
import Hero             from './components/Hero'
import About            from './components/About'
import Skills           from './components/Skills'
import Experience       from './components/Experience'
import Projects         from './components/Projects'
import Certifications   from './components/Certifications'
import Platforms        from './components/Platforms'
import Writeups         from './components/Writeups'
import SysContent       from './components/SysContent'
import Contact          from './components/Contact'
import Footer           from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Platforms />
        <Writeups />
        <SysContent />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
