"use client";

import LogoOrange from "@/public/images/logo-orange.png";
import LogoBlack from "@/public/images/logo-black.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  const isProfiles = pathname == "/profiles";
  const isSignup = pathname == "/signup";
  const isHome = pathname == "/";

  return (
    <nav className="absolute top-[61px] flex justify-center w-full gap-[100px] items-center z-50">
      <Link href="/">
        <Image
          src={isProfiles ? LogoBlack : LogoOrange}
          width={70}
          height={49}
          alt="logo"
        />
      </Link>
      <div className="flex gap-[37px]">
        <a
          className={clsx(
            "font-bold text-sm uppercase",
            isProfiles ? "text-white" : ""
          )}
          href="/#how-it-works"
        >
          How It Works
        </a>
        <Link
          className={clsx(
            "font-bold text-sm uppercase",
            isProfiles ? "text-white" : isHome ? "text-[#FF734F]" : ""
          )}
          href="/"
        >
          About
        </Link>
        <Link
          className={clsx(
            "font-bold text-sm uppercase",
            isProfiles ? "text-[#FF734F]" : ""
          )}
          href="/profiles"
        >
          Work
        </Link>
        <p
          className={clsx(
            "font-bold text-sm uppercase",
            isProfiles ? "text-white" : ""
          )}
        >
          Pricing
        </p>
        <p
          className={clsx(
            "font-bold text-sm uppercase",
            isProfiles ? "text-white" : ""
          )}
        >
          Blog
        </p>
      </div>
      <Link href="/signup">
        <button
          className={clsx(
            "w-[162px] h-[45px] rounded-lg bg-[#F86642] text-white font-bold uppercase  hover:bg-orange-600",
            isSignup ? "invisible" : ""
          )}
        >
          Get Started
        </button>
      </Link>
    </nav>
  );
}
