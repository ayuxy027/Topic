import HeroSection from '@/components/HeroSection'
import CardSection from '@/components/CardSection'
import BrowseTopics from '@/components/BrowseTopics'

export default function Home() {
  return (
    <main>
      <div id="page1" className="min-h-screen w-screen">
        <div id="gradient-upper-div" className="h-[67vh] w-auto bg-gradient-to-tr from-buttonColorHover to-customGreen gradient-15deg">
          <HeroSection />
        </div>
        <div id="lower-div" className="h-[46vh] w-auto bg-customGreen rounded-b-[50px]">
          <CardSection />
        </div>
      </div>
      <div id="page2" className="min-h-screen w-screen">
        <BrowseTopics />
      </div>
    </main>
  )
}

