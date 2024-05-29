import { Link } from "react-router-dom";
import { useState } from "react";
import openMenuBar from "../assets/images/icon-menu.svg";
import closeMenuBar from "../assets/images/icon-close-menu.png";

const Header = () => {

    const [menuDisplay, setMenuDisplay] = useState(false);
        
    const openMenu = () => {
        setMenuDisplay(true);
    };
    const closeMenu = () => {
        setMenuDisplay(false);
    };

    return (
        <header>
            <div className="flex">
                <a href="#">
                    <h1>Mubarak<strong>Diesel</strong> </h1>
                    <span>BUSINESS VENTRS. <span>RC:2647793</span></span>
                </a>
                <article id="nav-bar">
                    <nav>
                        <ul className="flex">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={"/services"}>Services</Link></li>
                            <li><Link to={"/why choose us"}>Why Choose Us</Link></li>
                            <li><Link to={"/contact us"}>Contact Us</Link></li>
                        </ul>
                    </nav>
                </article>
                <img src={openMenuBar} id="openMenu" alt="openMenu" onClick={openMenu} />
                <div className={(menuDisplay) ? "open" : "close"} id="mobile-nav-bar">
                    <img src={closeMenuBar} id="closeMenu" alt="closeMenu" onClick={closeMenu} />
                    <article>
                        <nav>
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={"/services"}>Services</Link></li>
                                <li><Link to={"/why choose us"}>Why Choose Us</Link></li>
                                <li><Link to={"/contact us"}>Contact Us</Link></li>
                            </ul>
                        </nav>
                    </article>
                </div>
            </div>
            <marquee behavior="" direction="left">Get High Quality Diesel At Affordable Price</marquee>
        </header>
    )
}

export default Header;