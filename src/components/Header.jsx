"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoIMG from "../../public/images/VCL-Pinturas.png";
import { Menu, X } from "lucide-react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerBg = menuOpen
    ? "bg-white/70 backdrop-blur-md"
    : "bg-gradient-to-t from-gray-600/5 to-white/40 backdrop-blur-sm";

  return (
    <header className={`p-4 fixed w-full z-50 flex justify-between items-center text-gray-700 transition-all duration-300 ${headerBg}`}>
      <div id="logo">
        <Link href="/">
          <Image
            className="w-20 md:w-32"
            src={LogoIMG}
            alt="logo"
            height={60}
            width={200}
            priority
          />
        </Link>
      </div>

      <button
        className="md:hidden text-stone-900 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto transition-transform duration-300 ${
          menuOpen ? "block" : "hidden"
        } md:flex ${menuOpen ? "bg-white/70" : "bg-transparent"}`}
      >
        <ul className="flex justify-around md:space-x-6 p-4 md:p-0 text-gray-800 max-w-sm mx-auto">
          <li>
            <Link href="/" className="block py-2 md:py-0 hover:text-black transition-colors duration-200">
              Início
            </Link>
          </li>
          <li>
            <Link href="/servicos" className="block py-2 md:py-0 hover:text-black transition-colors duration-200">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/contato" className="block py-2 md:py-0 hover:text-black transition-colors duration-200">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
