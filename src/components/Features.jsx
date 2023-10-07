import React from "react";
import { featuresSection } from "../constants/index";

const Features = () => {
  return (
    <section className="bg-white py-12 px-5 lg:h-auto">
      <div className="container mx-auto my-10">
        <h2 className="text-darkblue text-3xl font-bold text-center mb-10">
          Nuestras Características
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {featuresSection.map((feature) => (
            <div
              key={feature.id}
              className="bg-darkblue p-6 rounded-lg shadow-md flex flex-col text-white"
            >
              <div className="flex items-center mb-4">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-10 h-10 mr-4"
                />
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              <ul className="list-disc pl-6">
                {feature.content.map((point, index) => (
                  <li key={index} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
