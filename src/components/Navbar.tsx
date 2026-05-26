"use client";

type NavbarProps = {
  onRequestAccess: () => void;
};

const navItems = [
  {
    label: "Intelligence",
    href: "intelligence",
  },
  {
    label: "Access Pass",
    href: "access-pass",
  },
  {
    label: "Network",
    href: "network",
  },
];

export default function Navbar({ onRequestAccess }: NavbarProps) {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const sectionOffsets: Record<string, number> = {
      hero: 0,
      intelligence: 0,
      "access-pass": 0,
      network: 56,
    };

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY +
      (sectionOffsets[sectionId] ?? 0);

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }

  return (
    <header className="absolute left-0 top-0 z-[100] w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-3"
          aria-label="Go to CryptoHub Pro hero section"
        >

          <span className="hidden text-xs font-medium uppercase tracking-[0.28em] text-[#A1A1A6] transition duration-300 group-hover:text-[#F5F5F7] sm:block">
            CryptoHub Pro
          </span>
        </button>

        <nav className="hidden items-center gap-8 rounded-full border border-white/[0.08] bg-black/20 px-6 py-3 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#86868B] transition duration-300 hover:text-[#F5F5F7]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={onRequestAccess}
          className="rounded-full border border-white/15 bg-white/[0.02] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F5F5F7]/85 backdrop-blur-md transition duration-300 hover:border-[#A1A1A6]/70 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_40px_rgba(161,161,166,0.14)] md:px-6"
        >
          Request
          <span className="hidden sm:inline"> Access</span>
        </button>
      </div>
    </header>
  );
}