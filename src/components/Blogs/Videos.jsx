import React from 'react';

const videos = [
  {
    id: 1,
    title: '¡El Nuevo NISSAN QASHQAI 2025 llegó + SEGURA Mejor EQUIPADA.',
    description: 'El Nissan Qashqai 2025 ha llegado a Colombia.',
    videoUrl: 'https://www.youtube.com/watch?v=FTbbgNxjmjY&ab_channel=ComparaMotors',
    thumbnail: 'https://i.ytimg.com/vi/dqVGpmHbg_k/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'Llego el INFINITI QX80 2025: Nuevo diseño y tecnología avanzada, Precios y Versiones.',
    description: 'Hecha un vistazo.',
    videoUrl: 'https://www.youtube.com/watch?v=gegm9u9nAEQ&ab_channel=ComparaMotors',
    thumbnail: 'https://i.ytimg.com/vi/NMzD7nLQlDY/maxresdefault.jpg',
  }
];

const VideoGallery = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Videos Informativos</h1>
        <p className="text-gray-600">Conoce más sobre nuestra empresa y nuestros valores.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
          >
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              {/* Aumento del tamaño de la imagen */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-[400px] object-cover" // Aumento de altura y uso de un tamaño más grande
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{video.title}</h2>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
