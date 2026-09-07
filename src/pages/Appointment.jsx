
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  CheckCircle2,
  MessageCircle,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
const services = [
  "General Dentistry",
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Root Canal Treatment",
  "Pediatric Dentistry",
];
const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
];
const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};
const APPOINTMENTS_STORAGE_KEY = "smilecare_appointments";

export default function Appointment() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [savedAppointment, setSavedAppointment] = useState(null);
  const today = useMemo(() => {
    const now = new Date();
    return [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
    ].join("-");
  }, []);
  const currentTime = useMemo(() => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;
  }, []);
  const convertTimeToMinutes = (timeString) => {
    if (!timeString) return null;
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }
    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }
    return hours * 60 + minutes;
  };

  // ===================================================
  // HANDLE CHANGE
  // ===================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  // ===================================================
  // VALIDATION
  // ===================================================

  const validateForm = () => {
    const newErrors = {};

    const fullName = formData.fullName.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // Full Name
    if (!fullName) {
      newErrors.fullName = "Full name is required.";
    } else if (fullName.length < 3) {
      newErrors.fullName = "Please enter your full name.";
    }

    // Phone
    const phoneRegex = /^[+]?[0-9\s\-()]{8,20}$/;

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Service
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    // Date
    if (!formData.date) {
      newErrors.date = "Please select a preferred date.";
    } else if (formData.date < today) {
      newErrors.date = "The selected date has already passed.";
    }

    // Time
    if (!formData.time) {
      newErrors.time = "Please select a preferred time.";
    } else if (formData.date === today) {
      const selectedMinutes = convertTimeToMinutes(formData.time);

      const [hours, minutes] = currentTime.split(":").map(Number);

      const currentMinutes = hours * 60 + minutes;

      if (selectedMinutes <= currentMinutes) {
        newErrors.time = "Please select a future time.";
      }
    }

    // Message
    if (!message) {
      newErrors.message = "Please tell us how we can help you.";
    } else if (message.length < 10) {
      newErrors.message =
        "Message should contain at least 10 characters.";
    } else if (message.length > 500) {
      newErrors.message =
        "Message cannot be longer than 500 characters.";
    }

    return newErrors;
  };

  // ===================================================
  // SAVE APPOINTMENT
  // ===================================================

  const saveAppointment = (appointment) => {
    try {
      const storedAppointments =
        JSON.parse(
          localStorage.getItem(APPOINTMENTS_STORAGE_KEY)
        ) || [];

      storedAppointments.push(appointment);

      localStorage.setItem(
        APPOINTMENTS_STORAGE_KEY,
        JSON.stringify(storedAppointments)
      );

      return true;
    } catch (error) {
      console.error("Failed to save appointment:", error);
      return false;
    }
  };

  // ===================================================
  // CREATE WHATSAPP MESSAGE
  // ===================================================

  const createWhatsAppMessage = (appointment) => {
    return [
      "Hello SmileCare! I'd like to book a dental appointment.",
      "",
      `Name: ${appointment.fullName}`,
      `Phone: ${appointment.phone}`,
      `Email: ${appointment.email}`,
      `Service: ${appointment.service}`,
      `Date: ${appointment.date}`,
      `Time: ${appointment.time}`,
      `Message: ${appointment.message}`,
    ].join("\n");
  };

  // ===================================================
  // OPEN WHATSAPP
  // ===================================================

  const openWhatsApp = () => {
    if (!savedAppointment) return;

    const phoneNumber = "201127846533";

    const message = createWhatsAppMessage(savedAppointment);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ===================================================
  // SUBMIT
  // ===================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    // -----------------------------------------------
    // Recalculate current date/time
    // -----------------------------------------------

    const now = new Date();

    const currentDate = [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0"),
    ].join("-");

    const liveCurrentMinutes =
      now.getHours() * 60 + now.getMinutes();

    const newErrors = validateForm();

    // -----------------------------------------------
    // Extra date check
    // -----------------------------------------------

    if (formData.date < currentDate) {
      newErrors.date =
        "The selected date has already passed.";
    }

    // -----------------------------------------------
    // Extra time check
    // -----------------------------------------------

    if (formData.date === currentDate && formData.time) {
      const selectedMinutes = convertTimeToMinutes(
        formData.time
      );

      if (selectedMinutes <= liveCurrentMinutes) {
        newErrors.time =
          "The selected time has already passed.";
      }
    }

    // -----------------------------------------------
    // Stop if invalid
    // -----------------------------------------------

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    // =================================================
    // CREATE APPOINTMENT OBJECT
    // =================================================

    const appointment = {
      id:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random()}`,

      ...formData,

      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),

      createdAt: new Date().toISOString(),

      status: "pending",
    };

    // =================================================
    // SAVE
    // =================================================

    const saved = saveAppointment(appointment);

    if (!saved) {
      setErrors({
        form:
          "We could not save your appointment. Please try again.",
      });

      return;
    }

    // =================================================
    // SUCCESS
    // =================================================

    setSavedAppointment(appointment);
    setErrors({});
    setSubmitted(true);

    // Clear form after successful save
    setFormData(initialForm);
  };

  // ===================================================
  // INPUT CLASSES
  // ===================================================

  const inputClasses = (fieldName) => `
    w-full
    rounded-2xl
    border
    bg-white
    px-4
    py-3.5
    text-sm
    text-slate-800
    outline-none
    transition-all
    duration-200
    placeholder:text-slate-400
    focus:ring-4
    ${
      errors[fieldName]
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/10"
    }
  `;

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <section
      id="appointment"
      className="
        min-h-screen
        w-full
        bg-slate-50
        px-4
        py-8
        pb-28
        sm:px-6
        sm:py-12
        lg:px-8
        lg:py-16
        lg:pb-16
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================================================= */}
        {/* BACK TO HOME */}
        {/* ================================================= */}

        <Link
          to="/"
          className="
            group
            mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200
            bg-white
            px-4
            py-2.5
            text-sm
            font-semibold
            text-slate-600
            shadow-sm
            transition-all
            duration-300
            hover:-translate-x-0.5
            hover:border-cyan-200
            hover:text-cyan-600
            hover:shadow-md
            focus:outline-none
            focus-visible:ring-4
            focus-visible:ring-cyan-500/10
          "
        >
          <ArrowLeft
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          <span>Back to Home</span>
        </Link>

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-14
          "
        >
          <div
            className="
              mb-4
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
            <CalendarDays size={15} />
            BOOK AN APPOINTMENT
          </div>

          <h1
            className="
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Ready for a Healthier Smile?
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              sm:leading-8
            "
          >
            Book your consultation today and take the first
            step toward a confident smile.
          </p>
        </div>

        {/* ================================================= */}
        {/* FORM ERROR */}
        {/* ================================================= */}

        {errors.form && (
          <div
            className="
              mx-auto
              mb-6
              max-w-5xl
              rounded-2xl
              border
              border-red-200
              bg-red-50
              p-4
              text-sm
              font-medium
              text-red-600
            "
          >
            {errors.form}
          </div>
        )}

        {/* ================================================= */}
        {/* SUCCESS + WHATSAPP ACTION */}
        {/* ================================================= */}

        {submitted && savedAppointment && (
          <div
            className="
              mx-auto
              mb-6
              max-w-5xl
              overflow-hidden
              rounded-3xl
              border
              border-emerald-200
              bg-white
              shadow-lg
              shadow-emerald-100/50
            "
          >
            {/* Success Header */}
            <div
              className="
                flex
                items-start
                gap-3
                bg-emerald-50
                p-5
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-100
                  text-emerald-600
                "
              >
                <CheckCircle2 size={20} />
              </div>

              <div>
                <h2 className="font-bold text-emerald-800">
                  Appointment request saved successfully!
                </h2>

                <p className="mt-1 text-sm leading-6 text-emerald-700">
                  Your information has been saved. You can now
                  send the appointment details to SmileCare
                  through WhatsApp.
                </p>
              </div>
            </div>

            {/* Appointment Summary */}
            <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-medium text-slate-400">
                  Patient
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {savedAppointment.fullName}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-medium text-slate-400">
                  Service
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {savedAppointment.service}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-medium text-slate-400">
                  Date
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {savedAppointment.date}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-medium text-slate-400">
                  Time
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {savedAppointment.time}
                </p>
              </div>
            </div>

            {/* WhatsApp Actions */}
            <div
              className="
                flex
                flex-col
                gap-3
                border-t
                border-slate-100
                p-5
                sm:flex-row
                sm:justify-end
              "
            >
              <button
                type="button"
                onClick={openWhatsApp}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#25D366]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-green-500/10
                  transition-all
                  duration-300
                  hover:bg-[#20BD5A]
                  hover:shadow-xl
                  active:scale-[0.98]
                "
              >
                <MessageCircle className="h-5 w-5" />

                Continue on WhatsApp
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setSavedAppointment(null);
                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-slate-600
                  transition-all
                  duration-300
                  hover:border-slate-300
                  hover:bg-slate-50
                  active:scale-[0.98]
                "
              >
                <Send className="h-4 w-4" />

                Edit message
              </button>
            </div>
          </div>
        )}

        {/* ================================================= */}
        {/* FORM CARD */}
        {/* ================================================= */}

        {!submitted && (
          <div
            className="
              mx-auto
              w-full
              max-w-5xl
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-white
              shadow-xl
              shadow-slate-200/60
            "
          >
            <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

              {/* ============================================= */}
              {/* LEFT INFORMATION */}
              {/* ============================================= */}

              <div
                className="
                  relative
                  hidden
                  overflow-hidden
                  bg-gradient-to-br
                  from-teal-600
                  to-cyan-600
                  p-8
                  text-white
                  lg:block
                  lg:p-10
                "
              >
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-cyan-100
                      "
                    >
                      Your Smile Matters
                    </p>

                    <h2
                      className="
                        mt-5
                        max-w-sm
                        text-3xl
                        font-bold
                        leading-tight
                      "
                    >
                      Personalized care for a healthier,
                      happier smile.
                    </h2>

                    <p
                      className="
                        mt-5
                        max-w-sm
                        text-sm
                        leading-7
                        text-white/75
                      "
                    >
                      Choose the service, date, and time that
                      work best for you. Our team will contact
                      you to confirm your visit.
                    </p>
                  </div>

                  <div className="mt-12 space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-white/10
                        "
                      >
                        <CheckCircle2 size={19} />
                      </div>

                      <span className="text-sm text-white/85">
                        Modern dental technology
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-white/10
                        "
                      >
                        <CheckCircle2 size={19} />
                      </div>

                      <span className="text-sm text-white/85">
                        Personalized treatment plans
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-white/10
                        "
                      >
                        <CheckCircle2 size={19} />
                      </div>

                      <span className="text-sm text-white/85">
                        Comfortable patient experience
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Circles */}
                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-56
                    w-56
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-24
                    -left-20
                    h-64
                    w-64
                    rounded-full
                    border
                    border-white/10
                  "
                />
              </div>

              {/* ============================================= */}
              {/* FORM */}
              {/* ============================================= */}

              <div className="p-5 sm:p-7 lg:p-10">
                <form
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Full Name
                      </label>

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={inputClasses(
                          "fullName"
                        )}
                      />

                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+20 1XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses("phone")}
                      />

                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses("email")}
                      />

                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Service
                      </label>

                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`
                          ${inputClasses("service")}
                          appearance-none
                        `}
                      >
                        <option value="">
                          Select Service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}
                      </select>

                      {errors.service && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Date */}
                    <div>
                      <label
                        htmlFor="date"
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Preferred Date
                      </label>

                      <div className="relative">
                        <input
                          id="date"
                          name="date"
                          type="date"
                          min={today}
                          value={formData.date}
                          onChange={handleChange}
                          className={`
                            ${inputClasses("date")}
                            pr-11
                          `}
                        />

                        <CalendarDays
                          size={18}
                          className="
                            pointer-events-none
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                          "
                        />
                      </div>

                      {errors.date && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Time */}
                    <div>
                      <label
                        htmlFor="time"
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Preferred Time
                      </label>

                      <div className="relative">
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`
                            ${inputClasses("time")}
                            appearance-none
                            pr-11
                          `}
                        >
                          <option value="">
                            Select Time
                          </option>

                          {timeSlots.map((time) => (
                            <option
                              key={time}
                              value={time}
                            >
                              {time}
                            </option>
                          ))}
                        </select>

                        <Clock3
                          size={18}
                          className="
                            pointer-events-none
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                          "
                        />
                      </div>

                      {errors.time && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.time}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-slate-700
                        "
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        maxLength={500}
                        placeholder="Tell us a little about your needs..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`
                          ${inputClasses("message")}
                          resize-none
                        `}
                      />

                      <div className="mt-1.5 flex items-center justify-between">
                        {errors.message ? (
                          <p className="text-xs text-red-500">
                            {errors.message}
                          </p>
                        ) : (
                          <span />
                        )}

                        <span className="text-xs text-slate-400">
                          {formData.message.length}/500
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ================================================= */}
                  {/* SUBMIT */}
                  {/* ================================================= */}

                  <button
                    type="submit"
                    className="
                      mt-7
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-gradient-to-r
                      from-teal-500
                      to-cyan-600
                      px-6
                      py-4
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-cyan-500/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-xl
                      hover:shadow-cyan-500/30
                      active:translate-y-0
                      focus:outline-none
                      focus-visible:ring-4
                      focus-visible:ring-cyan-300/50
                    "
                  >
                    <CalendarDays size={19} />

                    <span>Book My Appointment</span>
                  </button>

                  <p
                    className="
                      mt-3
                      text-center
                      text-[11px]
                      leading-5
                      text-slate-400
                    "
                  >
                    Your appointment is not confirmed until
                    our team contacts you.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
