import { Globe, Star, Shield, Zap } from 'lucide-react'

const features = [
  {
    title: 'Fast by default',
    description: 'Vite + React deliver instant dev server starts and lightning-fast HMR for a smooth workflow.',
    icon: Zap,
  },
  {
    title: 'Clean design',
    description: 'Thoughtful spacing, subtle gradients, and accessible contrast out of the box.',
    icon: Star,
  },
  {
    title: 'Ready to launch',
    description: 'Deploy anywhere quickly. No heavy dependencies or complex setup required.',
    icon: Globe,
  },
  {
    title: 'Secure foundation',
    description: 'Sensibly structured and easy to extend, following best practices.',
    icon: Shield,
  },
]

function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why this starter?</h2>
          <p className="mt-3 text-gray-600">
            Everything you need to ship a beautiful “Hello, World” and evolve into a full product.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
