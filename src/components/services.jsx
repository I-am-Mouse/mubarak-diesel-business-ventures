import service from "../assets/images/service.png";

const Services = () => {
    return (
        <service>
            <div id="big-service-div">
                <img src={service} alt="service-icon" />
                <h1 id="h1">Services</h1>
                <div id="service-div">
                    <div>
                        <h1>Residential Services</h1>
                        <p>This includes supplying Diesel fuel to homeowners for their heating needs, power generators,
                        and other equipment that requires Diesel fuel. We ensure that the fuel is of high quality
                        to prevent any damage to the equipment.</p> 
                    </div>
                    <div>
                        <h1>Commercial Services</h1>
                        <p>This involves supplying Diesel fuel to businesses and organizations such as construction companies,
                        transportation firms, and manufacturing plants. We ensure timely delivery and maintains a consistent supply of
                        fuel to keep your operations running smoothly.</p>
                    </div>
                    <div>
                        <h1>Governmental Services</h1>
                        <p>This includes supplying Diesel fuel to various government agencies and departments. 
                        This could be for your vehicles, power generators, or any other equipment that requires Diesel fuel.
                        We comply with any specific regulations and standards required by the government.</p>
                    </div>
                    <div>
                        <h1>Estate Properties Services</h1>
                        <p>This involves supplying Diesel fuel to large estate properties.
                        This could include supplying fuel for power generators, heating systems, or any other equipment that requires Diesel fuel.
                        We ensure a reliable and consistent supply of fuel due to the large scale of these properties.</p> 
                    </div> 
                </div>
            </div>
        </service>
    )
}

export default Services;