import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-card py-16">
      <div className="max-w-4xl w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Orpheus Image */}
          <div className="shrink-0">
            <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">
              <Image 
                alt="Hack Club Flag" 
                src="/flag-standalone.svg" 
                width={140} 
                height={140}
                className="object-contain"
            /></a>
          </div>
          
          {/* Content Section */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-3">
              <a href={process.env.SITE_URL} target="_blank" rel="noopener noreferrer">
                <Image alt="Redboard Logo" src="/icon.svg" width={100} height={60} />
              </a>
              <div className="text-primary text-2xl font-bold">Redboard</div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              A Hack Club YSWS where teens from around the world design a custom RP2040-powered PCB from scratch, earn credits based on tracked hours, and redeem them for grants to manufacture and build their board.
            </p>

            <div className="text-sm text-muted-foreground mt-auto">
              Website built with ♥︎ by Hack Clubbers.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
