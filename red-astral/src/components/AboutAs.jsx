import React from "react";

const AboutAs = () => {
  return (
    <section id="aboutAs" className="py-12 lg:py-16">
      {/* Misión y Visión */}
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch mb-12 lg:mb-0">
        {/* Misión */}
        <div className="lg:w-1/2 lg:pr-8 flex flex-col items-center">
          <h2 className="text-3xl text-primary text-center lg:text-4xl font-bold mb-4">MISION</h2>
          <p className="text-gray-500 text-xl leading-[2.5rem]">
            servir como plataforma que optimiza y articula los favores encriptados
            e intercambios de bienes y servicios conscientes para quienes
            favorecen la expansión de uniones territoriales descentralizadas de
            economías deflacionarias
          </p>
          <img
            className="w-full h-auto rounded-lg mt-6"
            src="mision.png"
            alt="Misión Imagen"
          />
        </div>

        {/* Visión */}
        <div className="lg:w-1/2 lg:pl-8 flex flex-col items-center mt-6 lg:mt-0">
          <h2 className="text-3xl text-primary text-center lg:text-4xl font-bold mb-4">VISION</h2>
          <p className="text-gray-500 text-xl leading-[2.5rem]">
            servir como inspiración y apoyo constante para la comunidad humana
            universal que trasciende el ego y las sectas para vivir en amor, libertad
            y armonía en uniones territoriales descentralizadas de economías
            deflacionarias.          </p>
          <img
            className="w-full h-auto rounded-lg mt-6"
            src="vision.png"
            alt="Visión Imagen"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutAs;
