import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const SliderDots = () =>{
    const state = useSelector(state=>state.imageState)
    const {sliderImage,cursor} = state
    const currentSlide = (e,id) =>{
        console.log(id)
    }
    const [dots,setDots] = useState(null)
    useEffect(()=>{
      let data = (sliderImage && sliderImage.length > 0)?sliderImage.map((item,index)=>(
        <span className={(cursor !== index)?"dot":"dot-active"} key={index} onClick={(e)=>currentSlide(e,index)}></span>
         )):null
        setDots(data)
    },[cursor])
    return (
        <div style={{textAlign:'center'}}>
            {dots}
        </div>
    )
}
