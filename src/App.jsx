import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="about" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight">A friendly start</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                This page is a clean jumping-off point. Use it to prototype ideas, pitch a concept, or simply welcome people in style. It’s easy to extend with sections, routes, data, and more.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
