"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import IndustryPerspectivesHeading from "@/components/IndustryPerspectivesHeading";
import IndustryPerspectivesCarousel from "@/components/IndustryPerspectivesCarousel";
import CTA from "@/components/CTA";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <main className="min-h-screen bg-black text-primary-200">
        {/* Hero Section */}
        <Hero
          backgroundImage="/images/contact-bg.png"
          title="Let's Talk About Your"
          titleAccent="Next Move"
          description="Need help exploring strategic, sell-side, or buy-side advisory? Let us know, and one of our advisors will be in touch promptly."
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
          textAlign="center"
        />

        {/* Contact Form and Info */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <section
            className="relative min-h-screen flex items-center justify-center p-4 font-sans"
            style={{
              backgroundImage: "url('/images/form-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxShadow: "inset 0px 20px 20px 20px black",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
              {/* Left Side: Title */}
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-light text-white">
                  Let&apos;s Get to Know
                </h1>
                <h2 className="text-5xl md:text-6xl font-light text-green-400">
                  You
                </h2>
              </div>

              {/* Right Side: Form */}
              <div
                className="p-8 rounded-2xl shadow-lg w-full border border-white"
                style={{ backgroundColor: "#131313" }}
              >
                <div className="text-center mb-8">
                  <div className="inline-block border border-white p-2">
                    <Image
                      src="/images/cyg-logo.png"
                      alt="CYG Partners"
                      width={120}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative mb-5">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white focus:border-green-400 outline-none transition duration-300 py-2 text-white"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-5 text-white text-sm"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative mb-5">
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white focus:border-green-400 outline-none transition duration-300 py-2 text-white"
                      required
                    />
                    <label
                      htmlFor="companyName"
                      className="absolute left-0 -top-5 text-white text-sm"
                    >
                      Company Name <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative mb-5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white focus:border-green-400 outline-none transition duration-300 py-2 text-white"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-5 text-white text-sm"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative flex items-center">
                    <select className="bg-transparent border-b border-white outline-none py-2 pr-2 text-white">
                      <option className="bg-gray-800 text-white">UAE</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                       className="w-full bg-transparent border-b border-white focus:border-green-400 outline-none transition duration-300 py-2 pl-2 text-white placeholder-gray-300"
                       placeholder="+971 (50) 215-7254"
                    />
                  </div>

                  <div className="relative mb-5">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white focus:border-green-400 outline-none transition duration-300 py-2 appearance-none text-white"
                      required
                    >
                      <option
                        value=""
                        disabled
                        className="bg-gray-800 text-white"
                      >
                        Select a service
                      </option>
                      <option
                        value="strategic"
                        className="bg-gray-800 text-white"
                      >
                        Strategic Advisory
                      </option>
                      <option
                        value="sell-side"
                        className="bg-gray-800 text-white"
                      >
                        Sell-Side Advisory
                      </option>
                      <option
                        value="buy-side"
                        className="bg-gray-800 text-white"
                      >
                        Buy-Side Advisory
                      </option>
                      <option value="other" className="bg-gray-800 text-white">
                        Other
                      </option>
                    </select>
                    <label
                      htmlFor="service"
                      className="absolute left-0 -top-3 text-white text-sm"
                    >
                      Service of Interest{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="relative mb-5">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                       className="w-full bg-transparent border-b border-white focus:border-green-400 outline-none transition duration-300 py-2 resize-none text-white placeholder-gray-300"
                       placeholder="Message box"
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-green-400 text-black font-semibold py-3 px-12 rounded-full hover:bg-green-500 transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Our Offices Section */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <IndustryPerspectivesHeading
            title="Our"
            titleAccent="Offices"
            description="Get in touch with us at any of our offices. We're always ready to support your next step — wherever you are."
          />
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeInUp" delay={400}>
          <IndustryPerspectivesCarousel
            perspectives={[
              {
                imageSrc: "/images/slide.png",
                title: "Dubai, UAE",
                category1: "info@cygpartners.com",
                category2: "+971 50 358 2464",
                date: "Main Office",
                href: "https://maps.google.com/?q=Dubai+UAE",
              },
              {
                imageSrc: "/images/hero-bg.png",
                title: "Beirut, Lebanon",
                category1: "info@cygpartners.com",
                category2: "+961 1 234 567",
                date: "Regional Office",
                href: "https://maps.google.com/?q=Beirut+Lebanon",
              },
              {
                imageSrc: "/images/services.png",
                title: "Coming Soon",
                category1: "info@cygpartners.com",
                category2: "Global Reach",
                date: "Expanding Soon",
              },
            ]}
          />
        </AnimateOnScroll>

        {/* CTA Component */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <CTA
            title="Ready to Start"
            titleAccent="Your Journey"
            buttonText="Get Started Today"
            buttonHref="/contact"
            backgroundPattern="default"
          />
        </AnimateOnScroll>
      </main>
    </>
  );
}
