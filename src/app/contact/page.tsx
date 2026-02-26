"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";

const serviceOptions = [
  "Home Staging",
  "Interior Design",
  "Design Consultation",
  "Furniture Rental",
  "Short-Term Rental Design",
  "New Construction / Model Home",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form handling would be connected to an API route or service
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              Contact Us
            </h1>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Ready to transform your space? Reach out for a free consultation
              and let&apos;s discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-teal-bg p-12 text-center">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-charcoal mb-4">
                    Thank You!
                  </h2>
                  <p className="text-charcoal-light mb-6">
                    We&apos;ve received your message and will be in touch
                    within 24 hours.
                  </p>
                  <Link
                    href="/"
                    className="text-teal text-sm tracking-wider uppercase hover:text-teal-dark transition-colors"
                  >
                    &larr; Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm text-charcoal-light mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm text-charcoal-light mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-charcoal-light mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-charcoal-light mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm text-charcoal-light mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-charcoal-light mb-2"
                    >
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors resize-vertical"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-teal text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="bg-warm p-8 lg:p-10 mb-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-4 text-sm text-charcoal-light">
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-teal flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <a
                      href="tel:9719300220"
                      className="hover:text-teal transition-colors"
                    >
                      (971) 930-0220
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-teal flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      href="mailto:design@greylynwayne.com"
                      className="hover:text-teal transition-colors"
                    >
                      design@greylynwayne.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-teal flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span>Portland, Oregon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-teal flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Mon – Sat, 8:00 AM – 8:00 PM</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal p-8 lg:p-10 text-white">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-4">
                  Free Consultation
                </h3>
                <p className="text-teal-bg text-sm leading-relaxed mb-6">
                  Not sure where to start? We offer free consultations for all
                  home staging and interior design projects. Let&apos;s chat
                  about your vision.
                </p>
                <a
                  href="tel:9719300220"
                  className="inline-block border border-white/30 text-white px-6 py-3 text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
                >
                  Call Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
            Where We Work
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-8">
            Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
                Portland Metro
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Pearl District, Irvington, Laurelhurst, Sellwood, Alberta Arts,
                Eastmoreland, Lake Oswego, West Linn, Beaverton, Tigard,
                Happy Valley, Milwaukie
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
                Greater Oregon
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Bend, Eugene, Salem, Hood River, Cannon Beach, Astoria,
                Manzanita, Seaside, Lincoln City, Sunriver, Government Camp
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
                SW Washington
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Vancouver, Camas, Ridgefield, and surrounding communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
