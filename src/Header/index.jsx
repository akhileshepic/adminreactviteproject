import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import IconButton from '@mui/material/IconButton';
import { IoNotifications } from "react-icons/io5";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Mycontext } from '../App';
import { Link } from 'react-router-dom';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
const Header = () => {

    const context = useContext(Mycontext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <header className={`w-full h-auto pr-7 py-2 shadow-md flex items-center justify-between bg-white ${context.isSidebarOpenMenu === true ? 'pl-72 ' : 'pl-7'} transition-all`}>
            <div className='part1'>
                <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]" onClick={() => context.setIsSidebarOpenMenu(!context.isSidebarOpenMenu)}>
                    <RiMenu2Fill className='text-[18px] text-[rgba(0,0,0,0.8)]' />
                </Button>
            </div>
            <div className='part2 w-[40%] flex items-center justify-end gap-5'>

                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                        <IoNotifications />
                    </StyledBadge>
                </IconButton>
                {
                    context.isLogin === true ?
                        <div className='relative'>
                            <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer relative' onClick={handleClick}>
                                <img src='https://ecme-react.themenate.net/img/avatars/thumb-1.jpg' className='w-full h-full object-cover' alt='profile' />

                            </div>

                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                slotProps={{
                                    paper: {
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <div className='flex items-center gap-3'>
                                        <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
                                            <img src='https://ecme-react.themenate.net/img/avatars/thumb-1.jpg' className='w-full h-full object-cover' alt='profile' />
                                        </div>
                                        <div className='info'>
                                            <h3 className='text-[14px] font-bold text-[rgba(0,0,0,0.9)]'>Angelina Gotelli</h3>
                                            <p className='text-[12px] text-[rgba(0,0,0,0.6)]'>admin-01@ecme.com</p>
                                        </div>
                                    </div>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <div className='flex items-center gap-3'>
                                        <FaRegUser className='text-[16px]' /><span>Profile</span>
                                    </div>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <div className='flex items-center gap-3'>
                                        <RiLogoutCircleRLine className='text-[16px]' /><span>Sign Out</span>
                                    </div>
                                </MenuItem>

                            </Menu>
                        </div>
                        :
                        <Link to="/login">
                            <Button className='!bg-blue-700 !text-white !rounded-full'>Sign In</Button>
                        </Link>
                }

            </div>
        </header>
    )
}

export default Header