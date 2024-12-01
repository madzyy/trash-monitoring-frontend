import React, { useEffect, useState } from 'react';

const AddModal: React.FC<{ type: string; onClose: () => void; onSubmit: () => void }> = ({
  type,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({});
  const [trucks, setTrucks] = useState([]);

  // Fetch available trucks for the dropdown in the Garbage Collector modal
  useEffect(() => {
    if (type === 'GarbageCollector') {
      fetch('http://localhost:5000/api/trucks')
        .then((res) => res.json())
        .then((data) => setTrucks(data))
        .catch((err) => console.error(err));
    }
  }, [type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const endpoint = `http://localhost:5000/api/${type.toLowerCase()}s`;

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            console.error('Error response:', text);
            throw new Error(`HTTP Error: ${res.status}`);
          });
        }
        return res.json();
      })
      .then(() => {
        onSubmit();
        onClose();
      })
      .catch((err) => {
        console.error('Submission error:', err.message);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Add {type}</h2>

        {/* Add Truck Modal */}
        {type === 'Truck' && (
          <form className="space-y-4">
            <input
              type="text"
              name="vehicle_number"
              placeholder="Vehicle Number"
              className="border p-2 w-full rounded"
              onChange={handleChange}
            />
            <input
              type="text"
              name="driver_name"
              placeholder="Driver Name"
              className="border p-2 w-full rounded"
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="border p-2 w-full rounded"
              onChange={handleChange}
            />
            <input
              type="text"
              name="latitude"
              placeholder="Latitude"
              className="border p-2 w-full rounded"
              onChange={handleChange}
            />
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              className="border p-2 w-full rounded"
              onChange={handleChange}
            />
          </form>
        )}

        {/* Add Garbage Collector Modal */}
        {type === 'GarbageCollector' && (
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border p-2 w-full rounded"
              onChange={handleChange}
            />
            <select
              name="truck_id"
              className="border p-2 w-full rounded"
              onChange={handleChange}
            >
              <option value="">Select Truck</option>
              {trucks.map((truck) => (
                <option key={truck.id} value={truck.id}>
                  {truck.vehicle_number}
                </option>
              ))}
            </select>
          </form>
        )}

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
