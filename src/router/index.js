import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Slider from '../components/slider';
const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/' component={Slider} />
        </BrowserRouter>
    )
}
export default Router;