import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MapComponent from "../components/MapComponent";
import TrackingPanel from "../components/TrackingPanel";
import TrucksTable from "../components/TrucksTable";
import GarbageCollectorsTable from "../components/GarbageCollectorsTable";
import BinsTable from "../components/BinsTable";
import AddModal from "../components/AddModal";

const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState("Dashboard");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal visibility
  const [modalType, setModalType] = useState(""); // Type of modal (Bin, Truck, GarbageCollector)

  const bins = [
    { id: 1, lat: -17.824, lng: 31.029, level: 80, description: "Bin near Market" },
    { id: 2, lat: -17.827, lng: 31.035, level: 60, description: "Bin at Bus Stop" },
  ];

  const trucks = [
    { id: 1, lat: -17.822, lng: 31.032, vehicleNumber: "H123", driverName: "Alex Williams", description: "Truck H123 with Alex" },
    { id: 2, lat: -17.826, lng: 31.033, vehicleNumber: "H124", driverName: "John Smith", description: "Truck H124 with John" },
  ];

  const garbageCollectors = [
    { id: 1, name: "Jane Doe", truckId: "H123", truck: "Truck H123" },
    { id: 2, name: "John Roe", truckId: "H124", truck: "Truck H124" },
  ];

  const handleMapItemClick = (item: any) => {
    setSelectedItem(item); // Set the clicked item for the tracking panel
  };

  const openModal = (type: string) => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <Sidebar setActiveView={setActiveView} />

      {/* Main Content */}
      <div className="ml-16">
        <div className="flex h-screen">
          {activeView === "Dashboard" && (
            <>
              <div className="w-96 bg-gray-50 border-r">
                <TrackingPanel
                  bins={bins}
                  trucks={trucks}
                  selectedItem={selectedItem}
                />
              </div>
              <div className="flex-grow">
                <MapComponent
                  bins={bins}
                  trucks={trucks}
                  onItemClick={handleMapItemClick}
                />
              </div>
            </>
          )}

          {activeView === "Trucks" && (
            <div className="flex-grow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Trucks</h2>
                <button
                  onClick={() => openModal("Truck")}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Truck
                </button>
              </div>
              <TrucksTable trucks={trucks} />
            </div>
          )}

          {activeView === "Bins" && (
            <div className="flex-grow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Bins</h2>
                <button
                  onClick={() => openModal("Bin")}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Bin
                </button>
              </div>
              <BinsTable bins={bins} />
            </div>
          )}

          {activeView === "GarbageCollectors" && (
            <div className="flex-grow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Garbage Collectors</h2>
                <button
                  onClick={() => openModal("GarbageCollector")}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Garbage Collector
                </button>
              </div>
              <GarbageCollectorsTable collectors={garbageCollectors} />
            </div>
          )}
        </div>
      </div>

      {/* Add Modal */}
      {showModal && (
        <AddModal
          type={modalType}
          onClose={() => setShowModal(false)}
          onSubmit={(data) => {
            console.log(`Added ${modalType}:`, data); // Replace with API call
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
