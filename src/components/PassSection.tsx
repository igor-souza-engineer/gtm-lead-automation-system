"use client";

import { motion } from "motion/react";
import AccessPassCard from "@/components/AccessPassCard";

const passFeatures = [
  "Private member verification",
  "Institutional access layer",
  "Curated ecosystem identity",
];

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

export default function PassSection() {
  return (
    <section
      id="access-pass"
      className="relative overflow-hidden bg-[#05070B] px-5 py-20 text-white md:px-8 md:py-24 lg:min-h-[100svh] lg:px-10 lg:py-0"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_69%_48%,rgba(214,194,154,0.12),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(214,194,154,0.055),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#05070B_0%,rgba(5,7,11,0.96)_34%,rgba(5,7,11,0.54)_100%)]" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 lg:min-h-[100svh] lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
        {/* Left content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.35 }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="relative z-20 max-w-[520px] lg:-translate-y-1"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 text-[18px] font-medium uppercase tracking-[-0.03em] text-[#D6C29A]"
          >
            The Pass
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "-0.01em",
              lineHeight: "1.08",
              fontKerning: "normal",
              textRendering: "geometricPrecision",
            }}
            className="max-w-[620px] text-[clamp(2.65rem,4vw,3.55rem)] font-normal text-white"
          >
            More than access.
            <br />
            A private layer
            <br />
            of identity<span className="text-[#D6C29A]">.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-[470px] text-[14px] leading-7 text-white/52 md:text-[15px]"
          >
            The{" "}
            <span className="font-semibold text-[#D6C29A] drop-shadow-[0_0_12px_rgba(214,194,154,0.14)]">
              CryptoHub Pro Access Pass
            </span>{" "}
            becomes your entry point into private crypto intelligence, curated
            insights and a more selective financial network.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              staggerChildren: 0.09,
              delayChildren: 0.24,
            }}
            className="mt-6 max-w-[405px]"
          >
            {passFeatures.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-5 border-b border-white/10 py-3.5"
              >
                <span className="h-2 w-2 rounded-full bg-[#D6C29A] shadow-[0_0_14px_rgba(214,194,154,0.95)]" />

                <p className="text-[13px] leading-none text-white/52">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right card composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="relative z-10 flex min-h-[410px] items-center justify-center lg:min-h-[520px] lg:-ml-8 lg:translate-x-8 xl:translate-x-10"
        >
          {/* Orbital circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D6C29A]/10 md:h-[30rem] md:w-[30rem]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D6C29A]/10 md:h-[24rem] md:w-[24rem]"
          />

          {/* Soft glow behind card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6C29A]/[0.035] blur-3xl md:h-[27rem] md:w-[27rem]"
          />

          {/* Golden floor reflection */}
          <div className="absolute bottom-[3.8rem] left-1/2 h-14 w-60 -translate-x-1/2 rounded-full bg-[#D6C29A]/20 blur-3xl" />
          <div className="absolute bottom-[4.35rem] left-1/2 h-7 w-40 -translate-x-1/2 rounded-full bg-[#D6C29A]/35 blur-2xl" />
          <div className="absolute bottom-[4.95rem] left-1/2 h-px w-56 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D6C29A]/65 to-transparent" />

          {/* Card */}
          <div className="relative origin-center scale-[0.82] [perspective:2200px] md:scale-[0.88] lg:scale-[0.82] xl:scale-[0.88]">
            <AccessPassCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}