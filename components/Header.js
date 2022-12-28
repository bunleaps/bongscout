import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsSearch, BsBell } from "react-icons/bs";

export default function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 py-5 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/static/images/Logo.png"
            width={151}
            height={28}
            alt="Logo"
          />
        </Link>
        <div className="w-[90px] text-white flex items-center justify-between">
          <Link href="/search">
            <BsSearch />
          </Link>
          <BsBell />
          <Link href="/profile">
            <Image
              className="rounded-full"
              src="/static/images/player_profile.jpg"
              width={35}
              height={35}
              alt="Player Profile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
