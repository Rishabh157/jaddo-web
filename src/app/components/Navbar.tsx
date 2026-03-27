import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-16 lg:px-28 py-6 lg:py-8 relative z-20">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <Image
          src="/images/Logo.svg"
          alt="Jadoo Logo"
          width={104}
          height={31}
          className="object-contain"
          priority
        />
      </div>

      {/* Nav Links and Right Side - grouped together with consistent gap */}
      <div className="hidden lg:flex items-center gap-14 text-[#212832] font-google-sans text-[17px]">
        <ul className="flex items-center gap-10">
          <li>
            <a
              href="#"
              className="hover:text-primary font-medium transition-colors duration-200"
            >
              Desitnations
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary font-medium transition-colors duration-200"
            >
              Hotels
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary font-medium transition-colors duration-200"
            >
              Flights
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary font-medium transition-colors duration-200"
            >
              Bookings
            </a>
          </li>
        </ul>

        {/* Right Action Items */}
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="text-[#212832] font-medium hover:text-primary transition-colors duration-200"
          >
            Login
          </a>
          <a
            href="#"
            className="border border-[#212832] font-medium rounded-md px-6 py-2 text-[#212832] hover:bg-[#212832] hover:text-white transition-all duration-200"
          >
            Sign up
          </a>
          <div className="flex items-center gap-1 font-medium cursor-pointer">
            EN
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <button className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Open menu">
        <span className="w-6 h-0.5 bg-navy rounded-full"></span>
        <span className="w-6 h-0.5 bg-navy rounded-full"></span>
        <span className="w-6 h-0.5 bg-navy rounded-full"></span>
      </button>
    </nav>
  );
}
