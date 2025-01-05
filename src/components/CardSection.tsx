import Image from 'next/image'

export default function CardSection() {
  return (
    <div id="cards" className="relative -top-[30%] h-[600px]">
      <div id="card1" className="absolute left-[15%] rounded-3xl overflow-hidden bg-white w-[25%] h-[66%] shadow-lg">
        <div className="absolute right-[10%] top-[10%]">
          <button id="card1-notification-button" type="button" className="bg-customBlue hover:bg-buttonColorHover rounded-md w-[25px] h-[25px] text-white text-[13px] transition duration-50 hover:ease-in hover:delay-150">
            14
          </button>
        </div>
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Web Design</h1>
          <p className="leading-7 text-gray-500">
            When you search for free CSS templates you will notice that TemplateMO is one of the best websites.
          </p>
        </div>
        <Image className="w-full h-[300px] object-contain" src="/undraw_Remote_design_team_re_urdx.png" alt="Web Design" width={300} height={300} />
      </div>
      <div id="card2" className="absolute left-[41%] w-[44%] h-[66%] flex rounded-3xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: "url('/businesswoman-using-tablet-analysis.jpg')"}}></div>
        <div className="absolute inset-0 opacity-80 bg-gradient-to-tr from-buttonColorHover to-customGreen gradient-15deg"></div>
        <div id="card2-notification-button" className="absolute right-[5%] top-[5%]">
          <button type="button" className="bg-customBlue hover:bg-buttonColorHover rounded-md w-[25px] h-[25px] text-white text-[13px] transition duration-50 hover:ease-in hover:delay-150">
            25
          </button>
        </div>
        <div className="absolute mt-[3%] mx-[5%] overflow-hidden">
          <h1 className="text-xl font-bold text-white">Finance</h1>
          <p className="leading-7 text-white">
            Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt your CMS requirements.
          </p>
          <button id="card2-learn-more-button" type="button" className="mt-5 bg-customGreen hover:bg-buttonColorHover rounded-full w-[135px] h-[40px] text-gray-200 text-lg transition duration-50 hover:ease-in hover:delay-150 font-semibold">
            Learn More
          </button>
        </div>
        <div className="flex absolute bottom-[5%] left-[5%]">
          <p className="text-white text-xl mt-[5px] font-medium mr-2">
            Share:
          </p>
          <button id="card2-twitter-button" type="button" className="bg-customGreen hover:bg-buttonColorHover rounded-full w-[40px] h-[40px] text-gray-200 text-[20px] mx-2 transition duration-50 hover:ease-in hover:delay-150">
            <i className="fab fa-twitter"></i>
          </button>
          <button id="card2-facebook-button" type="button" className="bg-customGreen hover:bg-buttonColorHover rounded-full w-[40px] h-[40px] text-gray-200 text-[20px] mx-2 transition duration-50 hover:ease-in hover:delay-150">
            <i className="fab fa-facebook"></i>
          </button>
          <button id="card2-pinterest-button" type="button" className="bg-customGreen hover:bg-buttonColorHover rounded-full w-[40px] h-[40px] text-gray-200 text-[20px] mx-2 transition duration-50 hover:ease-in hover:delay-150">
            <i className="fab fa-pinterest"></i>
          </button>
        </div>
        <div className="absolute bottom-[5%] right-[5%]">
          <button id="card2-save-button" type="button" className="bg-transparent hover:text-black rounded-full w-[40px] h-[40px] font-extrabold text-gray-200 text-[20px] transition duration-50 hover:ease-in hover:scale-[2] hover:animate-bounce">
            <i className="far fa-bookmark "></i>
          </button>
        </div>
      </div>
    </div>
  )
}