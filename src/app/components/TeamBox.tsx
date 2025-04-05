'use client'

import Image from 'next/image'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

type TeamBoxProps = {
  name: string
  role: string
  city: string
  phone: string
  email: string
  linkedinUrl: string
  imageUrl: string
}

export default function TeamBox({
  name,
  role,
  city,
  phone,
  email,
  imageUrl
}: TeamBoxProps) {
  return (
    <div className="relative w-[300px] h-[500px] overflow-hidden rounded-lg shadow-md group">
      {/* Background image */}
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover"
      />

      {/* Hidden content that slides up */}
      <div className="absolute bottom-[64px] left-0 w-full h-0 group-hover:h-[436px] bg-[#082B3D] text-white z-0 transition-all duration-500 ease-in-out overflow-hidden px-4 py-4">
        <div className="text-sm flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          
          <div className="font-semibold text-lg">{name}</div>
          <div className="text-sm mb-3">{role}</div>
          <div className="h-[1px] w-12 bg-white my-2" />

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span>{city}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="w-4 h-4" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2 break-words">
            <FaEnvelope className="w-4 h-4 flex-shrink-0" />
            <span className="break-all">{email}</span>
          </div>

          <button className="mt-4 bg-[#224ba5] text-white text-sm px-4 py-2 rounded hover:bg-white transition hover:text-[#082B3D]">
            Ver detalhes do profissional
          </button>
        </div>
      </div>

      {/* Always visible name + role bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#082B3D] text-white px-4 py-3 z-10">
        <p className="font-medium text-sm">{name}</p>
        <p className="font-medium text-sm">{role}</p>
      </div>
    </div>
  )
}
