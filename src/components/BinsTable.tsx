import React, { useEffect, useState } from 'react';

const BinsTable: React.FC = () => {
  const [bins, setBins] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/bins')
      .then((res) => res.json())
      .then((data) => setBins(data))
      .catch((err) => console.error(err));
  }, [bins]);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-lg font-bold mb-4">Bins</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Bin ID</th>
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Latitude</th>
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Longitude</th>
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Level (%)</th>
            <th className="text-left px-6 py-3 font-semibold text-gray-600">Description</th>
          </tr>
        </thead>
        <tbody>
          {bins.map((bin, idx) => (
            <tr key={bin.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 text-gray-800">{bin.id}</td>
              <td className="px-6 py-4 text-gray-800">{bin.latitude}</td>
              <td className="px-6 py-4 text-gray-800">{bin.longitude}</td>
              <td className="px-6 py-4 text-gray-800">{bin.level}</td>
              <td className="px-6 py-4 text-gray-800">{bin.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BinsTable;
