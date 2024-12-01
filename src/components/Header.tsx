import React from "react";

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-blue-600 text-white flex items-center justify-between px-4">
      <h1 className="text-lg font-bold">Trash Monitoring Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div>
          <strong>Distance:</strong> 37,548 km
        </div>
        <div>
          <strong>Driver Score:</strong> 4.69
        </div>
      </div>
    </header>
  );
};

export default Header;
