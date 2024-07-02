import React, { useState } from "react";
import img1 from "../assets/images/project-img1.png";
import img2 from "../assets/images/project-img2.png";
import img3 from "../assets/images/project-img3.png";
import bg from "../assets/images/bg.jpg"
import cs50w from "../assets/images/CS50w.png"
import cs50x from "../assets/images/CS50x.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Education Tracker App",
      description: "Tracking reading progress",
      link: 'https://educationtracker.demola.great-site.net',
      img: img1,
    },
    {
      id: 2,
      title: "Admin-dashboard",
      description: "Html and css display",
      link:'https://dr-white004.github.io/Admin-dashboard',
      img: img2,
    },
    {
      id: 3,
      title: "Django E-commerce website",
      description: "Buy and sell products",
      link:'https://demola.pythonanywhere.com',
      img: img3,
    },
    
  ];

  return (
    <>
     <div id="projects" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'repeat-y' }} className="bg-center min-h-screen h-screen text-white py-10 overflow-y-auto">
        <h1 className="text-center text-4xl font-bold py-6">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
        Explore My projects and certificates
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Certificates
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Languages
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white  max-w-4xl mx-auto lg:p-5 "
          >
            
            <Swiper
              slidesPerView={1}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={cs50w} alt=""className="w-13 h-68" />
                 
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={cs50x} alt="" className="w-13 h-68"/>
                 
                </div>
              </SwiperSlide>
            

              
            </Swiper>

              

            
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            <h3 class="text-2xl font-bold mb-4">Programming Languages I Have Built With</h3>
              <ul class="flex flex-wrap justify-center mb-4">
                <li class="w-1/3 md:w-1/3 xl:w-1/3 p-4">
                  <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded font-mono text-lg font-bold">Python</span>
                </li>
                <li class="w-1/3 md:w-1/3 xl:w-1/3 p-4">
                  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-lg font-bold">JavaScript</span>
                </li>
                <li class="w-1/3 md:w-1/3 xl:w-1/3 p-4">
                  <span class="bg-red-100 text-red-800 px-2 py-1 rounded font-mono text-lg font-bold">C</span>
                </li>
              </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Projects;
