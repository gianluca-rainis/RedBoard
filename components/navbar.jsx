import Link from "next/link";
import JoinButton from "./buttons/join";
import ButtonAnimation from "./buttons/animation";
import Image from "next/image";

export default function Navbar({ show=true }) {
  if (!show) {
    return null;
  }

  return (
    <div className="w-full fixed top-0 z-50 from-background/50 to-transparent bg-linear-to-b">
      <div className="w-full h-full absolute top-0 left-0 bg-background/25 backdrop-blur-3xl -z-10 mask-b-from-0% mask-b-to-100%"></div>
      <nav className="flex flex-row gap-6 p-4 max-w-4xl mx-auto items-center">
        <ButtonAnimation>
          <Link href="/" className="flex flex-row gap-4 items-center">
            <Image alt="Redboard Logo" src="/icon.svg" width={100} height={150} />
          </Link>
        </ButtonAnimation>
        <div className="grow"></div>
        <ButtonAnimation>
          <JoinButton />
        </ButtonAnimation>
      </nav>
    </div>
  );
}
