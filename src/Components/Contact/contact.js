import React from "react";
import './contact.css';
import linkedin from './../../Images/LinkedIn_icon_circle.svg.png'
import github from './../../Images/github.png'
import wix from './../../Images/wix.png'
import insta from './../../Images/insta.png'
const Contact=()=>{
    return(
        <>
        <section id="contactPage">
        
        <div className="contact text-center">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc p-4">Please fill out the form below to discuss any work opportunitues</span>
                <form className="contactForm m-4">
                    <input type="text" className="name my-3 text-white bg-dark rounded-3" placeholder="Your Name"/>
                    <input type="email" className="email my-3 text-white bg-dark rounded-3" placeholder="Your Email"/>
                    <textarea className="msg my-3 text-white bg-dark rounded-3" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn rounded-4 bg-white px-4 py-2 my-5">Submit</button>
                    <div className="links">
                       
                        <img  src={linkedin} alt="linkedin" className="link m-3"/>
                        <img src={github} alt="github" className="link m-3 rounded-circle"/>
                        <img src={wix} alt="wix" className="link m-3 rounded-circle"/>
                        <img src={insta} alt="insta" className="link m-3 rounded-circle"/>

                    </div>
                </form>
        </div>
        </section>
        </>
    )
}
export default Contact;