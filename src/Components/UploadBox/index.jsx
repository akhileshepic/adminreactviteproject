import React from 'react'
import { FaRegImages } from "react-icons/fa6";
const UploadBox = ({ multiple = true, onFilesChange }) => {

    const handleFileChange = (event) => {
        const files = event.target.files; // Extract files
        if (files.length > 0) {

            onFilesChange && onFilesChange(Array.from(files)); // Pass files to parent
        } else {
            console.log("No files selected.");
        }
    };
    return (
        <div className='uploadBox p-3 mb-2 rounded-md overflow-hidden border  border-dashed border-[rgba(0,0,0,0.3)]
         h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-50 flex items-center justify-center flex-col relative'>
            <FaRegImages className='text-[50px] opacity-35 pointer-events-none' />
            <h4 className='text-[15px] pointer-events-none'>Image Upload</h4>
            <input type="file" multiple={multiple} onChange={handleFileChange} className='absolute top-0 left-0 w-full h-full z-50 opacity-0' />

        </div>
    )
}

export default UploadBox