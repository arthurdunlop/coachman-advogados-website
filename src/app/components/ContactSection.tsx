import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contact_section" className="w-full bg-[#F6F6F6] py-50 px-6">
      <div className="max-w-3xl mx-auto text-left">
        <h2 className="text-5xl font-[var(--font-playfair)] text-[#082B3D] mb-4">
          Contato
        </h2>
        <p className="text-gray-700 mb-6 font-[var(--font-playfair)] text-lg">
          Fale conosco através dos canais abaixo. Estamos prontos para te atender.
        </p>

        {/* Contact links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <a
            href="mailto:lucasdunlopfernandescoachman@gmail.com"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow hover:shadow-md transition border border-gray-200 text-[#082B3D]"
          >
            <FaEnvelope className="w-5 h-5 text-[#082B3D] flex-shrink-0" />
            lucasdunlopfernandescoachman@gmail.com
          </a>

          <a
            href="tel:+5521999276802"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow hover:shadow-md transition border border-gray-200 text-[#082B3D]"
          >
            <FaPhoneAlt className="w-5 h-5" />
            +55 (21) 9927 - 6802
          </a>

          <a
            href="https://wa.me/5521999276802"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow hover:shadow-md transition border border-gray-200 text-[#082B3D]"
          >
            <FaWhatsapp className="w-5 h-5 text-green-600" />
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-dunlop-fernandes-coachman-97200016a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg shadow hover:shadow-md transition border border-gray-200 text-[#082B3D]"
          >
            <FaLinkedin className="w-5 h-5 text-blue-700" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
