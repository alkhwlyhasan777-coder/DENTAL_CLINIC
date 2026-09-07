import { useState } from "react";
import {
  Star,
  Quote,
  MoveHorizontal,
  Sparkles,
  Smile,
  WandSparkles,
} from "lucide-react";

// =====================================================
// TESTIMONIALS DATA
// =====================================================

const testimonials = [
  {
    name: "Sarah M.",
    review:
      "The entire experience was amazing. The team was professional, friendly, and made me feel comfortable from the moment I walked in.",
  },
  {
    name: "Mohamed A.",
    review:
      "Very professional clinic with modern equipment. Dr. Ahmed explained everything clearly and made the treatment easy.",
  },
  {
    name: "Nour H.",
    review:
      "I finally feel confident about my smile. The team was incredibly kind and professional.",
  },
];

// =====================================================
// BEFORE / AFTER DATA
// =====================================================

const beforeAfterCases = [
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "A brighter smile with a more even and natural-looking shade.",
    icon: Sparkles,

    before: "../../public/assets/image/before.jpg",
    after: "../../public/assets/image/after.jpg",
  },

  {
    id: "veneers",
    title: "Veneers",
    description:
      "Improved tooth shape, symmetry, and smile aesthetics.",
    icon: Smile,

    before: "../../public/assets/image/before2.jpg",
    after: "../../public/assets/image/after2.jpg",
  },

  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "A personalized smile makeover designed around the patient's goals.",
    icon: WandSparkles,

    before: "../../public/assets/image/before3.jpg",
    after: "../../public/assets/image/after3.jpg",
  },
];

// =====================================================
// BEFORE / AFTER SLIDER
// =====================================================

