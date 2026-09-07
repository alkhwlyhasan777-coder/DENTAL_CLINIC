import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Star,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
// ================= HERO SLIDES =================
const heroSlides = [
  {
    image: "/assets/image/hero2.jpg",
    alt: "Modern dental treatment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=2200&q=85",
    alt: "Modern dental clinic",
  },
  {
    image: "/assets/image/hero3.jpg",
    alt: "Modern dental treatment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=85",
    alt: "Dentist providing modern dental care",
  },
  {
    image: "/assets/image/hero1.jpg",
    alt: "Modern dental treatment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=2200&q=85",
    alt: "Modern dental treatment",
  },
];
// ================= TRUST STATS =================
const trustStats = [
  {
    value: "2,500+",
    label: "Happy Patients",
    icon: Users,
  },
  {
    value: "10+",
    label: "Years Experience",
    icon: Award,
  },
  {
    value: "15+",
    label: "Dental Experts",
    icon: Sparkles,
  },
  {
    value: "4.9/5",
    label: "Patient Rating",
    icon: Star,
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
<section
  id="home"
  className="
    relative isolate
    w-full
    min-h-[calc(100svh-80px)]
    overflow-hidden
    md:min-h-[calc(100vh-80px)]
  "
>
  {/* ================= BACKGROUND SLIDES ================= */}
  <div className="absolute inset-0 -z-20">
    {heroSlides.map((slide, index) => (
      <div
        key={slide.image}
        className={`
          absolute inset-0
          bg-cover bg-center
          transition-opacity
          duration-1000
          ease-in-out
          ${
            index === activeSlide
              ? "opacity-100"
              : "opacity-0"
          }
        `}
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
        aria-label={slide.alt}
      />
    ))}
  </div>

  {/* ================= OVERLAY ================= */}
  <div className="absolute inset-0 -z-10 bg-slate-950/45" />

  <div
    className="
      absolute inset-0 -z-10
      bg-gradient-to-r
      from-slate-950/85
      via-slate-950/55
      to-slate-950/15
    "
  />

  {/* ================= BOTTOM GRADIENT ================= */}
  <div
    className="
      absolute inset-x-0 bottom-0 -z-10
      h-40
      bg-gradient-to-t
      from-slate-950/60
      to-transparent
      md:h-56
      md:from-slate-950/80
    "
  />

  {/* ================= HERO CONTENT ================= */}
  <div
    className="
      relative z-10
      flex min-h-[calc(100svh-80px)]
      flex-col
      px-4
      pt-8
      pb-4
      sm:px-6
      sm:pt-12
      lg:px-8
      lg:pt-16
      md:min-h-[calc(100vh-80px)]
    "
  >
    {/* Main content */}
    <div className="flex flex-1 items-center">
      <div className="w-full">
        <div
          className="
            max-w-3xl
            pt-4
            sm:pt-0
          "
        >
          {/* Small Label */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-3
              py-1.5
              text-[10px]
              font-semibold
              tracking-[0.18em]
              text-white/90
              backdrop-blur-md
              sm:mb-5
              sm:px-4
              sm:py-2
              sm:text-xs
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            MODERN DENTAL CARE
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-3xl
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
              lg:text-7xl
              xl:text-8xl
            "
          >
            Your Smile,
            <span className="block text-cyan-300">
              Our Passion.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-white/80
              sm:mt-6
              sm:text-lg
              sm:leading-8
              lg:text-xl
            "
          >
            Experience modern dental care in a comfortable and
            welcoming environment. Our team combines advanced
            technology with personalized treatment to give you a
            healthier, more confident smile.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:mt-8
              sm:flex-row
            "
          >
            {/* Primary CTA */}
            <Link
              to="/appointment"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-teal-500
                to-cyan-500
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-xl
                shadow-cyan-950/20
                transition-[transform,box-shadow]
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-cyan-500/30
                active:translate-y-0
                sm:px-7
              "
            >
              <CalendarCheck
                className="
                  h-5 w-5
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <span>Book an Appointment</span>
            </Link>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/30
                bg-white/10
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/50
                hover:bg-white/20
                sm:px-7
              "
            >
              <span>Explore Our Services</span>

              <ArrowRight
                className="
                  h-5 w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* ================= TRUST SECTION ================= */}
    <div
      className="
        relative
        mt-8
        w-full
        border-t
        border-white/10

        /* Mobile: transparent */
        bg-transparent
        backdrop-blur-0

        /* Desktop */
        md:backdrop-blur-xl
        sm:mt-12
        lg:mt-14
      "
    >
      <div
        className="
          w-full
          py-3
          sm:px-2
          sm:py-4
          lg:px-3
          lg:py-5
        "
      >
        <div
          className="
            grid
            grid-cols-2
            gap-x-3
            gap-y-3
            sm:grid-cols-4
            sm:gap-3
          "
        >
          {trustStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  px-1
                  py-1
                  sm:gap-3
                  sm:rounded-xl
                  sm:border
                  sm:border-white/10
                  sm:bg-white/10
                  sm:px-4
                  sm:py-3.5
                  lg:justify-center
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                    text-cyan-300
                    sm:h-10
                    sm:w-10
                  "
                >
                  <Icon
                    className="
                      h-4
                      w-4
                      sm:h-[18px]
                      sm:w-[18px]
                    "
                    strokeWidth={2}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p
                    className="
                      text-sm
                      font-bold
                      leading-none
                      text-white
                      sm:text-lg
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-[9px]
                      font-medium
                      leading-tight
                      text-white/60
                      sm:text-xs
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>

  {/* ================= SLIDE INDICATORS ================= */}
  <div
    className="
      absolute
      right-5
      top-1/2
      hidden
      -translate-y-1/2
      flex-col
      gap-3
      lg:flex
    "
  >
    {heroSlides.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setActiveSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
        className={`
          h-2
          rounded-full
          transition-all
          duration-300
          ${
            index === activeSlide
              ? "w-8 bg-cyan-300"
              : "w-2 bg-white/50 hover:bg-white/80"
          }
        `}
      />
    ))}
  </div>
</section>
  );
}
