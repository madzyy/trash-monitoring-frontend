import React from "react";

const AddBinModal: React.FC<{ onSubmit: (bin: unknown) => void; onClose: () => void }> = ({ onSubmit, onClose }) => {
    const [form, setForm] = React.useState({ lat: "", lng: "", level: "", description: "" });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      onSubmit(form);
      onClose();
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-96">
          <h2 className="text-lg font-bold mb-4">Add Bin</h2>
          <input
            type="text"
            name="lat"
            placeholder="Latitude"
            value={form.lat}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            name="lng"
            placeholder="Longitude"
            value={form.lng}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            name="level"
            placeholder="Level (%)"
            value={form.level}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="border p-2 w-full mb-4"
          />
          <div className="flex justify-end">
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Submit
            </button>
            <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

export default AddBinModal