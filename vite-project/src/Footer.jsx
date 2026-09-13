import React from 'react';
import logoText from './assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <div className='borderDiv'></div>
            <div className='footerContainer'>
                <div></div>
                <ul className='footerInfoList'>
                    <li>PRODUCT</li>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Project</li>
                </ul>
                <ul className='footerInfoList'>
                    <li>COMPANY</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
                <ul className='footerInfoList'>
                    <li>LEGAL</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div className='borderDiv'></div>
        </div>
    );
};

export default Footer;