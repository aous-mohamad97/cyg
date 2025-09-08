"use client";

import Hero from "@/components/Hero";
import SimpleHero from "@/components/SimpleHero";
import Services from "@/components/Services";
import FlyonCarousel from "@/components/FlyonCarousel";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-primary-200">
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero-bg.png"
        title="Behind"
        titleAccent="CYG Partners"
        description="Global advisors driving growth, performance, and confidence with tailored solutions."
        buttons={[
          {
            text: "Explore Services",
            href: "/services",
            variant: "secondary",
            icon: true,
          },
          {
            text: "Get Started",
            href: "/contact",
            variant: "primary",
          },
        ]}
        textAlign="left"
      />

      {/* Second Hero Section - Center Aligned */}
      <SimpleHero
        backgroundImage="/images/about-bg.png"
        title="Transparent Advice, Lasting Results"
        description="Deliver transparent, precise advisory that empowers companies at every stage to achieve lasting results."
      />

      {/* Services Overview Section */}
      <Services
        title="What We "
        titleAccent="Create Together"
        description="At CYG, we deliver for investors by building businesses that power tomorrow’s economy."
        backgroundGradient="linear-gradient(180deg, #83685B 0%, #979797 100.02%)"
        services={[
          {
            title: "Build",
            titleAccent: "financial security",
            description:
              "We help you gain clarity, monitor key performance metrics, and build a foundation for sustainable growth.",
            image: "/images/serv-ico.png",
            imageAlt: "Strategic Advisory",
            buttonText: "",
            buttonHref: "",
          },
          {
            title: "Build",
            titleAccent: "sustainable growth",
            description:
              "We streamline decisions and boost efficiency by optimizing your financial and operational setup.",
            image: "/images/serv-ico.png",
            imageAlt: "Sell-Side Advisory",
            buttonText: "",
            buttonHref: "",
          },
          {
            title: "Build",
            titleAccent: "strong businesses",
            description:
              "Strategic guidance and tailored solutions to help you grow and adapt with confidence.",
            image: "/images/serv-ico.png",
            imageAlt: "Buy-Side Advisory",
            buttonText: "",
            buttonHref: "",
          },
        ]}
        showSpecialService={false}
      />

      {/* Industry Perspectives Section */}
      <section className="py-16 px-4 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet <span className="text-primary-500">CYG</span> Team
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We provide end‑to‑end advisory—from capital raises and M&A to
              long‑term strategy—empowering confident, growth‑driven decisions
            </p>
          </div>
          <FlyonCarousel />
        </div>
      </section>
    </main>
  );
}
