import { INCREASE, DECREASE } from '../constants'
import {createAction} from "redux-actions";

export const increase = createAction(INCREASE)
export const  decrease = createAction(DECREASE)