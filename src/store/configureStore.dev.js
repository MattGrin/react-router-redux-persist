import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { persistStore } from 'redux-persist'
import { history } from './history'
import {persistedReducer} from "./persistence"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    let store = createStore(
        persistedReducer, // root reducer with router state
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions{
                // ... other middlewares ...
            ),
        ),
    )
    let persistor =  persistStore(store)
    return {store, persistor}
}