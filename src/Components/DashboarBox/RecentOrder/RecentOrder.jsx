import { Button } from '@mui/material'
import React from 'react'

const RecentOrder = () => {
    return (
        <div className="TableItem w-full px-6  py-6 border rounded-md mt-6 bg-white">
            <h1 className='mb-3 font-bold text-[20px]'>Recent Order</h1>
            <table className="table-auto w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 text-left">Order ID</th>
                        <th className="border px-4 py-2 text-left">Customer</th>
                        <th className="border px-4 py-2 text-left">Items</th>
                        <th className="border px-4 py-2 text-left">Price</th>
                        <th className="border px-4 py-2 text-left">Date</th>
                        <th className="border px-4 py-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">0001</td>
                        <td className="border px-4 py-2">
                            <div className='flex items-center gap-3'>
                                <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
                                    <img src='https://ecme-react.themenate.net/img/avatars/thumb-1.jpg' className='w-full h-full object-cover' alt='profile' />
                                </div>
                                <div className='info'>
                                    <h3 className='text-[14px] font-bold text-[rgba(0,0,0,0.9)]'>Angelina Gotelli</h3>
                                    <p className='text-[12px] text-[rgba(0,0,0,0.6)]'>admin-01@ecme.com</p>
                                </div>
                            </div>
                        </td>
                        <td className="border px-4 py-2">5</td>
                        <td className="border px-4 py-2">$ 500.00</td>
                        <td className="border px-4 py-2">01/01/2025</td>
                        <td className="border px-4 py-2"><Button >Pending</Button></td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">0001</td>
                        <td className="border px-4 py-2">
                            <div className='flex items-center gap-3'>
                                <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
                                    <img src='https://ecme-react.themenate.net/img/avatars/thumb-1.jpg' className='w-full h-full object-cover' alt='profile' />
                                </div>
                                <div className='info'>
                                    <h3 className='text-[14px] font-bold text-[rgba(0,0,0,0.9)]'>Angelina Gotelli</h3>
                                    <p className='text-[12px] text-[rgba(0,0,0,0.6)]'>admin-01@ecme.com</p>
                                </div>
                            </div>
                        </td>
                        <td className="border px-4 py-2">5</td>
                        <td className="border px-4 py-2">$ 500.00</td>
                        <td className="border px-4 py-2">01/01/2025</td>
                        <td className="border px-4 py-2"><Button >Pending</Button></td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">0001</td>
                        <td className="border px-4 py-2">
                            <div className='flex items-center gap-3'>
                                <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
                                    <img src='https://ecme-react.themenate.net/img/avatars/thumb-1.jpg' className='w-full h-full object-cover' alt='profile' />
                                </div>
                                <div className='info'>
                                    <h3 className='text-[14px] font-bold text-[rgba(0,0,0,0.9)]'>Angelina Gotelli</h3>
                                    <p className='text-[12px] text-[rgba(0,0,0,0.6)]'>admin-01@ecme.com</p>
                                </div>
                            </div>
                        </td>
                        <td className="border px-4 py-2">5</td>
                        <td className="border px-4 py-2">$ 500.00</td>
                        <td className="border px-4 py-2">01/01/2025</td>
                        <td className="border px-4 py-2"><Button >Pending</Button></td>
                    </tr>

                </tbody>
            </table>
        </div>

    )
}

export default RecentOrder