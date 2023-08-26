import { NavLink } from "react-router-dom";
import "./HeroSection.scss";
const HeroSection = ({ data }) => {
    const Heading = data;

    return (
        <div className='herosection-container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to </p>
                    <h1> {Heading} </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias atque temporibus veniam doloribus libero ad
                        error omnis voluptates animi! Suscipit sapiente.
                    </p>
                    <NavLink to='/products'>
                        <button>shop now</button>
                    </NavLink>
                </div>
                {/* our homepage image  */}
                <div className='hero-section-image'>
                    <img
                        src='https://img.freepik.com/free-vector/shop-with-sign-we-are-open_23-2148547718.jpg?w=740&t=st=1692851679~exp=1692852279~hmac=64f1f1c203d09a1727f0d49002c596f2925ed0227c87e3e590c298e69406923f'
                        alt='hero-section'
                        className='img-style'
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
