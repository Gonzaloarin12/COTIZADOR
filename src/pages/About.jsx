import React from 'react';

const About = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-2 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(/img-1.jpg)' }}></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        {/* Circular Image */}
        <div className="mb-4">
          <img
            src="/fotologo-lea.jpeg"  // Ruta relativa a la carpeta `public`
            alt="Leandro Guerrero"
            className="w-48 h-48 rounded-full object-cover border-4 border-white"
          />
        </div>
        <h1 className="text-5xl font-bold text-black animate-bounce">Quién Soy</h1>
        <p className="text-2xl text-black mt-4">
          Soy Leandro Guerrero, tengo 33 años y hace más de 10 años que estoy en el rubro de productor de seguros. Ofrezco atención personalizada y trabajo con muchas compañías, lo que me permite mejorar su cotización. No dude en escribirme para más información.
        </p>
      </div>
    </div>
  );
};

export default About; 