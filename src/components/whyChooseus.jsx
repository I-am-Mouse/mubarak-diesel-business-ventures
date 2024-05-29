import Trust from "../assets/images/trust.png";
import legal from "../assets/images/legal.png";
import driver from "../assets/images/driver.png";
import swift from "../assets/images/swift.png";
import quality from "../assets/images/quality.png";
import transparency from "../assets/images/transparency.png";
import choose from "../assets/images/choose.png";

import bank1 from "../assets/images/bank-1.png";
import bank2 from "../assets/images/bank-2.png";
import bank3 from "../assets/images/bank-3.png";
import bank4 from "../assets/images/bank-4.webp";
import bank5 from "../assets/images/bank-5.webp";
import bank6 from "../assets/images/bank-6.png";
import bank7 from "../assets/images/bank-7.jpg";
import bank8 from "../assets/images/bank-8.webp";

const WhyChooseUs = () => {
    return(
        <choose>
            <div id="choose">
                <img src={choose} alt="why-choose-us-logo" />
                <h3>Why Choose Us</h3>
                <p>Over time, the persistent concern for clients has been the frequent failure of power plants and heavy machinery, often attributed to the use of substandard diesel (AGO).
                This issue is compounded by the prohibitive costs and additional charges associated with unfavorable supply agreements. In response to this challenge, a critical question
                emerged among businesses: "Who can they rely on for the supply of diesel, petroleum, and electrical products to eliminate these burdensome extra fees and avert future
                equipment failures and power outages?"<br/>
                    <strong>Mubarak Diesel Business ventures</strong> stands as a beacon of trust in this sector. We offer more than just a promise of high-quality fuel; we provide a comprehensive,
                seamless experience backed by a robust infrastructure designed to enhance your operational efficiency and reliability. With us, you can expect not only superior
                products but also a level of service that ensures your power generation needs are met with utmost professionalism and care.</p>
            </div>
            <div id="legal">
                <img src={legal} alt="legal-logo" />
                <h3>We hold the necessary legal credentials and permits to operate.</h3>
                <p>- Your financial security is of the utmost importance to us, and we are committed to upholding our lawful obligations to protect it.</p>
                <p>- Obtaining legal authorization to conduct our business was at the very top of our priority list, as we understand the importance of legal security to you.</p>
                <p>- We recognize that your brand is a unique and valuable asset, and we are committed to bonding with you and strengthening it through our partnership.</p>
                <p>- We understand that a global trademark like yours requires a serious partner in our areas of specialty for continuity and growth.</p>
            </div>
            <div className="flex choose-third-div">
                <div id="flex-mini">
                    <p>At <strong>Mubarak Diesel Business ventures</strong>, we're not just a fuel supplier; we're a partner in your success. Our high-quality diesel fuel and exceptional customer service are the
                    keys to unlocking your business's full potential.</p>
                </div>
                <div id="flex-mini-2">
                    <div>
                        <img src={swift} alt="delivery-logo" />
                        <h4>Swift Delivery</h4>
                        <p>Absolutely! We prioritize the value of time and understand its importance over money. That's why we ensure a reliable delivery service for all our products,
                        with a commitment to deliver on time, every time. Ensuring prompt and efficient service.
                        </p>
                    </div>
                    <div>
                        <img src={driver} alt="driver-logo" />
                        <h4>Experienced Drivers</h4>
                        <p>Our team of drivers embodies the perfect blend of professionalism, skill, and dedication. With a strong focus on safety, performance, and excellence,
                        they possess the ideal attitude, honed skills, and up-to-date knowledge to tackle any supply and haulage project with confidence and precision.
                        We take pride in our rigorous training programs, which empower our drivers to work independently and make informed decisions on the road.
                        Our expertise lies in meticulously analyzing every aspect of our drivers' performance, from their driving techniques to their in-depth product knowledge,
                        ensuring seamless execution and timely delivery of every project.
                        </p>
                    </div>
                    <div>
                        <img src={quality} alt="quality-logo" />
                        <h4>Quality</h4>
                        <p>We're not driven by the desire to simply make a sale or supply products. Instead, we're committed to partnering with clients who share our passion
                        for excellence – delivering the best products in the industry. If our values don't align, we're honest with ourselves and respectfully decline the opportunity.
                        Our focus is on building meaningful relationships that drive mutual success, not just chasing revenue.</p>
                    </div>
                    <div>
                        <img src={transparency} alt="transparency-logo" />
                        <h4>Transparency</h4>
                        <p>To establish a top-tier organization that provides unparalleled service to our clients, and fosters a secure and stable environment for our employees. 
                            _Our clients are the lifeblood of our business, and we must go above and beyond to meet their needs and exceed their expectations.
                            By providing exceptional service, we can create a strong and enduring relationship with our clients, built on a foundation
                            of trust and mutual respect.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div id="last-div">
                <img src={Trust} alt="trust_img" />
                <h3>We are Tested and Trusted.</h3>
            </div>
            <marquee behavior="" direction="left">
                <div className="company">
                    <div>
                        <img src={bank1} alt="bank-1" />
                        <img src={bank2} alt="bank-2" />
                        <img src={bank3} alt="bank-3" />
                        <img src={bank4} alt="bank-4" />
                        <img src={bank5} alt="bank-5" />
                        <img src={bank6} alt="bank-6" />
                        <img src={bank7} alt="bank-7" />
                        <img src={bank8} alt="bank-8" />
                    </div>
                </div>
            </marquee> */}
        </choose>
    )
}
export default WhyChooseUs;