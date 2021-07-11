import { useMemo } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

let store

const middlewares = [thunkMiddleware]

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['cart'], // place to select which state you want to persist
}

const persistedReducer = persistReducer(persistConfig, reducers)

function initStore(initialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const initializeStore = preloadedState => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
