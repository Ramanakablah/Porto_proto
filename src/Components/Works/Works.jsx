import React from "react";
import style from "./Work.module.css";
import { DenimsImg, RocketImg, YourcoachingImg, appleImg, tenPointImg } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { HiOutlineArrowRight } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#work",
      start: "top 30px",
      end: "+=100%",
      pinSpacing: false,
      pin: true,
    });
  }, []);

  return (
    <section className="common-padding bg-superlightgray">
      <u>
        <p className="heading NyghtItalic m-auto text-center justify-stretch mb-12">
          Welcome
        </p>
      </u>
      <div className="flex items-stretch ">
        <div
          className={`NyghtItalic max-h-full flex items-start justify-start`}
        >
          <div id="work" className={`${style.Works}`}>
            <p className=" heading">My Works</p>
            <p>Implementing what's learnt</p>
            <p>Learning Daily</p>
          </div>
        </div>
        <div className={`${style.GridWrapper} flex-1`}>
          <div className={`${style.Image}`}>
            <img src={DenimsImg} alt="" />
          </div>
          <div className={`${style.Description} NyghtItalic`}>
            {" "}
            <div className={style.Arrow}>
              <HiOutlineArrowLeft />
            </div>{" "}
            <p className="heading">Denims</p>
          </div>
          <div className={`${style.Image}`}>
            <img src={tenPointImg} alt="" />
          </div>
          <div className={`${style.Description} NyghtItalic`}>
            <p className="heading">10 Point.Ai</p>
            <div className={style.Arrow}>
              <HiOutlineArrowRight />
            </div>
          </div>

          <div className={`${style.Image}`}>
            <img src={appleImg} alt="" />
          </div>
          <div className={`${style.Description} NyghtItalic`}>
            <div className={style.Arrow}>
              <HiOutlineArrowLeft />
            </div>
            <p className="heading">Apple</p>
          </div>

          <div className={`${style.Image}`}>
            <img src={YourcoachingImg} alt="" />
          </div>
          <div className={`${style.Description} NyghtItalic`}>
            <p className="heading">Your Coaching</p>
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
