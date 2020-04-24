import React from 'react'
import {useDispatch } from 'react-redux'
import { incrementCursor, decrementCursor } from '../../store/action';

export const ToggleImage = () =>{
    const dispatch = useDispatch();
    return (
        <div>
            <span className="prev" onClick={()=>dispatch(decrementCursor())}>&#10094;</span>
            <span className="next" onClick={()=>dispatch(incrementCursor())}>&#10095;</span>
        </div>
    )
}
