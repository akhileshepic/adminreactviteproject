import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { IoMdClose } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button } from '@mui/material';
import UploadBox from '../../../Components/UploadBox';
const AddHomeSlide = () => {
    return (
        <div className='p-5'>
            <form className='addProduct p-8 py-3 rounded-md shadow-md'>
                <div className='scroll max-h-[70vh]  pr-4'>
                    <div className='col w-full mt-5  p-4 '>
                        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-6 gap-4">
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

                                        src={'https://api.spicezgold.com/download/file_1734772189809_op-nord-ce-3-lite-128-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493666102-p608711337-1-202404091704.webp'} // use normal <img> attributes as props
                                    />
                                </div>
                            </div>
                            <UploadBox muliple={true} />
                        </div>
                    </div>
                </div>
                <br />
                <div className='w-[200px]'>

                    <Button type="button" className="!bg-blue-700 !text-white !w-full flex gap-4"><IoCloudUploadOutline className='text-[25px]' />Publish and View</Button>
                </div>

            </form>
        </div>
    )
}

export default AddHomeSlide