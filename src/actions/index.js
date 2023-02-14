export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";


export const addOne = () => {
    //these are action types
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

// https://www.notion.so/chocolate-chip-cookie-8415/The-Reducer-Pattern-438064412455435da21125ab71b50e4c?pvs=4#0cdbd5cab8234dbe8d36fa9843066593 
// action def