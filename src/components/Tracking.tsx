

const Tracking = () => {
  return (
    <div className="bg-white shadow-lg px-4 py-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Tracking</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Download
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="text-gray-600">Scheduled</p>
          <p className="text-sm text-gray-500">Install C1907-484217</p>
          <p className="text-xs text-yellow-600">25 mins late</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="text-gray-600">Now</p>
          <p className="text-sm text-gray-500">Truck HAR-123 driving</p>
          <p className="text-xs text-red-600">Harsh deceleration</p>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
