import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import GenAI from './components/GenAI'
import Background from './components/Background'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <GenAI />
      <Background />
      <Footer />
    </div>
  )
}
