import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import "../../css/dashboard.css"
import Routes from '../../pages/Routes';
import { BrowserRouter } from 'react-router-dom';

const DashBoard = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toogleSideBar = () => {
        setSideBarOpen(!sideBarOpen)
    }

    return (
        <div>
            <BrowserRouter>
                <SideBar sideBarOpen={sideBarOpen} toogleSideBar={toogleSideBar} />

                <div className={sideBarOpen ? 'main-content active' : 'main-content'}>
                    <NavBar sideBarOpen={sideBarOpen} toogleSideBar={toogleSideBar} />
                    <main>
                        <div className="dashboard-card">
                            <Routes />
                        </div>
                    </main>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default DashBoard;