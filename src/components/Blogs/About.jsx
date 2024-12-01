import React from 'react';
import CompanyImage from '../../assets/blogs/1.png'; // Reemplaza con la imagen real de la empresa
import TeamImage from '../../assets/blogs/perso.jpg'; // Reemplaza con la imagen real del equipo

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12">
      <div className="container mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">Sobre Nosotros</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre nuestra misión, visión y el equipo que hace posible nuestra empresa. Estamos comprometidos con la innovación y la excelencia.
          </p>
        </div>

        {/* Sección de Misión y Visión */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {/* Imagen de la empresa */}
          <div className="flex justify-center">
            <img
              src={CompanyImage}
              alt="Imagen de la empresa"
              className="w-full sm:w-[450px] h-auto rounded-lg shadow-xl transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Descripción de la empresa */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Estamos comprometidos a ofrecer productos y servicios innovadores que mejoren la vida de nuestros clientes. Nuestra misión es ser líderes en el mercado, brindando soluciones efectivas y responsables en todos nuestros ámbitos de negocio.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nuestra Visión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos proyectamos como una empresa globalmente reconocida por nuestra calidad, innovación y responsabilidad social. Continuamos creciendo para hacer un impacto positivo en la vida de las personas y el medio ambiente.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Equipo */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestro Equipo</h2>
          <div className="flex justify-center mb-6">
            <img
              src={TeamImage}
              alt="Nuestro equipo"
              className="w-full sm:w-[600px] h-auto rounded-lg shadow-xl transform transition duration-300 hover:scale-105"
            />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestro equipo está formado por profesionales apasionados y comprometidos con la excelencia. Cada miembro aporta su experiencia y dedicación para asegurar el éxito de nuestros proyectos y la satisfacción de nuestros clientes.
          </p>
        </div>

        {/* Llamada a la acción */}
        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/comparamotors/?hl=es"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Contacta con Nosotros
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
