"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AnimatedSection from "@/components/animations/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import ButtonAnimation from "../buttons/animation";

export default function HeroSection() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      return;
    }

    const params = new URLSearchParams({ email: trimmedEmail });
    router.push(`/dashboard/login?${params.toString()}`);
  };

  return (
    <div>
      <Image className="pcbTracesHome" src="/Redboard_traces.svg" alt="PCB Traces" width={200} height={200} />
      <AnimatedSection className="relative min-h-screen w-screen ml-[calc(-50vw+50%)] -mt-4 flex items-center justify-center px-4 overflow-hidden">
        <div className="heroImages heroImagesDelay1 hidden md:block left-[8%] top-[18%] w-[140px] h-[140px] opacity-70">
          <div className="relative w-full h-full">
            <a href="https://www.raspberrypi.com/products/rp2040" target="_blank" rel="noopener noreferrer">
              <Image alt="RP2040" src="/rp2040.png" fill className="object-contain" sizes="140px" priority />
            </a>
          </div>
        </div>
        <div className="heroImages heroImagesDelay2 hidden md:block right-[8%] top-[18%] w-[140px] h-[140px] opacity-70">
          <div className="relative w-full h-full">
            <a href="https://blueprint.hackclub.com/projects/5989" target="_blank" rel="noopener noreferrer">
              <Image alt="PiCat Board" src="/picat.png" fill className="object-contain" sizes="140px" priority />
            </a>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl w-full flex flex-col justify-center space-y-4 items-center">
          <Image alt="Redboard Logo" src="/icon.svg" width={300} height={300} />
          <p className="font-bold text-2xl text-muted-foreground">
            Design an RP2040-powered board, get funds to build it!
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span>
              An Hack Club YSWS
            </span>
            |<span>Ages 13-18</span>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 rounded-md border bg-card px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary sm:min-w-72"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <ButtonAnimation>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full cursor-pointer sm:w-auto"
                >
                  <Rocket /> RSVP Now!
                </Button>
              </ButtonAnimation>
            </form>
            <ButtonAnimation>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/guides/home">
                  <ArrowRight /> Browse Guides
                </Link>
              </Button>
            </ButtonAnimation>
          </div>
        </div>
        <div className="heroImages heroImagesDelay3 hidden md:block left-[10%] bottom-[8%] w-[150px] h-[150px] opacity-70">
          <div className="relative w-full h-full">
            <a href="https://orpheuspico.hackclub.com" target="_blank" rel="noopener noreferrer">
              <Image alt="Orpheus Pico Board" src="/orpheusPico.png" fill className="object-contain" sizes="150px" priority />
            </a>
          </div>
        </div>
        <div className="heroImages heroImagesDelay4 hidden md:block right-[10%] bottom-[8%] w-[150px] h-[150px] opacity-70">
          <div className="relative w-full h-full">
            <a href="https://blueprint.hackclub.com/projects/13391" target="_blank" rel="noopener noreferrer">
              <Image alt="Z80DevBoard Board" src="/z80devboard.png" fill className="object-contain" sizes="150px" priority />
            </a>
          </div>
        </div>
      </AnimatedSection>
      <Image className="pcbTracesHome pcbTracesHomeBottom" src="/Redboard_traces.svg" alt="PCB Traces" width={200} height={200} />
    </div>
  );
}

