import Image from 'next/image'

export default function DesignCards() {
  return (
    <div className="flex justify-center gap-8">
      <div className="rounded-3xl bg-white w-[300px] h-[350px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Web Design</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Image className="w-full h-[200px] object-contain mt-10" src="/undraw_Remote_design_team_re_urdx.png" alt="Web Design" width={200} height={200} />
      </div>
      <div className="rounded-3xl bg-white w-[300px] h-[350px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Graphic</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Image className="w-full h-[200px] object-contain mt-10" src="/undraw_Redesign_feedback_re_jvm0.png" alt="Graphic Design" width={200} height={200} />
      </div>
      <div className="rounded-3xl bg-white w-[300px] h-[350px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Logo Design</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Image className="w-full h-[200px] object-contain mt-10" src="/colleagues-working-cozy-office-medium-shot.png" alt="Logo Design" width={200} height={200} />
      </div>
    </div>
  )
}

