import App from "../components/App";

//set the type of action. action string constant/ action constant
export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const CURRENT_MEMORY = "CURRENT_MEMORY";
export const APPLY_MEMORY = "APPLY_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

//these are action creators
export const addOne = () => {
    //these are action types
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

// action creator that takes in 
// an operator as an argument 
// and creates an action object 
// with the type CHANGE_OPERATION.
// payload is the arg you'll pass in (in App)
export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const currentMemory = () => {
    return({type:CURRENT_MEMORY});
}

export const applyMemory = () => {
    return({type:APPLY_MEMORY});
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY});
}

// https://www.notion.so/chocolate-chip-cookie-8415/The-Reducer-Pattern-438064412455435da21125ab71b50e4c?pvs=4#0cdbd5cab8234dbe8d36fa9843066593 
// action def