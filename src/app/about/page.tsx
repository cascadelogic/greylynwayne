import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Portland Home Staging & Design Team",
  description:
    "Meet the Greylyn Wayne team. Founded in 2015 by Jody Wallace, we're a family-run Portland design studio specializing in home staging and interior design.",
};

const values = [
  {
    title: "Thoughtful Design",
    description:
      "Every space has a story. We take the time to understand your home's character and create designs that accentuate what makes it unique.",
  },
  {
    title: "Personal Touch",
    description:
      "As a family-run studio, we treat every project like our own home. You'll work directly with our team — not handed off to subcontractors.",
  },
  {
    title: "Attention to Detail",
    description:
      "From the placement of a throw pillow to the flow of an entire floor plan, we obsess over the details that make a space feel truly considered.",
  },
  {
    title: "Results-Driven",
    description:
      "Whether staging to sell or designing to live, we deliver spaces that achieve your goals — homes that sell faster and interiors that inspire.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/home-staging-1.webp"
            alt="Greylyn Wayne design studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-teal-light text-sm tracking-[0.3em] uppercase mb-4">
                About Us
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl">
                Our Story
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
                Est. 2015
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-6">
                A Family-Run Design Studio in Portland, Oregon
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Greylyn Wayne was born from founder Jody Wallace&apos;s
                lifelong passion for design. Established in 2015, we&apos;re a
                Portland-based interior design and home staging company
                specializing in custom design solutions that accentuate the
                character of every space.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-6">
                We carefully curate the layout of each room, complementing the
                home by selecting furnishings and details that tell its story.
                We serve homeowners, realtors, builders, and property managers
                throughout Oregon and Southwest Washington.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                A few years ago, Jody passed on the home staging side of the
                operation to her daughter and son-in-law, guiding them into
                their current roles while remaining a strong presence as the
                lead designer — dedicating the time and attention needed to
                craft beautiful, custom projects.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/home-staging-2.jpg"
                alt="Greylyn Wayne interior design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jody */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden bg-teal-bg">
                <Image
                  src="/images/street-of-dreams.webp"
                  alt="Interior design by Jody Wallace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
                Founder & Lead Designer
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-6">
                Meet Jody Wallace
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                With a 20+ year design career spanning from the historic midwest
                to Portland, Jody has developed an eye for spaces that feel
                storied and soulful. Before moving to Portland in 2010, she
                lived across the country — from Southern California to Chicago —
                gaining inspiration from different regional design styles.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Jody leads a team known for their thoughtful approach and
                beautiful designs that are both inviting and inspiring. She has
                been the lead interior designer in four unique homes for the NW
                Natural Street of Dreams in 2019, 2021, 2024, and 2025.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                In 2019, her Street of Dreams home was voted both People&apos;s
                and Professional&apos;s Best Interior Design — a testament to
                her ability to create spaces that resonate with everyone who
                experiences them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              What Drives Us
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-gray-200 p-8 lg:p-10"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-teal text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-teal-bg leading-relaxed mb-10">
            Whether you&apos;re selling, building, or creating your dream home
            — our team is ready to help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-dark px-10 py-4 text-sm tracking-wider uppercase hover:bg-cream transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
