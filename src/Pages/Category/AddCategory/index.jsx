import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { IoMdClose } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button } from '@mui/material';
import UploadBox from '../../../Components/UploadBox';

import { getAll, getSingle } from '../../../utils/api';
import { useMyContext } from '../../../context/Mycontext';
import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_FILE_URL;
const AddCategory = () => {
    const context = useMyContext()
    const [data, setData] = useState('');
    const [category, setCategory] = useState('');
    const [files, setFiles] = useState([]);
    const [image, setImage] = useState(null);
    const handleFilesChange = (uploadedFiles) => {
        const newImages = [];
        setFiles(uploadedFiles);
        const file = uploadedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {

        setImage('');
    };
    const handleformSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        files.forEach((file, index) => {
            formData.append(`image`, file);  // Append each file with a unique key
        });

        formData.append('name', category);

        try {
            const response = await axios.post(`${baseUrl}api/category`, formData, {
                headers: {
                    'Accept': 'multipart/form-data',
                    'Authorization': `Bearer ${context.isAuth.accessToken}`, // Replace with your actual token
                }
            });
            if (response.status === 200) {
                context.messageBox({ status: 'success', msg: response.data.message });
                setFiles('');
                setCategory('')
                context.setIsOpenFullScreenPanel({ open: false })
            }
            console.log('Response:', response);
        } catch (error) {
            console.log('Response error:', error);
            context.messageBox({ status: 'error', msg: error.response.data.message });
        }
    }
    return (
        <div className='p-5'>
            <form className='addProduct p-8 py-3 rounded-md shadow-md' onSubmit={handleformSubmit} encType='multiple-part'>
                <div className='scroll max-h-[70vh]  pr-4'>
                    <div className='col w-[full] mt-5  p-4 '>
                        <div className='grid grid-cols-1 mb-3'>
                            <div className='col w-[25%]'>
                                <h3 className='text-[14px] font-[500] mb-1'>Category Name</h3>
                                <input type='text' className='w-[full] h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' value={category} onChange={(e) => setCategory(e.target.value)} />
                            </div>
                        </div>
                        <h3 className='text-[14px] font-[500] mb-1'>Image</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-6 gap-4">

                            {image ? (
                                <div className='uploadWrapper relative'>
                                    <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] z-50 flex items-center justify-center cursor-pointer'><IoMdClose className='text-white text-[17px]' onClick={handleRemoveImage} /></span>
                                    <div className='uploadBox p-3 mb-2 rounded-md overflow-hidden border  border-dashed border-[rgba(0,0,0,0.3)]
                                 h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-50 flex items-center justify-center flex-col relative'>
                                        <span ></span>
                                        <LazyLoadImage
                                            alt={'image'}
                                            effect="blur"
                                            wrapperProps={{
                                                // If you need to, you can tweak the effect transition using the wrapper style.
                                                style: { transitionDelay: "1s" },
                                            }}
                                            className='w-full h-full object-cover'

                                            src={image} // use normal <img> attributes as props
                                        />
                                    </div>
                                </div>
                            )
                                : ('')}



                            <UploadBox multiple={false} onFilesChange={handleFilesChange} />
                        </div>
                    </div>
                </div>
                <br />
                <div className='w-[200px]'>

                    <Button type="submit" className="!bg-blue-700 !text-white !w-full flex gap-4"><IoCloudUploadOutline className='text-[25px]' />Publish and View</Button>
                </div>

            </form>
        </div>
    )
}

export default AddCategory