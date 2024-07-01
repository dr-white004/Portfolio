import React from 'react'
import logo from "../assets/images/astronout.jpg"
import me from "../assets/images/piiix.png"
import bg from "../assets/images/bg.jpg"
import Navbar from './Navbar'
import "../styles.css"
import AnchorLink from "react-anchor-link-smooth-scroll";


function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`}} className =' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <div className="btn py-3">
        <img src={me} alt="" className="w-24 h-24 rounded-full" />
        </div>
        <h1 className='text-white text-5xl font-bold'>Hi! I'm Ademola</h1>
        <p className='text-white py-4 max-w-lg '> A full stack developer with a strong foundation in computer science and cloud engineering. I have completed CS50x, CS50w, and the AltSchool Cloud Engineering course, and have practical experience in building and deploying a full-stack app using Django Rest Framework and React on AWS. I am passionate about creating scalable web solutions and continuously expanding my skills in cloud technologies through AWS Educate</p>
        <button className='  text-white text-2xl'> <AnchorLink href="#contact">Let's Connect</AnchorLink> <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button>
      </div>
      
      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
     
      <img className='w-96 ast-img' src={logo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header