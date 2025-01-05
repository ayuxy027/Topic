export default function HeroSection() {
    return (
      <div id="hero-txt" className="pt-[10%] px-[25%]">
        <h1 className="text-[60px] text-center font-extrabold text-white">Discover. Learn. Enjoy</h1>
        <p className="text-center text-buttonColorHover font-extrabold text-[20px] leading-7">platform for creatives around the world </p>
        <div id="search-bar-div" className="flex items-center p-[14px] relative mt-8">
          <span id="icon-container" className="ml-[20px] absolute pointer-events-none">
            <i className="text-xl fa-solid fa-magnifying-glass"></i>
          </span>
          <input type="search" placeholder="Design, Code, Marketing, Finance ..." className="w-full h-[65px] rounded-full pr-[170px] pl-[50px] text-lg transition duration-75 ease-in bg-gray-200 hover:bg-white focus:bg-white outline-none border-none font" />
          <button type="button" className="bg-customGreen transition duration-150 hover:delay-50 hover:ease-in hover:bg-buttonColorHover rounded-full w-[150px] h-[50px] font-bold text-white text-[20px] absolute right-[20px]">
            Search
          </button>
        </div>
      </div>
    )
  }
  