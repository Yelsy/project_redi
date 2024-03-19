import React from "react";

const Acuerdos = () => {
  return (
    <section id="acuerdosRedi" className="py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img className="w-full h-auto rounded-lg mb-4" src="acuerdos_imagen.png" alt="Acuerdos Imagen" />
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-4">Acuerdos Redi</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Acuerdo 1 */}
          <div className="flex flex-col items-center">
            <p className="text-gray-500 leading-[1.6rem] mb-6">
              <span className="font-bold text-primary mr-2">1.</span> Los seres humanos hemos sido creados con la misión de ser agentes de amor y servicio que sanan y enriquecen el mundo. Somos instrumentos al servicio del ser, la fuente divina, que es unidad, verdad, amor y dicha; existimos prosperando en distintos planetas del universo cuando trascendemos el ego.
            </p>
          </div>
          {/* Acuerdo 2 */}
          <div className="flex flex-col items-center">
            <p className="text-gray-500 leading-[1.6rem] mb-6">
              <span className="font-bold text-primary mr-2">2.</span> En el planeta tierra estamos atravesando un ciclo de cambios radicales. Dos intenciones se disputan el nuevo orden mundial. Por un lado, el amor, la libertad y la descentralización; por otro lado, el miedo, el control y la servidumbre al ego.
            </p>
          </div>
          {/* Acuerdo 3 */}
          <div className="flex flex-col items-center">
            <p className="text-gray-500 leading-[1.6rem] mb-6">
              <span className="font-bold text-primary mr-2">3.</span> Tecnologías médicas y alimentarias para perjudicar la salud humana, educación para la división cultural, inflación y manipulación económica para el empobrecimiento de las comunidades, sistemas financieros centralizados para la vigilancia y el chantaje, crisis y violencia para la apropiación de los activos financieros del planeta en manos del ego, y gobiernos totalitarios para amenazar los derechos naturales del ser humano y sus comunidades son estrategias de un bando.
            </p>
          </div>
          {/* Acuerdo 4 */}
          <div className="flex flex-col items-center">
            <p className="text-gray-500 leading-[1.6rem] mb-6">
              <span className="font-bold text-primary mr-2">4.</span> En el otro bando, humanos conscientes de todos los planetas elevan un llamado y se reúnen en la tierra para recodarle a los terrícolas quiénes son, cuál es su propósito y cómo ser el origen de la transmutación para vivir en conexión con la frecuencia del amor y así experimentar la vida en realidad dicha infinita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acuerdos;


