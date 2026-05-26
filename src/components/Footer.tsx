"use client";

type FooterProps = {
  onRequestAccess: () => void;
};

const footerColumns = [
  {
    title: "Access",
    links: [
      { label: "Request Access", target: "request-access" },
      { label: "Access Pass", target: "access-pass" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Intelligence", target: "intelligence" },
      { label: "Network", target: "network" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", target: "#" },
      { label: "Terms", target: "#" },
    ],
  },
];

export default function Footer({ onRequestAccess }: FooterProps) {
  function scrollToSection(sectionId: string) {
    if (sectionId === "#") return;

    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleFooterClick(target: string) {
    if (target === "request-access") {
      onRequestAccess();
      return;
    }

    scrollToSection(target);
  }

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-black px-6 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1.1fr] lg:gap-24">
          <div className="max-w-md">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.45em] text-[#A1A1A6]">
              CryptoHub Pro
            </p>

            <h3 className="text-[clamp(2rem,3vw,3rem)] font-light leading-[1.02] tracking-[-0.05em] text-white">
              Private crypto intelligence for digital capital
            </h3>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/48">
              A premium lead acquisition experience designed to communicate
              access, trust and institutional-grade positioning in Web3.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onRequestAccess}
                className="w-fit rounded-full border border-white/15 bg-white/[0.015] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#F5F5F7] shadow-[0_0_36px_rgba(161,161,166,0.04)] backdrop-blur-sm transition duration-300 hover:border-[#A1A1A6]/70 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_44px_rgba(161,161,166,0.16)]"
              >
                Request Access
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("access-pass")}
                className="w-fit rounded-full border border-white/10 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55 transition duration-300 hover:border-[#D6C29A]/40 hover:text-[#D6C29A]"
              >
                View Pass
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-[#A1A1A6]">
                  {column.title}
                </p>

                <div className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => handleFooterClick(link.target)}
                      className="w-fit text-left text-sm text-white/42 transition duration-300 hover:text-[#F5F5F7]"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 md:mt-20">
          <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div>
              <p className="text-sm font-light tracking-[-0.02em] text-white">
                CryptoHub Pro
              </p>

              <p className="mt-1 text-xs text-white/35">
                Built as a premium lead capture landing page.
              </p>
            </div>

            <p className="text-xs text-white/30 md:text-center">
              © 2026 CryptoHub Pro. All rights reserved.
            </p>

            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </footer>
  );
}