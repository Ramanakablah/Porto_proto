import React from "react";
import Meright from "../../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

useGSAP(()=>{
  gsap.from(".Icon",{
    x:-30,
    opacity:0,
    duration:2,
    stagger:{
      amount:0.6
    }, 
  })

  gsap.from(".text_fadeIn",{
    opacity:0,
    y:30,
    duration:2,
    stagger:0.6
  })
},[])

  return (
    <section>
      <div className="common-side-padding flex h-[90dvh]">
        <div className="flex-1 flex items-start flex-col justify-center NyghtItalic">
          <p className="heading text_fadeIn">Hi I'm</p>
          <p className="name text_fadeIn">RAMAN</p>
          <p className="heading text_fadeIn">A Full-Stack SDE</p>
          <div className="flex items-center gap-4 text-2xl">
            <span className="Icon">
              <FaLinkedin />
            </span>
            <span className="Icon">
              <FaGithub />
            </span>
            <span className="Icon">
              <SiGmail />
            </span>
          </div>
        </div>
        <div className="flex-1 flex items-end items-center justify-center">
          <div className="w-[70%] aspect-square  bg-gray flex items-center aspect-square justify-center rounded-full overflow-hidden">
            <img src={Meright} alt="" className="z-2 object-fit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
