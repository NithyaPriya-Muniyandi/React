import React from "react";
import './certify.css';
import UX from './../../Images/UX_UI_page-0001.jpg'
import html from './../../Images/HTML_CSS_page-0001.jpg'
import ver from './../../Images/Version Control_page-0001.jpg'
import boot from './../../Images/Bootsrap_page-0001.jpg'
 const Certificate = () => {
    return(
        <>
        <section className="certify">
        <div className="Certificate text-center">
            <h1 className="cerPageTitle my-4">Certificate</h1>
            <p className="cerDesc">I have a HTML and CSS, Version Control, UX Design and web Development certificate to become a professional Frontend Developer.</p>
            <div className="cerImgs mb-5">
                <img src={UX} alt="" className="cerImg m-2 p-2"/>
                <img src={html} alt="" className="cerImg m-2 p-2"/>
                <img src={ver} alt="" className="cerImg m-2 p-2"/>
                <img src={boot} alt="" className="cerImg m-2 p-2"/>
            </div>
        </div>
        </section>
        </>
    )
 }
 export default Certificate;