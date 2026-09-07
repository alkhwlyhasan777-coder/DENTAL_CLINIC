
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Navigation,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    text: "New Cairo, Cairo, Egypt",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "+20 100 123 4567",
    href: "tel:+201001234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "hello@smilecare.com",
    href: "mailto:hello@smilecare.com",
  },
  {
    icon: Clock3,
    title: "Opening Hours",
    text: "Sat - Thu • 9:00 AM - 9:00 PM",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-3
        py-16
        pb-28
        sm:px-4
        sm:py-20
        lg:px-5
        lg:py-24
        lg:pb-24
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
            GET IN TOUCH
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
            Visit Our Clinic
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
            We are here to make your dental experience comfortable,
            convenient, and stress-free.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div
          className="
            grid
            w-full
            gap-6
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-8
            xl:gap-10
          "
        >
          {/* ================= CONTACT INFO ================= */}
          <div
            className="
              rounded-[2rem]
              border
              border-slate-100
              bg-[#F0FDFA]
              p-5
              shadow-sm
              sm:p-7
              lg:p-8
              xl:p-10
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-3
                py-2
                text-xs
                font-bold
                text-[#0F766E]
                shadow-sm
              "
            >
              <Navigation className="h-4 w-4" />
              SMILECARE DENTAL CLINIC
            </div>

            <h3
              className="
                mt-5
                text-2xl
                font-bold
                leading-tight
                text-[#0F172A]
                sm:text-3xl
              "
            >
              We'd love to
              <span className="block text-[#0F766E]">
                hear from you.
              </span>
            </h3>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-[#64748B]
                sm:text-base
              "
            >
              Have a question, need directions, or ready to schedule
              your visit? Reach out to our team and we will be happy
              to help.
            </p>

            {/* ================= INFO LIST ================= */}
            <div className="mt-8 space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div
                    className="
                      group
                      flex
                      items-start
                      gap-4
                      rounded-2xl
                      border
                      border-white
                      bg-white
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#14B8A6]/20
                      hover:shadow-md
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#F0FDFA]
                        text-[#0F766E]
                        transition-colors
                        duration-300
                        group-hover:bg-[#0F766E]
                        group-hover:text-white
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <p
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-wide
                          text-[#64748B]
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          break-words
                          text-sm
                          font-semibold
                          leading-6
                          text-[#0F172A]
                          sm:text-[15px]
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Appointment CTA */}
            <a
              href="#appointment"
              className="
                group
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-[#0F766E]
                transition-colors
                duration-300
                hover:text-[#115E59]
              "
            >
              <span>Book an Appointment</span>

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

          {/* ================= GOOGLE MAP ================= */}
          <div
            className="
              relative
              min-h-[380px]
              overflow-hidden
              rounded-[2rem]
              border
              border-slate-100
              bg-slate-100
              shadow-xl
              shadow-slate-200/50
              sm:min-h-[450px]
              lg:min-h-full
            "
          >
            <iframe
              title="SmileCare Dental Clinic Location"
              src="https://www.google.com/maps?q=New%20Cairo%2C%20Cairo%2C%20Egypt&output=embed"
              className="
                absolute
                inset-0
                h-full
                w-full
                border-0
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Badge */}
            <div
              className="
                pointer-events-none
                absolute
                left-4
                top-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-[#0F172A]/75
                px-3
                py-2
                text-xs
                font-semibold
                text-white
                shadow-lg
                backdrop-blur-md
                sm:left-5
                sm:top-5
                sm:px-4
              "
            >
              <MapPin className="h-4 w-4 text-[#5EEAD4]" />
              New Cairo, Cairo
            </div>

            {/* Bottom Overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-24
                bg-gradient-to-t
                from-[#0F172A]/30
                to-transparent
              "
            />
          </div>
        </div>

        {/* ================= BOTTOM LOCATION BAR ================= */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            rounded-2xl
            border
            border-slate-100
            bg-slate-50
            px-4
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-5
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#F0FDFA]
                text-[#0F766E]
              "
            >
              <MapPin className="h-4 w-4" />
            </div>

            <div>
              <p className="text-xs font-semibold text-[#64748B]">
                Our Location
              </p>

              <p className="text-sm font-bold text-[#0F172A]">
                New Cairo, Cairo, Egypt
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=New+Cairo%2C+Cairo%2C+Egypt"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#0F766E]
              px-4
              py-2.5
              text-xs
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-[#115E59]
              sm:text-sm
            "
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}