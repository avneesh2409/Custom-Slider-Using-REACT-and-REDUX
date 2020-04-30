import React, { useEffect, useState } from 'react'
import { SliderImage } from './child/sliderImage'
import { ToggleImage } from './child/toggleImage'
import { SliderDots } from './child/sliderDots'
import { useDispatch } from 'react-redux'
import { storeSliderState } from '../store/action'

const Slider = () =>{
    const dispatch = useDispatch();
    const [error, setError] = useState(false)
    useEffect(() => {
        let url = "https://reqres.in/api/users?page=2";
        const fetchData = (url) =>{
            fetch(url)
            .then(res=>res.json())
            .then(json=>dispatch(storeSliderState(json.data.map(e=>({url: e.avatar,
                name : e.first_name + e.last_name})))
                ))
            .catch(err=>{console.log(err);setError(true)})
        }
        fetchData(url)
    }, [])
    return (
        <div className="slideshow-container">
            {
                (error)?<h1>Internet is not available</h1>
                    :<React.Fragment>
                        <h3 style={{textTransform:'capitalize',color:'#b3b3b3',textAlign:'center'}}>hello this is Slider</h3>
                        <SliderImage />
                        <ToggleImage />
                        <SliderDots />
                </React.Fragment>
            }
        </div>
    )
}

export default Slider;

// export function showSlides(n) {
//   var i;
//   var slides = document.getElementsByclassNameName("mySlides");
//   var dots = document.getElementsByclassNameName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].classNameName = dots[i].classNameName.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].classNameName += " active";
// }
// </script>
