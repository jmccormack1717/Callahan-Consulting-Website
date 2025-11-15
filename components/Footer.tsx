import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="flex items-center space-x-3">
                <div className="grid grid-cols-3 gap-1 w-10 h-10">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div 
                      key={i}
                      className="bg-white"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xl font-heading font-bold leading-tight">
                    Callahan
                  </span>
                  <span className="text-white text-xs font-body uppercase tracking-wide opacity-80">
                    SOFTWARE CONSULTING
                  </span>
                </div>
              </div>
            </div>
            <p className="text-primary-light text-sm max-w-md">
              Transforming business data into better decisions through clean dashboards, 
              automated reports, and actionable insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-light hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-light hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-primary-light hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-light hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold mb-4">Get Started</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-primary-light hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-light hover:text-white transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-gray mt-8 pt-8 text-center text-sm text-primary-light">
          <p>&copy; {new Date().getFullYear()} Callahan Software Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
