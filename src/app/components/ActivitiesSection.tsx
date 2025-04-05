import Image from "next/image";
import ActivityBox from "./ActivityBox";
import { FaGavel, FaBalanceScale } from "react-icons/fa"

export default function AtivitiesSection() {
  return (
    <section id="activities_section" className="relative w-full py-30 px-6 bg-white overflow-hidden">
      <div className="grid grid-cols-12 max-w-7xl mx-auto gap-4">
        
        {/* Left content */}
        <div className="col-span-12 lg:col-start-1 lg:col-span-7 mb-16 z-10">
          <h2 className="text-5xl font-[var(--font-playfair)] text-[#082B3D] mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-3xl font-[var(--font-playfair)] text-[#082B3D] mb-8 mt-8 py-6 rounded-md bg-white">
            Nós entendemos o seu negócio e trabalhamos juntos para resolver desafios jurídicos com soluções inovadoras e multidisciplinares
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ActivityBox name={"Criminalista"} icon={FaGavel} />
            <ActivityBox name={"Civil"} icon={FaBalanceScale}/>
          </div>
        </div>
      </div>

      {/* Right-side image occupying half the section */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/2 z-0">
        <Image
          src="/office.png"
          alt="Office"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}