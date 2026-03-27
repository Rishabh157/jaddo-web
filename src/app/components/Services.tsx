import Image from "next/image";

const services = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: (
      <Image
        src="/images/service-1.svg"
        alt="Calculated Weather"
        width={92}
        height={78}
        className="mx-auto mb-6 object-contain"
      />
    ),
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: (
      <Image
        src="/images/service-2.png"
        alt="Best Flights"
        width={150}
        height={150}
        className="mx-auto mb-6 object-contain"
      />
    ),
    isActive: true,
  },
  {
    title: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    icon: (
      <Image
        src="/images/service-3.svg"
        alt="Local Events"
        width={67}
        height={75}
        className="mx-auto mb-6 object-contain"
      />
    ),
  },
  {
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers",
    icon: (
      <Image
        src="/images/service-4.svg"
        alt="Customization"
        width={77}
        height={66}
        className="mx-auto mb-6 object-contain"
      />
    ),
  },
];

export default function Services() {
  return (
    <section className="relative px-6 md:px-16 lg:px-28 pt-8 pb-24 bg-white overflow-hidden font-open-sans">
      {/* Background patterns (+) crosses in the top right */}
      <div className="absolute top-10 right-10 w-[139px] h-[150px] pointer-events-none opacity-60">
        <Image
          src="/images/plus-with-color.svg"
          alt=""
          width={139}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="text-center mb-16 relative z-10">
        <p className="font-open-sans text-[gray-text] font-semibold text-lg uppercase tracking-wider mb-4">
          Category
        </p>
        <h2 className="font-volkhov font-bold text-4xl lg:text-5xl text-foreground">
          We Offer Best Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {services.map((service, idx) => (
          <div key={idx} className="relative group">
            {/* Coral accent shape for active/focused card */}
            {service.isActive && (
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary rounded-tl-[30px] rounded-br-[15px] z-0 hidden lg:block" />
            )}

            <div className={`
              relative z-10 flex flex-col items-center text-center p-8 rounded-[36px] transition-all duration-300
              ${service.isActive
                ? 'bg-white shadow-[0_40px_60px_-15px_rgba(0,0,0,0.1)]'
                : 'hover:bg-white hover:shadow-[0_40px_60px_-15px_rgba(0,0,0,0.1)] cursor-pointer'
              }
            `}>
              {/* Icon Container */}
              <div className="relative mb-6">
                {service.icon}
              </div>

              <h3 className="font-bold font-google-sans text-lg text-[#1E1D4C] mb-4">
                {service.title}
              </h3>
              <p className="font-poppins text-gray-text text-base font-medium leading-relaxed max-w-[200px]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