function BeforeAfterSlider() {
  const [activeCase, setActiveCase] = useState(0);
  const [position, setPosition] = useState(50);

  const currentCase = beforeAfterCases[activeCase];

  const Icon = currentCase.icon;

  const handleCaseChange = (index) => {
    setActiveCase(index);
    setPosition(50);
  };

  return (
    <div className="mt-20 sm:mt-24 lg:mt-28">
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <div
          className="
            mb-4
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white
            px-4
            py-2
            text-xs
            font-bold
            tracking-[0.18em]
            text-[#0F766E]
            shadow-sm
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
          REAL RESULTS
        </div>

        <h3
          className="
            text-3xl
            font-bold
            tracking-tight
            text-[#0F172A]
            sm:text-4xl
            lg:text-5xl
          "
        >
          See The Difference
        </h3>

        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            leading-7
            text-[#64748B]
            sm:text-base
            sm:leading-8
          "
        >
          Real results. Real confidence.
        </p>
      </div>

      {/* ================================================= */}
      {/* CASE SELECTOR */}
      {/* ================================================= */}

      <div
        className="
          mx-auto
          mb-8
          flex
          max-w-2xl
          flex-wrap
          items-center
          justify-center
          gap-2
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-2
          shadow-sm
        "
      >
        {beforeAfterCases.map((item, index) => {
          const ItemIcon = item.icon;

          const isActive = activeCase === index;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleCaseChange(index)}
              className={`
                inline-flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-2.5
                text-xs
                font-bold
                transition-all
                duration-300
                sm:text-sm
                ${
                  isActive
                    ? "bg-[#0F766E] text-white shadow-md shadow-[#0F766E]/20"
                    : "text-[#64748B] hover:bg-[#F0FDFA] hover:text-[#0F766E]"
                }
              `}
            >
              <ItemIcon className="h-4 w-4" />

              {item.title}
            </button>
          );
        })}
      </div>

      {/* ================================================= */}
      {/* IMAGE COMPARISON */}
      {/* ================================================= */}

      <div className="mx-auto w-full max-w-5xl">
        <div
          className="
            relative
            aspect-[16/10]
            w-full
            overflow-hidden
            rounded-[2rem]
            bg-slate-200
            shadow-2xl
            shadow-slate-300/30
            select-none
          "
        >
          {/* ================= AFTER IMAGE ================= */}

          <img
            src={currentCase.after}
            alt={`${currentCase.title} after treatment`}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
            draggable="false"
          />

          {/* ================= BEFORE CLIPPED AREA ================= */}

          <div
            className="
              absolute
              inset-0
              overflow-hidden
            "
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          >
            <img
              src={currentCase.before}
              alt={`${currentCase.title} before treatment`}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
              draggable="false"
            />
          </div>

          {/* ================= BEFORE LABEL ================= */}

          <div
            className="
              absolute
              left-4
              top-4
              z-10
              rounded-full
              bg-[#0F172A]/75
              px-3
              py-1.5
              text-[10px]
              font-bold
              tracking-wider
              text-white
              backdrop-blur-md
              sm:left-6
              sm:top-6
              sm:px-4
              sm:py-2
              sm:text-xs
            "
          >
            BEFORE
          </div>

          {/* ================= AFTER LABEL ================= */}

          <div
            className="
              absolute
              right-4
              top-4
              z-10
              rounded-full
              bg-[#0F766E]/90
              px-3
              py-1.5
              text-[10px]
              font-bold
              tracking-wider
              text-white
              backdrop-blur-md
              sm:right-6
              sm:top-6
              sm:px-4
              sm:py-2
              sm:text-xs
            "
          >
            AFTER
          </div>

          {/* ================= SLIDER LINE ================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              z-20
              w-0.5
              bg-white
              shadow-[0_0_12px_rgba(0,0,0,0.25)]
            "
            style={{
              left: `${position}%`,
            }}
          >
            {/* Drag Handle */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-11
                w-11
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-2
                border-white
                bg-[#0F766E]
                text-white
                shadow-xl
                sm:h-12
                sm:w-12
              "
            >
              <MoveHorizontal
                className="h-5 w-5"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* ================= RANGE ================= */}

          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) =>
              setPosition(Number(event.target.value))
            }
            aria-label="Drag to compare before and after"
            className="
              absolute
              inset-0
              z-30
              h-full
              w-full
              cursor-ew-resize
              opacity-0
            "
          />
        </div>

        {/* ================================================= */}
        {/* DRAG HINT */}
        {/* ================================================= */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
            text-xs
            font-medium
            text-[#64748B]
            sm:text-sm
          "
        >
          <MoveHorizontal className="h-4 w-4 text-[#0F766E]" />

          <span>Drag to compare</span>
        </div>

        {/* ================================================= */}
        {/* CURRENT CASE INFO */}
        {/* ================================================= */}

        <div
          className="
            mx-auto
            mt-7
            flex
            max-w-2xl
            flex-col
            items-center
            text-center
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-[#F0FDFA]
              text-[#0F766E]
            "
          >
            <Icon className="h-5 w-5" />
          </div>

          <h4
            className="
              mt-3
              text-xl
              font-bold
              text-[#0F172A]
              sm:text-2xl
            "
          >
            {currentCase.title}
          </h4>

          <p
            className="
              mt-2
              max-w-lg
              text-sm
              leading-6
              text-[#64748B]
            "
          >
            {currentCase.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// TESTIMONIALS
// =====================================================

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F0FDFA]
        px-3
        py-16
        sm:px-4
        sm:py-20
        lg:px-5
        lg:py-24
      "
    >
      {/* ================= DECORATIVE BACKGROUND ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-20
          h-64
          w-64
          rounded-full
          bg-[#14B8A6]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-10
          h-72
          w-72
          rounded-full
          bg-[#0F766E]/5
          blur-3xl
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 w-full">
        {/* ================= SECTION HEADER ================= */}

        <div
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-16
          "
        >
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-4
              py-2
              text-xs
              font-bold
              tracking-[0.18em]
              text-[#0F766E]
              shadow-sm
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />

            PATIENT EXPERIENCES
          </div>

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
            What Our Patients Say
          </h2>

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
            Real experiences from patients who trusted SmileCare
            with their smiles.
          </p>
        </div>

        {/* ================= TESTIMONIAL CARDS ================= */}

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
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="
                group
                relative
                flex
                min-h-[300px]
                flex-col
                overflow-hidden
                rounded-[2rem]
                border
                border-white
                bg-white
                p-6
                shadow-lg
                shadow-[#0F766E]/5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-[#0F766E]/10
                sm:p-7
                lg:p-8
              "
            >
              {/* Quote */}

              <div
                className="
                  absolute
                  right-6
                  top-5
                  text-[#14B8A6]/15
                  transition-all
                  duration-300
                  group-hover:text-[#14B8A6]/25
                  sm:right-7
                  sm:top-6
                  lg:right-8
                "
              >
                <Quote
                  className="h-14 w-14 sm:h-16 sm:w-16"
                  strokeWidth={1.5}
                />
              </div>

              {/* Stars */}

              <div className="relative z-10 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="
                      h-4
                      w-4
                      fill-[#14B8A6]
                      text-[#14B8A6]
                    "
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Review */}

              <p
                className="
                  relative
                  z-10
                  mt-6
                  flex-1
                  text-sm
                  leading-7
                  text-[#334155]
                  sm:text-[15px]
                "
              >
                “{testimonial.review}”
              </p>

              {/* Divider */}

              <div className="my-6 h-px w-full bg-slate-100" />

              {/* Patient */}

              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-[#0F766E]
                    to-[#14B8A6]
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                  "
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-[#64748B]">
                    Verified Patient
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-gradient-to-r
                  from-[#0F766E]
                  to-[#14B8A6]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>

        {/* ================= BOTTOM TRUST MESSAGE ================= */}

        <div
          className="
            mx-auto
            mt-10
            flex
            max-w-xl
            flex-col
            items-center
            justify-center
            gap-2
            text-center
            sm:mt-12
            sm:flex-row
          "
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="
                  h-4
                  w-4
                  fill-[#14B8A6]
                  text-[#14B8A6]
                "
              />
            ))}
          </div>

          <span
            className="
              text-xs
              font-medium
              text-[#64748B]
              sm:text-sm
            "
          >
            Trusted by thousands of happy patients
          </span>
        </div>

        {/* ================= BEFORE / AFTER ================= */}

        <BeforeAfterSlider />
      </div>
    </section>
  );
}
