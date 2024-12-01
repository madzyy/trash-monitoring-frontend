import React, { useState } from "react";
import MapComponent from "../components/MapComponent";
import BinsTable from "../components/BinsTable";

const BinsPage: React.FC = () => {
  const [, setSelectedItem] = useState(null);

  const bins = [
    { id: 1, lat: -17.824, lng: 31.029, level: 80, description: "Bin near Market" },
    { id: 2, lat: -17.827, lng: 31.035, level: 60, description: "Bin at Bus Stop" },
  ];

  const handleMapItemClick = (item: any) => {
    setSelectedItem(item); // Set the clicked item
  };

  return (
    <div className="flex h-screen">
      <div className="w-96 bg-gray-50 border-r">
        <BinsTable bins={bins} />
      </div>
      <div className="flex-grow">
        <MapComponent
          bins={bins}
          trucks={[]}
          onItemClick={handleMapItemClick}
        />
      </div>
    </div>
  );
};

export default BinsPage;
