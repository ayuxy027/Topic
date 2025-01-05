import Image from 'next/image'

export default function EducationCards() {
  return (
    <div className="flex justify-center gap-8">
      <div className="rounded-3xl bg-white w-[500px] h-[300px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Graduation</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <Image className="w-full h-[150px] object-contain mt-8" src="/undraw_Graduation_re_gthn.png" alt="Graduation" width={200} height={150} />
      </div>
      <div className="rounded-3xl bg-white w-[500px] h-[300px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Educator</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <Image className="w-full h-[150px] object-contain mt-8" src="/undraw_Educator_re_ju47.png" alt="Educator" width={200} height={150} />
      </div>
    </div>
  )
}

