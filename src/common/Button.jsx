import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
const BookingButton = () => {
  return (
<Link
  to="/appointment"
  className="
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    overflow-hidden
    rounded-xl
    bg-gradient-to-r
    from-teal-500
    to-cyan-600
    px-2.5
    py-2
    text-[11px]
    font-bold
    text-white
    shadow-md
    shadow-cyan-500/20
    transition-all
    duration-300
    active:scale-[0.98]

    sm:gap-2.5
    sm:px-4
    sm:py-3
    sm:text-sm
  "
>
  {/* Shine Effect */}
  <span
    className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />

  {/* Button Content */}
  <span className="relative z-10 whitespace-nowrap">
    Book an Appointment
  </span>

  <Calendar
    className="
      relative
      z-10
      h-4
      w-4
      shrink-0
      transition-transform
      duration-300
      group-hover:scale-110
    "
  />
</Link>
  );
};

export default BookingButton;
