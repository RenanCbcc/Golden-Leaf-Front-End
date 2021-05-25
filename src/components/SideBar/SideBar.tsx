import React from 'react';
import '../../css/sidebar.css'

type Props = {
    sideBarOpen: boolean;
    toogleSideBar(): void;
};

const NavBar: React.FC<Props> = ({ sideBarOpen, toogleSideBar }) => {
    return (

        <div className="sidebar">

            <div className="sidebar__header" onClick={() => { toogleSideBar() }}>
                <h2 className="brand">
                    <i className="las la-leaf"></i>
                    <span>Palma de Ouro</span>
                </h2>
                <i className="las la-bars"></i>
            </div>

            <div className="sidebar__menu">
                <ul>

                    <li className="sidebar__menu__item">
                        <a href="#" className="sidebar__menu__link">
                            <i className="las la-chart-bar" />
                            <span>DashBoard</span>
                        </a>
                    </li>

                    <li className="sidebar__menu__item">
                        <a href="#" className="sidebar__menu__link">
                            <i className="las la-shapes" />
                            <span>Categorias</span>
                        </a>

                    </li>

                    <li className="sidebar__menu__item">
                        <a href="#" className="sidebar__menu__link">
                            <i className="las la-shopping-bag" />
                            <span>Produtos</span>
                        </a>

                    </li>

                    <li className="sidebar__menu__item">
                        <a href="#" className="sidebar__menu__link" >
                            <i className="las la-user-friends" />
                            <span>Clintes</span>
                        </a>

                    </li>

                    <li className="sidebar__menu__item">
                        <a href="#" className="sidebar__menu__link">
                            <i className="las la-shopping-cart" />
                            <span>Pedidos</span>
                        </a>

                    </li>

                    <li className="sidebar__menu__item">
                        <a className="sidebar__menu__link" href="#">
                            <i className="las la-credit-card" />
                            <span>Pagamentos</span>
                        </a>
                    </li>

                </ul>
            </div>

        </div>

    )
}

export default NavBar;