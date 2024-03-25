import React from 'react'
import style from "./Tech.module.css"
import Techs from "../../utils"

const Tech = () => {
    console.log(Techs)
  return (
    <section className='common-padding'>
        <div className='heading FontItalic text-center'>
            My Skill Set includes
        </div>
        <div className='Fontfam'>
            {Object.values(Techs).map((elem)=>{
               return <div className="flex-col justify-center w-full my-4">
                <p className='text-center my-2 text-2xl'>{elem.title}</p>
                <div className='w-full flex flex-wrap items-center justify-evenly gap-4'>
                    {elem.images.map((tech)=>{
                        return <div className={`${style.ImageCard} w-[90px] h-[80px] md:h-[120px] md:w-[120px] rounded-md relative overflow-hidden cursor-pointer`}>
                        <img src={tech.src} className='z-0 h-[94%] w-[94%] absolute object-contain' alt="" />
                        <div className={`${style.FadeBanner} h-full w-full absolute rounded-md bg-black/35 z-2`}>
                            <p className='text-1xl md:text-3xl'>
                                {tech.text.heading}
                            </p>
                        </div>
                    </div>
                    })}
                </div>
            </div>
            })}
        </div>
    </section>
  )
}

export default Tech