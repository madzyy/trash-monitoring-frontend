import React, { useState } from "react";
import { MdDashboard, MdLocalShipping, MdDelete, MdPeople, MdExitToApp } from "react-icons/md";
import clsx from "clsx";
import { logout } from "../../services/authService";

const Sidebar: React.FC<{ setActiveView: (view: string) => void }> = ({ setActiveView }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { id: "Dashboard", icon: <MdDashboard size={24} />, label: "Dashboard" },
    { id: "GarbageCollectors", icon: <MdPeople size={24} />, label: "Garbage Collectors" },
    { id: "Trucks", icon: <MdLocalShipping size={24} />, label: "Trucks" },
    { id: "Bins", icon: <MdDelete size={24} />, label: "Bins" },
  ];

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const handleLogout = () => {
    logout();
    window.location.reload(); // Reload to redirect to login
  };

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 h-full bg-gray-200 shadow-lg z-50 transition-all duration-300",
        isExpanded ? "w-48" : "w-16"
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="m-2 p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        {isExpanded ? "←" : "→"}
      </button>

      {/* Menu Items */}
      <ul className="mt-8 space-y-6">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={clsx(
              "flex items-center px-4 py-2 cursor-pointer group transition-all",
              activeItem === item.id ? "text-blue-600" : "text-gray-600",
              "hover:text-gray-800"
            )}
            onClick={() => {
              setActiveItem(item.id);
              setActiveView(item.id); // Notify parent about active view
            }}
          >
            {/* Icon */}
            <div>{item.icon}</div>
            {/* Label */}
            <span
              className={clsx(
                "ml-4 text-sm transition-opacity",
                isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <div className="absolute bottom-4 w-full">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-gray-600 hover:text-blue-600 transition-all group"
        >
          {/* Icon: Always visible */}
          <MdExitToApp size={24} className="flex-shrink-0" />
          {/* Label: Visible only when sidebar is expanded */}
          <span
            className={clsx(
              "ml-4 text-sm transition-opacity duration-300",
              isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
