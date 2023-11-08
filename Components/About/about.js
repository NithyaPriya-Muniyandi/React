import React from "react";
import UI from './../../Images/ui (2).png'
import web from './../../Images/web.png'
import gd from './../../Images/gd.png'
import './about.css'
const About=()=>{
    return(
        <>
        <section id="about">
            <span className="aboutTitle">What I do</span>
            <span className="aboutDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of
            design and a keen eye for details. Iam proficient in HTML, CSS and JavaScript as well as design software such
            as adobe Photoshop, Illustrator, InDesign, Corel Draw. </span>
            < div className="aboutBars">
                <div className="aboutBar">
                <img src={UI} alt="ui" className="aboutBarImg"/>
                <div className="aboutBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content</p>
                </div>
                </div>
                <div className="aboutBar">
                <img src={web} alt="web" className="aboutBarImg"/>
                <div className="aboutBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text, you can write your own content</p>
                </div>
                </div>
                <div className="aboutBar">
                <img src={gd} alt="appdesign" className="aboutBarImg"/>
                <div className="aboutBarText">
                    <h2>App Design</h2>
                    <p>You can write text related to mobile app development.</p>
                </div>
                </div>
            </div>
      
        </section>
        </>
    );
}
export default About;