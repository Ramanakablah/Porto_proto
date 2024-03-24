import React from "react";
import { LearningsData } from "../utils";

const Learnings = () => {
  return (
    <section className="common-side-padding py-10 min-h-[100dvh]">
      <p className="heading NyghtItalic my-5">
        My Contributions to community
      </p>
      <div className="flex flex-col">
        {
          LearningsData.map((elem,ind)=>{
            return <div className="flex w-full items-stretch">
          <div className="flex flex-col flex-1 Nyght">
            <p className="subheading">{elem.title}</p>
            <p className={`text-1xl NyghtItalic`} style={{fontSize:"14px"}}>{elem.subheading}</p>
            <ul className="my-3 px-2">
              {elem.about.map((about,i)=>{
                return <li>{i+1}. {about}</li>
              })}
            </ul>
            <a href={elem.link}>{elem.link}</a>
          </div>
          <div className="h-full p-3 Nyght">
              <div className="flex gap-2" style={{fontSize:"18px"}}> <p> Read Ratio </p> <p> {elem.readratio}%</p> </div>
          </div>
          <div className="w-[300px] h-[300px] relative">
            <img src={elem.img} alt="" />
          </div>
         </div>
          })
        }
      </div>
      <div className="text-center subheading Nyght">
        More Coming Soon ...
      </div>
    </section>
  );
};

export default Learnings;
