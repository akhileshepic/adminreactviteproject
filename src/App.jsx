import React, { createContext, useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Header from './Header'
import Sidebar from './Components/Sidebar'
import Product from './Pages/Product'


import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material'
import AddProduct from './Pages/Product/AddProduct'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import HomeSliderBaners from './Pages/HomeSliderBaners'
import AddHomeSlide from './Pages/HomeSliderBaners/AddHomeSlide'
import AddCategory from './Pages/Category/AddCategory'
import Category from './Pages/Category'
import User from './Pages/User'
import AddUser from './Pages/User/AddUser'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Mycontext = createContext(); // Create context
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSidebarOpenMenu, setIsSidebarOpenMenu] = useState(true);
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: ''
  })
  const value = {
    isSidebarOpenMenu,
    setIsSidebarOpenMenu,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
    setIsLogin,
    isLogin
  }
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element:
        <>
          <section className='main'>
            <Header />
            <div className='contentMain flex'>
              <div className={`sidebarWrapper  border  ${isSidebarOpenMenu === true ? 'w-[20%] z-50' : 'w-[0px] opacity-0 overflow-hidden '} transition-all duration-300`}>
                <Sidebar />
              </div>
              <div className={`rightSidePanel px-6 py-3 ${isSidebarOpenMenu === true ? 'w-[80%]' : 'w-[100%]'} transition-all duration-300`}>
                <Dashboard />
              </div>
            </div>
          </section>
        </>
    },
    {
      path: "/products",
      exact: true,
      element:
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper border ${isSidebarOpenMenu
                  ? 'w-[20%] z-50'
                  : 'w-[0px] opacity-0 overflow-hidden'
                  } transition-all duration-300`}
              >
                <Sidebar />
              </div>
              <div
                className={`rightSidePanel px-6 py-3 ${isSidebarOpenMenu ? 'w-[80%]' : 'w-[100%]'
                  } transition-all duration-300`}
              >
                <Product />
              </div>
            </div>
          </section>
        </>
    },
    {
      path: "/homeslider/list",
      exact: true,
      element:
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper border ${isSidebarOpenMenu
                  ? 'w-[20%] z-50'
                  : 'w-[0px] opacity-0 overflow-hidden'
                  } transition-all duration-300`}
              >
                <Sidebar />
              </div>
              <div
                className={`rightSidePanel px-6 py-3 ${isSidebarOpenMenu ? 'w-[80%]' : 'w-[100%]'
                  } transition-all duration-300`}
              >
                <HomeSliderBaners />
              </div>
            </div>
          </section>
        </>
    },
    {
      path: "/category/list",
      exact: true,
      element:
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper border ${isSidebarOpenMenu
                  ? 'w-[20%] z-50'
                  : 'w-[0px] opacity-0 overflow-hidden'
                  } transition-all duration-300`}
              >
                <Sidebar />
              </div>
              <div
                className={`rightSidePanel px-6 py-3 ${isSidebarOpenMenu ? 'w-[80%]' : 'w-[100%]'
                  } transition-all duration-300`}
              >
                <Category />
              </div>
            </div>
          </section>
        </>
    },
    {
      path: "/user/list",
      exact: true,
      element:
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper border ${isSidebarOpenMenu
                  ? 'w-[20%] z-50'
                  : 'w-[0px] opacity-0 overflow-hidden'
                  } transition-all duration-300`}
              >
                <Sidebar />
              </div>
              <div
                className={`rightSidePanel px-6 py-3 ${isSidebarOpenMenu ? 'w-[80%]' : 'w-[100%]'
                  } transition-all duration-300`}
              >
                <User />
              </div>
            </div>
          </section>
        </>
    },
    {
      path: "/login",
      exact: true,
      element:
        <>
          <Login />
        </>
    },
    {
      path: "/signup",
      exact: true,
      element:
        <>
          <SignUp />
        </>
    }
  ])
  return (
    <>
      <Mycontext.Provider value={value}>

        <RouterProvider router={router} />


        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() => setIsOpenFullScreenPanel({ open: false })}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setIsOpenFullScreenPanel({ open: false })}
                aria-label="close"
              >
                <IoClose />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {isOpenFullScreenPanel?.model}
              </Typography>

            </Toolbar>
          </AppBar>
          {isOpenFullScreenPanel?.model === 'Add Product' && <AddProduct />}
          {isOpenFullScreenPanel?.model === 'Add Slider' && <AddHomeSlide />}
          {isOpenFullScreenPanel?.model === 'Add Category' && <AddCategory />}
        </Dialog>
      </Mycontext.Provider >
    </>
  )
}

export default App
export { Mycontext };