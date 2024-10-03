import React, { useState, useRef } from "react";
import TemplateUploader from "./TemplateUploader";
import PositionSlider from "./PositionSlider";
import FontSizeSlider from "./FontSizeSlider";
import CertificatePreview from "./CertificatePreview";
import FontColor from "./FontColor";
import FontSelector from "./FontSelector";

const CertificateGenerator = () => {
  const [name, setName] = useState("");
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [xPosition, setXPosition] = useState(50);
  const [yPosition, setYPosition] = useState(50);
  const [fontSize, setFontSize] = useState(24);
  const [selectedFont, setSelectedFont] = useState("Times New Roman, serif");
  const [color, setColor] = useState();
  const certificateRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center pb-2 bg-gray-400">
      <div className="bg-white m-2 p-6 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Certificate Generator</h1>

        <TemplateUploader templates={templates} setTemplates={setTemplates} />

        {templates.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Template
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
            >
              <option value={null}>--Select Template--</option>
              {templates.map((template, index) => (
                <option key={index} value={template}>
                  Template {index + 1}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <PositionSlider
          label="Adjust Name Position (X-Axis)"
          position={xPosition}
          setPosition={setXPosition}
        />
        <PositionSlider
          label="Adjust Name Position (Y-Axis)"
          position={yPosition}
          setPosition={setYPosition}
        />

        <FontSizeSlider fontSize={fontSize} setFontSize={setFontSize} />

        <div className="flex flex-row gap-5">
          <FontColor color={color} setColor={setColor} />
          <FontSelector
            selectedFont={selectedFont}
            setSelectedFont={setSelectedFont}
          />
        </div>
      </div>

      {selectedTemplate && (
        <CertificatePreview
          template={selectedTemplate}
          name={name}
          color={color}
          xPosition={xPosition}
          yPosition={yPosition}
          fontSize={fontSize}
          selectedFont={selectedFont}
          certificateRef={certificateRef}
        />
      )}
    </div>
  );
};

export default CertificateGenerator;
