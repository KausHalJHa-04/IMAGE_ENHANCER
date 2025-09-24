import React from "react";

const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
        props.UploadImageHandler(file);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={ShowImageHandler}
        />
        <span className="text-lg font-medium text-gray-600">
          Click and Drag to upload your image
        </span>
      </label>
      {/* Download button for enhanced image */}
      {props.enhancedImageUrl && (
        <div className="mt-4 text-center">
          <a
            href={props.enhancedImageUrl}
            download="enhanced-image.png"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Download Enhanced Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
