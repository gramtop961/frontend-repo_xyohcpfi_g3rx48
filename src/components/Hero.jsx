import { Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>Say it beautifully</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Hello, World!
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              A minimal, elegant starter to greet your users and launch ideas fast. Crafted with React and Tailwind, ready for you to customize.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-3 text-sm font-medium border border-black/10 hover:bg-gray-50 transition-colors"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-white border border-black/10 shadow-xl p-6">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 grid place-items-center">
                <p className="text-white text-3xl font-bold select-none">👋 🌍</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-indigo-100 blur-2xl opacity-60" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-fuchsia-100 blur-2xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
