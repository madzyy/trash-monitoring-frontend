import React from "react";

const TrackingPanel: React.FC<{ bins: any[]; trucks: any[]; selectedItem: any }> = ({
  bins,
  trucks,
  selectedItem,
}) => {
  if (selectedItem) {
    // Show details of the selected item
    return (
      <div className="p-4 bg-gray-50 h-full">
        <h2 className="text-lg font-bold mb-4">Details</h2>
        {selectedItem.vehicleNumber ? (
          <div>
            <p>
              <strong>Truck:</strong> {selectedItem.vehicleNumber}
            </p>
            <p>
              <strong>Driver:</strong> {selectedItem.driverName}
            </p>
            <p>{selectedItem.description}</p>
          </div>
        ) : (
          <div>
            <p>
              <strong>Bin:</strong> {selectedItem.description}
            </p>
            <p>
              <strong>Level:</strong> {selectedItem.level}%
            </p>
          </div>
        )}
      </div>
    );
  }

  // Show all bins and trucks
  return (
    <div className="p-4 bg-gray-50 h-full">
      <h2 className="text-lg font-bold mb-4">All Items</h2>

      <div className="mb-4">
        <h3 className="font-semibold">Trucks</h3>
        {trucks.map((truck) => (
          <div key={truck.id} className="p-2 border rounded mb-2">
            <p>
              <strong>Truck:</strong> {truck.vehicleNumber}
            </p>
            <p>
              <strong>Driver:</strong> {truck.driverName}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold">Bins</h3>
        {bins.map((bin) => (
          <div key={bin.id} className="p-2 border rounded mb-2">
            <p>
              <strong>Bin:</strong> {bin.description}
            </p>
            <p>
              <strong>Level:</strong> {bin.level}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackingPanel;
