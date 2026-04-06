import AnimatedSection from "@/components/animations/section";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-16">
      <h2 className="text-primary text-2xl">About Redboard</h2>
      <Card>
        <CardContent className="space-y-4">
          <p>
            Redboard is a YSWS (You Ship We Ship) where teens from around the world
            come together to build their own RP2040-powered PCBs - and get funds to
            build them!
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
