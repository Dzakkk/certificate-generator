import React from "react";

const FontColor = ({ color, setColor }) => {
    return (
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="colorPicker">
            Choose Font Color
          </label>
          <input
            type="color"
            id="colorPicker"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-5 px-3"
          />
        </div>
      );
}

export default FontColor;