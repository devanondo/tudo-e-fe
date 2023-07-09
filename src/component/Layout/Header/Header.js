import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../../product/Search';
import AccountMenu from './AccountMenu';
import './Header.scss';

function Header() {
    const [hide, setHide] = useState(true);
    const [sticky, setSticky] = useState('');
    const { isAuthenticated } = useSelector((state) => state.user);
    const { cartItems } = useSelector((state) => state.cart);

    useEffect(() => {
        window.addEventListener('scroll', stickyNavbar);

        return () => {
            window.removeEventListener('scroll', stickyNavbar);
        };
    }, []);

    const stickyNavbar = () => {
        if (window !== undefined) {
            let height = window.scrollY;
            height > 0 ? setSticky('sticky_nav') : setSticky('');
        }
    };

    return (
        <div className="nav">
            <div className={`${sticky} nav_container`}>
                <Container>
                    <div className={`navbar ${hide ? ' ' : 'extent'} `}>
                        <div className="navMenuBtn">
                            <div onClick={(e) => setHide(!hide)} className="menu">
                                <MenuOpenIcon className="icon" />
                            </div>
                        </div>
                        <div className="navLogo">
                            <Link className="logo" to="/">
                                TUDO <span>Store</span>
                            </Link>
                        </div>
                        <div className="navList">
                            <ul className={`items ${hide ? 'hide' : 'block'}`}>
                                <li>
                                    <Search />
                                </li>
                                <li>
                                    <Link to="/products">PRODUCT</Link>
                                </li>
                                <li>
                                    <Link to="/about">ABOUT US</Link>
                                </li>
                                <li>
                                    <Link to="/contact">CONTACT US</Link>
                                </li>
                                <li>{!isAuthenticated && <Link to="/login">LOGIN</Link>}</li>
                            </ul>
                            <ul className="profileUl">
                                <li className="cart">
                                    <Link to="/cart">
                                        {<ShoppingCartOutlinedIcon />}
                                        <span>{cartItems.length}</span>
                                    </Link>
                                </li>
                                <li>{<AccountMenu />}</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Header;
