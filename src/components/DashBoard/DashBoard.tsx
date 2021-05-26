import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import "../../css/dashboard.css"

const DashBoard = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const toogleSideBar = () => {
        setSideBarOpen(!sideBarOpen)
    }

    return (
        <div>
            <SideBar sideBarOpen={sideBarOpen} toogleSideBar={toogleSideBar} />

            <div className={sideBarOpen ? 'main-content active' : 'main-content'}>
                <NavBar sideBarOpen={sideBarOpen} toogleSideBar={toogleSideBar} />
                <main>

                    <h2>Resumo</h2>
                    <div className="dashboard-cards">
                        <div className="card-sigle">
                            <div className="card-body">
Teste
                            </div>
                        </div>

                    </div>
                </main>
            </div>

        </div>
    )
}

export default DashBoard;