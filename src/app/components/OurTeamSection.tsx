'use client'

import { useEffect, useRef} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import TeamBox from './TeamBox'

const teamMembers = [
  {
    name: "Lucas Dunlop",
    role: "Sócio Fundador",
    city: "Rio de Janeiro",
    phone: "(21) 9927-6802",
    email: "lucasdunlopfernandescoachman@gmail.com",
    imageUrl: "/lucas_dunlop.jpg",
    linkedinUrl: "https://www.linkedin.com/in/lucas-dunlop-fernandes-coachman-97200016a/",
  },
  {
    name: "Matheus Varizo",
    role: "Estagiário",
    city: "Rio de Janeiro",
    phone: "(21) 99365-0975",
    email: "matheus_varizo@gmail.com",
    imageUrl: "/varizo_profile.jpg",
    linkedinUrl: "https://www.linkedin.com/in/matheus-do-nascimento-varizo-004801154/",
  }
]

export default function OurTeamSection() {
  
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    AOS.init({ once: false, duration: 700 })
  }, [])

  return (
    <section id="our_team_section" className="relative w-full py-24 px-6 bg-white overflow-hidden">
      <div ref={scrollRef} className="grid grid-cols-12 max-w-7xl mx-auto gap-4">
        {/* Spacer: 25% */}
        <div className="hidden lg:block col-span-3" />

        {/* Text: starts at 25% */}
        <div className="col-span-12 lg:col-start-1 lg:col-span-7 mb-16">
          <h2 className="text-5xl font-[var(--font-playfair)] text-[#082B3D] mb-4">
            Profissionais
          </h2>
          <p className="text-[#082B3D] font-[var(--font-playfair)] text-2xl">
            Com advogados especializados em suas áreas de atuação e dedicados a entender as necessidades de nossos clientes, criamos uma rede multidisciplinar. Estamos preparados para os desafios jurídicos do mundo atual.
          </p>
        </div>
      </div>

      {/* Team Scroll with arrows */}
      <div ref={scrollRef} className="relative max-w-7xl mx-auto">
        <div
          className="overflow-x-auto hide-scrollbar flex gap-6 snap-x snap-mandatory px-10 scroll-smooth justify-center"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[300px]"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TeamBox {...member} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
