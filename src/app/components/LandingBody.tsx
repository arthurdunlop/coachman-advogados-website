'use client'

import AboutUsSection from "./AboutUsSection"
import AtivitiesSection from "./ActivitiesSection"
import ContactSection from "./ContactSection"
import OurTeamSection from "./OurTeamSection"

export default function LandingBody() {
  return (
    <>
      <AboutUsSection/>

      <AtivitiesSection/>

      <OurTeamSection/>

      <div className="-mb-12">
        <ContactSection />
      </div>
    </>
  )
}
