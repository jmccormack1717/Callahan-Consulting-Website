'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/xanaodjw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessType: formData.businessType,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', businessType: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-primary-dark text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let's Work Together
          </h1>
          <p className="text-xl text-primary-light mb-2">
            Have questions? Want a demo? Ready to start a project?
          </p>
          <p className="text-lg text-primary-light">
            Send us a message and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-gray rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-gray rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-semibold text-primary-dark mb-2">
                Business Type *
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-gray rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select your business type</option>
                <option value="retail">Retail</option>
                <option value="service">Service Business</option>
                <option value="food">Food & Beverage</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="ecommerce">E-commerce</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-gray rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project, questions, or what you'd like to achieve..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                <p className="font-semibold">Thank you for your message!</p>
                <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                <p className="font-semibold">Something went wrong.</p>
                <p className="text-sm mt-1">Please try again or reach out directly.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-primary text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-primary-light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-heading font-bold text-primary-dark mb-2">
                Fast Response
              </h3>
              <p className="text-primary-gray text-sm">
                We typically respond within 24 hours
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-primary-dark mb-2">
                Free Consultation
              </h3>
              <p className="text-primary-gray text-sm">
                No obligation, just a conversation about your needs
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-primary-dark mb-2">
                Ready to Help
              </h3>
              <p className="text-primary-gray text-sm">
                We're here to answer any questions you have
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
