import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { GalleryGrid } from './components/GalleryGrid'
import { SkillsSection } from './components/SkillsSection'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground noise">
      <Navbar />
      <main>
        <Hero />
        <GalleryGrid />
        <SkillsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
