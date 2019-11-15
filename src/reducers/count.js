import { INCREASE, DECREASE } from '../constants'
import {handleActions} from 'redux-actions';

export const count = handleActions({
    [INCREASE]: (state, action) =>({number: state.number + action.payload}),
    [DECREASE]: (state, action) =>({number: state.number - action.payload})
},{number: 1});

/*
const initialState = {
    number: 1
}
export function countReducer(state = initialState, action) {
    if(action.type === INCREASE) {
        return { number: state.number + action.amount }
    }
    else if(action.type === DECREASE) {
        return { number: state.number - action.amount }
    }
    return state
}
 */