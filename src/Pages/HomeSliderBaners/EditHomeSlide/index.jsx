import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { IoMdClose } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button } from '@mui/material';
import UploadBox from '../../../Components/UploadBox';
import { deleteApi, getAll, getSingle } from '../../../utils/api';
import { useMyContext } from '../../../context/Mycontext';
import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_FILE_URL;
const EditHomeSlide = () => {
    const context = useMyContext();
    console.log(context.isOpenFullScreenPanel?.id)

    const [homeSlider, setHomeSlider] = useState([]);
    const [files, setFiles] = useState([]);
    const [image, setImage] = useState(null);
    // Handle file data from UploadBox
    const handleFilesChange = (uploadedFiles) => {
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
    const fetchdata = async () => {
        try {
            const response = await getSingle('slider', context?.isOpenFullScreenPanel?.id);

            if (response.success) {

                setHomeSlider(response.data.data);
            } else {
                context.messageBox({ status: 'error', msg: response.message });
            }
            console.log(homeSlider)
        } catch (error) {
            console.error('Error fetching sliders:', error);
        }
    }


    useEffect(() => {
        fetchdata()
    }, [context?.isOpenFullScreenPanel?.id])
    const removeHandleClick = (id) => {
        deletslide(id)
    }
    const handleformSubmit = async (e) => {
        e.preventDefault();

        if (!files || files.length === 0) {
            console.error("No files selected.");
            context.messageBox({ status: 'error', msg: 'No files selected.' });
            return;
        }

        const formData = new FormData();

        // Append files to FormData
        files.forEach((file, index) => {
            formData.append(`image_${index}`, file);  // Append each file with a unique key
        });

        try {
            const response = await axios.put(`${baseUrl}api/slider/${context?.isOpenFullScreenPanel?.id}`, formData, {
                headers: {
                    'Accept': 'multipart/form-data',
                    'Authorization': `Bearer ${context.isAuth.accessToken}`, // Replace with your actual token
                }
            });
            if (response.status === 200) {
                context.messageBox({ status: 'success', msg: response.data.message });
                fetchdata();
                context.setIsOpenFullScreenPanel({ open: false })
            }
            console.log('Response:', response);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    }
    return (
        <div className='p-5'>
            <form className='addProduct p-8 py-3 rounded-md shadow-md' onSubmit={handleformSubmit} encType='multiple-part'>
                <div className='scroll max-h-[70vh]  pr-4'>
                    <div className='col w-full mt-5  p-4 '>
                        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-6 gap-4">

                            {image ? (
                                <div className='uploadWrapper relative'>
                                    <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] z-50 flex items-center justify-center cursor-pointer'><IoMdClose className='text-white text-[17px]' /></span>
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
                                : (
                                    <div className='uploadWrapper relative'>
                                        <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] z-50 flex items-center justify-center cursor-pointer'><IoMdClose className='text-white text-[17px]' /></span>
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

                                                src={`${baseUrl}${homeSlider.image}`} // use normal <img> attributes as props
                                            />
                                        </div>
                                    </div>
                                )}

                            < UploadBox multiple={false} onFilesChange={handleFilesChange} />
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

export default EditHomeSlide