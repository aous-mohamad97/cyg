"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stock from "@/components/Stock";
import IndustryPerspectivesHeading from "@/components/IndustryPerspectivesHeading";
import IndustryPerspectivesCarousel from "@/components/IndustryPerspectivesCarousel";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black text-primary-200">
        {/* Hero Section */}
        <Hero
          backgroundImage="/images/hero-bg.png"
          title="Smarter Financial Decisions"
          titleAccent="Start Here"
          description="Whether you're launching, scaling, or transforming, we deliver trusted guidance at a price that fits your business."
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
          showFooter={true}
          footerLogos={[
            {
              brand: "Forbes",
              quote: "Incredibly reliable financial plan!",
            },
            {
              brand: "Bloomberg",
              quote: "Best in the business!",
            },
            {
              brand: "Reuters",
              quote: "Outstanding financial guidance!",
            },
            {
              brand: "Wall Street Journal",
              quote: "Exceptional advisory services!",
            },
            {
              brand: "Financial Times",
              quote: "Top-tier expertise!",
            },
            {
              brand: "CNBC",
              quote: "Reliable and professional!",
            },
          ]}
          reviewsLink="/clients#team-carousel"
        />

        {/* Strategic Growth Section */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <section
            className="py-20 px-4 pr-0 bg-black"
            style={{
              backgroundImage: "url('/images/chess.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="max-container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div className="space-y-8">
                  <AnimateOnScroll animation="fadeInLeft" delay={400}>
                    <h2
                      className="text-5xl md:text-6xl font-bold leading-tight"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontWeight: 300,
                        color: "white",
                      }}
                    >
                      <span>Empowering Strategic</span>
                      <br />
                      <span style={{ color: "#77EB8A" }}>Growth</span>
                    </h2>
                  </AnimateOnScroll>

                  <AnimateOnScroll animation="fadeInUp" delay={600}>
                    <p
                      className="text-xl md:text-2xl leading-relaxed"
                      style={{
                        fontFamily: "Grift, Arial, sans-serif",
                        fontWeight: 500,
                        color: "white",
                        lineHeight: "1.6",
                      }}
                    >
                      Tailored financial advisory from Dubai and Lebanon,
                      driving growth and lasting value.
                    </p>
                  </AnimateOnScroll>

                  <AnimateOnScroll animation="scaleIn" delay={800}>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center font-semibold hover:scale-105"
                      style={{
                        padding: "1rem 2.5rem",
                        minHeight: "3.5rem",
                        backgroundColor: "#38A169",
                        borderRadius: "5rem",
                        border: "none",
                        color: "#0B1F3A",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#4FD1C5";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(56, 161, 105, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#38A169";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Learn More
                    </Link>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Services Section */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <Services
            title="Our Advisory"
            titleAccent="Blueprint"
            description="Three bespoke services—Strategic, Sell-Side, and Buy-Side—to drive growth, exits, and value creation."
            backgroundGradient="linear-gradient(180deg, #343434 0%, #9A9A9A 100%)"
            services={[
              {
                title: "Explore",
                titleAccent: "Strategic",
                description:
                  "Full-cycle guidance through the sales process — from valuation to closing.",
                image: "/images/Group.svg",
                imageAlt: "Strategic Advisory",
                buttonText: "Learn More",
                buttonHref: "/services/strategic-advisory",
                serviceKey: "strategic",
              },
              {
                title: "Explore",
                titleAccent: "Sell-Side",
                description:
                  "Full-cycle guidance through the sales process — from valuation to closing.",
                image: "/images/Group.svg",
                imageAlt: "Sell-Side Advisory",
                buttonText: "Learn More",
                buttonHref: "/services/sell-side-advisory",
                serviceKey: "sell-side",
              },
              {
                title: "Explore",
                titleAccent: "Buy-Side",
                description:
                  "Full-cycle guidance through the sales process — from valuation to closing.",
                image: "/images/Group.svg",
                imageAlt: "Buy-Side Advisory",
                buttonText: "Learn More",
                buttonHref: "/services/buy-side-advisory",
                serviceKey: "buy-side",
              },
            ]}
          />
        </AnimateOnScroll>

        {/* Stock Section */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <Stock
            title="We Specialize in"
            titleAccent="Specialization!"
            description="We apply tailored financial and operational expertise across diverse industries."
            backgroundImage="/images/t-stock.png"
            backgroundImageAlt="Stock chart background"
          />
        </AnimateOnScroll>

        {/* Industry Perspectives Section */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <IndustryPerspectivesHeading
            title="Industry"
            titleAccent="Perspectives"
            description="Discover curated insights: expert analyses, breakthrough trends, and thought leadership."
          />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeInUp" delay={400}>
          <IndustryPerspectivesCarousel
            perspectives={[
              {
                imageSrc: "/images/slide.png",
                title:
                  "Cutting Through the Noise: The Long-Term Case for Data Centers The Connection",
                category1: "Investment Strategy",
                category2: "Business",
                date: "June 3, 2025",
              },
              {
                imageSrc: "/images/slide-1.png",
                title: "Market Views: Opportunity Amid Uncertainty",
                category1: "Investment Strategy",
                category2: "Business",
                date: "June 3, 2025",
              },
              {
                imageSrc: "/images/slide-2.png",
                title: "One-on-One with CYG Partners:All Eyes on Lebanon",
                category1: "Investment Strategy",
                category2: "Business",
                date: "June 3, 2025",
              },
            ]}
          />
        </AnimateOnScroll>
      </main>
    </>
  );
}
