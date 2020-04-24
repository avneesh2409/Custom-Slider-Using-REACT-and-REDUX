import { SLIDER_URL,INCREMENT_CURSOR } from "../constant"
import { DECREMENT_CURSOR } from "../constant"


export const storeSliderState = (payload) =>{
    return {
        type:SLIDER_URL,
        payload
    }
}
export const incrementCursor = () =>{
    return {
        type:INCREMENT_CURSOR
    }
}
export const decrementCursor = () =>{
    return {
        type:DECREMENT_CURSOR
    }
}