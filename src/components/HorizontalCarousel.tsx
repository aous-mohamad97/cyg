"use client";

import { useEffect, useState, useRef } from "react";

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function HorizontalCarousel() {
  const [isClient, setIsClient] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); // First slide is initially active
  const sliderRef = useRef<HTMLUListElement>(null);

  const slides: SlideData[] = [
    {
      id: 1,
      title: "Fouad Najjar",
      description:
        "With over a decade of banking and advisory experience across MENA, Fouad guides business through complex financial decisions—from strategic planning to mergers & acquisitions.",
      image: "/images/slide.png",
      alt: "Fouad Najjar",
    },
    {
      id: 2,
      title: "Sarah Johnson",
      description:
        "Sarah brings extensive experience in financial strategy and risk management, helping organizations navigate complex market conditions with data-driven insights.",
      image: "/images/hero-bg.png",
      alt: "Sarah Johnson",
    },
    {
      id: 3,
      title: "Ahmed Hassan",
      description:
        "Ahmed specializes in investment analysis and portfolio management, with a proven track record of identifying high-potential opportunities across diverse sectors.",
      image: "/images/services.png",
      alt: "Ahmed Hassan",
    },
    {
      id: 4,
      title: "Michael Chen",
      description:
        "Michael brings deep expertise in corporate finance and strategic planning, helping companies optimize their capital structure and growth strategies.",
      image: "/images/slide-1.png",
      alt: "Michael Chen",
    },
    {
      id: 5,
      title: "Elena Rodriguez",
      description:
        "Elena is a seasoned advisor in international markets, specializing in cross-border transactions and regulatory compliance across multiple jurisdictions.",
      image: "/images/slide-2.png",
      alt: "Elena Rodriguez",
    },
    {
      id: 6,
      title: "David Kim",
      description:
        "David focuses on technology investments and digital transformation, helping traditional businesses adapt to the evolving digital landscape.",
      image: "/images/slide.png",
      alt: "David Kim",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const activate = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;

    const target = e.target as HTMLElement;
    const items = sliderRef.current.querySelectorAll(".item");

    if (target.classList.contains("next")) {
      sliderRef.current.append(items[0]);
      setActiveSlideIndex((prev) => (prev + 1) % slides.length);
    } else if (target.classList.contains("prev")) {
      sliderRef.current.prepend(items[items.length - 1]);
      setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (target.classList.contains("thumbnail")) {
      // Find which thumbnail was clicked
      const thumbnailIndex = parseInt(target.getAttribute("data-index") || "0");

      if (thumbnailIndex > activeSlideIndex) {
        // Move forward
        for (let i = 0; i < thumbnailIndex - activeSlideIndex; i++) {
          sliderRef.current.append(items[0]);
        }
      } else if (thumbnailIndex < activeSlideIndex) {
        // Move backward
        for (let i = 0; i < activeSlideIndex - thumbnailIndex; i++) {
          sliderRef.current.prepend(items[items.length - 1]);
        }
      }

      setActiveSlideIndex(thumbnailIndex);
    }
  };

  if (!isClient) {
    // Return a static version for SSR
    return (
      <div className="relative w-full h-[60vh] bg-black">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-300">Loading team information...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative w-full h-[70vh] bg-black overflow-hidden">
      <ul ref={sliderRef} className="slider">
        {slides.map((slide) => (
          <li
            key={slide.id}
            className="item"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0.84)), url(${slide.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="content">
              <h2 className="title">{slide.title}</h2>
              <p className="description">{slide.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="thumbnails">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`thumbnail ${
              activeSlideIndex === index ? "active" : ""
            }`}
            data-index={index}
            onClick={activate}
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .slider {
          position: relative;
          width: 100%;
          height: 100%;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .item {
          width: 200px;
          height: 300px;
          list-style-type: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          background-position: center;
          background-size: cover;
          border-radius: 20px;
          box-shadow: 0 20px 30px rgba(255, 255, 255, 0.3) inset;
          transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s,
            height 0.75s;
        }

        .item:nth-child(1),
        .item:nth-child(2) {
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transform: none;
          border-radius: 0;
          box-shadow: none;
          opacity: 1;
        }

        .item:nth-child(3) {
          left: 50%;
        }
        .item:nth-child(4) {
          left: calc(50% + 220px);
        }
        .item:nth-child(5) {
          left: calc(50% + 440px);
        }
        .item:nth-child(6) {
          left: calc(50% + 660px);
          opacity: 0;
        }

        .content {
          width: min(40vw, 800px);
          position: absolute;
          top: 50%;
          left: 5rem;
          transform: translateY(-50%);
          font: 400 0.85rem helvetica, sans-serif;
          color: white;
          text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
          opacity: 0;
          display: none;
        }

        .content .title {
          font-family: "arial-black";
          text-transform: uppercase;
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .content .description {
          line-height: 1.7;
          margin: 1rem 0 1.5rem;
          font-size: 1.5rem;
        }

        .content button {
          width: fit-content;
          background-color: rgba(0, 0, 0, 0.1);
          color: white;
          border: 2px solid white;
          border-radius: 0.25rem;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .content button:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .item:nth-of-type(2) .content {
          display: block;
          animation: show 0.75s ease-in-out 0.3s forwards;
        }

        @keyframes show {
          0% {
            filter: blur(5px);
            transform: translateY(calc(-50% + 75px));
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }

        .thumbnails {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          user-select: none;
          display: flex;
          gap: 1rem;
        }

        .thumbnail {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          background-position: center;
          background-size: cover;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          opacity: 0.6;
        }

        .thumbnail:hover {
          opacity: 1;
          transform: scale(1.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .thumbnail.active {
          opacity: 1;
          border-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }

        @media (width > 650px) and (width < 900px) {
          .content .title {
            font-size: 1rem;
          }
          .content .description {
            font-size: 0.7rem;
          }
          .content button {
            font-size: 0.7rem;
          }

          .item {
            width: 160px;
            height: 270px;
          }

          .item:nth-child(3) {
            left: 50%;
          }
          .item:nth-child(4) {
            left: calc(50% + 170px);
          }
          .item:nth-child(5) {
            left: calc(50% + 340px);
          }
          .item:nth-child(6) {
            left: calc(50% + 510px);
            opacity: 0;
          }

          .thumbnail {
            width: 50px;
            height: 50px;
          }
        }

        @media (width < 650px) {
          .content .title {
            font-size: 0.9rem;
          }
          .content .description {
            font-size: 0.65rem;
          }
          .content button {
            font-size: 0.7rem;
          }

          .item {
            width: 130px;
            height: 220px;
          }

          .item:nth-child(3) {
            left: 50%;
          }
          .item:nth-child(4) {
            left: calc(50% + 140px);
          }
          .item:nth-child(5) {
            left: calc(50% + 280px);
          }
          .item:nth-child(6) {
            left: calc(50% + 420px);
            opacity: 0;
          }

          .thumbnail {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </main>
  );
}
