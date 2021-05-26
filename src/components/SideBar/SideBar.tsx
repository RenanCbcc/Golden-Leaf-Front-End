import React from 'react';
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
                        <a href="#" className="sidebar__menu__link">
                            <i className="las la-chart-bar" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>DashBoard
                            </span>
                        </a>
                    </li>

                    <li className="sidebar__menu__item">
                        <a href="#" className="sidebar__menu__link">
                            <i className="las la-shapes" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Categorias
                                </span>
                        </a>

                    </li>

                    <li className="sidebar__menu__item">
                        <a href="#" className="sidebar__menu__link">
                            <i className="las la-shopping-bag" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Produtos
                                </span>
                        </a>

                    </li>

                    <li className="sidebar__menu__item">
                        <a href="#" className="sidebar__menu__link" >
                            <i className="las la-user-friends" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Clintes
                            </span>
                        </a>

                    </li>

                    <li className="sidebar__menu__item">
                        <a href="#" className="sidebar__menu__link">
                            <i className="las la-shopping-cart" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Pedidos
                            </span>
                        </a>

                    </li>

                    <li className="sidebar__menu__item">
                        <a className="sidebar__menu__link" href="#">
                            <i className="las la-credit-card" />
                            <span className={sideBarOpen ? 'inactive--span' : ''}>
                                Pagamentos
                                </span>
                        </a>
                    </li>

                </ul>
            </div>

        </div>

    )
}

export default NavBar;