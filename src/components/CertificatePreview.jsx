import React from "react";
import html2canvas from "html2canvas";

const CertificatePreview = ({ template, name, xPosition, yPosition, selectedFont, color, fontSize, certificateRef }) => {
  const handleDownload = async () => {
    const element = certificateRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = data;
    link.download = "certificate.png";
    link.click();
  };

  return (
    <div className="mt-6 flex flex-col items-center justify-center pb-4">
      <div
        ref={certificateRef}
        className="relative p-6 bg-white border rounded-lg shadow-lg max-w-lg text-center"
      >
        <img src={template} alt="Template" className="w-full h-auto" />
        <div
          className="absolute font-bold text-black leading-none"
          style={{
            fontFamily: selectedFont,
            color: color,
            left: `${xPosition}%`,
            top: `${yPosition}%`,
            fontSize: `${fontSize}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {name}
        </div>
      </div>

      <button
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleDownload}
      >
        Download Certificate
      </button>
    </div>
  );
};

export default CertificatePreview;
