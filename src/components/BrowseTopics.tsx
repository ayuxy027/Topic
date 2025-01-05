'use client'

import { useState } from 'react'
import DesignCards from './topic-cards/DesignCards'
import MarketingCards from './topic-cards/MarketingCards'
import FinanceCards from './topic-cards/FinanceCards'
import MusicCards from './topic-cards/MusicCards'
import EducationCards from './topic-cards/EducationCards'

export default function BrowseTopics() {
  const [activeTab, setActiveTab] = useState('design')

  return (
    <>
      <div id="page2-head" className="h-[180px] w-full mt-[50px] text-center">
        <h1 id="browse-topics" className="text-[40px] mt-[100px] tracking-wide text-bold font-black">
          Browse Topics
        </h1>
      </div>
      <div id="topic-nav" className="h-[60px]">
        <nav className="flex justify-center list-none text-2xl font-light gap-[55px] leading-10 text-slate-700">
          <li onClick={() => setActiveTab('design')} className={`hover:cursor-pointer hover:underline hover:underline-offset-[15px] transition duration-50 hover:ease-in hover:delay-150 text-customBlue ${activeTab === 'design' ? 'underline underline-offset-[15px]' : ''}`}>
            Design
          </li>
          <li onClick={() => setActiveTab('marketing')} className={`hover:cursor-pointer hover:underline hover:underline-offset-[15px] transition duration-50 hover:ease-in hover:delay-150 text-customBlue ${activeTab === 'marketing' ? 'underline underline-offset-[15px]' : ''}`}>
            Marketing
          </li>
          <li onClick={() => setActiveTab('finance')} className={`hover:cursor-pointer hover:underline hover:underline-offset-[15px] transition duration-50 hover:ease-in hover:delay-150 text-customBlue ${activeTab === 'finance' ? 'underline underline-offset-[15px]' : ''}`}>
            Finance
          </li>
          <li onClick={() => setActiveTab('music')} className={`hover:cursor-pointer hover:underline hover:underline-offset-[15px] transition duration-50 hover:ease-in hover:delay-150 text-customBlue ${activeTab === 'music' ? 'underline underline-offset-[15px]' : ''}`}>
            Music
          </li>
          <li onClick={() => setActiveTab('education')} className={`hover:cursor-pointer hover:underline hover:underline-offset-[15px] transition duration-50 hover:ease-in hover:delay-150 text-customBlue ${activeTab === 'education' ? 'underline underline-offset-[15px]' : ''}`}>
            Education
          </li>
        </nav>
      </div>
      <hr className="bg-slate-400 h-[2px] blur-sm" />
      <div id="page2-cards" className="w-full min-h-screen py-12">
        {activeTab === 'design' && <DesignCards />}
        {activeTab === 'marketing' && <MarketingCards />}
        {activeTab === 'finance' && <FinanceCards />}
        {activeTab === 'music' && <MusicCards />}
        {activeTab === 'education' && <EducationCards />}
      </div>
    </>
  )
}