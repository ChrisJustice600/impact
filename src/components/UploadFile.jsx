const FileUploader = ({ selectedFile, setSelectedFile }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="file-uploader flex flex-col items-center p-4 border border-dashed border-gray-300 rounded-md">
      <div
        className={`drop-zone flex justify-center items-center h-40 w-80 border border-dashed border-gray-400 rounded-md cursor-pointer hover:bg-gray-100 ${
          selectedFile ? "bg-gray-200" : ""
        }`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {selectedFile ? (
          <div className="file-preview flex items-center">
            <p className="text-gray-700 mr-2">{selectedFile.name}</p>
            <button
              onClick={() => setSelectedFile(null)}
              className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Remove
            </button>
          </div>
        ) : (
          <p className="text-gray-500">Glisser et deposer votre fichier</p>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
