import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

const DashBoard = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toogleSideBar = () => {
        setSideBarOpen(!sideBarOpen)
    }

    return (
        <div>
            <SideBar sideBarOpen={sideBarOpen} toogleSideBar={toogleSideBar} />
            <NavBar sideBarOpen={sideBarOpen} toogleSideBar={toogleSideBar} />            
            
        </div>
    )
}

export default DashBoard;