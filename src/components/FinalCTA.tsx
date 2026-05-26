"use client";

import { motion } from "motion/react";

type FinalCTAProps = {
  onRequestAccess: () => void;
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function FinalCTA({ onRequestAccess }: FinalCTAProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070B] px-6 py-32 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(161,161,166,0.12),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.45 }}
        transition={{
          staggerChildren: 0.12,
        }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-[#A1A1A6]"
        >
          CryptoHub Pro
        </motion.p>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl font-light tracking-[-0.06em] text-white md:text-7xl"
        >
          Private access opens soon
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-xl text-base leading-8 text-white/50"
        >
          Join the waitlist for{" "}
          <span className="font-semibold text-[#F5F5F7]">early access</span>{" "}
          to{" "}
          <span className="font-semibold text-[#F5F5F7]">
            institutional crypto intelligence
          </span>
          , private briefings and the{" "}
          <span className="font-semibold text-[#F5F5F7]">
            CryptoHub Pro access layer
          </span>
          .
        </motion.p>

        <motion.button
          type="button"
          onClick={onRequestAccess}
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{
            duration: 0.9,
            delay: 0.28,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 rounded-full border border-white/15 bg-white/[0.015] px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#F5F5F7] shadow-[0_0_40px_rgba(161,161,166,0.04)] backdrop-blur-sm transition duration-300 hover:border-[#A1A1A6]/70 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_50px_rgba(161,161,166,0.16)]"
        >
          Request Access
        </motion.button>
      </motion.div>
    </section>
  );
}