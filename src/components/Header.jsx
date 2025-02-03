"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoIMG from "../../public/images/1LOGOBRANCO-removebg-preview (1).png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerBg = "bg-gradient-to-r from-blue-800 to-gray-700"; 

  return (
    <header className={`p-4 fixed w-full z-50 flex justify-between items-center text-white transition-all duration-300 ${headerBg}`}>
      <div id="logo">
        <Link href="/">
          <Image
            className="w-16 md:w-24"
            src={LogoIMG}
            alt="logo"
            height={60}
            width={200}
            priority
          />
        </Link>
      </div>

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        className={`absolute md:static top-14 left-0 w-full md:w-auto transition-transform duration-300 ${
          menuOpen ? "block bg-gray-800" : "hidden"
        } md:flex`}
      >
        <ul className="flex justify-around md:space-x-6 p-4 md:p-0 text-white max-w-sm mx-auto">
          <li>
            <Link href="/" className="block py-2 md:py-0 hover:text-gray-300 transition-colors duration-200">
              Início
            </Link>
          </li>
          <li>
            <Link href="/servicos" className="block py-2 md:py-0 hover:text-gray-300 transition-colors duration-200">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/contato" className="block py-2 md:py-0 hover:text-gray-300 transition-colors duration-200">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
