import {SLIDER_URL, INCREMENT_CURSOR, DECREMENT_CURSOR} from '../constant'


const initial = {
    cursor:0
}
export const userReducer = (state = initial,action) =>{
    switch(action.type)
    {
        case SLIDER_URL:
            return {
                ...state,
                sliderImage:action.payload
            }
        case DECREMENT_CURSOR:
        let cursorD = state.sliderImage.length - 1    
        if(state.cursor > 0)
        {
            cursorD = state.cursor - 1
        }
        return {
            ...state,
            cursor:cursorD
        }
        case INCREMENT_CURSOR:
        let cursorI = 0
        if(state.cursor < state.sliderImage.length - 1){
            cursorI = state.cursor + 1
        }
            return {
                ...state,
                cursor:cursorI
            }
        default : return state
    }
}