"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type NetworkItem = {
  title: string;
  description: ReactNode;
};

const emphasis = "font-semibold text-[#F5F5F7]/75";

const items: NetworkItem[] = [
  {
    title: "Curated Members",
    description: (
      <>
        A <strong className={emphasis}>selective network</strong> of{" "}
        <strong className={emphasis}>
          investors, builders and operators
        </strong>{" "}
        focused on the next phase of crypto.
      </>
    ),
  },
  {
    title: "Private Briefings",
    description: (
      <>
        Access concise <strong className={emphasis}>market updates</strong>,
        strategic insights and{" "}
        <strong className={emphasis}>high-signal research</strong> before the
        noise.
      </>
    ),
  },
  {
    title: "Founder-Level Access",
    description: (
      <>
        Get closer to <strong className={emphasis}>product updates</strong>,{" "}
        <strong className={emphasis}>early releases</strong> and{" "}
        <strong className={emphasis}>strategic opportunities</strong> inside
        CryptoHub.
      </>
    ),
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

export default function NetworkSection() {
  return (
    <section
      id="network"
      className="relative isolate overflow-hidden bg-[#05070B] px-6 pt-24 pb-32 text-white md:pt-28 md:pb-36 lg:pt-24 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_34%,rgba(161,161,166,0.07),transparent_38%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            staggerChildren: 0.1,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 text-[13px] font-medium uppercase tracking-[0.42em] text-[#A1A1A6]"
          >
            Network
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[19ch] text-[clamp(2.45rem,4vw,3.55rem)] font-light leading-[0.98] tracking-[-0.035em] text-white"
          >
            A private circle for serious builders and investors
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50 md:text-base md:leading-8"
          >
            <span className="font-semibold text-[#F5F5F7]">
              CryptoHub Pro
            </span>{" "}
            is designed for people who want sharper information, better context
            and a more intentional network around digital capital.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            staggerChildren: 0.12,
            delayChildren: 0.22,
          }}
          className="mx-auto mt-12 grid max-w-[1080px] grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#06090F]/90 px-7 py-7 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#A1A1A6]/35 hover:bg-[#070A10] md:min-h-[205px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(161,161,166,0.10),transparent_42%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <h3 className="relative text-center text-lg font-light tracking-[-0.025em] text-white transition duration-500 group-hover:text-[#F5F5F7]">
                {item.title}
              </h3>

              <p className="relative mt-5 max-w-[15rem] text-center text-[13px] leading-6 text-white/45 transition duration-500 group-hover:text-white/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}