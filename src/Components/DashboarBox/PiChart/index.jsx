import React, { PureComponent, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PiChart = () => {

    const [chartData1, setChartData1] = useState([
        {
            name: 'Jan',
            User: 4000,
            Sale: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            User: 3000,
            Sale: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            User: 2000,
            Sale: 9800,
            amt: 2290,
        },
        {
            name: 'May',
            User: 2780,
            Sale: 3908,
            amt: 2000,
        },
        {
            name: 'Jun',
            User: 1890,
            Sale: 4800,
            amt: 2181,
        },
        {
            name: 'July',
            User: 2390,
            Sale: 3800,
            amt: 2500,
        },
        {
            name: 'Aug',
            User: 3490,
            Sale: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            User: 3490,
            Sale: 4300,
            amt: 2100,
        },
        {
            name: 'Sep',
            User: 3490,
            Sale: 4000,
            amt: 2100,
        },
        {
            name: 'Oct',
            User: 5490,
            Sale: 4300,
            amt: 2100,
        },
        {
            name: 'Nov',
            User: 3490,
            Sale: 4300,
            amt: 2100,
        },
        {
            name: 'Dec',
            User: 3490,
            Sale: 7300,
            amt: 2100,
        },
    ]);
    return (
        <div className='chartSection w-full px-6  py-6 border rounded-md mt-6 bg-white'>
            <h1 className='mb-3 font-bold text-[20px]'>Sales Report</h1>
            <div className='flex items-center gap-2 mb-4'>
                <div className='flex gap-1 items-center'>
                    <span className='w-[8px] h-[8px] rounded-full bg-[#10b981]'></span><span className='text-[12px]'>User</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <span className='w-[8px] h-[8px] rounded-full bg-[#3872FC]'></span><span className='text-[12px]'>Sale</span>
                </div>
            </div>
            <div className='w-full h-[400px]' >
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={chartData1}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="none" />
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Sale" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="User" stroke="#82ca9d" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default PiChart