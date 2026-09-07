
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    label: "Home",
    href: "#home",
    type: "section",
  },
  {
    label: "About",
    href: "#about",
    type: "section",
  },
  {
    label: "Services",
    href: "#services",
    type: "section",
  },
  {
    label: "Doctors",
    href: "#doctors",
    type: "section",
  },
  {
    label: "Contact",
    href: "#contact",
    type: "page",
  },
];

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        w-full
        bg-[#0F172A]
        text-white
        pb-20
        md:pb-0
      "
    >
      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          w-full
          px-4
          py-14
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-2
              lg:grid-cols-[1.35fr_0.8fr_1fr_1fr]
              lg:gap-12
              xl:gap-16
            "
          >
            {/* ================= BRAND ================= */}
            <div className="max-w-md">
              <Link
                to="/"
                className="group inline-flex items-center gap-3"
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-[#0F766E]
                    to-[#14B8A6]
                    text-white
                    shadow-lg
                    shadow-[#14B8A6]/10
                  "
                >
                  <img src="../../public/assets/image/logo.jpg" alt="SmileCare Dental Clinic"
                    className="h-14 w-14 rounded-full object-cover"
                    // strokeWidth={2.2}
                  />
                </div>

                <div className="leading-none">
                  <span className="block text-lg font-bold">
                    SmileCare
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[10px]
                      font-semibold
                      tracking-[0.18em]
                      text-[#5EEAD4]
                    "
                  >
                    DENTAL CLINIC
                  </span>
                </div>
              </Link>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-[15px]
                "
              >
                Modern dental care for healthy and confident smiles.
              </p>

              {/* Appointment CTA */}
              <Link
                to="/appointment"
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#0F766E]
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#14B8A6]
                  hover:shadow-lg
                  hover:shadow-[#14B8A6]/10
                "
              >
                Book an Appointment

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div>
              <h3 className="text-sm font-bold tracking-wide text-white">
                Quick Links
              </h3>

              <nav className="mt-5 space-y-3">
                {quickLinks.map((link) =>
                  link.type === "page" ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="
                        block
                        w-fit
                        text-sm
                        text-slate-400
                        transition-colors
                        duration-200
                        hover:text-[#5EEAD4]
                      "
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="
                        block
                        w-fit
                        text-sm
                        text-slate-400
                        transition-colors
                        duration-200
                        hover:text-[#5EEAD4]
                      "
                    >
                      {link.label}
                    </a>
                  )
                )}
              </nav>
            </div>

            {/* ================= SERVICES ================= */}
            <div>
              <h3 className="text-sm font-bold tracking-wide text-white">
                Services
              </h3>

              <nav className="mt-5 space-y-3">
                {services.map((service) => (
                  <a
                    key={service}
                    href="#services"
                    className="
                      block
                      w-fit
                      text-sm
                      text-slate-400
                      transition-colors
                      duration-200
                      hover:text-[#5EEAD4]
                    "
                  >
                    {service}
                  </a>
                ))}
              </nav>
            </div>

            {/* ================= CONTACT ================= */}
            <div>
              <h3 className="text-sm font-bold tracking-wide text-white">
                Contact
              </h3>

              <div className="mt-5 space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-[#14B8A6]
                    "
                  />

                  <span className="text-sm leading-6 text-slate-400">
                    New Cairo, Egypt
                  </span>
                </div>

                {/* Phone */}
                <a
                  href="tel:+201001234567"
                  className="
                    flex
                    items-start
                    gap-3
                    text-sm
                    text-slate-400
                    transition-colors
                    duration-200
                    hover:text-[#5EEAD4]
                  "
                >
                  <Phone
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-[#14B8A6]
                    "
                  />

                  <span>+20 100 123 4567</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@smilecare.com"
                  className="
                    flex
                    items-start
                    gap-3
                    break-all
                    text-sm
                    text-slate-400
                    transition-colors
                    duration-200
                    hover:text-[#5EEAD4]
                  "
                >
                  <Mail
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-[#14B8A6]
                    "
                  />

                  <span>hello@smilecare.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/10" />
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div
        className="
          w-full
          px-4
          py-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            gap-4
            text-center
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          {/* Copyright */}
          <p className="text-xs text-slate-500 sm:text-sm">
            © {currentYear} SmileCare Dental Clinic
          </p>

          {/* Legal */}
          <div className="flex items-center justify-center gap-5 sm:justify-end">
            <Link
              to="/privacy"
              className="
                text-xs
                text-slate-500
                transition-colors
                duration-200
                hover:text-[#5EEAD4]
                sm:text-sm
              "
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <Link
              to="/terms"
              className="
                text-xs
                text-slate-500
                transition-colors
                duration-200
                hover:text-[#5EEAD4]
                sm:text-sm
              "
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}