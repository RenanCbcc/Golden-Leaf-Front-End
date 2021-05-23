import React from 'react';
import '../../css/sidebar.css'

type Props = {
    sideBarOpen: boolean;
    toogleSideBar(): void;
};

const NavBar: React.FC<Props> = ({ sideBarOpen, toogleSideBar }) => {
    return (

        <div className="sidebar">
            <div className="sidebar-brand" onClick={() => { toogleSideBar() }}>
                <h2>
                    <i className="las la-leaf"></i>
                Palma de Ouro
                </h2>

            </div>
            <ul className="sidebar__menu">

                <li className="sidebar__menu__item">
                    <a href="#" className="sidebar__menu__link">
                        <i className="las la-chart-bar">
                            <span>DashBoard</span>
                        </i>
                    </a>
                </li>

                <li className="sidebar__menu__item">
                    <a href="#" className="sidebar__menu__link">
                        <i className="las la-shapes">
                            <span>Categorias</span>
                        </i>
                    </a>

                </li>

                <li className="sidebar__menu__item">
                    <a href="#" className="sidebar__menu__link">
                        <i className="las la-shopping-bag">
                            <span>Produtos</span>
                        </i>
                    </a>

                </li>

                <li className="sidebar__menu__item">
                    <a href="#" className="sidebar__menu__link" >
                        <i className="las la-user-friends">
                            <span>Clintes</span>
                        </i>
                    </a>

                </li>

                <li className="sidebar__menu__item">
                    <a href="#" className="sidebar__menu__link">
                        <i className="las la-shopping-cart">
                            <span>Pedidos</span>
                        </i>
                    </a>

                </li>

                <li className="sidebar__menu__item">
                    <a className="sidebar__menu__link" href="#">
                        <i className="las la-credit-card">
                            <span>Pagamentos</span>
                        </i>
                    </a>
                </li>

            </ul>
        </div>

    )
}

export default NavBar;