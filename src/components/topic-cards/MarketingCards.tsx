import Image from 'next/image'

export default function MarketingCards() {
  return (
    <div className="flex justify-center gap-8">
      <div className="rounded-3xl bg-white w-[300px] h-[350px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Advertising</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Image className="w-full h-[200px] object-contain mt-10" src="/undraw_online_ad_re_ol62.png" alt="Advertising" width={200} height={200} />
      </div>
      <div className="rounded-3xl bg-white w-[300px] h-[350px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Video Content</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Image className="w-full h-[200px] object-contain mt-10" src="/undraw_Group_video_re_btu7.png" alt="Video Content" width={200} height={200} />
      </div>
      <div className="rounded-3xl bg-white w-[300px] h-[350px] shadow-2xl transition duration-[0.2s] ease-in delay-[0.1s] hover:scale-[1.1] hover:cursor-pointer">
        <div className="mt-[5%] mx-[5%] pointer-events-none">
          <h1 className="text-xl font-bold text-black">Viral Tweet</h1>
          <p className="mt-2 leading-7 text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Image className="w-full h-[200px] object-contain mt-10" src="/undraw_viral_tweet_gndb.png" alt="Viral Tweet" width={200} height={200} />
      </div>
    </div>
  )
}