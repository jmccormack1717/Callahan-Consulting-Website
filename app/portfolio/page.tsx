import Link from 'next/link'

export default function Portfolio() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Work
          </h1>
          <p className="text-xl text-primary-light">
            Examples of dashboards and analytics systems we've created for small and medium businesses
          </p>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-primary-gray mb-12 text-lg">
            Below are examples of dashboards and analytics systems we've created for small and medium businesses. 
            These samples represent the style, clarity, and insight-driven approach we bring to every project.
          </p>

          <div className="space-y-16">
            {/* Sales Performance Dashboard */}
            <div className="bg-primary-light p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">
                Sales Performance Dashboard
              </h2>
              <p className="text-lg text-primary-gray mb-6 leading-relaxed">
                A retail client needed a clearer view of daily sales, top products, and branch performance.
              </p>
              
              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="font-heading font-bold text-primary-dark mb-4">
                  We built a dashboard that:
                </h3>
                <ul className="space-y-2 text-primary-gray">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Updates automatically every morning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Highlights growth trends</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Identifies top-performing items</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Shows sales vs. targets</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-blue pl-6">
                <p className="font-semibold text-primary-dark mb-2">Outcome:</p>
                <p className="text-primary-gray">
                  They increased weekly revenue by focusing on best-selling products and fixing underperforming categories.
                </p>
              </div>
            </div>

            {/* Expense & Profitability Dashboard */}
            <div className="bg-primary-light p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">
                Expense & Profitability Dashboard
              </h2>
              <p className="text-lg text-primary-gray mb-6 leading-relaxed">
                A service business struggled to understand which costs were draining profit.
              </p>
              
              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="font-heading font-bold text-primary-dark mb-4">
                  We created an expense dashboard that visualizes:
                </h3>
                <ul className="space-y-2 text-primary-gray">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Category spending</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Monthly trends</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Vendor comparisons</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Net income impact</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-blue pl-6">
                <p className="font-semibold text-primary-dark mb-2">Outcome:</p>
                <p className="text-primary-gray">
                  They reduced unnecessary expenses by 14% within two months.
                </p>
              </div>
            </div>

            {/* Inventory Optimization Dashboard */}
            <div className="bg-primary-light p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">
                Inventory Optimization Dashboard
              </h2>
              <p className="text-lg text-primary-gray mb-6 leading-relaxed">
                A café with multiple locations needed better stock control.
              </p>
              
              <div className="bg-white p-6 rounded-lg mb-6">
                <h3 className="font-heading font-bold text-primary-dark mb-4">
                  Our dashboard allowed them to see:
                </h3>
                <ul className="space-y-2 text-primary-gray">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Real-time inventory</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Slow-moving items</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Waste patterns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Reorder levels</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary-blue pl-6">
                <p className="font-semibold text-primary-dark mb-2">Outcome:</p>
                <p className="text-primary-gray">
                  Inventory waste dropped significantly, saving time and money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-blue to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Want a custom dashboard like these?
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Request a Free Demo
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-blue hover:bg-primary-light text-lg inline-block">
            Get a Free Demo
          </Link>
        </div>
      </section>
    </>
  )
}
