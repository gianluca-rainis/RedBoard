import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/section";
import { Cpu, CircuitBoard, Coins, ShoppingBag } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Cpu,
      title: "Design a Board powered by RP2040",
      description:
        "Create your own board from scratch. Read the documentation, learn the fundamentals, and create the schematics and the PCB.",
    },
    {
      icon: Coins,
      title: "Get Credits",
      description:
        "Earn credits by completing the board design, the README, and the documentation of your journey.",
    },
    {
      icon: ShoppingBag,
      title: "Spend in Shop",
      description:
        "Use your earned credits to buy grants for the PCB production, for the components and tools you need.",
    },
    {
      icon: CircuitBoard,
      title: "Build Your Board",
      description:
        "Assemble your designed board, solder the components, and test your creation.",
    },
    {
      icon: Coins,
      title: "Get Credits",
      description:
        "Earn credits by assembling the board you designed and sharing your project with a video and some photos.",
    },
    {
      icon: ShoppingBag,
      title: "Spend in Shop",
      description:
        "Use your earned credits to buy whatever you want in the shop, from tools to components, and get ready for your next project!",
    },
  ];

  return (
    <AnimatedSection className="py-16">
      <h2 className="text-primary text-2xl">How It Works</h2>

      <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </AnimatedSection>
    );
  }
