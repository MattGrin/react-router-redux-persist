import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router'
import configureStore from './store/configureStore'
import {history} from './store/history'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={configureStore().store}>
        <ConnectedRouter history={history}>
            <PersistGate loading={null} persistor={configureStore().persistor}>
                <App />
            </PersistGate>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
