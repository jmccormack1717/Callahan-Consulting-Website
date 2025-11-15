import Link from 'next/link'

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Professional Dashboards Built for Small Businesses
          </h1>
          <p className="text-xl text-primary-light mb-4">
            See all your key metrics in one place: sales, profit, inventory, cash flow. 
          </p>
          <p className="text-lg text-primary-light">
            Updated automatically, designed for you. No Excel spreadsheets required.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-12 text-center">
            How We Build Your Dashboard
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                    Free 15-Minute Consultation
                  </h3>
                  <p className="text-primary-gray leading-relaxed">
                    We understand your business and what numbers matter most to you. No obligation, just a conversation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                    We Analyze Your Data (1-2 Days)
                  </h3>
                  <p className="text-primary-gray leading-relaxed">
                    Clean it, structure it, identify what's important. We handle the messy spreadsheets so you don't have to.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                    We Build Your Dashboard (2-3 Weeks)
                  </h3>
                  <p className="text-primary-gray leading-relaxed">
                    Custom design, automated updates, everything set up. We build it specifically for your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                    Training Session (1 Hour)
                  </h3>
                  <p className="text-primary-gray leading-relaxed">
                    We walk you through everything, answer questions, make sure you're comfortable using it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                    You're Live!
                  </h3>
                  <p className="text-primary-gray leading-relaxed">
                    Dashboard updates automatically, you check it whenever you want. Simple as that.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-blue text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-2">
                    Ongoing Support (As Needed)
                  </h3>
                  <p className="text-primary-gray leading-relaxed">
                    We're here if you have questions or want changes. No long-term contracts, just support when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service - Dashboard Development */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-blue text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PRIMARY SERVICE
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-4">
              Dashboard Development
            </h2>
            <p className="text-xl text-primary-gray leading-relaxed">
              Wake up knowing your numbers. See sales, profit, inventory, and cash flow all in one dashboard that updates automatically. 
              No more Monday morning Excel headaches.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-blue to-primary-dark text-white p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-heading font-bold mb-6">
              What Every Dashboard Includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>Custom design tailored to your business</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>Automatic data updates (daily, weekly, or monthly, your choice)</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>Mobile-friendly (check from your phone)</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>Training session (we walk you through everything)</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>30 days of email support after launch</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">✓</span>
                <span>Documentation (how to use it, what each metric means)</span>
              </div>
            </div>
          </div>

          {/* Common Dashboard Types */}
          <div className="mb-8">
            <h3 className="text-2xl font-heading font-bold text-primary-dark mb-6">
              Common Dashboard Types for Small Businesses:
            </h3>
            <div className="space-y-6">
              <div className="bg-primary-light p-6 rounded-lg">
                <h4 className="text-xl font-heading font-bold text-primary-dark mb-3">
                  Sales Dashboard
                </h4>
                <p className="text-primary-gray mb-3 leading-relaxed">
                  Daily sales, top products, sales vs. goals, trend analysis
                </p>
                <p className="text-sm text-primary-gray italic">
                  Perfect for: Retail shops, e-commerce stores, service businesses
                </p>
              </div>

              <div className="bg-primary-light p-6 rounded-lg">
                <h4 className="text-xl font-heading font-bold text-primary-dark mb-3">
                  Profitability Dashboard
                </h4>
                <p className="text-primary-gray mb-3 leading-relaxed">
                  Revenue, expenses, profit margins, category breakdowns
                </p>
                <p className="text-sm text-primary-gray italic">
                  Perfect for: Restaurants, cafes, service businesses
                </p>
              </div>

              <div className="bg-primary-light p-6 rounded-lg">
                <h4 className="text-xl font-heading font-bold text-primary-dark mb-3">
                  Inventory Dashboard
                </h4>
                <p className="text-primary-gray mb-3 leading-relaxed">
                  Stock levels, slow-moving items, reorder alerts, waste tracking
                </p>
                <p className="text-sm text-primary-gray italic">
                  Perfect for: Retail, food service, manufacturing
                </p>
              </div>

              <div className="bg-primary-light p-6 rounded-lg">
                <h4 className="text-xl font-heading font-bold text-primary-dark mb-3">
                  Cash Flow Dashboard
                </h4>
                <p className="text-primary-gray mb-3 leading-relaxed">
                  Money in, money out, bank balance, 30-day forecast
                </p>
                <p className="text-sm text-primary-gray italic">
                  Perfect for: All small businesses (this is critical!)
                </p>
              </div>

              <div className="bg-primary-light p-6 rounded-lg">
                <h4 className="text-xl font-heading font-bold text-primary-dark mb-3">
                  Customer Behavior Dashboard
                </h4>
                <p className="text-primary-gray mb-3 leading-relaxed">
                  Customer trends, repeat purchases, lifetime value, retention rates
                </p>
                <p className="text-sm text-primary-gray italic">
                  Perfect for: E-commerce, subscription businesses, retail
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary-light p-8 rounded-lg">
            <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
              Ready to See Your Business Clearly?
            </h3>
            <p className="text-lg text-primary-gray mb-6">
              Get a free consultation and dashboard preview using your actual data.
            </p>
            <Link href="/contact" className="btn-primary bg-primary-blue text-white hover:bg-opacity-90 text-lg inline-block">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 text-center">
            Additional Services
          </h2>
          <p className="text-lg text-primary-gray text-center mb-12 leading-relaxed">
            These services are often included with dashboards or available as standalone offerings:
          </p>

          <div className="space-y-12">

            {/* Data Cleaning & Preparation */}
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-4">
                <span className="text-sm text-primary-blue font-semibold">INCLUDED WITH EVERY DASHBOARD</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Data Cleaning & Preparation
              </h3>
              <p className="text-lg text-primary-gray mb-4 leading-relaxed">
                Your insights are only as good as your data. We clean, structure, and standardize your datasets so your dashboard shows accurate, reliable numbers, not errors and duplicates.
              </p>
              <p className="text-lg text-primary-gray mb-6 leading-relaxed">
                <strong className="text-primary-dark">What's included:</strong>
              </p>
              <div className="bg-primary-light p-6 rounded-lg">
                <ul className="space-y-2 text-primary-gray">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Removing errors & duplicates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Standardizing formats (dates, numbers, categories)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Combining multiple data sources into one clean dataset</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Building reusable data pipelines (so your dashboard keeps updating automatically)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Automated Reporting */}
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-4">
                <span className="text-sm text-primary-blue font-semibold">OFTEN INCLUDED WITH DASHBOARDS</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Automated Reporting
              </h3>
              <p className="text-lg text-primary-gray mb-4 leading-relaxed">
                Stop wasting hours every week updating spreadsheets. We create reports that update themselves and send you the numbers you need automatically.
              </p>
              <p className="text-lg text-primary-gray mb-6 leading-relaxed">
                <strong className="text-primary-dark">Examples:</strong>
              </p>
              <div className="bg-primary-light p-6 rounded-lg">
                <ul className="space-y-2 text-primary-gray">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Weekly sales summaries emailed every Monday morning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Monthly financial reports ready on the 1st of each month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Inventory reorder alerts when stock gets low</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Customer activity updates (new customers, churn, etc.)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Business Insights & Forecasting */}
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-4">
                <span className="text-sm text-primary-blue font-semibold">AVAILABLE AS ADD-ON</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Business Insights & Forecasting
              </h3>
              <p className="text-lg text-primary-gray mb-4 leading-relaxed">
                Go beyond just seeing your numbers. Understand why things are happening and what will happen next. Our analytical expertise helps you make smarter decisions with predictive insights.
              </p>
              <p className="text-lg text-primary-gray mb-6 leading-relaxed">
                <strong className="text-primary-dark">Capabilities:</strong>
              </p>
              <div className="bg-primary-light p-6 rounded-lg">
                <ul className="space-y-2 text-primary-gray">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Trend analysis (spot patterns before they become problems)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Profitability deep dives (which products/services actually make money)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Demand forecasting (predict what you'll need next month/quarter)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Risk scoring (identify potential problems early)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Performance monitoring (track key metrics over time)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Custom Software Tools */}
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-4">
                <span className="text-sm text-primary-blue font-semibold">FOR BUSINESSES THAT NEED MORE</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">
                Custom Software Tools
              </h3>
              <p className="text-lg text-primary-gray mb-6 leading-relaxed">
                For businesses that need more than dashboards, we build lightweight tools and systems tailored to your specific needs:
              </p>
              <div className="bg-primary-light p-6 rounded-lg">
                <ul className="space-y-2 text-primary-gray">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Internal management tools (employee scheduling, task tracking, etc.)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>API integrations (connect your tools together automatically)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Customer tracking systems (CRM-like tools for your business)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Data collection apps (forms, surveys, input tools)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="bg-primary-light p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg text-primary-gray mb-4">
                  <strong className="text-primary-dark">As a new firm building our portfolio:</strong>
                </p>
                <ul className="space-y-2 text-primary-gray">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Competitive pricing (designed for small business budgets)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Fast turnaround (most dashboards in 2-3 weeks)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Your full attention (we're not juggling 50 clients)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Commitment to making your dashboard perfect</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg text-primary-gray mb-4">
                  <strong className="text-primary-dark">What we bring to the table:</strong>
                </p>
                <ul className="space-y-2 text-primary-gray">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Strong analytical foundations (actuarial training, published data science research)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Professional software engineering (we build systems that work)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Plain English explanations (no jargon, just clear insights)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary-blue">•</span>
                    <span>Genuine enthusiasm for helping small businesses succeed</span>
                  </li>
                </ul>
              </div>
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
