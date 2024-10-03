import React from "react";

const FontSizeSlider = ({ fontSize, setFontSize }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Adjust Font Size</label>
      <input
        type="range"
        min="12"
        max="72"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        className="w-full"
      />
    </div>
  );
};

export default FontSizeSlider;
