import React from 'react'
import {BrowserRouter,Route, Redirect} from 'react-router-dom'
import Slider from '../components/slider';
import { NavigationBar } from '../components/navigationBar';
import Contact from '../components/contact';
import Student from '../components/student';
import Events from '../components/events';
import Gallery from '../components/gallery';
import Home from '../components/home';
import Academics from '../components/academics';
import SideBar from '../components/child/sidebar';
const Router = () => {
    return (
           <BrowserRouter>
            <NavigationBar />
            <SideBar />
                <Route exact path='/home' component={Home} />
                <Route exact path='/' render={()=><Redirect to='/home' />} />
                <Route exact path='/slider' component={Slider} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/student' component={Student} />
                <Route exact path='/events' component={Events} />
                <Route exact path='/gallery' component={Gallery} />
                <Route exact path='/academics' component={Academics} />
            </BrowserRouter>
    )
}
export default Router;