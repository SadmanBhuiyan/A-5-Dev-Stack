import React from 'react';
import bannerPhoto from './assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='bannerContainer'>
            <div className='bannerTxtContainer'>
                <div className='bannerHeadingContainer'>
                    <h1 style={{color: "black"}}>Build Your Ideal</h1>
                    <h1 className='gradientText'>Development Stack</h1>
                </div>
                <p style={{fontSize: '20px'}}>Explore frontend, backend, database, and tooling options, <br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.</p>
                <div bannerBtnContainer>
                    <button className='bannerBtn gradientBtn'>Explore Technologies</button>
                    <button className='bannerBtn'>Learn More</button>
                </div>
            </div>
            <img src={bannerPhoto} alt="Banner Photo" />
        </div>
    );
};

export default Banner;