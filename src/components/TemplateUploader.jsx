import React from "react";

const TemplateUploader = ({ templates, setTemplates }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTemplates([...templates, reader.result]);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Upload Template</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
};

export default TemplateUploader;
