import Ripple from "@/components/magicui/ripple";
import Link from "next/link";
import { Button } from "../ui/button";

export default function RippleDemo() {
  return (
    <div className="relative flex h-[500px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Link href={"./lms/Vrlms"} className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Join in Web
      </Link>
      <Link  href="./lms/Vrlms"><Button> Join fast</Button></Link>
      <Ripple />
    </div>
  );
}
