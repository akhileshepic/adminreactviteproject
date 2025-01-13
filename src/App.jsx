import React, { createContext, useEffect, useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
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
import AddUser from './Pages/User/AddUser' // Import the PrivateRoute component
import toast, { Toaster } from 'react-hot-toast';

import MainLayout from './Pages/MainLayout'
import { useMyContext } from './context/Mycontext'
import PrivateRoute from './PrivateRoute'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function App() {
  const notify = () => toast.success('Successfully created!');
  const context = useMyContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, // Parent route with layout
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          )
        },
        {
          path: "/products",
          element: (
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          )
        },
        {
          path: "/homeslider/list",
          element: (
            <PrivateRoute>
              <HomeSliderBaners />
            </PrivateRoute>)
        },
        // Add more nested routes here
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    }
  ]);

  return (
    <>

      <RouterProvider router={router} />

      <Dialog
        fullScreen
        open={context.isOpenFullScreenPanel.open}
        onClose={() => context.setIsOpenFullScreenPanel({ open: false })}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => context.setIsOpenFullScreenPanel({ open: false })}
              aria-label="close"
            >
              <IoClose />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {context.isOpenFullScreenPanel?.model}
            </Typography>

          </Toolbar>
        </AppBar>
        {context.isOpenFullScreenPanel?.model === 'Add Product' && <AddProduct />}
        {context.isOpenFullScreenPanel?.model === 'Add Slider' && <AddHomeSlide />}
        {context.isOpenFullScreenPanel?.model === 'Add Category' && <AddCategory />}
      </Dialog>

      <Toaster />

    </>
  )
}

export default App
