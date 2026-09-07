
import whatsappIcon from "../../public/assets/image/whatsapp.svg";
import { X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "201127846533";

  const message =
    "Hello! I'd like to book a dental appointment.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {/* ================= FLOATING BUTTON ================= */}
      <div
        className="
          fixed
          right-4
          bottom-20
          z-[60]
          md:right-6
          md:bottom-6
        "
      >
        {/* ================= MESSAGE PREVIEW ================= */}
        {isOpen && (
          <div
            className="
              absolute
              bottom-16
              right-0
              mb-3
              w-[260px]
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-2xl
              shadow-slate-900/10
              md:w-[290px]
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-center
                justify-between
                bg-[#25D366]
                px-4
                py-3
                text-white
              "
            >
              <div className="flex items-center gap-2">
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="h-5 w-5 object-contain"
                />

                <span className="text-sm font-bold">
                  SmileCare
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="
                  rounded-full
                  p-1
                  text-white/80
                  transition-colors
                  hover:bg-white/10
                  hover:text-white
                "
                aria-label="Close WhatsApp message"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message */}
            <div className="p-4">
              <p
                className="
                  rounded-2xl
                  rounded-bl-md
                  bg-slate-100
                  px-4
                  py-3
                  text-sm
                  leading-6
                  text-slate-700
                "
              >
                {message}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#25D366]
                  px-4
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#20BD5A]
                  hover:shadow-lg
                  hover:shadow-green-500/20
                  active:scale-[0.98]
                "
              >
                <img
                  src={whatsappIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4 object-contain"
                />

                Open WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* ================= MAIN BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={
            isOpen
              ? "Close WhatsApp contact"
              : "Contact us on WhatsApp"
          }
          className="
            group
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-xl
            shadow-green-500/25
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#20BD5A]
            hover:shadow-2xl
            hover:shadow-green-500/30
            active:scale-95
            md:h-16
            md:w-16
          "
        >
          {/* Pulse */}
          {!isOpen && (
            <span
              className="
                absolute
                inset-0
                rounded-full
                bg-[#25D366]
                opacity-30
                animate-ping
              "
            />
          )}

          {/* Icon */}
          {isOpen ? (
            <X
              className="
                relative
                z-10
                h-6
                w-6
                transition-transform
                duration-300
              "
            />
          ) : (
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="
                relative
                z-10
                h-6
                w-6
                object-contain
                transition-transform
                duration-300
                group-hover:scale-110
                md:h-7
                md:w-7
              "
            />
          )}

          {/* Notification Dot */}
          {!isOpen && (
            <span
              className="
                absolute
                right-0.5
                top-0.5
                h-3
                w-3
                rounded-full
                border-2
                border-white
                bg-red-500
              "
            />
          )}
        </button>
      </div>
    </>
  );
}