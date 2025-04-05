'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Header() {

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="inline-block">
        <Image
          src="/coachman_advogados_logo.png"
          alt="Coachman Advogados"
          width={220}
          height={220}
          priority
        />
      </Link>

        {/* Desktop Nav */}
        <nav className={"hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700  ${poppins.className}"}>
          <Link href="#about_us_section" className="hover:underline underline-offset-4 hover:text-blue-900">Sobre</Link>
          <Link href="#activities_section" className="hover:underline underline-offset-4 hover:text-blue-900">Áreas de Atuação</Link>
          <Link href="#our_team_section" className="hover:underline underline-offset-4 hover:text-blue-900">Nossa Equipe</Link>
          <Link href="#contact_section" className="hover:underline underline-offset-4 hover:text-blue-900">Contato</Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-5 h-5 hover:text-blue-900 transition" />
          </Link>

          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="w-5 h-5 hover:text-blue-900 transition" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
