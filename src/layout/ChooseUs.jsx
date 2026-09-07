import {
  Award,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Experienced Team",
    description:
      "Experienced professionals dedicated to your oral health.",
    icon: Award,
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "Advanced equipment for accurate diagnosis and treatment.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Patient First",
    description:
      "Your comfort and safety always come first.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Personalized Care",
    description:
      "Treatment plans designed specifically for your needs.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section
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
      <div className="w-full">
        {/* ================= HEADER ================= */}
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
            WHY CHOOSE US
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
            Why Patients Choose SmileCare
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
            Quality care, modern technology, and a patient-first
            experience built around your needs.
          </p>
        </div>

        {/* ================= MAIN LAYOUT ================= */}
        <div
          className="
            grid
            items-stretch
            gap-8
            lg:grid-cols-[1fr_1.05fr]
            lg:gap-10
            xl:gap-14
          "
        >
          {/* ================= REASONS ================= */}
          <div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-1
              lg:gap-4
            "
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.number}
                  className="
                    group
                    relative
                    flex
                    gap-4
                    rounded-3xl
                    border
                    border-white
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#14B8A6]/20
                    hover:shadow-xl
                    hover:shadow-[#0F766E]/5
                    sm:p-6
                  "
                >
                  {/* Number */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#F0FDFA]
                      text-sm
                      font-bold
                      text-[#0F766E]
                    "
                  >
                    {reason.number}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className="
                          text-lg
                          font-bold
                          text-[#0F172A]
                          sm:text-xl
                        "
                      >
                        {reason.title}
                      </h3>

                      <Icon
                        className="
                          h-5
                          w-5
                          shrink-0
                          text-[#14B8A6]
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-2
                        max-w-xl
                        text-sm
                        leading-6
                        text-[#64748B]
                        sm:leading-7
                      "
                    >
                      {reason.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ================= CLINIC IMAGE ================= */}
          <div
            className="
              relative
              min-h-[320px]
              overflow-hidden
              rounded-[2rem]
              bg-slate-200
              shadow-2xl
              shadow-slate-300/30
              sm:min-h-[420px]
              lg:min-h-full
            "
          >
            <img
              src="/assets/image/choose.jpg"
              alt="SmileCare Dental Clinic"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0F172A]/70
                via-[#0F172A]/10
                to-transparent
              "
            />

            {/* Bottom Content */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
                sm:p-8
                lg:p-10
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/10
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-md
                "
              >
                <CheckCircle2
                  className="h-4 w-4 text-[#5EEAD4]"
                />

                Trusted Dental Care
              </div>

              <h3
                className="
                  mt-4
                  max-w-lg
                  text-2xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Modern care in a comfortable environment.
              </h3>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/70
                "
              >
                Every detail of our clinic is designed to make
                your dental experience calm, comfortable, and
                reassuring.
              </p>
            </div>

            {/* Decorative Border */}
            <div
              className="
                pointer-events-none
                absolute
                inset-3
                rounded-[1.6rem]
                border
                border-white/10
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}