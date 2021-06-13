import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/sidebar.css'

type Props = {
    sideBarOpen: boolean;
    toogleSideBar(): void;
};

const NavBar: React.FC<Props> = ({ sideBarOpen, toogleSideBar }) => {
    return (
        <div className={sideBarOpen ? 'sidebar inactive--sidebar' : 'sidebar'}>

            <div className={sideBarOpen ? 'sidebar__header header--inactive' : 'sidebar__header'}>
                <h2 className={sideBarOpen ? 'brand inactive--brand' : 'brand'} >
                    <i className="las la-leaf"></i>
                    <span>Palma de Ouro</span>
                </h2>
                <i className="las la-bars" onClick={() => { toogleSideBar() }} />
            </div>

            <div className="sidebar__menu">

                <ul>

                    <li className="sidebar__menu__item">
                        <Link to="/" className="sidebar__menu__link">
                            <i className="las la-chart-bar" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>DashBoard
                            </span>
                        </Link>
                    </li>

                    <li className="sidebar__menu__item">
                        <Link to="/categories" className="sidebar__menu__link">
                            <i className="las la-shapes" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Categorias
                            </span>
                        </Link>

                    </li>

                    <li className="sidebar__menu__item">
                        <Link to="/products" className="sidebar__menu__link">
                            <i className="las la-shopping-bag" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Produtos
                            </span>
                        </Link>

                    </li>

                    <li className="sidebar__menu__item">
                        <Link to="/clients" className="sidebar__menu__link" >
                            <i className="las la-user-friends" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Clintes
                            </span>
                        </Link>

                    </li>

                    <li className="sidebar__menu__item">
                        <Link to="/orders" className="sidebar__menu__link">
                            <i className="las la-shopping-cart" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Pedidos
                            </span>
                        </Link>

                    </li>

                    <li className="sidebar__menu__item">
                        <Link to="/payments" className="sidebar__menu__link" href="#">
                            <i className="las la-credit-card" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Pagamentos
                            </span>
                        </Link>
                    </li>

                </ul>

            </div>

        </div>

    )
}

export default NavBar;