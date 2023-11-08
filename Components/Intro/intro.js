import React from "react";
import { Link } from "react-scroll";
import './intro.css'
import profile from './../../Images/Nithya photo.png'
import { BsBagFill } from "react-icons/bs";
const Intro = () => {
    return (
    <>
           <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className=  "introText">I'm <span className="text-warning">Nithya Priya M</span><br/>Web Developer</span>
                <p className="introPara">I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites.</p>
                <Link><button className="btn bg-white rounded-5 px-3 py-2 mx-3"><BsBagFill/> Hire me</button></Link>
            </div>
            <div>
                <img src={profile} alt="profile" className="bg-img rounded-circle"/> 
            </div>
           </section>
    </>
    )
}
export default Intro;