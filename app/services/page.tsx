import Link from 'next/link'

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-light">
            Comprehensive data solutions for small and medium businesses
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Dashboard Development */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl">📊</span>
              <h2 className="text-3xl font-heading font-bold text-primary-dark">
                Dashboard Development
              </h2>
            </div>
            <p className="text-lg text-primary-gray mb-6 leading-relaxed">
              Get tailored dashboards that show your key performance indicators at a glance.
            </p>
            
            <div className="bg-primary-light p-6 rounded-lg mb-6">
              <h3 className="font-heading font-bold text-primary-dark mb-4">
                We build dashboards for:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-primary-gray">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Sales performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Expenses & profitability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Inventory</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Cash flow</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Customer behavior</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-light p-6 rounded-lg">
              <h3 className="font-heading font-bold text-primary-dark mb-4">
                Deliverables include:
              </h3>
              <ul className="space-y-2 text-primary-gray">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Custom visual design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Automated data refresh</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Training and walkthrough session</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Data Cleaning & Preparation */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl">🧹</span>
              <h2 className="text-3xl font-heading font-bold text-primary-dark">
                Data Cleaning & Preparation
              </h2>
            </div>
            <p className="text-lg text-primary-gray mb-6 leading-relaxed">
              Your insights are only as good as your data.
            </p>
            <p className="text-lg text-primary-gray mb-6 leading-relaxed">
              We clean, structure, and standardize your datasets to ensure accuracy.
            </p>
            
            <div className="bg-primary-light p-6 rounded-lg">
              <h3 className="font-heading font-bold text-primary-dark mb-4">
                What's included:
              </h3>
              <ul className="space-y-2 text-primary-gray">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Removing errors & duplicates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Standardizing formats</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Combining multiple data sources</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Building reusable data pipelines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Automated Reporting */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl">⚙️</span>
              <h2 className="text-3xl font-heading font-bold text-primary-dark">
                Automated Reporting
              </h2>
            </div>
            <p className="text-lg text-primary-gray mb-6 leading-relaxed">
              Stop wasting time updating spreadsheets.
            </p>
            <p className="text-lg text-primary-gray mb-6 leading-relaxed">
              We create automated workflows that refresh and send reports on schedule.
            </p>
            
            <div className="bg-primary-light p-6 rounded-lg">
              <h3 className="font-heading font-bold text-primary-dark mb-4">
                Examples:
              </h3>
              <ul className="space-y-2 text-primary-gray">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Weekly sales summaries</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Monthly financial reports</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Inventory reorder alerts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Customer activity updates</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Business Insights & Forecasting */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl">📈</span>
              <h2 className="text-3xl font-heading font-bold text-primary-dark">
                Business Insights & Forecasting
              </h2>
            </div>
            <p className="text-lg text-primary-gray mb-6 leading-relaxed">
              We go beyond dashboards.
            </p>
            <p className="text-lg text-primary-gray mb-6 leading-relaxed">
              Our actuarial and analytics skills help you understand why something is happening and what will happen next.
            </p>
            
            <div className="bg-primary-light p-6 rounded-lg">
              <h3 className="font-heading font-bold text-primary-dark mb-4">
                Capabilities:
              </h3>
              <ul className="space-y-2 text-primary-gray">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Trend analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Profitability deep dives</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Demand forecasting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Risk scoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Performance monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Custom Software Tools */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-4xl">💻</span>
              <h2 className="text-3xl font-heading font-bold text-primary-dark">
                Custom Software Tools
              </h2>
            </div>
            <p className="text-lg text-primary-gray mb-6 leading-relaxed">
              For businesses that need more than dashboards, we build lightweight tools and systems, including:
            </p>
            
            <div className="bg-primary-light p-6 rounded-lg">
              <ul className="space-y-2 text-primary-gray">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Internal management tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>API integrations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Customer tracking systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-blue mt-1">•</span>
                  <span>Data collection apps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-blue to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Let's Build Something Powerful Together
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-blue hover:bg-primary-light text-lg inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}
