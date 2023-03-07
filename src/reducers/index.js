// these cap words are reducer constants
import { 
    ADD_ONE, 
    APPLY_NUMBER, 
    CHANGE_OPERATION, 
    CLEAR_DISPLAY, 
    CURRENT_MEMORY,
    APPLY_MEMORY,
    CLEAR_MEMORY  
} from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

//using operation slice of state here
const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

export const reducer = (state, action) => {
    switch(action.type) {
        //these are action cases/ action constants?
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
                //you're passing info to calculateResult function
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            })
        
        case(CURRENT_MEMORY):
            return({
                ...state,
                memory: state.total
            })
        
        case(APPLY_MEMORY):
            return({
                ...state,
                //pass in all states to the CR function
                total: calculateResult(state.total, state.memory, state.operation)
            })

        case(CLEAR_MEMORY):
            return({
                ...state,
                memory: 0
            })
            
        default:
            return state;
    }
}

export default reducer;