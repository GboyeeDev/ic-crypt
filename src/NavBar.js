import React, {useState} from 'react'
import './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {


    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='header'>
            <div className='container'>
                <h1>IC-<span className='primary'>CRYPTO</span></h1>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Table</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div>
                    <button className='nav-btn'>Wallet</button>
                    
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;