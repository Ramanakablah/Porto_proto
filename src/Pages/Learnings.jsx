import React from "react";
import { LearningsData } from "../utils";

const Learnings = () => {
  return (
    <section className="common-side-padding py-10 min-h-[100dvh]">
      <p className="heading FontItalic my-5">My Contributions to community</p>
      <p className="subheading Fontfam">Medium Articles</p>
      <div className="flex flex-col gap-12 my-6">
        {LearningsData.map((elem, ind) => {
          return (
            <>
              <div className="flex flex-col-reverse md:flex-row w-full items-stretch">
                <div className="flex flex-col flex-1 Fontfam">
                  <p className="subheading">{elem.title}</p>
                  <p
                    className={`text-1xl FontItalic`}
                    style={{ fontSize: "14px" }}
                  >
                    {elem.subheading}
                  </p>
                  <ul className="my-3 px-2">
                    {elem.about.map((about, i) => {
                      return (
                        <li>
                          {i + 1}. {about}
                        </li>
                      );
                    })}
                  </ul>
                  <a className="break-words" href={elem.link}>
                    {elem.link}
                  </a>
                </div>
                <div className="h-full p-3 Fontfam">
                  <div className="flex gap-2" style={{ fontSize: "18px" }}>
                    {" "}
                    <p> Read Ratio </p> <p> {elem.readratio}%</p>{" "}
                  </div>
                </div>
                <div className="w-[300px] h-[180px] relative">
                  <img src={elem.img} alt="" />
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
      <div className="text-center subheading Fontfam">More Coming Soon ...</div>
    </section>
  );
};

export default Learnings;
