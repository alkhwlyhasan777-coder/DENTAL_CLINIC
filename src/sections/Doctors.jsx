
import {
  ArrowRight,
  Award,
  Stethoscope,
} from "lucide-react";
import WhyChooseUs from "../layout/ChooseUs";

const doctors = [
  {
    name: "Dr. Ahmed Hassan",
    specialty: "General & Cosmetic Dentist",
    experience: "10+ Years Experience",
    image: "/assets/image/doctor4.jpg",
  },
  {
    name: "Dr. Sara Mohamed",
    specialty: "Orthodontist",
    experience: "8+ Years Experience",
    image: "/assets/image/doctor2.jpg",
  },
  {
    name: "Dr. Omar Ali",
    specialty: "Implant Specialist",
    experience: "12+ Years Experience",
    image: "/assets/image/doctor3.jpg",
  },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
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
        <div
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-16
          "
        >
          {/* Label */}
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
            OUR DENTAL TEAM
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
            Meet Our Dental Experts
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
            Experienced professionals dedicated to your dental
            health, comfort, and confidence.
          </p>
        </div>

        {/* ================= DOCTORS GRID ================= */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
            xl:gap-8
          "
        >
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-100
                bg-white
                shadow-lg
                shadow-slate-200/50
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-[#0F766E]/10
              "
            >
              {/* ================= IMAGE ================= */}
              <div
                className="
                  relative
                  aspect-[4/4.5]
                  w-full
                  overflow-hidden
                  bg-[#F0FDFA]
                "
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0F172A]/55
                    via-transparent
                    to-transparent
                    opacity-70
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Experience Badge */}
                <div
                  className="
                    absolute
                    left-4
                    top-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-[#0F172A]/60
                    px-3
                    py-2
                    text-[10px]
                    font-bold
                    text-white
                    backdrop-blur-md
                    sm:left-5
                    sm:top-5
                    sm:text-xs
                  "
                >
                  <Award
                    className="h-3.5 w-3.5 text-[#5EEAD4]"
                    strokeWidth={2}
                  />

                  {doctor.experience}
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-5 sm:p-6 lg:p-7">
                {/* Doctor Name */}
                <h3
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-[#0F172A]
                    sm:text-2xl
                  "
                >
                  {doctor.name}
                </h3>

                {/* Specialty */}
                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-[#0F766E]
                  "
                >
                  <Stethoscope className="h-4 w-4" />

                  <span>{doctor.specialty}</span>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-100" />

                {/* Experience */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#F0FDFA]
                        text-[#0F766E]
                      "
                    >
                      <Award className="h-4 w-4" />
                    </div>

                    <span
                      className="
                        text-xs
                        font-semibold
                        text-[#64748B]
                        sm:text-sm
                      "
                    >
                      {doctor.experience}
                    </span>
                  </div>

                  {/* View Profile */}
                  <button
                    type="button"
                    className="
                      group/profile
                      inline-flex
                      shrink-0
                      items-center
                      gap-1.5
                      text-sm
                      font-bold
                      text-[#0F766E]
                      transition-colors
                      duration-300
                      hover:text-[#115E59]
                    "
                  >
                    <span>View Profile</span>

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover/profile:translate-x-1
                      "
                    />
                  </button>
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
      </div>
          <WhyChooseUs/>
    </section>
  );
}