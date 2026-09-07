
import {
  ArrowRight,
  Baby,
  Sparkles,
  Smile,
  Stethoscope,
  Syringe,
  WandSparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "General Dentistry",
    description:
      "Complete dental care to maintain your oral health and prevent future problems.",
    image: "../../public/assets/image/sercive1.jpg",
    icon: Stethoscope,
  },
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile with safe and professional teeth whitening treatments.",
    image: "../../public/assets/image/sercive2.png",
    icon: Sparkles,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Enhance the appearance of your smile with personalized cosmetic treatments.",
    image: "../../public/assets/image/sercive3.jpg",
    icon: WandSparkles,
  },
  {
    title: "Dental Implants",
    description:
      "Restore missing teeth with natural-looking and long-lasting dental implants.",
    image: "../../public/assets/image/sercive4.jpg",
    icon: Syringe,
  },
  {
    title: "Orthodontics",
    description:
      "Straighten your teeth and improve your bite with modern orthodontic solutions.",
    image: "../../public/assets/image/sercive5.jpg",
    icon: Smile,
  },
  {
    title: "Kids Dentistry",
    description:
      "Gentle and friendly dental care designed especially for children.",
    image: "../../public/assets/image/sercive6.jpg",
    icon: Baby,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        w-full
        bg-white
        px-3
        py-16
        sm:px-4
        sm:py-20
        lg:px-5
        lg:py-24
      "
    >
      <div className="w-full">
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          {/* Small Label */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#F0FDFA]
              px-4
              py-2
              text-xs
              font-bold
              tracking-[0.18em]
              text-[#0F766E]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
            WHAT WE OFFER
          </div>

          {/* Title */}
          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-[#0F172A]
              sm:text-4xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            Our Dental Services
          </h2>

          {/* Subtitle */}
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-[#64748B]
              sm:text-base
              sm:leading-8
              lg:text-lg
            "
          >
            Comprehensive dental care for you and your family.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
            xl:gap-7
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  group
                  relative
                  min-h-[390px]
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#0F172A]
                  shadow-lg
                  shadow-slate-200/60
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:shadow-[#0F766E]/15
                "
              >
                {/* ================= BACKGROUND IMAGE ================= */}
                <img
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* ================= DARK OVERLAY ================= */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0F172A]
                    via-[#0F172A]/75
                    to-[#0F172A]/10
                    transition-all
                    duration-500
                    group-hover:from-[#0F172A]/95
                    group-hover:via-[#0F172A]/65
                  "
                />

                {/* ================= TEAL HOVER OVERLAY ================= */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#0F766E]/0
                    via-transparent
                    to-[#14B8A6]/0
                    transition-all
                    duration-500
                    group-hover:from-[#0F766E]/15
                    group-hover:to-[#14B8A6]/10
                  "
                />

                {/* ================= CARD CONTENT ================= */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    min-h-[390px]
                    flex-col
                    justify-end
                    p-6
                    sm:p-7
                    lg:p-8
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-auto
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/15
                      bg-white/10
                      text-[#5EEAD4]
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:border-white/25
                      group-hover:bg-[#14B8A6]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className="
                        text-xl
                        font-bold
                        text-white
                        sm:text-2xl
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-md
                        text-sm
                        leading-6
                        text-white/70
                        sm:text-[15px]
                        sm:leading-7
                      "
                    >
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <Link
                      to="/appointment"
                      className="
                        group/link
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      <span
                        className="
                          border-b
                          border-white/40
                          pb-0.5
                          transition-colors
                          duration-300
                          group-hover/link:border-[#5EEAD4]
                          group-hover/link:text-[#5EEAD4]
                        "
                      >
                        Learn More
                      </span>

                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover/link:translate-x-1
                        "
                      />
                    </Link>
                  </div>
                </div>

                {/* Top accent */}
                <div
                  className="
                    absolute
                    left-6
                    right-6
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                  "
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}