import {CHANGETHEME, DECREMENT, DISABLEBUTTONS, ENABLEBUTTONS, INCREMENT} from "./types";

export function increment() {
    return{
        type: INCREMENT
    }
}
export function decrement() {
    return{
        type: DECREMENT
    }
}

export function enableButtons() {
    return{
        type: ENABLEBUTTONS
    }
}

export function disableButtons() {
    return{
        type: DISABLEBUTTONS
    }
}

export function changeTheme(newTheme) {
    return{
        type: CHANGETHEME,
        payload: newTheme
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableButtons())
        setTimeout(()=> {
            dispatch (increment())
            dispatch(enableButtons())
        }, 1500)
    }
}