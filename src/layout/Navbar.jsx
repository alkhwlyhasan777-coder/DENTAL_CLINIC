import LogoImg from "../../public/assets/image/logo.jpg";
// import Appointment from "../pages/Appointment";
import Button from "../common/Button";
import {
  Home,
  Info,
  Stethoscope,
  MessageSquareQuote,
  Users,
  Phone,
  // CalendarCheck,
  // Link,
} from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    label: "About",
    href: "#about",
    icon: Info,
  },
  {
    label: "Services",
    href: "#services",
    icon: Stethoscope,
  },
  {
    label: "Testimonials",
    href: "#testimonials",
    icon: MessageSquareQuote,
  },
  {
    label: "Doctors",
    href: "#doctors",
    icon: Users,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Phone,
  },
];

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2"
      aria-label="Dental Clinic Home"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-sm">
        <img
          src={LogoImg}
          alt="Dental Clinic Logo"
          className="h-18 w-18 rounded-full object-cover"
        />
      </div>
      <div className="leading-none">
        <span className="block text-lg font-bold text-slate-900">Dental</span>
        <span className="block text-xs font-medium tracking-wide text-cyan-500">
          CLINIC
        </span>
      </div>
    </a>
  );
}

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 hidden bg-white/90 backdrop-blur-md md:block">
        <div className="w-full">
          <nav className="flex h-20 items-center justify-between rounded-b-xl border-x border-b border-slate-100 bg-white px-5 shadow-sm">
            {" "}
            <Logo />
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative text-lg font-medium text-slate-600 transition-colors duration-200 hover:text-cyan-500"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <Button />
          </nav>
        </div>
      </header>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md md:hidden">
        <div className="flex h-20 items-center justify-between border-b border-slate-100 bg-white px-4 shadow-sm">
          <Logo />
          <Button/>
        </div>
      </header>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 px-2 pb-safe backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between py-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-slate-400 transition-colors duration-200 hover:text-cyan-500"
              >
                <Icon
                  size={20}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                />
                <span className="truncate text-[10px] font-medium">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
      {/* <div className="h-16 md:hidden" /> */}
    </>
  );
}
