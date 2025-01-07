import { Button } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiLogIn } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const SignUp = () => {
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    const [loadingFacebook, setLoadingFacebook] = useState(false);
    const [isPassword, setIsPassword] = useState(false)
    function handleClickGoogle() {
        setLoadingGoogle(true);
    }
    function handleClickFacebook() {
        setLoadingFacebook(true);
    }
    return (
        <section className='bg-white w-full h-full '>
            <header className='w-full fixed top-0 left-0 px-2 py-3 flex items-center justify-between z-50'>
                <Link to="/">
                    <img src='https://ecme-react.themenate.net/img/logo/logo-light-full.png' alt='Logo' className='w-[200px]' />
                </Link>
                <div className="flex items-center gap-0">
                    <NavLink to="/login" activeClassName="isActive">
                        <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                            <FiLogIn className='text-[18px]' />Login</Button>
                    </NavLink>
                    <NavLink to="/signup" activeClassName="isActive">

                        <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                            <FaRegUser className='text-[15px]' />Sign Up</Button>
                    </NavLink>
                </div>
            </header>
            <img src='./pattern.webp' className='w-full fixed top-0 left-0 opacity-5' />

            <div className="loginBox card w-[45%] h-full mx-auto pt-20 relative z-50 ">
                <div className="text-center">
                    <img src="./icon.svg" className="m-auto" />
                    <h1 className='text-center text-[35px] font-[700] mt-5'>Welcome Back!<br />
                        sign in with your credentials.
                    </h1>


                    <div className='flex items-center justify-center w-full mt-5 gap-4'>

                        <LoadingButton
                            size="small"
                            onClick={handleClickGoogle}
                            endIcon={<FcGoogle />}
                            loading={loadingGoogle}
                            loadingPosition="end"
                            variant="outlined"
                            className='!bg-none !text[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]'
                        >
                            Signin With Google
                        </LoadingButton>
                        <LoadingButton
                            size="small"
                            onClick={handleClickFacebook}
                            endIcon={<BsFacebook />}
                            loading={loadingFacebook}
                            loadingPosition="end"
                            variant="outlined"
                            className='!bg-none !text[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)]'
                        >
                            Signin With Facebook
                        </LoadingButton>
                    </div>
                </div>

                <br />

                <div className='w-full flex items-center justify-center gap-3'>
                    <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.1)]'></span>
                    <span className='text-[14px] font-[500]'>Or, Sign in with your email</span>
                    <span className='flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.1)]'></span>
                </div>

                <form className='loginform mx-16'>
                    <div className='w-full mt-3'>
                        <div className='form-group mb-4 w-full'>
                            <h4 className='text-[14px] font-[500] mb-1'>Full Name</h4>
                            <input type="text" className='w-full h-[45px] focus:outline-none focus:border-[rgba(0,0,0,0.7)] border border-[rgba(0,0,0,0.1)] rounded-md px-3' />
                        </div>
                        <div className='form-group mb-4 w-full'>
                            <h4 className='text-[14px] font-[500] mb-1'>Email</h4>
                            <input type="email" className='w-full h-[45px] focus:outline-none focus:border-[rgba(0,0,0,0.7)] border border-[rgba(0,0,0,0.1)] rounded-md px-3' />
                        </div>
                        <div className='form-group mb-4 w-full'>
                            <h4 className='text-[14px] font-[500] mb-1'>Password</h4>
                            <div className='relative w-full'>
                                <input
                                    type={`${isPassword === false ? 'password' : 'text'}`}
                                    className='w-full h-[45px] focus:outline-none focus:border-[rgba(0,0,0,0.7)] border border-[rgba(0,0,0,0.1)] rounded-md px-3' />
                                <Button className='!absolute !min-w-[10px] !bg-transparent !text-[rgba(0,0,0,0.8)] !top-[10px] right-0' onClick={() => setIsPassword(!isPassword)}>
                                    {
                                        isPassword === true ?
                                            <IoEye className='text-[15px]' /> :
                                            <IoEyeOff className='text-[15px]' />
                                    }
                                </Button>
                            </div>
                        </div>
                        <br />
                        <Button className='!w-full !bg-[rgba(0,0,0,0.8)] !capitalize !text-white'>Sign Up</Button>
                    </div>
                </form>
                <br />
            </div>
        </section>
    )
}

export default SignUp