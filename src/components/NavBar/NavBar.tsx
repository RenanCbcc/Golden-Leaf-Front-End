import React, { useState } from 'react';
import "../../css/navbar.css"

type Props = {
    sideBarOpen: boolean;
    toogleSideBar(): void;
};

const NavBar: React.FC<Props> = ({ sideBarOpen, toogleSideBar }) => {
    return (
        <header className="navbar">

            <div className="search-wrapper">
                <span className="las la-search"></span>
                <input type="search" placeholder="Buscar..."></input>
            </div>
            <div className="user-wrapper">
                <img src="" width="30px" height="30px"></img>
                <div>
                    <h4>Jonh Doe</h4>
                </div>
            </div>
        </header>

    )
}

export default NavBar;