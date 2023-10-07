/*
import React from "react";
import { IoIosArrowForward } from "react-icons";

import FeaturesSection1 from "./FeaturesSection1";
import FeaturesSection2 from "./FeaturesSection2";
import FeaturesSection3 from "./FeaturesSection3";

const Feature = ({ title, description }) => (
  <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
    <h3 className="text-blue mb-4 text-xl font-semibold">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      title: "Diseño, Instalación y Mantenimiento de Redes",
      description:
        "Contamos con un equipo con amplia experiencia en el diseño, instalación y mantenimiento proactivo de redes para garantizar la disponibilidad y el rendimiento óptimo. Especialistas en plataformas como ARUBA, Mikrotik o CISCO. Incluimos redes extendidas, enlaces de media y larga distancia con soluciones inalámbricas y con fibras ópticas.",
    },
    {
      title: "Servicios de Seguridad Informática",
      description:
        "Proteja su negocio contra amenazas cibernéticas con nuestros servicios de seguridad informática. Implementamos soluciones de firewall, antivirus y detección de intrusiones para mantener sus datos seguros.",
    },
    {
      title: "Recuperación de Datos",
      description:
        "¿Pérdida de datos importantes? Ofrecemos servicios de recuperación de datos para recuperar información valiosa de discos duros dañados, unidades USB y otros dispositivos de almacenamiento.",
    },
    {
      title: "Soporte Técnico Integral",
      description:
        "Ofrecemos un servicio completo de soporte técnico para resolver problemas informáticos, desde problemas de hardware hasta software. Nuestro equipo de expertos está listo para mantener tu infraestructura tecnológica funcionando con altos índices de continuidad operacional.",
    },
    {
      title: "Virtualización y Cloud Computing",
      description:
        "Transforma su infraestructura de TI con la virtualización y procesamiento en la nube. Le ayudamos a migrar a soluciones en la nube para mejorar la escalabilidad y eficiencia de sus sistemas.",
    },
    {
      title: "Monitoreo y Control IoT",
      description:
        "Monitoreo y control de infinidad de variables de operación en su proceso de producción de bienes o servicios. La tecnología IoT a la altura de sus requerimientos. La captura, el transporte y el despliegue gráfico y la posibilidad de ajustar el valor de la variable a controlar, a su medida.",
    },
    {
      title: "Desarrollo de Software a Medida",
      description:
        "Creamos soluciones de software personalizadas para satisfacer las necesidades específicas de su negocio. Desde aplicaciones web hasta software empresarial, diseñamos soluciones que consolidan su eficiencia operativa.",
    },
    {
      title: "Gestión de Proyectos Tecnológicos",
      description:
        "¿Necesita llevar a cabo una implementación tecnológica compleja? Nuestro equipo de gestión de proyectos se encarga de planificar, ejecutar y supervisar proyectos de TI, asegurando que se entreguen a tiempo y dentro del presupuesto.",
    },
  ];

  return (
    <section className="container py-12 mx-auto">
      <div>
        <h2 className="mb-8 text-3xl font-bold text-center">
          Nuestros Servicios de IT
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {featuresData.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;*/

//v2
// src/components/Services.js
import React, { useState } from "react";
import { servicesSection } from "../constants/index";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ServicesV1V2V3 = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestros Servicios
        </h2>

        {servicesSection.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              {category.category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col"
                  onMouseEnter={() => setHoveredService(service.title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="text-lg font-bold mb-3 text-blue-600">
                    {service.title}
                  </h4>

                  {hoveredService === service.title && (
                    <p className="text-gray-600 mb-3">{service.description}</p>
                  )}

                  <button className="pl-6 text-sm btn gap-x-3 lg:h-16 lg:text-base mt-auto ml-auto w-auto">
                    Learn More{" "}
                    <IoIosArrowDroprightCircle className="text-xl lg:text-2xl" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
//v2
//v3..
export default ServicesV1V2V3;
