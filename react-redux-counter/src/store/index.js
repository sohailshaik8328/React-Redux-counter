import {createStore} from "redux";

function reducer(state = { value : 0}, action) {
    switch (action.type) {
        case "increment":
            return {value : state.value + 1};
            break;
            case "decrement":
                return {value : state.value - 1};
                break;
            case "reset":
            return {value : 0};
            break;
    
        default:
            return state
            break;
    }
}

let store = createStore(reducer)

export default store
