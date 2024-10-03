import React from "react";

const PositionSlider = ({ label, position, setPosition }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full"
      />
    </div>
  );
};

export default PositionSlider;
