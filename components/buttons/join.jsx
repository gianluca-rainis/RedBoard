import { Rocket } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function JoinButton({ text = "Dashboard", ...props }) {
  return (
    <Button {...props} asChild>
      <Link href="/">
        {text}
      </Link>
    </Button>
  );
}
