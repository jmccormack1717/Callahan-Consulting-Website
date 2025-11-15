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
          <p className="text-lg text-primary-gray leading-relaxed mb-6">
            Callahan Software Consulting helps small and medium businesses unlock the power of their data through clean dashboards, automation, and analytics.
          </p>
          <p className="text-lg text-primary-gray leading-relaxed mb-6">
            We combine:
          </p>
          <ul className="space-y-3 mb-8 text-primary-gray">
            <li className="flex items-start space-x-3">
              <span className="text-primary-blue text-xl mt-1">•</span>
              <span className="text-lg">Entrepreneurial insight</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-blue text-xl mt-1">•</span>
              <span className="text-lg">Software engineering</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-primary-blue text-xl mt-1">•</span>
              <span className="text-lg">Data analytics expertise</span>
            </li>
          </ul>
          <p className="text-lg text-primary-gray leading-relaxed">
            This gives us a unique ability to understand your business, your risks, and your opportunities — then turn your data into decisions.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 bg-primary-light">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 text-center">
            What We Believe
          </h2>
          <div className="space-y-4">
            <div className="bg-primary-light p-6 rounded-lg">
              <p className="text-lg text-primary-gray">
                Every business should have access to high-quality analytics
              </p>
            </div>
            <div className="bg-primary-light p-6 rounded-lg">
              <p className="text-lg text-primary-gray">
                Dashboards should be easy to use, not overwhelming
              </p>
            </div>
            <div className="bg-primary-light p-6 rounded-lg">
              <p className="text-lg text-primary-gray">
                Insights should lead to action — and real results
              </p>
            </div>
            <div className="bg-primary-light p-6 rounded-lg">
              <p className="text-lg text-primary-gray">
                Technology should simplify your life, not complicate it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 text-center">
            Meet the Team
          </h2>
          <p className="text-lg text-primary-gray leading-relaxed mb-6 text-center">
            Callahan Software Consulting is built by two professionals passionate about helping businesses thrive through analytics:
          </p>
          <div className="bg-white p-8 rounded-lg mb-6">
            <ul className="space-y-4 text-primary-gray">
              <li className="flex items-start space-x-3">
                <span className="text-primary-blue text-xl mt-1">•</span>
                <span className="text-lg">A founder with a background in Entrepreneurship & Statistics</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-blue text-xl mt-1">•</span>
                <span className="text-lg">A cofounder with expertise in Computer Science & Data Analysis</span>
              </li>
            </ul>
          </div>
          <p className="text-lg text-primary-gray leading-relaxed text-center">
            Together, we blend business understanding, technical skill, and analytical thinking to deliver powerful solutions for SMEs.
          </p>
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
