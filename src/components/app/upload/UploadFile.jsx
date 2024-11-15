import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineCheckCircle } from 'react-icons/ai';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);
    uploadFiles(selectedFiles);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    uploadFiles(droppedFiles);
  };

  const uploadFiles = (filesToUpload) => {
    const newFiles = filesToUpload.map((file) => ({
      name: file.name,
      size: file.size,
      uploadedSize: 0,
      isCompleted: false,
    }));

    newFiles.forEach((file) => {
      const interval = setInterval(() => {
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.name === file.name
              ? {
                  ...f,
                  uploadedSize: Math.min(f.uploadedSize + file.size / 20, file.size),
                  isCompleted: f.uploadedSize + file.size / 20 >= file.size,
                }
              : f
          )
        );
        if (file.uploadedSize >= file.size) clearInterval(interval);
      }, 100);
    });

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="tw-p-6 tw-max-w-3xl tw-max-h-max tw-mx-auto tw-bg-[#f4f7fa] tw-rounded-lg tw-shadow-md">
      <h2 className="tw-text-lg tw-font-semibold tw-text-gray-700">Upload files</h2>
      <p className="tw-text-sm tw-text-gray-500">Select and upload the files of your choice</p>
      
      <div
        className="tw-border-dashed tw-border-2 tw-border-gray-300 tw-mt-4 tw-p-6 tw-text-center tw-cursor-pointer tw-rounded-lg"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={handleClick}
      >
        <FaCloudUploadAlt className="tw-text-4xl tw-text-gray-400 tw-mx-auto" />
        <p className="tw-text-gray-500">Choose a file or drag & drop it here</p>
        <p className="tw-text-xs tw-text-gray-400 tw-mt-2">JPEG, PNG, PDF, and MP4 formats, up to 50MB</p>
        <button
          className="tw-mt-3 tw-px-4 tw-py-2 tw-bg-blue-600 tw-text-white tw-rounded-md tw-hover:bg-blue-500"
          onClick={handleClick}
        >
          Browse File
        </button>
        <input ref={fileInputRef} type="file" className="tw-hidden" onChange={handleFiles} multiple />
      </div>
      
      <div className="tw-mt-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="tw-flex tw-items-center tw-justify-between tw-bg-white tw-p-2 tw-rounded-lg tw-shadow tw-my-2"
          >
            <div className="tw-flex tw-items-center">
              <span className="tw-mr-2 tw-text-red-600">PDF</span>
              <div>
                <p className="tw-font-medium tw-text-gray-700">{file.name}</p>
                <p className="tw-text-xs tw-text-gray-500">
                  {Math.round(file.uploadedSize / 1024)} KB of {Math.round(file.size / 1024)} KB
                </p>
              </div>
            </div>
            <div className="tw-flex tw-items-center">
              {!file.isCompleted ? (
                <progress
                  className="tw-w-24 tw-h-2 tw-mr-2 tw-rounded"
                  value={file.uploadedSize}
                  max={file.size}
                ></progress>
              ) : (
                <AiOutlineCheckCircle className="tw-text-green-500 tw-mr-2" />
              )}
              <span className="tw-text-xs">
                {file.isCompleted ? (
                  <span className="tw-text-green-600">Completed</span>
                ) : (
                  <span className="tw-text-blue-600">Uploading...</span>
                )}
              </span>
              <AiOutlineClose className="tw-ml-2 tw-cursor-pointer tw-text-gray-400 tw-hover:text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
