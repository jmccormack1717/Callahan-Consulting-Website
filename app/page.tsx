import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Stop Guessing. See Your Business Performance in One Place.
          </h1>
          <p className="text-xl md:text-2xl text-primary-light mb-4 max-w-3xl mx-auto">
            Custom dashboards for small businesses. See your sales, profit, inventory, and cash flow all in one place, updated automatically.
          </p>
          <p className="text-lg text-primary-light mb-8 max-w-2xl mx-auto">
            No Excel spreadsheets. No manual updates. Just clear insights when you need them.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-blue hover:bg-primary-light text-lg inline-block">
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">
            The Problem Most Small Businesses Face
          </h2>
          <p className="text-xl text-primary-gray leading-relaxed mb-4">
            Running a business shouldn't mean spending hours in Excel or making decisions in the dark.
          </p>
          <p className="text-lg text-primary-gray leading-relaxed">
            You need to know your numbers: are you profitable? Is cash flow healthy? What's selling? Most small businesses struggle to get clear answers fast.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6">
            What We Do
          </h2>
          <p className="text-xl text-primary-gray leading-relaxed mb-4">
            We build custom dashboards for small businesses.
          </p>
          <p className="text-lg text-primary-gray leading-relaxed mb-6">
            Transform your messy spreadsheets into clean, easy-to-understand dashboards that update automatically. See sales, profit, inventory, and cash flow all in one place, whenever you need it.
          </p>
          <Link href="/services" className="text-primary-blue font-semibold hover:underline">
            Learn more about our services →
          </Link>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark text-center mb-12">
            What You Get
          </h2>
          <div className="bg-primary-light p-8 rounded-lg">
            <p className="text-xl text-primary-gray text-center mb-6 leading-relaxed">
              A custom dashboard built for your business that:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">✓</span>
                <span className="text-primary-gray">Shows your key metrics at a glance</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">✓</span>
                <span className="text-primary-gray">Updates automatically (daily, weekly, or monthly)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">✓</span>
                <span className="text-primary-gray">Works on any device (phone, tablet, computer)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">✓</span>
                <span className="text-primary-gray">Includes training so you actually use it</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark text-center mb-12">
            Why Choose Us
          </h2>
          <div className="bg-white p-8 rounded-lg">
            <p className="text-xl text-primary-gray text-center mb-6 leading-relaxed">
              As a new firm, you get:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">•</span>
                <span className="text-primary-gray">Fast turnaround (2-3 weeks, not months)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">•</span>
                <span className="text-primary-gray">Competitive pricing for small businesses</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">•</span>
                <span className="text-primary-gray">Strong expertise (actuarial training + data science research)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">•</span>
                <span className="text-primary-gray">Your full attention (we're not juggling 50 clients)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-blue to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to See Your Business Clearly?
          </h2>
          <p className="text-xl text-primary-light mb-4">
            Get a free consultation and see what's possible for your business.
          </p>
          <p className="text-lg text-primary-light mb-8 opacity-90">
            No obligation. Just a conversation about what's possible.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-blue hover:bg-primary-light text-lg inline-block">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
