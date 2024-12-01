import React, { useEffect, useState } from 'react';

const GarbageCollectorsTable: React.FC = () => {
  const [collectors, setCollectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/garbagecollectors')
      .then((res) => res.json())
      .then((data) => setCollectors(data))
      .catch((err) => console.error(err));
  }, [collectors]);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-lg font-bold mb-4">Garbage Collectors</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Collector Name</th>
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Truck ID</th>
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Truck Number</th>
          </tr>
        </thead>
        <tbody>
          {collectors.map((collector, idx) => (
            <tr key={collector.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 text-gray-800">{collector.collector_name}</td>
              <td className="px-6 py-4 text-gray-800">{collector.truck_id}</td>
              <td className="px-6 py-4 text-gray-800">{collector.truck_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GarbageCollectorsTable;
