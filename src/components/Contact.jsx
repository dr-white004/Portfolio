import img from "../assets/images/contact-img.svg";
import React from "react";

function Contact() {
  return (
    
     <div id="contact" className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full ">
      <h1 className="text-white font-bold text-4xl pt-8 text-center">Get In Touch</h1>
      <div className="wrapper flex justify-center py-16 gap-52 lg:py-12">
      <div className="imgbox lg:hidden">
           <img className="w-[550px] h-full" src={img} alt="Contact" />
        </div>
        <div className="content-box w-full max-w-2xl">
          
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOUjShQIjKScTHifJceeRt-tHactDgqQnc3Z5-SG6vR83RcQ/viewform?embedded=true" width="640"
           height="709" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
