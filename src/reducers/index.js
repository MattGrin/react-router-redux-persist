// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {count} from "./count";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    count: count
})
export default createRootReducer