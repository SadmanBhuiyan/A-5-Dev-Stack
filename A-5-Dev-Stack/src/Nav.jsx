import logoText from './assets/logo-text.png'

export default function Nav() {
    return (
        <div className="navContainer">
            <img src={logoText} alt="Logo" />
            <ul className="pageList">
                <li style={{ color: "#DB2777" }}>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='navBtnContainer'>
                <button>Sign in</button>
                <button style={{backgroundColor: "#DB2777", color: "#FFFFFF", borderRadius: "50px", padding: "5px 10px"}}>Sign up</button>
            </div>
        </div>
    )
}

