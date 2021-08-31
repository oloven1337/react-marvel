import { FETCH_CHARACTER_REQUEST, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_ERROR } from '../action-types'

const initialState = {
    data : [],
    isLoaded: false,
    notFound: false
}
export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_REQUEST: {
            return {
                ...state,
                isLoaded: true,
            }
        }
        case FETCH_CHARACTER_SUCCESS: {
            console.log(action.payload)
            return {
                ...state,
                data: action.payload,
                isLoaded: false,
                notFound: false
            }
        }
        case FETCH_CHARACTER_ERROR: {
            return {
                ...state,
                isLoaded: false,
                notFound: true
            }
        }
        default: {
            return state
        }
    }
}
