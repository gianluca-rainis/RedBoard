import AnimatedSection from "@/components/animations/section";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-16">
      <h2 className="text-primary text-2xl">About Redboard</h2>
      <Card>
        <CardContent className="space-y-4">
          <p>
            A Hack Club YSWS where teens from around the world build design a custom RP2040-powered PCB from scratch, earn credits based on tracked hours, and redeem them for grants to manufacture and build their board.
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
