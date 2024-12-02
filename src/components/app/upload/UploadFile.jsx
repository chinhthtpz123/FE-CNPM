import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineCheckCircle, AiOutlineHistory } from 'react-icons/ai';
import Nav from '../../layout/Nav';

const apiUploadedFile = [
  { id: 1, name: 'file1.txt', size: 10, },
  { id: 2, name: 'file2.txt', size: 20, },
  { id: 3, name: 'file3.txt', size: 30, },
]

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(apiUploadedFile);
  const fileInputRef = useRef(null);

  const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);
    uploadFiles(selectedFiles);
    event.target.value = null;
    
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    uploadFiles(droppedFiles);
    event.dataTransfer.clearData();
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

  const handleDeleteFile = (file) => {
    setFiles(prev => prev.filter((f) => f.name !== file.name));
  }

  return (
    <>
    <Nav />
    <div className='tw-ml-[240px] tw-mt-[73px] tw-grid tw-grid-cols-4'>
      <div className='tw-max-h-min tw-mx-auto tw-rounded-2xl tw-shadow-md tw-bg-white tw-p-6 tw-mt-8'>
        <div className='tw-relative tw-line-after tw-flex'>
          <AiOutlineHistory className='tw-inline-block tw-text-2xl tw-text-customBlue tw-mr-2 tw-border-solid tw-border-2 tw-rounded-full tw-p-0.5'/>
          <h2 className='tw-z-0 tw-text-lg tw-inline-block tw-text-customBlue'>Uploaded files</h2>
        </div>
        
        <div className=''>
          {uploadedFile && uploadedFile.length > 0 && uploadedFile.map((file) => {
            return (
              <div key={file.id}>
                <p>{file.name}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* content */}
      <div className="tw-col-start-2 tw-col-end-5 tw-p-6 tw-min-w-[70%] tw-min-h-max tw-ml-2 tw-mr-[40%] tw-bg-white tw-rounded-3xl tw-shadow-md tw-mt-8 ">
        <div className='tw-flex'>
          <IoCloudUploadOutline className="tw-text-customBlue tw-text-5xl tw-z-0 tw-border-solid tw-border-2 tw-rounded-full tw-p-2 tw-mr-3 tw-flex-none "/>
          <div className='tw-flex-1 tw-w-auto'>
            <h2 className="tw-text-lg tw-text-customBlue">Upload files</h2>
            <p className="tw-text-sm tw-text-customPurple">Select and upload the files of your choice</p>
          </div>
          <AiOutlineClose className="tw-flex-initial tw-ml-2 tw-border tw-p-0.5 tw-cursor-pointer tw-text-blue-300 tw-border-blue-300 tw-rounded-full" />
        </div>

        <div className="tw-w-full tw-h-0.5 tw-bg-gray-300 tw-my-4"></div>

        <div
          className="tw-border-dashed tw-border-2 tw-border-gray-300 tw-mt-12 tw-p-6 tw-text-center tw-cursor-pointer tw-rounded-lg "
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <IoCloudUploadOutline className="tw-text-customBlue tw-text-4xl tw-mx-auto tw-mb-4"/>
          <div className=' tw-mt-4'>
            <p className="tw-text-customBlue">Choose a file or drag & drop it here</p>
            <p className="tw-text-xs tw-text-customPurple tw-mt-2">DOC, PDF, up to 5MB</p>
          </div>
          
          <button
            className="tw-mt-5 tw-px-4 tw-py-2 tw-bg-white tw-text-customBlue tw-rounded-md tw-border-solid tw-border"
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
              className="tw-flex tw-items-center tw-justify-between tw-bg-[#f1f2f3] tw-p-2 tw-rounded-lg tw-shadow tw-my-2"
            >
              <div className="tw-flex tw-items-center">
                <span className="tw-mr-2 tw-text-red-600">PDF</span>
                <div>
                  <p className="tw-font-medium tw-text-gray-700">{file.name}</p>
                  <p className="tw-text-xs tw-text-opacity-10 tw-text-gray-200">
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
                    <span className="tw-text-green-600 tw-block">Completed</span>
                  ) : (
                    <span className="tw-text-blue-600">Uploading...</span>
                  )}
                </span>
                {file.isCompleted ? (
                  <FaRegTrashCan 
                  onClick={() => handleDeleteFile(file)}
                  className='tw-text-xs tw-ml-2 tw-cursor-pointer tw-block tw-text-red-500'/>
                ) : (
                  <AiOutlineClose 
                  onClick={() => handleDeleteFile(file)}
                  className="tw-ml-2 tw-cursor-pointer tw-text-red-500 " /> 
                )}
              </div>
            </div>
          ))}
          <div className='tw-flex tw-items-center tw-justify-center'>
            <button className='tw-flex tw-mx-auto tw-text-customBlue tw-bg-white tw-border tw-rounded-md tw-border-solid tw-p-1'>
              <Link to='/upload/printer'>Confirm</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FileUpload;
