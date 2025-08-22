import { PiHandbagSimpleFill } from "react-icons/pi";
import { Button } from "../ui/button";
import Link from "next/link";


function Logo() {
  return (
    <Button size={'icon'} asChild>
      <Link href='/'>
        <PiHandbagSimpleFill className="w-6 h-6"/>
      </Link>
    </Button>
  )
}

export default Logo