import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-28 pt-4 pb-16 lg:pt-0 lg:pb-24">


      {/* Left Content */}
      <div className="relative z-10 flex flex-col items-start max-w-xl lg:max-w-[540px] pt-4 lg:pt-0">
        {/* Tagline */}
        <p className="text-secondary font-poppins font-bold text-lg md:text-xl uppercase mb-4 lg:mb-6">
          Best Destinations around the world
        </p>

        {/* Main Heading */}
        <h1 className="font-volkhov font-bold text-[42px] md:text-[52px] lg:text-[68px] leading-[1.15] text-navy mb-6 lg:mb-8">
          Travel,{" "}
          <span className="relative inline-block">
            enjoy
            {/* Red/orange underline decoration under "enjoy" */}
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8C30 3 70 2 100 4C130 6 160 3 198 8"
                stroke="#DF6951"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          and live a new and full life
        </h1>

        {/* Description */}
        <p className="font-poppins! text-gray-text font-medium text-sm md:text-base leading-relaxed max-w-md mb-8 lg:mb-10">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Find out more button */}
          <button className="bg-primary hover:bg-primary/90 text-white font-google-sans font-medium text-base md:text-lg px-6 py-3.5 rounded-lg shadow-[0_20px_35px_rgba(241,165,1,0.15)] transition-all duration-300 hover:shadow-[0_20px_35px_rgba(241,165,1,0.3)] cursor-pointer">
            Find out more
          </button>

          {/* Play Demo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-[0_15px_30px_rgba(223,105,81,0.3)] group-hover:shadow-[0_15px_30px_rgba(223,105,81,0.5)] transition-all duration-300">
              <svg
                className="w-4 h-4 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="font-google-sans text-gray-text text-base font-medium md:text-lg group-hover:text-navy transition-colors duration-200">
              Play Demo
            </span>
          </div>
        </div>
      </div>

      {/* Right Content - Hero Image */}
      <div className="relative z-10 mt-12 lg:mt-0 flex-shrink-0">
        {/* Main traveler image */}
        <div className="relative w-[320px] h-[380px] md:w-[420px] z-50 md:h-[480px] lg:w-[690px] lg:h-[689px]">
          <Image
            src="/images/banner-img.png"
            alt="Traveler with backpack sitting on suitcase"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Flying plane - top left area */}
        <div className="absolute top-1 left-[-2rem] md:top-22 md:left-[5rem] w-[137px] h-[90px] z-20">
          {/* animate-[float_4s_ease-in-out_infinite] */}
          <Image
            src="/images/plane-with-banner.svg"
            alt="Airplane"
            fill
            className="object-contain"
          />
        </div>

        {/* Flying plane - top right area */}
        <div className="absolute top-36 -right-4 md:top-26 md:-right-3 w-[137px] h-[90px] -z-0">
          <Image
            src="/images/plane-with-banner.png"
            alt="Airplane"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
