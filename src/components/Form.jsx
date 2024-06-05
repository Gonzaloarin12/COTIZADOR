import React, { useState } from 'react';

const Cotizador = () => {
  const [tipoVehiculo, setTipoVehiculo] = useState('auto');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');
  const [kilometros, setKilometros] = useState('');
  const [cotizacion, setCotizacion] = useState(null);

  const handleTipoVehiculoChange = (e) => {
    setTipoVehiculo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes hacer el cálculo de la cotización
    const cotizacionCalculada = calcularCotizacion();

    setCotizacion(cotizacionCalculada);
  };

  const calcularCotizacion = () => {
    // Lógica de cálculo de cotización aquí
    // Esto es solo un ejemplo básico
    let kilometrosCalculados = parseInt(kilometros);

    // Ejemplo simple: un 5 centavos por kilómetro
    const cotizacion = kilometrosCalculados * 0.05;
    return cotizacion.toFixed(2); // Redondeamos a dos decimales
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Cotizador de Vehículos</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoVehiculo">
            Tipo de Vehículo
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tipoVehiculo"
            value={tipoVehiculo}
            onChange={handleTipoVehiculoChange}
          >
            <option value="auto">Auto</option>
            <option value="camioneta">Camioneta</option>
            <option value="moto">Moto</option>
            <option value="camion">Camión</option>
            <option value="lancha">Lancha</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="marca">
            Marca
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="marca"
            type="text"
            placeholder="Ingrese la marca del vehículo"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modelo">
            Modelo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="modelo"
            type="text"
            placeholder="Ingrese el modelo Exacto del vehículo (Como figura en la Cedula)"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="anio">
            Año
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="anio"
            type="text"
            placeholder="Ingrese el año del vehículo"
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kilometros">
            Cantidad de Kilómetros
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kilometros"
            type="text"
            placeholder="Ingrese la cantidad de kilómetros recorridos"
            value={kilometros}
            onChange={(e) => setKilometros(e.target.value)}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            SOLICITAR COTIZACIÓN
          </button>
        </div>
      </form>

      {cotizacion !== null && (
        <div className="mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-bold mb-4">Cotización</h2>
          <p className="text-gray-700 text-sm">
            La cotización para el vehículo es: <strong>${cotizacion}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cotizador;