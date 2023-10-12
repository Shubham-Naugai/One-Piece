import { configureStore, combineReducer, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const middleware = [thunk]

const store = configureStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

// export default store