"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntelligenceSection from "@/components/IntelligenceSection";
import PassSection from "@/components/PassSection";
import NetworkSection from "@/components/NetworkSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import AccessModal from "@/components/AccessModal";

export default function Home() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  function openAccessModal() {
    setIsAccessModalOpen(true);
  }

  function closeAccessModal() {
    setIsAccessModalOpen(false);
  }

  return (
    <>
      {!isAccessModalOpen && (
        <Navbar onRequestAccess={openAccessModal} />
        )}

      <main className="bg-black">
        <Hero onRequestAccess={openAccessModal} />

        <IntelligenceSection />

        <PassSection />

        <NetworkSection />

        <FinalCTA onRequestAccess={openAccessModal} />
      </main>

      <Footer onRequestAccess={openAccessModal} />

      <AccessModal isOpen={isAccessModalOpen} onClose={closeAccessModal} />
    </>
  );
}