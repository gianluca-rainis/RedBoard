import AnimatedSection from "@/components/animations/section";

export default function FAQsSection() {
  const faqs = [
    {
    q: "Who can participate?",
    a: "Any teenager aged 13-18 can participate. No prior experience with hardware or software development is required.",
  },
  {
    q: "What are the shipping requirements?",
    a: "Phase 1 requires a public GitHub repo with KiCad source files, a handwritten README, a JOURNEY file documenting your process, a BOM with component links, and photos of the board design. Phase 2 requires a short video of the board working and photos of the assembled board.",
  },
  {
    q: "How do I earn credits?",
    a: "For every hour of work tracked with Lapse, you earn 1 base credit. There are two payouts: one after the design phase and one after the manufacturing phase.",
  },
  {
    q: "How is scoring determined?",
    a: "Credits are based on tracked hours and board quality. Quality is evaluated on functionality, manufacturability, and documentation. Your shipment must be approved before credits are issued.",
  },
  {
    q: "Can I use AI?",
    a: "You can use AI as a tool, but you must declare its use in your project's AI statement. You cannot use AI to design the entire board or vibe-code the entire firmware - we want to see your design process.",
  },
  {
    q: "How many boards can I make?",
    a: "As many as you want! Start with simple designs and work your way up to more complex ones.",
  },
  {
    q: "Don't know how to make a board?",
    a: "No worries - the program is beginner-friendly and includes guides on KiCad, RP2040 hardware design, and PCB manufacturing. You can also find an excellent tutorial to learn the basics from.",
  },
  {
    q: "When does this start?",
    a: "Once enough people RSVP, the program will launch. Sign up now to be notified!",
  },
  {
    q: "What is Hack Club?",
    a: <>
      <a href="https://hackclub.com" target="_blank" className="underline hover:decoration-wavy">
        Hack Club
      </a>{" "}
      is a 501(c)(3) nonprofit and network of 60k+ technical high schoolers.
    </>
  },
  ];

  return (
    <AnimatedSection id="faqs" className="py-16">
      <h2 className="text-primary text-2xl">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2">{faq.q}</h3>
            <p className="text-sm">{faq.a}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
