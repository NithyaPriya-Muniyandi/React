import React from "react";
import './navbar.css';
import logo from '../../Images/logo.png';
import { BiMessageSquare } from "react-icons/bi";
import {Link} from 'react-scroll';
const Navbar = () => {
    return (
        <>
        <div>
             <nav className="navbar bg-secondary text-center">
                <img src={logo} alt="logo" className="logo"/>
                <div className="desktopMenu">
                    <Link activeClass="active text-warning" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem ">Home</Link>
                    <Link activeClass="active text-warning" to="about" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem ">About</Link>
                    <Link activeClass="active text-warning" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem ">Skills</Link>
                    <Link activeClass="active text-warning" to="certify" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem ">Certificate</Link>
                    <Link activeClass="active text-warning" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem px-4 py-2 bg-dark rounded-5"><BiMessageSquare/>&nbsp; Contact</Link>
                   
                    </div>  
            </nav> 
            </div> 
          
            </>
    )
}
export default Navbar;

