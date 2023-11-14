import React from "react";
import './works.css';
import html from './../../Images/html.png'
import css from './../../Images/css.png'
import js from './../../Images/JavaScript.png'
import bs from './../../Images/bootstrap-xx.svg'
import rea from './../../Images/react-1-logo-png-transparent.png'
import ps from './../../Images/Adobe_Photoshop_Express_logo.svg.png'
import illu from './../../Images/Adobe_Illustrator_CC_icon.svg.png'
import ind from './../../Images/indesign.png'
import corel from './../../Images/coreldraw-x7-logo-747B0DC253-seeklogo.com.png'
import figma from './../../Images/figma.png'

const Works=()=>{
    return(
        <>
        <section id="works">
        <h2 className="workTitle ">My Skills</h2>
        <span className="workDesc">I take pride paying attention to the smallest details and making sure that my work is pixel perfect.
        I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
        <div className="workImgs">
        <img src={html} alt="html" className="workImg"/>
        <img src={css} alt="css" className="workImg"/>
        <img src={js} alt="js" className="workImg"/>
        <img src={bs} alt="bs" className="workImg"/>
        <img src={rea} alt="rea" className="workImg"/>
        <img src={figma} alt="figma" className="workImg"/>
        <img src={ps} alt="ps" className="workImg"/>
        <img src={illu} alt="illu" className="workImg"/>
        <img src={ind} alt="ind" className="workImg"/>
        <img src={corel} alt="corel" className="workImg"/>
        </div>
        <button className="bg-white px-3 py-2 mx-5 rounded-4 border-0 text-center mb-5">See more</button>
        </section>
        </>
    )
}
export default Works;