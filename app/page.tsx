import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Turn your Business Data into Better Decisions
          </h1>
          <p className="text-xl md:text-2xl text-primary-light mb-8 max-w-3xl mx-auto">
            We help small and medium businesses make smarter decisions through clear dashboards, automated reports, and actionable insights.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-blue hover:bg-primary-light text-lg inline-block">
            Get a Free Demo
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">
            What We Do
          </h2>
          <p className="text-lg text-primary-gray leading-relaxed mb-4">
            At Callahan Software Consulting, we transform messy spreadsheets and scattered data into clean, reliable dashboards that drive real business results.
          </p>
          <p className="text-lg text-primary-gray leading-relaxed">
            Whether you're tracking sales, expenses, inventory, or operations — we make your numbers easy to understand and impossible to ignore.
          </p>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Dashboard Development
              </h3>
              <p className="text-primary-gray leading-relaxed">
                Interactive dashboards built to consolidate data insights
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Data Cleaning & Preparation
              </h3>
              <p className="text-primary-gray leading-relaxed">
                We organize your data so it's accurate, consistent, and ready for analysis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Automated Reporting
              </h3>
              <p className="text-primary-gray leading-relaxed">
                Stop updating spreadsheets manually. We automate your reports so they update themselves.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Business Insights & Forecasting
              </h3>
              <p className="text-primary-gray leading-relaxed">
                Get clear explanations, predictions, and insights to support smarter decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Small Businesses Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark text-center mb-12">
            Why Small Businesses Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full mt-1"></div>
              <p className="text-primary-gray text-lg">Fast turnaround times</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full mt-1"></div>
              <p className="text-primary-gray text-lg">Simple pricing</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full mt-1"></div>
              <p className="text-primary-gray text-lg">Clear communication</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full mt-1"></div>
              <p className="text-primary-gray text-lg">Real business value, not just pretty charts</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full mt-1"></div>
              <p className="text-primary-gray text-lg">Advanced analytics powered by expertise</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-primary-blue rounded-full mt-1"></div>
              <p className="text-primary-gray text-lg">Custom solutions built specifically for your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-blue to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to understand your business like never before?
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Request a Free Demo Dashboard Today
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-blue hover:bg-primary-light text-lg inline-block">
            Get a Free Demo
          </Link>
        </div>
      </section>
    </>
  )
}
