import React from 'react';
import logoText from './assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <div className='borderDiv'></div>
            <div className='footerContainer'>
                <div>
                    <div className='footerLeftContainer'>
                        <img style={{maxWidth: '150px'}} src={logoText} alt="Logo" />
                        <p>Curated tools, technologies, and resources for developers building <br />
                            modern software.</p>
                        <ul className='footerSocialsList' >
                            <li style={{color: "black"}}>Github</li>
                            <li style={{color: "black"}}>Twitter</li>
                            <li style={{color: "black"}}>Linkedin</li>
                        </ul>
                    </div>
                </div>
                <ul className='footerInfoList'>
                    <li style={{color: "black", fontWeight: '600'}}>PRODUCT</li>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Project</li>
                </ul>
                <ul className='footerInfoList'>
                    <li style={{color: "black", fontWeight: '600'}}>COMPANY</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
                <ul className='footerInfoList'>
                    <li style={{color: "black", fontWeight: '600'}}>LEGAL</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div className='borderDiv' style={{margin: '30px'}}></div>
            <div style={{display: 'flex', flexBasis: 'row', justifyContent: 'space-between', gap: '10px', marginBottom: '30px'}}>
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <ul style={{display: 'flex', flexBasis: 'row', gap: '10px'}}>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;