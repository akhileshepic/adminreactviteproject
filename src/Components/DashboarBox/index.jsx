import React from 'react'
import { FaGift } from "react-icons/fa6";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
const DashboarBox = () => {
    return (
        <>
            <div className='flex justify-between items-center gap-16 border rounded-md  py-10 px-6 w-[33%] bg-white'>
                <div className='left flex items-center gap-3'>
                    <FaGift className='text-[25px] text-[#3872fa]' />

                    <div className='centerPanel flex flex-col'>
                        <span className='text-[16px] text-[rgba(0,0,0,0.7)]'>New Order</span>
                        <span className="font-bold text-[20px]">1,390</span>
                    </div>
                </div>
                <div className='panelRight'>
                    <RiBarChartGroupedFill className='text-[60px] text-[#3872fa]' />
                </div>
            </div>
            <div className='flex justify-between items-center gap-16 border rounded-md  py-10 px-6 w-[33%]  bg-white'>
                <div className='left flex items-center gap-3'>
                    <AiOutlinePieChart className='text-[35px] -rotate-90 text-[#10B981]' />

                    <div className='centerPanel flex flex-col'>
                        <span className='text-[16px] text-[rgba(0,0,0,0.7)]'>Sales</span>
                        <span className="font-bold text-[20px]">$57,890</span>
                    </div>
                </div>
                <div className='panelRight'>
                    <RiBarChartGroupedFill className='text-[60px] text-[#10B981]' />
                </div>
            </div>
            <div className='flex justify-between items-center gap-16 border rounded-md  py-10 px-6 w-[33%] bg-white'>
                <div className='left flex items-center gap-3'>
                    <FaProductHunt className='text-[35px] text-[#7928CA]' />

                    <div className='centerPanel flex flex-col'>
                        <span className='text-[16px] text-[rgba(0,0,0,0.7)]'>Products</span>
                        <span className="font-bold text-[20px]">1,390</span>
                    </div>
                </div>
                <div className='panelRight'>
                    <RiBarChartGroupedFill className='text-[60px] text-[#7928CA]' />
                </div>
            </div>
        </>
    )
}

export default DashboarBox