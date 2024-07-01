import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/tailwind.png";
import img1 from "../assets/images/aws.png";
import img2 from "../assets/images/react.png";
import img3 from "../assets/images/django.png";
import img4 from "../assets/images/linux.png";
import bg from "../assets/images/banner-bg.png"

function Skills() {
  return (
    <>
      <div id="skills" style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-lg py-3">
            Tools i'm most conversant with
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-[#171717] ">
                {" "}
                <div className=" bg-[#171717] flex flex-col items-center justify-center">
                  <img src={img1} alt=""className="w-12 h-12" />
                  <h1 className="font-bold text-2xl my-2">Amazon web services</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717] flex flex-col items-center justify-center">
                  <img src={img2} alt="" className="w-12 h-12"/>
                  <h1 className="font-bold text-2xl my-2">React.js </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717] flex flex-col items-center justify-center">
                {" "}
                <div className=" bg-[#171717] flex flex-col items-center justify-center">
                  <img src={img3} alt="" className="w-12 h-12" />
                  <h1 className="font-bold text-2xl my-2">django and drf</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717] flex flex-col items-center justify-center">
                  <img src={img4} alt="" className="w-12 h-12" />
                  <h1 className="font-bold text-2xl my-2">LINUX</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717] flex flex-col items-center justify-center">
                  <img  src={img} alt="" className="w-12 h-12" />
                  <h1 className="font-bold text-2xl my-2">Tailwind</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
