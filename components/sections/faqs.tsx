import AnimatedSection from "@/components/animations/section";

export default function FAQsSection() {
  return (
    <AnimatedSection id="faqs" className="py-16">
      <h2 className="text-primary text-2xl">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Who can participate?</h3>
          <p className="text-sm">
            Any teenager 13-18 can participate. It&apos;s not required to have any prior experience with hardware or software development.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Don&apos;t know how to make a board?</h3>
          <p className="text-sm">
            Dont&apos;t worry! This program is designed to be beginner-friendly, and we&apos;ll provide resources to help you through the process.
            We encourage you to give it a try, even if you&apos;re new to hardware design!
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">How many boards can I make?</h3>
          <p className="text-sm">
            As many as you want! We encourage you to start with simple designs and then made more complex ones as you gain confidence and experience.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">What is Hack Club?</h3>
          <p className="text-sm">
            <a href="https://hackclub.com" target="_blank" className="underline hover:decortaion-wavy">Hack Club</a> is a 501(c)(3) nonprofit and network of 60k+ technical high schoolers. 
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
