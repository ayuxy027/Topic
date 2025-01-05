import Image from 'next/image'

export default function FinanceCards() {
  return (
    <div className="flex justify-center gap-8">
      <div className="rounded-3xl bg-white w-[500px] h-[300px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Investment</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <Image className="w-full h-[150px] object-contain mt-8" src="/undraw_Finance_re_gnv2.png" alt="Investment" width={200} height={150} />
      </div>
      <div className="rounded-3xl bg-gradient-to-tr from-customBlue to-customGreen gradient-15deg w-[500px] h-[300px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer hover:shadow-[0_0_10px_#fff]">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-white">Financial Planning</h1>
          <p className="mt-2 leading-7 text-white">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <button
          id="card2-learn-more-button"
          type="button"
          className="mt-[50px] ml-[20px] bg-customGreen hover:bg-buttonColorHover rounded-full w-[135px] h-[40px] text-gray-200 text-lg transition duration-50 hover:ease-in hover:delay-150 font-semibold"
        >
          Learn More
        </button>
        <div className="flex absolute mt-[40px] mx-[5%]">
          <p className="text-white text-lg mt-[5px] font-medium mr-2">Share:</p>
          <button
            type="button"
            className="bg-customGreen hover:bg-buttonColorHover rounded-full w-[40px] h-[40px] text-gray-200 text-[20px] mx-2 transition duration-50 hover:ease-in hover:delay-150"
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            type="button"
            className="bg-customGreen hover:bg-buttonColorHover rounded-full w-[40px] h-[40px] text-gray-200 text-[20px] mx-2 transition duration-50 hover:ease-in hover:delay-150"
          >
            <i className="fab fa-facebook"></i>
          </button>
          <button
            type="button"
            className="bg-customGreen hover:bg-buttonColorHover rounded-full w-[40px] h-[40px] text-gray-200 text-[20px] mx-2 transition duration-50 hover:ease-in hover:delay-150"
          >
            <i className="fab fa-pinterest"></i>
          </button>
        </div>
      </div>
    </div>
  )
}