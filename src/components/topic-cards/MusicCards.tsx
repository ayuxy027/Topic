import Image from 'next/image'

export default function MusicCards() {
  return (
    <div className="flex justify-center gap-8">
      <div className="rounded-3xl bg-white w-[300px] h-[350px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Composing Song</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Image className="w-full h-[200px] object-contain mt-10" src="/undraw_Compose_music_re_wpiw.png" alt="Composing Song" width={200} height={200} />
      </div>
      <div className="rounded-3xl bg-white w-[300px] h-[350px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Online Music</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Image className="w-full h-[200px] object-contain mt-10" src="/undraw_happy_music_g6wc.png" alt="Online Music" width={200} height={200} />
      </div>
      <div className="rounded-3xl bg-white w-[300px] h-[350px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Podcast</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Image className="w-full h-[200px] object-contain mt-10" src="/undraw_Podcast_audience_re_4i5q.png" alt="Podcast" width={200} height={200} />
      </div>
    </div>
  )
}