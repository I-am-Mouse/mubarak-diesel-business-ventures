import whatsapp1 from "../assets/images/whatsapp1.png";
import whatsapp2 from "../assets/images/whatsapp2.png";
import whatsapp3 from "../assets/images/whatsapp3.png";
import gmail from "../assets/images/gmail.svg";
import next from "../assets/images/icon-next.png";
import prev from "../assets/images/icon-previous.png";

import { useState } from "react";

const Contact = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    const images = [
        // require("../assets/images/diesel-roll-1.jpg"),
        // require("../assets/images/diesel-roll-2.jpg"),
        // require("../assets/images/diesel-roll-3.jpg"),
        require("../assets/images/IMG-20240528-WA0008.jpg"),
        require("../assets/images/IMG-20240528-WA0009.jpg"),
        require("../assets/images/IMG-20240528-WA0010.jpg")
        // require("../assets/images/diesel-roll-4.png"),
        // require("../assets/images/diesel-roll-5.jpg")
      ];

    return (
        <contact>
            <div className="flex">
                <a href="https://wa.me/+2348052933192">
                    <article>
                        <img src={whatsapp1} alt="whatsapp1" />
                    </article>
                </a>
                <a href="https://wa.me/+2348066103013">
                    <article>
                        <img src={whatsapp2} alt="whatsapp2" />
                    </article>
                </a>
                <a href="https://wa.me/+2349157762657">
                    <article>
                        <img src={whatsapp3} alt="whatsapp1" />
                    </article>
                </a>
                <a href="">
                    <article>
                        <img src={gmail} alt="gmail" />
                    </article>
                </a>
            </div>
            <div id="show-case">
                <h3>Visit us Today!</h3>
                <i class="fa-solid fa-circle-chevron-left"></i>
                <button onClick={previousImage}><img src={prev} alt="previous-button" id="next"/></button>
                <img src={images[currentImage]} alt="current image" id="scroll"/>
                <button onClick={nextImage}><img src={next} alt="next-button" id="prev"/></button>
            </div>
        </contact>
    )
}

export default Contact;