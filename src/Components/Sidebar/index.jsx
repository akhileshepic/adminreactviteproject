import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiDashboardFill } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaProductHunt } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Collapse } from 'react-collapse';
import { Mycontext } from '../../App';
const Sidebar = () => {
    const context = useContext(Mycontext)
    const [subMenuIndex, setSubMenuIndex] = useState(null);
    const IsOpenSubMenu = (index) => {
        if (subMenuIndex === index) {
            setSubMenuIndex(null)
        } else {

            setSubMenuIndex(index)
        }
    }
    return (
        <div className={`fixed top-0 left-0 bg-white  h-full py-2 px-4 ${context.isSidebarOpenMenu === true ? 'w-[20%]' : 'w-[0px]'}`}>
            <div className='py-2 w-full'>
                <Link>
                    <img src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" alt='logo' className='w-[100px]' />
                </Link>
            </div>
            <ul className='mt-4'>
                <li>
                    <Link to="/">
                        <Button className='!w-full !capitalize !text-black !justify-start flex gap-3 !text-[16px] !font-[500] hover:text-black hover:bg-[rgba(0,0,0,0.1)] !py-2'><RiDashboardFill className='text-[18px]' /><span>Dashoboard</span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className='!w-full !capitalize !text-black !justify-start flex gap-3 !text-[16px] !font-[500] hover:text-black hover:bg-[rgba(0,0,0,0.1)] !py-2' onClick={() => IsOpenSubMenu(1)}>
                            <FaRegImage className='text-[18px]' /><span>Home Slides</span>
                            <span className='ml-auto flex items-center justify-center w-[30px] h-[30px]'><IoIosArrowDown className={`transition-all ${subMenuIndex === 1 ? 'rotate-180' : ''}`} /></span>
                        </Button>
                    </Link>
                    <Collapse isOpened={subMenuIndex === 1 ? true : false}>
                        <ul className='w-full'>
                            <li className='w-full'>
                                <Link to="/homeslider/list">
                                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !pl-9 flex gap-2'>
                                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]'></span>
                                        Home Banner List</Button>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link to="/">
                                    <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !pl-9 flex gap-2'>
                                        <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]'></span>
                                        Add Home Banner Slide</Button>
                                </Link>
                            </li>

                        </ul>
                    </Collapse>

                </li>
                <li>
                    <Link to="/user/list">
                        <Button className='!w-full !capitalize !text-black !justify-start flex gap-3 !text-[16px] !font-[500] hover:text-black hover:bg-[rgba(0,0,0,0.1)]'>
                            <FiUsers className='text-[18px]' />
                            <span>Users</span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className='!w-full !capitalize !text-black !justify-start flex gap-3 !text-[16px] !font-[500] hover:text-black hover:bg-[rgba(0,0,0,0.1)] !py-2' onClick={() => IsOpenSubMenu(2)}>
                            <FaProductHunt className='text-[18px]' /><span>Products</span>
                            <span className='ml-auto flex items-center justify-center w-[30px] h-[30px]'><IoIosArrowDown className={`transition-all ${subMenuIndex === 2 ? 'rotate-180' : ''}`} /></span>
                        </Button>
                        <Collapse isOpened={subMenuIndex === 2 ? true : false}>
                            <ul className='w-full'>
                                <li className='w-full'>
                                    <Link to="/products">
                                        <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !pl-9 flex gap-2'>
                                            <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]'></span>
                                            Product List</Button>
                                    </Link>
                                </li>
                                <li className='w-full'>
                                    <Link to="/">
                                        <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !pl-9 flex gap-2'>
                                            <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]'></span>
                                            Add Product</Button>
                                    </Link>
                                </li>

                            </ul>
                        </Collapse>

                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className='!w-full !capitalize !text-black !justify-start flex gap-3 !text-[16px] !font-[500] hover:text-black hover:bg-[rgba(0,0,0,0.1)] !py-2' onClick={() => IsOpenSubMenu(3)}><TbCategory className='text-[18px]' /><span>Category</span>
                            <span className='ml-auto flex items-center justify-center w-[30px] h-[30px]'><IoIosArrowDown className={`transition-all ${subMenuIndex === 3 ? 'rotate-180' : ''}`} /></span>
                        </Button>
                        <Collapse isOpened={subMenuIndex === 3 ? true : false}>
                            <ul className='w-full'>
                                <li className='w-full'>
                                    <Link to="/category/list">
                                        <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !pl-9 flex gap-2'>
                                            <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]'></span>
                                            Category List</Button>
                                    </Link>
                                </li>
                                <li className='w-full'>
                                    <Link to="/">
                                        <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !pl-9 flex gap-2'>
                                            <span className='block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.3)]'></span>
                                            Add Category</Button>
                                    </Link>
                                </li>

                            </ul>
                        </Collapse>

                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className='!w-full !capitalize !text-black !justify-start flex gap-3 !text-[16px] !font-[500] hover:text-black hover:bg-[rgba(0,0,0,0.1)] !py-2'><IoBagCheckOutline className='text-[18px]' /><span>Orders</span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className='!w-full !capitalize !text-black !justify-start flex gap-3 !text-[16px] !font-[500] hover:text-black hover:bg-[rgba(0,0,0,0.1)] !py-2'><IoMdLogOut className='text-[18px]' /><span>Logout</span></Button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar