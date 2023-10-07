import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { heroSection, companyName } from "../constants/index";
const Hero = () => {
  const heroData = heroSection[0];
  return (
    <section className="lg:h-screen">
      <div className="container md:px-10  mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          {/* HERO text */}
          <div className="flex-1">
            <h1
              data-aos="fade-down"
              data-aos-delay="400"
              className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6 "
            >
              <span className="text-blue">{companyName}</span> {heroData.title}
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="600"
              className="max-w-[440px] leading-relaxed mb-8"
            >
              {heroData.tagline}
            </p>
            <div className="flex flex-row justify-end items-end">
              <button
                data-aos="fade-down"
                data-aos-delay="700"
                className="pl-6 text-sm btn gap-x-6 m-7 lg:h-16 lg:text-base"
              >
                {heroData.callToAction}
                <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
              </button>
            </div>
          </div>
          {/* HERO img */}
          <div className="flex-1">
            <img
              src={heroData.image}
              alt="IT services image"
              data-aos="fade"
              style={{ opacity: 0.6 }} // Set the desired opacity
              className="w-full rounded-[40px] rounded-lg py-5 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
