import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
    const name = "Ecommerce Shop";
    return (
        <div>
            <HeroSection data={name} />
        </div>
    );
};

export default Home;
