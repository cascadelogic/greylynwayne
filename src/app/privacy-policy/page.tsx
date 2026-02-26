import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Greylyn Wayne Interior Design & Home Staging.",
  alternates: { canonical: "https://www.greylynwayne.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24 lg:py-32">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-charcoal mb-12">
          Privacy Policy
        </h1>

        <div className="prose prose-sm max-w-none text-charcoal-light leading-relaxed space-y-8">
          <p>
            <strong>Last updated:</strong> February 2026
          </p>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-charcoal mb-3">
              Information We Collect
            </h2>
            <p>
              When you contact us through our website, we collect the information
              you provide, including your name, email address, phone number, and
              project details. We use this information solely to respond to your
              inquiry and provide our home staging and interior design services.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-charcoal mb-3">
              How We Use Your Information
            </h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Respond to your inquiries and consultation requests</li>
              <li>Provide our home staging and interior design services</li>
              <li>Communicate with you about your project</li>
              <li>Improve our website and services</li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-charcoal mb-3">
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties. We may share information with trusted
              service providers who assist us in operating our website or
              conducting our business, as long as those parties agree to keep
              this information confidential.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-charcoal mb-3">
              Cookies & Analytics
            </h2>
            <p>
              Our website may use cookies and analytics tools to understand how
              visitors interact with our site. This helps us improve the user
              experience. You can choose to disable cookies through your browser
              settings.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-charcoal mb-3">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us at{" "}
              <a
                href="mailto:design@greylynwayne.com"
                className="text-teal hover:text-teal-dark transition-colors"
              >
                design@greylynwayne.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl text-charcoal mb-3">
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy, please contact us:
            </p>
            <p className="mt-3">
              Greylyn Wayne Interior Design & Home Staging
              <br />
              1011 SE Oak St, Portland, Oregon 97214
              <br />
              <a
                href="mailto:design@greylynwayne.com"
                className="text-teal hover:text-teal-dark transition-colors"
              >
                design@greylynwayne.com
              </a>
              <br />
              <a
                href="tel:9719300220"
                className="text-teal hover:text-teal-dark transition-colors"
              >
                (971) 930-0220
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
