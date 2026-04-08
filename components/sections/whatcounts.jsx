import AnimatedSection from "@/components/animations/section";

export default function WhatCountsSection() {
  return (
    <AnimatedSection id="what-counts" className="py-16">
      <h2 className="text-primary text-2xl mb-6">What can I build?</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">RP2040 as the Heart</h2>
          <p className="text-sm text-foreground">
            Build a board where the RP2040 is the main microcontroller.{" "}
            Design your own custom PCB and use its dual-core processor{" "}
            for anything from simple sensors to complex robotics.
          </p>
        </div>
        <div className="bg-card p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">RP2040 on Board</h2>
          <p className="text-sm text-foreground">
            Boards where the RP2040 plays a supporting role alongside{" "}
            another main component are also allowed - use it to add{" "}
            connectivity, control, or processing to your design.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
