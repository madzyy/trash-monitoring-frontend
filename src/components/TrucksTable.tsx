import React, { useEffect, useState } from 'react';

const TrucksTable: React.FC = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/trucks')
      .then((res) => res.json())
      .then((data) => setTrucks(data))
      .catch((err) => console.error(err));
  }, [trucks]);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-lg font-bold mb-4">Trucks</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Truck ID</th>
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Vehicle Number</th>
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Driver Name</th>
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Description</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck, idx) => (
            <tr key={truck.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 text-gray-800">{truck.id}</td>
              <td className="px-6 py-4 text-gray-800">{truck.vehicle_number}</td>
              <td className="px-6 py-4 text-gray-800">{truck.driver_name}</td>
              <td className="px-6 py-4 text-gray-800">{truck.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrucksTable;
