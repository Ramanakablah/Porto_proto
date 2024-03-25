import React, { useEffect, useState } from "react";
import style from "./Work.module.css";
import { DenimsImg, RocketImg, YourcoachingImg, appleImg, midappleImage, middenimsimage, midtenpointimage, midyourcoachingImage, tenPointImg } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {

  const [lessthanmid, setlessthanmid] = useState(window.innerWidth<768?true:false)
  const [startanimation, setstartanimation] = useState(window.innerWidth<1000?true:false)

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setlessthanmid(window.innerWidth<768?true:false)
      setstartanimation(window.innerWidth<1000?false:true)
    })

    return ()=>{
      window.removeEventListener('resize',()=>{})
    }
  },[])

  useGSAP(() => {
    if(startanimation){
      ScrollTrigger.create({
        trigger: "#work",
        start: "top 30px",
        end: "+=100%",
        pinSpacing: false,
        pin: true,
      });
    }
    }, []);
    
  return (
    <section className="common-padding bg-superlightgray">
      <u>
        <p className="heading FontItalic m-auto text-center justify-stretch mb-12">
          Welcome
        </p>
      </u>
      <div className={` ${style.Wrapper} flex items-stretch`}>
        <div
          className={`FontItalic max-h-full flex items-start justify-start`}
        >
          <div id={startanimation?"work":"works"} className={`${style.Works}`}>
            <p className=" heading">My Works</p>
            <p>Implementing what's learnt</p>
            <p>Learning Daily</p>
          </div>
        </div>
        <div className={`${style.GridWrapper} flex-1`}>
          <div className={`${style.Image}`}>
            <img src={lessthanmid?middenimsimage:DenimsImg} alt="" />
          </div>
          <div className={`${style.Description} gap-3 FontItalic`}>
            {" "}
            <div className={style.Arrow}>
              <HiOutlineArrowLeft />
            </div>{" "}
            <div>
            <p className="heading">Denims</p>
            <a href="https://github.com/Ramanakablah/Denims">https://github.com/Ramanakablah/Denims</a>
            </div>
          </div>
          <div className={`${style.Image}`}>
            <img src={lessthanmid?midtenpointimage:tenPointImg} alt="" />
          </div>
          <div className={`${style.Description} gap-3 FontItalic`}>
            <div>
            <p className="heading">10 Point.Ai</p>
            <a href="https://10point.ai/">https://10point.ai/</a>
            </div>
            <div className={style.Arrow}>
              <HiOutlineArrowRight />
            </div>
          </div>

          <div className={`${style.Image}`}>
            <img src={lessthanmid?midappleImage:appleImg} alt="" />
          </div>
          <div className={`${style.Description} gap-3 FontItalic`}>
            <div className={style.Arrow}>
              <HiOutlineArrowLeft />
            </div>
            <div>
            <p className="heading">Apple</p>
            <a href="https://github.com/Ramanakablah/TJ">https://github.com/Ramanakablah/TJ</a>
            </div>
          </div>

          <div className={`${style.Image}`}>
            <img src={lessthanmid?midyourcoachingImage:YourcoachingImg} alt="" />
          </div>
          <div className={`${style.Description} gap-3 FontItalic`}>
            <div>
            <p className="heading">Your Coaching</p>
            <a href="https://testing.ingeniumedu.com/">https://testing.ingeniumedu.com/</a>
            </div>
            <div className={style.Arrow}>
              <HiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
