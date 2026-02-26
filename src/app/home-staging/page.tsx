import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Staging Portland | Sell Faster & Maximize Value",
  description:
    "Professional home staging in Portland to help homes sell faster and for top dollar. We style homes to attract buyers and create stunning first impressions. Get a quote today!",
};

const benefits = [
  {
    title: "Sell Faster",
    description:
      "Staged homes spend significantly less time on the market compared to unstaged properties, reducing your carrying costs.",
  },
  {
    title: "Higher Sale Price",
    description:
      "Professional staging helps buyers see your home's full potential, often resulting in offers above the asking price.",
  },
  {
    title: "Memorable First Impression",
    description:
      "Staging creates an emotional connection with buyers from the moment they walk through the door or view the listing photos.",
  },
  {
    title: "Stand Out Online",
    description:
      "In today's digital-first market, beautifully staged listing photos capture more views and generate more showings.",
  },
];

const services = [
  {
    title: "Occupied Home Staging",
    description:
      "We work with your existing furnishings and supplement with our curated inventory to create a cohesive, buyer-friendly presentation.",
  },
  {
    title: "Vacant Home Staging",
    description:
      "Full-service staging with our designer furniture and decor, transforming empty rooms into warm, inviting spaces buyers can envision as home.",
  },
  {
    title: "New Construction & Model Homes",
    description:
      "Partner with builders and developers to showcase model homes that highlight the full potential of new builds for prospective buyers.",
  },
  {
    title: "Luxury & Estate Staging",
    description:
      "High-end staging tailored for luxury properties, featuring premium furnishings and thoughtful design details that match the caliber of the home.",
  },
];

export default function HomeStagingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px]">
          <Image
            src="/images/before-after.jpg"
            alt="Professionally staged home by Greylyn Wayne"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-teal-light text-sm tracking-[0.3em] uppercase mb-4">
                Home Staging
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl">
                Stage Your Home to Sell Faster & For More
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-6">
                Professional Staging That Makes an Impact
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Our real estate staging services highlight each home&apos;s
                unique features, attract qualified buyers, and help properties
                sell faster at higher prices. We&apos;re a local, family-run
                staging company that stages houses to make them feel like home
                and enhance the property&apos;s true identity.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                Whether you&apos;re a homeowner preparing to list, a real estate
                agent looking to maximize your listing&apos;s appeal, or a
                builder showcasing a new development — we have the staging
                solution for you.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/home-staging-1.webp"
                alt="Staged living room in Portland Oregon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              Why Stage?
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal">
              The Power of Professional Staging
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 lg:p-10">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3">
                  {benefit.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              Our Services
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal">
              Staging Solutions for Every Property
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-gray-200 p-8 lg:p-10 hover:border-teal transition-colors"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-teal">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-bg text-sm tracking-[0.3em] uppercase mb-4">
              How It Works
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white">
              Our Staging Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We tour your property and discuss your goals, timeline, and budget.",
              },
              {
                step: "02",
                title: "Design Plan",
                desc: "Our team creates a custom staging plan tailored to your home and target buyer.",
              },
              {
                step: "03",
                title: "Installation",
                desc: "We deliver, arrange, and style every room to perfection — typically in one day.",
              },
              {
                step: "04",
                title: "List & Sell",
                desc: "Your beautifully staged home hits the market and makes an unforgettable impression.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-5xl text-white/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-teal-bg text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-6">
            Ready to Stage Your Home?
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10">
            Contact us today for a free consultation. Our team is ready to
            completely handle the staging of your model, on-the-market, or
            investment home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:9719300220"
              className="border border-charcoal/20 text-charcoal px-10 py-4 text-sm tracking-wider uppercase hover:bg-charcoal hover:text-white transition-colors"
            >
              Call (971) 930-0220
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
