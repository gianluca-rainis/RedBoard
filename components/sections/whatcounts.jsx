import AnimatedSection from "@/components/animations/section";

export default function WhatCountsSection() {
  return (
    <AnimatedSection id="what-counts" className="py-16">
      <h2 className="text-primary text-2xl">What can I build?</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl">RP2040 Boards</h2>
          Build a board based on the RP2040 microcontroller, and design your own custom PCB!
          You can use the RP2040's dual-core processor to create a wide variety of projects, from simple sensors to complex robotics.
        </div>
        <div className="bg-card p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl">Boards Based on RP2040</h2>
          Boards where the RP2040 is not the hearth of the board, but it's still used for important purposes are also allowed.
          This allows for even more creativity and innovation, as you can use the RP2040 to add new features and capabilities to your board.
        </div>
      </div>
    </AnimatedSection>
  );
}
