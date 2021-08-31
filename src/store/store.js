import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { comicsReducers } from './reducers/comicsReducers'
import { charactersReducer } from './reducers/charactersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    charactersReducer,
    comicsReducers
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
