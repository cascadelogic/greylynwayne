import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Home Staging",
    description:
      "Professionally staged homes sell faster and at higher prices. Our expert staging highlights your property's best features to attract qualified buyers.",
    href: "/home-staging",
    image: "/images/home-staging-1.webp",
  },
  {
    title: "Interior Design",
    description:
      "Transform your home with personalized, high-end interior design. Whether refreshing a single room or a full remodel, we curate spaces that feel beautiful and livable.",
    href: "/interior-design",
    image: "/images/home-staging-2.jpg",
  },
  {
    title: "Street of Dreams",
    description:
      "Selected as lead designer for four NW Natural Street of Dreams homes. Award-winning luxury design showcasing the best in Portland craftsmanship.",
    href: "/street-of-dreams",
    image: "/images/street-of-dreams.webp",
  },
];

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "4x", label: "Street of Dreams Designer" },
  { value: "500+", label: "Homes Transformed" },
  { value: "100%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote:
      "Greylyn Wayne transformed our listing into a breathtaking showcase. The staging was impeccable and the home sold in just 5 days above asking price.",
    author: "Portland Real Estate Agent",
  },
  {
    quote:
      "Their attention to detail is exceptional. From start to finish, the process was stress-free and the results exceeded all expectations.",
    author: "Happy Valley Homeowner",
  },
  {
    quote:
      "Working with Jody and her team was an absolute pleasure. They brought our vision to life with creativity and professionalism we didn't think was possible.",
    author: "Lake Oswego Client",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/street-of-dreams.webp"
            alt="Luxury interior design by Greylyn Wayne"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-teal-light text-sm tracking-[0.3em] uppercase mb-6">
              Portland, Oregon
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Home Staging &<br />
              Interior Design
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              We transform spaces into stunning showcases that sell faster, live
              better, and feel like home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-teal text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors duration-200 text-center"
              >
                Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border border-white/30 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-white/10 transition-colors duration-200 text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-charcoal">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-3 group-hover:text-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-teal text-sm tracking-wider uppercase">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/home-staging-1.webp"
                alt="Greylyn Wayne staged living room"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
                About Us
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                A Family-Run Design Studio
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Founded in 2015 by Jody Wallace, Greylyn Wayne is a
                Portland-based interior design and home staging company
                specializing in custom design solutions that accentuate the
                character of every space.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                With over 20 years of design experience spanning from the
                historic midwest to the Pacific Northwest, our team brings a
                thoughtful approach to every project — whether staging a home for
                sale or designing a dream living space.
              </p>
              <Link
                href="/about"
                className="inline-block bg-teal text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors duration-200"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-teal">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-teal-bg text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-charcoal">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 lg:p-10"
              >
                <svg
                  className="h-8 w-8 text-teal-light mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-charcoal-light leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-teal text-sm font-medium">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/before-after.jpg"
            alt="Beautifully staged home interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Whether you&apos;re selling your home or creating your dream
            interior, we&apos;re here to help. Schedule a free consultation
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:9719300220"
              className="border border-white/30 text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-white/10 transition-colors duration-200"
            >
              Call (971) 930-0220
            </a>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
            Where We Work
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-8">
            Serving Portland & Beyond
          </h2>
          <p className="text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            We proudly serve Portland&apos;s finest neighborhoods including the
            Pearl District, Irvington, Laurelhurst, Sellwood, and Eastmoreland —
            as well as Lake Oswego, West Linn, Beaverton, Happy Valley,
            Bend, Hood River, Vancouver WA, and communities throughout Oregon
            and Southwest Washington.
          </p>
        </div>
      </section>
    </>
  );
}
