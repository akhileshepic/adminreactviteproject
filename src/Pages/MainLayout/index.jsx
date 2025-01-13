import { Outlet } from 'react-router-dom';


import Header from '../../Header';
import Sidebar from '../../Components/Sidebar';
import { useContext } from 'react';
import { Mycontext } from '../../context/Mycontext';


const MainLayout = () => {
    const context = useContext(Mycontext)
    return (
        <section className="main">
            <Header />
            <div className="contentMain flex">
                <div className={`sidebarWrapper border ${context.isSidebarOpenMenu ? 'w-[20%] z-50' : 'w-[0px] opacity-0 overflow-hidden'} transition-all duration-300`}>
                    <Sidebar />
                </div>
                <div className={`rightSidePanel px-6 py-3 ${context.isSidebarOpenMenu ? 'w-[80%]' : 'w-[100%]'} transition-all duration-300`}>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default MainLayout;
