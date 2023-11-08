import React from "react";
import './certify.css';
import certify from './../../Images/Version Control - Copy - Copy - Copy_page-0001 - Copy - Copy - Copy.jpg'
 const Certificate = () => {
    return(
        <>
        <section className="certify">
        <div className="Certificate text-center">
            <h1 className="cerPageTitle my-4">Certificate</h1>
            <p className="cerDesc">I have a HTML and CSS, Version Control, UX Design and web Development certificate to become a professional Frontend Developer.</p>
            <div className="cerImgs mb-5">
                <img src={certify} alt="" className="cerImg m-2 p-2"/>
                <img src={certify} alt="" className="cerImg m-2 p-2"/>
                <img src={certify} alt="" className="cerImg m-2 p-2"/>
                <img src={certify} alt="" className="cerImg m-2 p-2"/>
            </div>
        </div>
        </section>
        </>
    )
 }
 export default Certificate;