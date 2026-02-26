import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interior Designer Portland Oregon | Home Transformations",
  description:
    "Discover expert interior design services in Portland, Oregon. Full-service design from concept to completion — spatial planning, color consultation, furniture sourcing & more.",
};

const designServices = [
  {
    title: "Full-Service Interior Design",
    description:
      "From concept to completion, we handle every aspect of your project — mood boards, spatial planning, material selection, furniture sourcing, and final styling.",
  },
  {
    title: "Design Consultations",
    description:
      "Expert guidance to help you visualize your space and make confident design decisions. Perfect for those who want professional direction with a DIY approach.",
  },
  {
    title: "Color & Material Selection",
    description:
      "Choose the perfect tones, textures, and finishes for your space. We curate palettes that create cohesion and reflect your personal style.",
  },
  {
    title: "Spatial Planning & Organization",
    description:
      "Maximize the flow and functionality of your home. We optimize layouts to make every room work harder and feel more open.",
  },
  {
    title: "Custom Furniture & Decor Sourcing",
    description:
      "Access our network of trusted vendors for one-of-a-kind pieces. From statement furniture to artisanal accents, we source items that elevate your space.",
  },
  {
    title: "Short-Term Rental & Airbnb Design",
    description:
      "Maximize bookings with stylish, functional design that creates inviting spaces and enhances the guest experience. We handle sourcing, delivery, and install.",
  },
];

const rooms = [
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Bathroom",
  "Dining Room",
  "Home Office",
  "Outdoor Living",
  "Nursery & Kids",
];

export default function InteriorDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px]">
          <Image
            src="/images/street-of-dreams.webp"
            alt="Luxury interior design by Greylyn Wayne"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-teal-light text-sm tracking-[0.3em] uppercase mb-4">
                Interior Design
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl">
                Spaces That Feel Beautiful & Livable
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/home-staging-2.jpg"
                alt="Interior design project in Portland"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-6">
                Design That Tells Your Story
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Whether refreshing a single room or undergoing a full remodel,
                our expert interior designers curate spaces that feel both
                beautiful and livable. We believe every home has a story to tell
                — our job is to bring that story to life through thoughtful
                design.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                Our design process includes space planning, mood boards,
                furniture selection, and decor curation, ensuring every detail
                fits your lifestyle and vision. From the initial consultation to
                the final reveal, we&apos;re with you every step of the way.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal">
              Our Design Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service) => (
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

      {/* Rooms */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
            Every Room, Every Detail
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-12">
            Rooms We Design
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {rooms.map((room) => (
              <span
                key={room}
                className="border border-teal/30 text-charcoal px-6 py-3 text-sm tracking-wider"
              >
                {room}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-teal">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-bg text-sm tracking-[0.3em] uppercase mb-4">
              Our Process
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We learn about your lifestyle, taste, and goals. A thorough walkthrough of your space sets the foundation for your design.",
              },
              {
                step: "02",
                title: "Design",
                desc: "We develop mood boards, floor plans, and material palettes. You'll see the vision before any changes are made.",
              },
              {
                step: "03",
                title: "Deliver",
                desc: "From procurement to installation to final styling, we bring the design to life and hand you the keys to your new space.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-6xl text-white/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {item.title}
                </h3>
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
            Let&apos;s Design Your Dream Space
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10">
            Ready to transform your home? Schedule a consultation and
            let&apos;s bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
