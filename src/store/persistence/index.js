import createRootReducer from '../../reducers'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { history } from '../history'

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['router']
  }

export const persistedReducer = persistReducer(persistConfig, createRootReducer(history))
