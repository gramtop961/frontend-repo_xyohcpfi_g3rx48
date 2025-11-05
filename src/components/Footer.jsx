function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="border-t border-black/10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {year} HelloWorld. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
          <span className="text-gray-300">|</span>
          <a href="mailto:hello@example.com" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
