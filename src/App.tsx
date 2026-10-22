import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { useTheme } from './hooks/useTheme'
import { Home } from './pages/Home'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
