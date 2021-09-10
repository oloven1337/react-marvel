import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { comicsReducer } from './reducers/comicsReducer'
import { charactersReducer } from './reducers/charactersReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    charactersReducer,
    comicsReducer: comicsReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
