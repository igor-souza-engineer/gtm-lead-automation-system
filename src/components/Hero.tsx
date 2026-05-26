"use client";

import Image from "next/image";
import { motion } from "motion/react";

type HeroProps = {
  onRequestAccess: () => void;
};

export default function Hero({ onRequestAccess }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative z-10 isolate min-h-[100svh] overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/moon.png"
          alt="Moon"
          fill
          priority
          className="object-cover object-[58%_center] opacity-70 md:object-center md:opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 md:via-black/70 md:to-black/10" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black md:from-black/40 md:via-transparent md:to-black" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_45%,rgba(161,161,166,0.10),transparent_34%)]" />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-black/70 to-[#05070B]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl -translate-y-8 flex-col justify-center px-6 pt-32 pb-28 md:min-h-screen md:translate-y-6 md:pt-24 md:pb-20 lg:translate-y-8"
      >
        <p className="mb-6 max-w-[22rem] text-[10px] font-medium uppercase leading-[1.6] tracking-[0.42em] text-[#A1A1A6] md:max-w-none md:text-xs md:tracking-[0.45em]">
          Private access to crypto intelligence
        </p>

        <h1 className="max-w-[13ch] text-[42px] font-light leading-[0.98] tracking-[-0.025em] [word-spacing:0.04em] text-white sm:text-5xl md:max-w-4xl md:text-7xl md:leading-[0.96] md:tracking-[-0.028em] md:[word-spacing:0.035em]">
          <span className="block">The next financial</span>
          <span className="block">frontier</span>
        </h1>

        <p className="mt-8 max-w-[31rem] text-sm leading-7 text-white/88 md:text-base md:leading-8">
          <span className="font-semibold text-[#D6C29A] drop-shadow-[0_0_14px_rgba(214,194,154,0.16)]">
            CryptoHub Pro
          </span>{" "}
          gives selected members access to institutional-grade crypto research,
          private briefings and early intelligence.
        </p>

        <button
          type="button"
          onClick={onRequestAccess}
          className="mt-11 w-fit rounded-full border border-white/18 bg-white/[0.015] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5F5F7] shadow-[0_0_40px_rgba(161,161,166,0.04)] backdrop-blur-sm transition duration-300 hover:border-[#A1A1A6]/70 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_50px_rgba(161,161,166,0.16)] md:mt-12 md:px-8 md:text-xs"
        >
          Request Access
        </button>
      </motion.div>
    </section>
  );
}