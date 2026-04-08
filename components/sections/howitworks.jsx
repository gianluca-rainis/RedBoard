import { Card, CardContent, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/section";
import Image from "next/image";

export function HowItWorksSection() {
  const steps = [
    {
      image: "/info1.png",
      title: "Design a Board powered by RP2040",
      description:
        "Create your own board from scratch. Read the documentation, learn the fundamentals, and create the schematics and the PCB.",
    },
    {
      image: "/info2.png",
      title: "Get Credits",
      description:
        "Earn credits by completing the board design, the README, and the documentation of your journey.",
    },
    {
      image: "/info3.png",
      title: "Spend in Shop",
      description:
        "Use your earned credits to buy grants for the PCB production, for the components and tools you need.",
    },
    {
      image: "/info4.png",
      title: "Build Your Board",
      description:
        "Assemble your designed board, solder the components, and test your creation.",
    },
    {
      image: "/info5.png",
      title: "Get Credits",
      description:
        "Earn credits by assembling the board you designed and sharing your project with a video and some photos.",
    },
    {
      image: "/info6.png",
      title: "Spend in Shop",
      description:
        "Use your earned credits to buy whatever you want in the shop, from tools to components, and get ready for your next project!",
    },
  ];

  return (
    <AnimatedSection className="py-16">
      <h2 className="text-primary text-2xl">How It Works</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => {
          return (
            <Card key={index} className="group relative overflow-hidden border-border/60">
              <div className="relative overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/98 via-background/85 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="px-5 pt-5">
                    <CardTitle className="text-xl text-foreground">
                      {step.title}
                    </CardTitle>
                    <p className="mt-3 text-sm text-foreground/85">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="sr-only">
                <p>{step.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
