import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    vehicleType: '',
    name: '',
    email: '',
    phone: '',
    make: '',
    model: '',
    year: '',
    mileage: '',
    engineSize: '',
    fuelType: '',
    transmissionType: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        alert('Mensaje enviado con éxito');
      }, (error) => {
        alert('Error al enviar el mensaje: ', error.text);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-sm font-bold">Tipo de Vehículo</label>
        <select
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccione el tipo de vehículo</option>
          <option value="auto">Auto</option>
          <option value="moto">Moto</option>
          <option value="camion">Camión</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Teléfono</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Marca</label>
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Modelo</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Año</label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Kilometraje</label>
        <input
          type="text"
          name="mileage"
          value={formData.mileage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Tamaño del Motor</label>
        <input
          type="text"
          name="engineSize"
          value={formData.engineSize}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Tipo de Combustible</label>
        <input
          type="text"
          name="fuelType"
          value={formData.fuelType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Tipo de Transmisión</label>
        <input
          type="text"
          name="transmissionType"
          value={formData.transmissionType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Información Adicional</label>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Enviar</button>
    </form>
  );
};

export default Form;