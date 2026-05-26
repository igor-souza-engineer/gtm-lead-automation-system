"use client";

import { motion } from "motion/react";

const items = [
  {
    title: "Macro Signals",
    description:
      "Track global liquidity, monetary policy and market stress before they become consensus.",
  },
  {
    title: "Liquidity Intelligence",
    description:
      "Understand where capital is flowing across Bitcoin, altcoins, stablecoins and risk assets.",
  },
  {
    title: "Portfolio Strategy",
    description:
      "Transform market data into clearer allocation decisions for the next crypto cycle.",
  },
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

export default function IntelligenceSection() {
  return (
    <section
      id="intelligence"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#05070B] px-6 py-20 text-white md:py-24 lg:py-0"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(161,161,166,0.08),transparent_38%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 text-[13px] font-medium uppercase tracking-[0.42em] text-[#A1A1A6]"
        >
          Intelligence
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-[clamp(2.2rem,3.4vw,3.35rem)] font-light leading-[1.08] tracking-[-0.015em] text-white"
        >
          Institutional intelligence for
          <br />
          your digital capital
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 h-px w-full origin-left bg-gradient-to-r from-white/20 via-white/10 to-transparent"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            staggerChildren: 0.12,
            delayChildren: 0.25,
          }}
          className="mx-auto mt-8 grid w-full max-w-[1080px] grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex min-h-[195px] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#06090F]/85 px-8 py-8 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#A1A1A6]/35 hover:bg-[#070A10]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(161,161,166,0.09),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <h3 className="relative text-[19px] font-light tracking-[-0.025em] text-white transition duration-500 group-hover:text-[#F5F5F7] md:text-[18px]">
                {item.title}
              </h3>

              <p className="relative mt-5 max-w-[17rem] text-sm leading-7 text-white/48 transition duration-500 group-hover:text-white/65 md:text-[14px] md:leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}