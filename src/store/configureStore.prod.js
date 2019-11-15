import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { persistStore } from 'redux-persist'
import { history } from './history'
import {persistedReducer} from "./persistence"

export default function configureStore(preloadedState) {
    let store = createStore(
        persistedReducer, // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions{
                // ... other middlewares ...
            ),
        ),
    )
    let persistor =  persistStore(store)
    return {store, persistor}
}