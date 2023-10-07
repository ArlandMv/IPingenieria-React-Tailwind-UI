// src/components/Services.jsx
import React, { useState } from "react";
import { servicesSection } from "../constants/index";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [animationCounter, setAnimationCounter] = useState(0);

  const getAosDelay = () => setAnimationCounter((prev) => prev + 1) * 300;

  return (
    <section className="">
      <div className="container py-12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestros Servicios
        </h2>
        {servicesSection.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="container mb-12"
            onMouseEnter={() => setHoveredService(null)}
          >
            <h3
              data-aos="fade"
              data-aos-delay={300}
              className="text-xl font-bold text-white mb-4"
            >
              {category.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2  **lg:flex lg:flex-wrap lg:justify-center**  gap-8 mx-auto ">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  data-aos={`fade-${serviceIndex % 2 === 0 ? "right" : "left"}`}
                  data-aos-delay={300}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col relative"
                  onMouseEnter={() => setHoveredService(service.title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="text-lg font-bold mb-3 text-blue-600">
                    {service.title}
                  </h4>

                  {hoveredService === service.title && (
                    <p className="text-gray-600 mb-3">{service.description}</p>
                  )}

                  {hoveredService !== service.title && (
                    <button className="pl-6 text-sm btn gap-x-3 lg:h-16 lg:text-base mt-auto ml-auto w-auto hover:hidden">
                      Learn More{" "}
                      <IoIosArrowDroprightCircle className="text-xl lg:text-2xl " />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
