import { Rocket } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-black/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center text-white shadow-md">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">HelloWorld</span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
