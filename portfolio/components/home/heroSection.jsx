import TypingText from "@/components/common/typingText";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 items-center">
      {/* Left column */}
      <div className="flex-1 flex flex-col justify-center">
        <div>
          <p className="text-6xl font-extrabold text-black">Hi! 👋</p>
          <h1 className="text-8xl font-extrabold text-black mt-4">
            I'm MANISH
          </h1>
        </div>

        {/* typing text animation */}
        <TypingText
          textList={[
            "Software Engineer",
            "Web Developer",
            "App Developer",
            "Prompt Engineer",
          ]}
          typingSpeedMs={90}
          deletingSpeedMs={60}
          delayAfterTypingMs={1200}
          loop={true}
          cursor={{ visible: true, character: "|", blinkSpeedMs: 500 }}
          containerClasses="mt-4 h-[40px]"
          textClasses="text-3xl font-semibold text-black"
          highlightWord={true}
          highlightClasses="text-black"
        />

        {/* Stats */}
        <div className="flex gap-12 mt-8">
          <div className="max-w-xs">
            <div className="text-3xl font-bold text-black">+250k</div>
            <p className="mt-2 text-sm text-gray-600 font-Poppins">
              Videos that reaching a wide audience and give lasting impression
            </p>
          </div>
          <div className="max-w-xs">
            <div className="text-3xl font-bold text-black">+800k</div>
            <p className="mt-2 text-sm text-gray-600">
              Hours watched, engaging storytelling that captivates viewers
            </p>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="relative flex-1 flex items-center justify-center">
        <div className="heroCard z-20 heroRipple relative h-[600px] w-[600px] overflow-hidden bg-[url('/heroImage.jpg')] bg-cover bg-center bg-no-repeat"></div>
        {/* <div className="heroCardGlowOne z-10 absolute heroRipple h-[610px] w-[610px] overflow-hidden bg-yellow-100"></div>
        <div className="heroCardGlowTwo absolute heroRipple h-[625px] w-[625px] overflow-hidden bg-yellow-50"></div> */}
        {/* hire me */}
        <div className="absolute top-0 left-52 w-[185px] h-[45px] bg-black rounded-3xl flex items-center justify-center">
          <h1 className="text-center text-3xl text-white font-medium">
            Hire Me
          </h1>
        </div>
        {/* youtube icon and url */}
        <div className="absolute w-[65px] h-[65px] right-0 top-0 rounded-full flex items-center justify-center bg-[url('/youtube.svg')] bg-cover bg-center bg-no-repeat overflow-hidden"></div>
        {/* circular icon div */}
        <div className="absolute bottom-0 left-0 flex flex-col gap-2.5">
          <div className="flex w-[65px] h-[65px] rounded-full bg-[url('/github.svg')] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"></div>
          <div className="flex w-[65px] h-[65px] rounded-full bg-[url('/instagram.svg')] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"></div>
          <div className="flex w-[65px] h-[65px] rounded-full bg-[url('/linkedin.svg')] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
}
