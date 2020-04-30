import React, { useEffect } from 'react'
import '../../css/sidebar.css'
import { useHistory } from 'react-router-dom';
const Sidebar = () =>{
    const history = useHistory();
    const openNav =  (e) =>{
        document.getElementById('mynav').style.width = '250px'
    }
    const closeNav = (e) =>{
        document.getElementById('mynav').style.width = '0px'
    }
    useEffect(()=>{
        console.log(window.screen.width,window.screen.height)
    },[window.screen.width,window.screen.height])
    return (
    <React.Fragment>
        <div id="mynav" className="sidenav">
            <span className="closebtn" style={{cursor:'pointer'}} onClick={closeNav}>&times;</span>
            <span onClick={()=>history.push("/home")}>Home</span>
            <span onClick={()=>history.push("/contact")}>Contact</span>
            <span onClick={()=>history.push("/events")}>Events</span>
            <span onClick={()=>history.push("/student")}>Student</span>
            <span onClick={()=>history.push("/gallery")}>Gallery</span>
            <span onClick={()=>history.push("/slider")}>Slider</span>
            <span onClick={()=>history.push("/academics")}>Academics</span>
        </div>
        <span style={{fontSize:'30px',cursor:'pointer'}} onClick={openNav}>&#9776;</span>
    </React.Fragment>
    )
}

export default Sidebar
