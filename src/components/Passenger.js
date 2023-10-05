import React from 'react'

const Passenger = ({ label, isActive, onClick }) => {
  return (
    <div
      className={`${
        isActive
          ? "bg-blue-400 border-2 px-2 py-2 rounded-full text-white font-semibold"
          : "border-2 px-2 py-2 rounded-full text-black font-semibold"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
export default Passenger