import React from 'react'
import { useSelector } from 'react-redux'
export const SliderImage = () =>{
    const state = useSelector(state=>state.imageState)
    const {sliderImage,cursor} = state;
    const {ImageUrl,total} = (sliderImage && sliderImage.length > 0)?{ImageUrl:sliderImage[cursor],total:sliderImage.length}:{}
    return (
        <div className="mySlides fade">
            <div className="numbertext">{`${cursor}/${total}`}</div>
                <img src={(ImageUrl)?ImageUrl.url:''} alt="not found" style={{width:'100%',height:'300px'}} />
            <div className="text">{(ImageUrl)?ImageUrl.name:''}</div>
        </div>
    )
}
