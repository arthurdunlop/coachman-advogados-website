'use client'

import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#082B3D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-10">
        
        {/* Logo + Socials */}
        <div className="flex flex-col items-start gap-4">
          <div className="relative w-[200px] h-[60px] scale-400">
            <Image
              src="/coachman_advogados_white_logo.png"
              alt="Coachman Advogados Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-4 mt-2">
            <Link href="mailto:example@email.com" aria-label="Email">
              <FaEnvelope className="w-5 h-5 hover:text-gray-300" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5 hover:text-gray-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 hover:text-gray-300" />
            </Link>
            <Link href="https://wa.me/1234567890" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp className="w-5 h-5 hover:text-gray-300" />
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold">Rio de Janeiro</p>
          <p>Rua Barâo da Torre, 390</p>
          <p>Segundo andar,</p>
          <p>22411-000</p>
          <p>Rio de Janeiro - RJ</p>
          <p>+55 (21) 99927-6802</p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto px-4 mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-center font-[var(--font-playfair)] mb-4 md:mb-0">
          © {new Date().getFullYear()} Coachman Advogados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
