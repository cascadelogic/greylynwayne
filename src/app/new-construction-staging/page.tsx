import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "New Construction Home Staging | Model Home Design for Builders",
  description:
    "New construction and model home staging in Portland, Oregon by Greylyn Wayne. Showcase the full potential of your new builds and drive buyer interest. Free consultation — (971) 930-0220.",
  alternates: {
    canonical: "https://www.greylynwayne.com/new-construction-staging",
  },
};

const services = [
  {
    title: "Model Home Staging",
    description:
      "Transform empty builds into warm, inviting showcase homes that help buyers envision their future. We stage model homes that drive traffic and close sales.",
  },
  {
    title: "Fixture & Finish Selection",
    description:
      "Collaborate with your team on fixture packages, finishes, and color palettes that appeal to your target buyer demographic and elevate the build.",
  },
  {
    title: "Color Consultation",
    description:
      "Strategic interior and exterior color selection designed to maximize appeal and create a cohesive, market-ready presentation.",
  },
  {
    title: "Community Model Programs",
    description:
      "Full staging programs for new developments and communities. We create cohesive design across multiple model homes to showcase variety and lifestyle.",
  },
];

export default function NewConstructionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Home Staging", href: "/home-staging" },
          { name: "New Construction Staging", href: "/new-construction-staging" },
        ]}
      />
      <ServiceJsonLd
        name="New Construction & Model Home Staging in Portland, Oregon"
        description="Professional model home staging and new construction design services for builders and developers in Portland, Oregon. Showcase the full potential of new builds."
        url="/new-construction-staging"
      />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px]">
          <Image
            src="/images/hero-staging.webp"
            alt="New construction model home staged by Greylyn Wayne — modern kitchen in Portland, Oregon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-teal-light text-sm tracking-[0.3em] uppercase mb-4">
                For Builders & Developers
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl">
                New Construction & Model Home Staging
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
                Showcase the Full Potential of Your Builds
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Empty homes don&apos;t sell themselves. Professional model home
                staging transforms a new construction from a blank shell into a
                warm, inviting space where buyers can immediately picture their
                future.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                We partner with builders and developers throughout Portland and
                Oregon to create beautifully staged model homes that drive
                traffic, generate emotional connections, and accelerate sales
                for entire communities.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors font-medium"
              >
                Discuss Your Development
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/home-staging-2.jpg"
                alt="Model home kitchen staged by Greylyn Wayne"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              Builder Services
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal">
              What We Offer Builders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 lg:p-10">
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

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-charcoal text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Stage Your Next Development
          </h2>
          <p className="text-gray-400 leading-relaxed mb-10">
            From single model homes to full community staging programs, we
            deliver results that move homes off the market faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors font-medium"
            >
              Get a Builder Quote
            </Link>
            <a
              href="tel:9719300220"
              className="border border-white/30 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              Call (971) 930-0220
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
