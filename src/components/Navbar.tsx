import Link from 'next/link'

export default function Navbar() {
  return (
    <div id="page1-nav" className="h-[80px] flex items-center bg-gradient-to-tr from-buttonColorHover to-customGreen gradient-15deg">
      <div id="logo" className="hover:cursor-pointer">
        <h1 className="text-4xl font-bold"><i className="ri-checkbox-multiple-blank-fill animate-pulse pr-[5px] ml-[55px]"></i>Topic</h1>
      </div>
      <nav className="font-monof tracking-wide ml-[70px] flex text-base font-[350] text-nowrap gap-[65px] uppercase text-white leading-7 list-none">
        <li className="hover:cursor-pointer transition duration-50 hover:ease-in hover:delay-150 hover:text-customBlue">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:cursor-pointer transition duration-50 hover:ease-in hover:delay-150 hover:text-customBlue">
          <Link href="/browse-topics">Browse Topics</Link>
        </li>
        <li className="hover:cursor-pointer transition duration-50 hover:ease-in hover:delay-150 hover:text-customBlue">
          <Link href="/how-it-works">How it works</Link>
        </li>
        <li className="hover:cursor-pointer transition duration-50 hover:ease-in hover:delay-150 hover:text-customBlue">
          <Link href="/faqs">FAQs</Link>
        </li>
        <li className="hover:cursor-pointer transition duration-50 hover:ease-in hover:delay-150 hover:text-customBlue">
          <Link href="/contact">Contact</Link>
        </li>
      </nav>
      <div id="user-logo" className="ml-auto mr-[55px] hover:cursor-pointer">
        <i className="fa-regular fa-user text-xl mb-[5px] bg-white rounded-full px-[10px] py-[10px] transition duration-50 hover:ease-in hover:delay-75 hover:scale-[1.5] hover:bg-customGreen hover:text-white "></i>
      </div>
    </div>
  )
}

