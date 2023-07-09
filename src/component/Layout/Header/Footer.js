import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <div className="footerContainer">
            <Container>
                <footer className="footer">
                    <div className="left">
                        <h2 className="logo">
                            TUDO <span>Store</span>{' '}
                        </h2>
                        <p className="description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam rerum
                            eum magnam. Veritatis odio, quidem ea sint pariatur tenetur dolore?
                        </p>
                        <div className="icons">
                            <FacebookOutlinedIcon className="icon" />
                            <GoogleIcon className="icon" />
                            <TwitterIcon className="icon" />
                            <InstagramIcon className="icon" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="list">
                            <h5>My Account</h5>
                            <ul>
                                <li>
                                    <Link to="/">Mens</Link>
                                </li>
                                <li>
                                    <Link to="/">Womens</Link>
                                </li>
                                <li>
                                    <Link to="/">Clothing</Link>
                                </li>
                                <li>
                                    <Link to="/">Accessories</Link>
                                </li>
                                <li>
                                    <Link to="/">Featured</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="list">
                            <h5>Why Chose</h5>
                            <ul>
                                <li>
                                    <Link to="/">Shipping Return</Link>
                                </li>
                                <li>
                                    <Link to="/">Secure Shopping</Link>
                                </li>
                                <li>
                                    <Link to="/">Gallery</Link>
                                </li>
                                <li>
                                    <Link to="/">Affiliates</Link>
                                </li>
                                <li>
                                    <Link to="/">Contacts</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="list location">
                            <h5>Locations</h5>
                            <ul>
                                <li>
                                    <span>
                                        <LocationOnOutlinedIcon className="icon" />
                                    </span>
                                    <Link to="/">
                                        Multikart Demo Store, <br /> Demo Store India 345-659
                                    </Link>
                                </li>
                                <li>
                                    <span>
                                        <PhoneCallbackOutlinedIcon className="icon" />
                                    </span>
                                    <Link to="/">Call Us: 123-456-7898</Link>
                                </li>
                                <li>
                                    <span>
                                        <EmailOutlinedIcon className="icon" />
                                    </span>
                                    <Link to="/">Email Us: Support@Fiot.Com</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <p>@ 2022-25 All are reserved in TUDO</p>
            </Container>
        </div>
    );
}

export default Footer;
