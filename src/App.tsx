import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default App
