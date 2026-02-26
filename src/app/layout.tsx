import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.greylynwayne.com"),
  title: {
    default: "Greylyn Wayne | Home Staging & Interior Design — Portland, Oregon",
    template: "%s | Greylyn Wayne",
  },
  description:
    "Portland's trusted home staging and interior design experts. We transform spaces into stunning showcases that sell faster and feel like home. Contact us for a free consultation.",
  keywords: [
    "home staging Portland",
    "interior design Portland",
    "home staging Oregon",
    "interior designer Portland Oregon",
    "luxury home staging",
    "Street of Dreams designer",
  ],
  openGraph: {
    title: "Greylyn Wayne | Home Staging & Interior Design — Portland, Oregon",
    description:
      "Create the home of your dreams with our expert interior design and home staging services in Portland. Contact us today for a free consultation.",
    url: "https://www.greylynwayne.com",
    siteName: "Greylyn Wayne",
    images: [{ url: "/images/og-image.png", width: 2500, height: 1330 }],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
