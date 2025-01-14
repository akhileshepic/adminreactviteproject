import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useMyContext } from '../../../context/Mycontext'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { deleteApi, getSingle } from '../../../utils/api';
import { Navigate, useNavigate } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_BASE_FILE_URL;
const ViewSlider = () => {
    const context = useMyContext()
    const [data, setData] = useState(null);
    const fetchData = async () => {
        try {
            const response = await getSingle('slider', context.isOpenFullScreenPanel.id);

            if (response.success) {

                setData(response.data.data);
            } else {
                context.messageBox({ status: 'error', msg: response.message });

            }
        } catch (error) {
            console.error('Error fetching sliders:', error);
        }
    };
    useEffect(() => {

        fetchData();
    }, [context]);
    const removeHandleClick = (id) => {
        deletslide(id)
    }
    const deletslide = async (id) => {
        try {
            const response = await deleteApi(`slider/${id}`)
            if (response.success) {
                console.log(response)
                context.messageBox({ status: 'success', msg: response.data.message });
                context.setIsOpenFullScreenPanel({ open: false })
                Navigate('/homeslider/list');
            } else {
                context.messageBox({ status: 'error', msg: response.message });
            }
        } catch (error) {
            console.error('Error fetching sliders:', error);
        }
    }
    return (
        <div className='w-[50%]  mx-auto mt-[50px]'>
            <div className='uploadWrapper relative'>
                <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] z-50 flex items-center justify-center cursor-pointer'><IoMdClose className='text-white text-[17px]' onClick={() => removeHandleClick(context.isOpenFullScreenPanel.id)} /></span>
                <div className='uploadBox p-3 mb-2 rounded-md overflow-hidden border  border-dashed border-[rgba(0,0,0,0.3)]
                                     h-auto w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-50 flex items-center justify-center flex-col relative'>
                    <span ></span>
                    <LazyLoadImage
                        alt={'image'}
                        effect="blur"
                        wrapperProps={{
                            // If you need to, you can tweak the effect transition using the wrapper style.
                            style: { transitionDelay: "1s" },
                        }}
                        className='w-full h-full object-cover'

                        src={`${baseUrl}${data?.image}`} // use normal <img> attributes as props
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewSlider