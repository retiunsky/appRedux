import {CHANGETHEME, DECREMENT, DISABLEBUTTONS, ENABLEBUTTONS, INCREMENT} from "./types";
import {combineReducers} from "redux";

function counterReducer(state = 14, action) {
    if (action.type === INCREMENT){
return state + 1
    } else if (action.type === DECREMENT){
        return state - 1
    }
    return state
}
const initialThemeState = {
    value: 'light',
    disabled: false
};

function themeReducer (state = initialThemeState, action) {
   switch (action.type) {
       case CHANGETHEME:
           return {...state, value: action.payload};
       case ENABLEBUTTONS:
           return {...state, disabled: false};
       case DISABLEBUTTONS:
           return {...state, disabled: true};
       default: return state
   }
}

export const rootReducer = combineReducers ( {
   counter: counterReducer,
    theme: themeReducer
});