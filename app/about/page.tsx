import Link from 'next/link'

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Who We Are
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-primary-gray leading-relaxed mb-6 text-center">
            Callahan Software Consulting helps small and medium businesses unlock the power of their data through clean dashboards, automation, and analytics.
          </p>
          <p className="text-lg text-primary-gray leading-relaxed mb-6 text-center">
            We're a new consulting firm bringing strong analytical expertise to small businesses. Every business deserves to understand their numbers, not just big corporations.
          </p>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 text-center">
            Why We're Different
          </h2>
          <p className="text-lg text-primary-gray leading-relaxed mb-6 text-center">
            Most data consulting companies work with Fortune 500 companies. We're focused on small businesses where every dollar matters, you need answers fast, and you can't afford expensive enterprise solutions.
          </p>
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg text-primary-gray leading-relaxed mb-4">
              <strong className="text-primary-dark">What we bring:</strong>
            </p>
            <ul className="space-y-3 text-primary-gray">
              <li className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">•</span>
                <span className="text-lg">Strong analytical foundations (actuarial training and industry experience)</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">•</span>
                <span className="text-lg">Published research in data science and predictive modeling</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">•</span>
                <span className="text-lg">Professional software engineering experience</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">•</span>
                <span className="text-lg">Plain English explanations, no jargon</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary-blue text-xl">•</span>
                <span className="text-lg">Genuine enthusiasm for helping small businesses succeed</span>
              </li>
            </ul>
            <p className="text-lg text-primary-gray leading-relaxed mt-6">
              <strong className="text-primary-dark">Why being newer matters:</strong> As a new firm, we're eager to prove ourselves. That means you get our full attention, competitive pricing, and dashboards designed specifically for small businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-xl text-primary-gray text-center leading-relaxed">
            To make data simple, clear, and useful for small and medium businesses.
          </p>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 text-center">
            What We Believe
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-primary-gray">
                <strong className="text-primary-dark">Every business deserves powerful analytics.</strong> You shouldn't need a data analyst on staff or a $50,000 budget.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-primary-gray">
                <strong className="text-primary-dark">Dashboards should be simple, not overwhelming.</strong> You're busy running a business. Our dashboards show you what matters in seconds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-primary-gray">
                <strong className="text-primary-dark">Insights should drive action.</strong> Pretty charts don't pay the bills. Every dashboard we build helps you make better decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-lg text-primary-gray">
                <strong className="text-primary-dark">Quality analytics shouldn't cost a fortune.</strong> Strong analytical skills and modern techniques should be available to businesses of any size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 text-center">
            Meet the Team
          </h2>
          <p className="text-lg text-primary-gray leading-relaxed mb-8 text-center">
            Callahan Software Consulting is built by two professionals with strong analytical and technical backgrounds:
          </p>

          <div className="space-y-8">
            {/* Founder */}
            <div className="bg-primary-light p-6 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">
                Founder
              </h3>
              <p className="text-lg text-primary-gray leading-relaxed">
                Actuarial intern at Berkshire Hathaway with experience in risk analysis, forecasting, and data-driven decision making. Brings actuarial rigor to small business dashboards.
              </p>
            </div>

            {/* Co-Founder */}
            <div className="bg-primary-light p-6 rounded-lg">
              <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">
                Co-Founder
              </h3>
              <p className="text-lg text-primary-gray leading-relaxed">
                Published researcher in data science and predictive modeling, with professional software engineering experience. Builds dashboards using modern data science techniques and production-ready code.
              </p>
            </div>
          </div>

          {/* Together */}
          <div className="mt-8 bg-gradient-to-r from-primary-blue to-primary-dark text-white p-6 rounded-lg text-center">
            <p className="text-lg text-primary-light leading-relaxed max-w-3xl mx-auto">
              Together, we combine actuarial precision with modern data science and professional software engineering to deliver dashboards built with strong technical foundations. As a new firm, we're hungry to prove ourselves and committed to delivering real value.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-blue to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Let's transform your data into growth.
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Get in Touch
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-blue hover:bg-primary-light text-lg inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
