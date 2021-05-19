import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import './header.css'
import Search from '../search';

const Header = () => {
    const navTxt = [
        {
            to: "/",
            name: "Home",
        },
        {
            to: "/category",
            name: "Category"
        },
        {
            to: "/country",
            name: "Country"
        },
        {
            to: "/foodlist",
            name: "Food List"
        },
    ]
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
                <div className="container-fluid" style={{ display: 'flex' }}>
                    <div style={{ flex: '1' }}>
                        <Link className="navbar-brand" to="/">What The Food</Link>
                    </div>
                    <div style={{ flex: '2' }}>
                        <Search />
                    </div>
                    <ul className="navbar-nav ml-auto mx-auto navigasi">
                        {
                            navTxt.map((txt, index) => (
                                <li className="nav-item ml-3" key={index}>
                                    <Link className="nav-link" to={txt.to}>{txt.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Header;