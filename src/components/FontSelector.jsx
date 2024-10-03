import React from 'react';

const FontSelector = ({ selectedFont, setSelectedFont }) => {
  const fonts = [
    { name: "Times New Roman", family: "Times New Roman, serif" },
    { name: "Baskervville", family: "'Baskervville', serif" },
    { name: "Cinzel Decorative", family: "'Cinzel Decorative', serif" },
    { name: "EB Garamond", family: "'EB Garamond', serif" },
    { name: "Great Vibes", family: "'Great Vibes', cursive" },
    { name: "Lora", family: "'Lora', serif" },
    { name: "Montserrat", family: "'Montserrat', sans-serif" },
    { name: "Playfair Display", family: "'Playfair Display', serif" },
    { name: "Raleway", family: "'Raleway', sans-serif" },
  ];

  return (
    <div className="mb-4 w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2">Select Font</label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3"
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
      >
        {fonts.map((font, index) => (
          <option key={index} value={font.family}>
            {font.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSelector;
