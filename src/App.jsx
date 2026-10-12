import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { sections } from './data'

export default function App() {
  return (
    <>
      <Header />
      <main>
        {sections.map((s, i) => (
          <Section
            key={s.id}
            {...s}
            first={i === 0}
            last={i === sections.length - 1}
            footer={i === sections.length - 1 ? <Footer /> : null}
          />
        ))}
      </main>
    </>
  )
}
