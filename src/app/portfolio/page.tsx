import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Staging & Interior Design Portfolio",
  description:
    "Explore our home staging and interior design portfolio featuring beautifully styled spaces across Portland, Oregon. See our work and book a consultation today!",
};

const projects = [
  {
    title: "Alla Famiglia — Street of Dreams",
    category: "Interior Design",
    image: "/images/street-of-dreams.webp",
  },
  {
    title: "Industrial Loft Staging",
    category: "Home Staging",
    image: "/images/home-staging-1.webp",
  },
  {
    title: "Modern Portland Home",
    category: "Home Staging",
    image: "/images/home-staging-2.jpg",
  },
  {
    title: "New Construction Model Home",
    category: "Builder Staging",
    image: "/images/before-after.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              Our Work
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              Portfolio
            </h1>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Explore our collection of home staging and interior design
              projects across Portland, Oregon and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
                </div>
                <p className="text-teal text-xs tracking-[0.2em] uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl group-hover:text-teal transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
            The Difference Staging Makes
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-6">
            Before & After
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto mb-12">
            See how our expert staging transforms properties, helping real
            estate agents and homeowners sell faster and at higher prices.
          </p>
          <div className="relative aspect-[16/9] max-w-4xl mx-auto overflow-hidden">
            <Image
              src="/images/before-after.jpg"
              alt="Home staging before and after by Greylyn Wayne"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-6">
            Ready to See What We Can Do for You?
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10">
            Every project is unique. Let&apos;s discuss yours and create
            something beautiful together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
