import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Home Staging & Interior Design Blog | Tips & Inspiration",
  description:
    "Read expert tips on home staging, interior design trends, and how to maximize your home's value. Insights from Greylyn Wayne's Portland design team.",
  alternates: { canonical: "https://www.greylynwayne.com/blog" },
};

const posts = [
  {
    title: "How to Create a Cozy Home This Season",
    date: "March 23, 2025",
    excerpt:
      "Simple design tips to make your Portland home feel warm and inviting during the cooler months — from layered textiles to ambient lighting.",
    category: "Interior Design",
  },
  {
    title: "The Design Consultation Process",
    date: "March 23, 2025",
    excerpt:
      "What to expect during your first design consultation with Greylyn Wayne, and how to prepare for the most productive session possible.",
    category: "Interior Design",
  },
  {
    title: "Interior Design Trends for 2024",
    date: "December 21, 2023",
    excerpt:
      "The top interior design trends shaping Portland homes — from warm minimalism and curved furniture to bold color palettes and natural materials.",
    category: "Trends",
  },
  {
    title: "We Know How to Enhance Your Lived-in Listing",
    date: "November 26, 2023",
    excerpt:
      "Occupied home staging tips for homeowners who are living in their property while it's on the market. How to balance daily life with buyer appeal.",
    category: "Home Staging",
  },
  {
    title: "Cozy Design Prep for Small Spaces",
    date: "December 8, 2023",
    excerpt:
      "Maximize the potential of compact rooms with smart design choices. Tips for making small Portland apartments and condos feel spacious and stylish.",
    category: "Interior Design",
  },
  {
    title: "Staging Benefits and Team Updates",
    date: "October 3, 2023",
    excerpt:
      "A look at the latest data on how professional staging impacts sale price and time on market, plus updates from the Greylyn Wayne team.",
    category: "Home Staging",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      {/* Hero */}
      <section className="pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <p className="text-teal text-sm tracking-[0.3em] uppercase mb-4">
              Insights & Inspiration
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              Blog
            </h1>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Expert tips on home staging, interior design trends, and
              maximizing your home&apos;s appeal — from our Portland design
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="border border-gray-200 p-8">
                <p className="text-teal text-xs tracking-[0.2em] uppercase mb-2">
                  {post.category}
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-xl mb-3">
                  {post.title}
                </h2>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <p className="text-charcoal-light text-xs">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-warm text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-charcoal mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-10">
            Whether you&apos;re inspired by our blog or just getting started,
            we&apos;d love to help with your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal text-white px-10 py-4 text-sm tracking-wider uppercase hover:bg-teal-dark transition-colors font-medium"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
