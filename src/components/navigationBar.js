import React from 'react'
import '../css/navigation.css'
import { useHistory } from 'react-router-dom'
export const NavigationBar = () =>{
    const history = useHistory();
    return (
        <div className="nav-wrapper">
          <ul type="none" className="nav-ul">
              <li onClick={()=>history.push("/home")}>Home</li>
              <li onClick={()=>history.push("/contact")}>Contact</li>
              <li onClick={()=>history.push("/events")}>Events</li>
              <li onClick={()=>history.push("/student")}>Student</li>
              <li onClick={()=>history.push("/gallery")}>Gallery</li>
              <li onClick={()=>history.push("/slider")}>Slider</li>
              <li onClick={()=>history.push("/academics")}>Academics</li>
          </ul>
        </div>
    )
}
