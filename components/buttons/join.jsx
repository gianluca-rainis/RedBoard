import { Button } from "../ui/button";
import Link from "next/link";

export default function JoinButton({ text="Dashboard", link="/dashboard", ...props }) {
  return (
    <Button {...props} asChild>
      <Link href={link}>
        {text}
      </Link>
    </Button>
  );
}
