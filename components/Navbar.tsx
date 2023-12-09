import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-contatiner padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/traveltrek.png" alt="logo" width={80} height={40}/>
        </Link>

        <ul className="hideen h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} 
                className="regular-16 text-gray-50 flexCenter 
                cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>

            ))}
        </ul>

        <div className="lg:flexCenter hidden">
            <Link href="https://traveltrek-53a65.firebaseapp.com/">
                <Button 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </Link>
        </div>

        <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar