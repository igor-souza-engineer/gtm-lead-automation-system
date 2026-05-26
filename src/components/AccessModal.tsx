"use client";

import { type FormEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type AccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AccessModal({ isOpen, onClose }: AccessModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const capitalAllocation = String(
      formData.get("capitalAllocation") || ""
    ).trim();

    if (!name || !email || !phone || !capitalAllocation) {
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: `Estimated capital allocation: ${capitalAllocation}`,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        console.error("Lead submission failed:", data);
        setErrorMessage("Something went wrong. Please try again.");
        return;
      }

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Unexpected lead submission error:", error);
      setErrorMessage("Unable to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleClose() {
    setIsSubmitted(false);
    setErrorMessage("");
    setIsSubmitting(false);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 py-4 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[calc(100svh-2rem)] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#05070B]/95 p-6 text-white shadow-2xl md:p-8"
          >
            <button
              type="button"
              onClick={handleClose}
              className="mb-7 text-xs uppercase tracking-[0.35em] text-white/40 transition duration-300 hover:text-[#F5F5F7]"
            >
              Close
            </button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.45em] text-[#A1A1A6]">
                    Request Access
                  </p>

                  <h2 className="max-w-[34rem] text-[clamp(1.85rem,3vw,2.15rem)] font-light leading-[1.05] tracking-[-0.05em] text-white">
                    Private access to{" "}
                    <span className="text-[#D6C29A]">CryptoHub Pro</span>
                  </h2>

                  <form onSubmit={handleSubmit} className="mt-7 space-y-3.5">
                    <input
                      name="name"
                      className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A1A1A6]"
                      placeholder="Full name"
                      autoComplete="name"
                      required
                    />

                    <input
                      name="email"
                      className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A1A1A6]"
                      placeholder="Email address"
                      type="email"
                      autoComplete="email"
                      required
                    />

                    <input
                      name="phone"
                      className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#A1A1A6]"
                      placeholder="Phone / WhatsApp"
                      autoComplete="tel"
                      required
                    />

                    <select
                      name="capitalAllocation"
                      defaultValue=""
                      className="w-full appearance-none border-b border-white/10 bg-transparent py-3 text-sm text-white/40 outline-none transition duration-300 focus:border-[#A1A1A6] focus:text-white"
                      required
                    >
                      <option value="" disabled>
                        Estimated capital allocation
                      </option>

                      <option
                        value="Under $5,000"
                        className="bg-[#05070B] text-white"
                      >
                        Under $5,000
                      </option>

                      <option
                        value="$5,000 – $25,000"
                        className="bg-[#05070B] text-white"
                      >
                        $5,000 – $25,000
                      </option>

                      <option
                        value="$25,000 – $100,000"
                        className="bg-[#05070B] text-white"
                      >
                        $25,000 – $100,000
                      </option>

                      <option
                        value="$100,000+"
                        className="bg-[#05070B] text-white"
                      >
                        $100,000+
                      </option>
                    </select>

                    <p className="pt-2 text-xs leading-6 text-white/35">
                      We review each request before granting access.
                    </p>

                    {errorMessage && (
                      <p className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-xs leading-5 text-red-200">
                        {errorMessage}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 w-full rounded-full border border-white/15 bg-white/[0.015] px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#F5F5F7] shadow-[0_0_36px_rgba(161,161,166,0.04)] transition duration-300 hover:border-[#A1A1A6]/70 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_44px_rgba(161,161,166,0.16)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting
                        ? "Sending Request..."
                        : "Request Invitation"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="py-8"
                >
                  <p className="mb-5 text-xs font-medium uppercase tracking-[0.45em] text-[#A1A1A6]">
                    Application Received
                  </p>

                  <h2 className="text-[clamp(1.85rem,3vw,2.15rem)] font-light leading-[1.05] tracking-[-0.05em] text-white">
                    Your request is now under review.
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-white/50">
                    Selected members will receive private onboarding access to{" "}
                    <span className="font-semibold text-[#D6C29A]">
                      CryptoHub Pro
                    </span>
                    .
                  </p>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-9 w-full rounded-full border border-white/15 bg-white/[0.015] px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#F5F5F7] shadow-[0_0_36px_rgba(161,161,166,0.04)] transition duration-300 hover:border-[#A1A1A6]/70 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_44px_rgba(161,161,166,0.16)]"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}