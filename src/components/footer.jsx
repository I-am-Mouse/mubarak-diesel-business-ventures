import { useState } from "react";
import gmail from "../assets/images/gmail.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import whatsapp1 from "../assets/images/whatsapp1.png";
import whatsapp2 from "../assets/images/whatsapp2.png";
import whatsapp3 from "../assets/images/whatsapp3.png";
import { Link } from "react-router-dom";

const Footer = () => {

    const [isWhatsapp, setIsWhatsapp] = useState("");

    const HandleWhatsapp = () => {
        setIsWhatsapp(!isWhatsapp)
    }

     return (
        <footer>
            <div className="flex">
                <div>
                    <a href="/">
                        <h1>Mubarak<strong>Diesel</strong> </h1>
                        <span>BUSINESS VENTRS. <span>RC:2647793</span></span>
                    </a>
                    <p>
                        Based in Ibadan, Nigeria.<br/>
                        Delivers across Nigeria.
                    </p>
                    <article>
                        <span onClick={HandleWhatsapp}>
                            {isWhatsapp && (
                                <article>
                                    <a href="https://wa.me/+2348052933192" target="_blank"><img src={whatsapp1} alt="whatsapp1" /></a>
                                    <a href="https://wa.me/+2348066103013" target="_blank"><img src={whatsapp2} alt="whatsapp2" /></a>
                                    <a href="https://wa.me/+2349157762657" target="_blank"><img src={whatsapp3} alt="whatsapp3" /></a>
                                </article> 
                            )}   
                            <img src={whatsapp} alt="whatsappLogo"/>
                        </span>
                        <a href="/" target="_blank"><img src={gmail} alt="gmailLogo" /></a>
                    </article>
                </div>   
                <article id="nav">
                        <nav>
                            <ul>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/services"}>Services</Link></li>
                                <li><Link to={"/why choose us"}>Why Choose Us</Link></li>
                                <li><Link to={"/contact us"}>Contact Us</Link></li>
                            </ul>
                        </nav>
                </article>
                <p id="last-p">Website Designed and Developed By <a href="/mousecodes.com.ng" target="_blank">MouseCodes</a></p>
            </div>
        </footer>
     )
}
export default Footer;