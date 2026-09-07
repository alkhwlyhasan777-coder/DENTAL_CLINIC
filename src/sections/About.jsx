
import { useEffect, useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const doctorSlides = [
  {
    image: "/assets/image/about1.jpg",
    alt: "SmileCare dentist inside the clinic",
    name: "Dr. Sarah Ahmed",
  },
  {
    image: "/assets/image/about2.jpg",
    alt: "Dentist working with a patient",
    name: "Dr. Omar Hassan",
  },
  {
    image: "/assets/image/hero2.jpg",
    alt: "Experienced dental specialist",
    name: "Dr. Lina Mahmoud",
  },
];

const features = [
  "Experienced dentists",
  "Advanced technology",
  "Personalized treatment",
  "Comfortable environment",
];

export default function About() {
  const [activeDoctor, setActiveDoctor] = useState(0);
  useEffect(() => {
      setInterval(() => {
      setActiveDoctor((current) => (current + 1) % doctorSlides.length);
    }, 3000);
    // return () => clearInterval(interval);
  }, []);

  return (

<section
  id="about"
  className="
    relative
    z-10
    flex
    min-h-screen
    w-full
    flex-col
    bg-white
    px-3
    py-12
    sm:px-4
    sm:py-16
    lg:px-10
    lg:py-20
  "
>
  {/* ================= MAIN CONTAINER ================= */}
  <div className="w-full">
    {/* ================= MAIN CONTENT ================= */}
    <div
      className="
        grid
        w-full
        items-center
        gap-10
        lg:grid-cols-2
        lg:gap-12
        xl:gap-16
      "
    >
      {/* ================= LEFT CONTENT ================= */}
      <div
        className="
          w-full
          max-w-3xl
          lg:pr-6
          xl:pr-10
        "
      >
        {/* Section Label */}
        <div
          className="
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-cyan-50
            px-4
            py-2
            text-xs
            font-bold
            tracking-[0.18em]
            text-cyan-600
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
          ABOUT SMILECARE
        </div>

        {/* Title */}
        <h2
          className="
            max-w-2xl
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-slate-900
            sm:text-4xl
            md:text-5xl
            lg:text-5xl
            xl:text-6xl
          "
        >
          We Care About
          <span className="block text-cyan-500">
            Your Smile
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-slate-600
            sm:text-base
            sm:leading-8
            lg:text-lg
            xl:text-xl
          "
        >
          At SmileCare Dental Clinic, we believe dental care
          should be comfortable, personal, and accessible. Our
          experienced team uses modern technology and
          evidence-based treatments to help every patient
          achieve a healthy and confident smile.
        </p>

        {/* CTA */}
        <a
          href="#services"
          className="
            group
            mt-8
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            text-cyan-600
            transition-colors
            duration-300
            hover:text-cyan-700
          "
        >
          <span>Discover Our Approach</span>

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </a>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div
        className="
          relative
          w-full
          lg:pl-2
          xl:pl-4
        "
      >
        <div
          className="
            relative
            aspect-[4/3]
            w-full
            overflow-hidden
            rounded-[1.75rem]
            bg-slate-100
            shadow-2xl
            shadow-slate-200/70
            sm:rounded-[2rem]
          "
        >
          {/* ================= DOCTOR SLIDES ================= */}
          {doctorSlides.map((doctor, index) => (
            <div
              key={doctor.image}
              className={`
                absolute
                inset-0
                transition-opacity
                duration-1000
                ease-in-out
                ${
                  index === activeDoctor
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            >
              <img
                src={doctor.image}
                alt={doctor.alt}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>
          ))}

          {/* Image Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950/65
              via-slate-950/10
              to-transparent
            "
          />

          {/* Doctor Info */}
          <div
            className="
              absolute
              bottom-4
              left-4
              right-4
              flex
              items-end
              justify-between
              gap-4
              sm:bottom-6
              sm:left-6
              sm:right-6
            "
          >
            {/* Name */}
            <div className="min-w-0">
              <p className="text-xs font-medium text-white/70">
                Our Dental Expert
              </p>

              <h3
                className="
                  mt-1
                  truncate
                  text-base
                  font-bold
                  text-white
                  sm:text-xl
                "
              >
                {doctorSlides[activeDoctor].name}
              </h3>
            </div>

            {/* Indicators */}
            <div className="flex shrink-0 items-center gap-1.5">
              {doctorSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveDoctor(index)}
                  aria-label={`Show doctor ${index + 1}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === activeDoctor
                        ? "w-7 bg-white"
                        : "w-1.5 bg-white/50 hover:bg-white/80"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Shape */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-4
            -right-4
            -z-10
            h-24
            w-24
            rounded-[1.5rem]
            bg-cyan-100
            sm:-bottom-6
            sm:-right-6
            sm:h-32
            sm:w-32
            sm:rounded-[2rem]
          "
        />
      </div>
    </div>

    {/* ================= FEATURES ================= */}
    <div
      className="
        mt-12
        border-t
        border-slate-100
        pt-8
        sm:mt-16
        sm:pt-10
        lg:mt-20
        lg:pt-12
      "
    >
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-3
          sm:grid-cols-2
          lg:grid-cols-4
          lg:gap-4
        "
      >
        {features.map((feature) => (
          <div
            key={feature}
            className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-100
              bg-slate-50/80
              px-4
              py-3.5
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-cyan-100
              hover:bg-cyan-50/50
              sm:px-5
              sm:py-4
            "
          >
            {/* Check Icon */}
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-cyan-100
                text-cyan-600
              "
            >
              <Check
                className="h-4 w-4"
                strokeWidth={2.5}
              />
            </div>

            {/* Feature Text */}
            <span
              className="
                text-sm
                font-semibold
                text-slate-700
                sm:text-[15px]
              "
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}