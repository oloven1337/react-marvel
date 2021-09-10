import { FETCH_COMICS_ERROR, FETCH_COMICS_REQUEST, FETCH_COMICS_SUCCESS } from '../action-types'

const initialState = {
    data: [],
    isLoaded: false,
    notFound: false
}

export const comicsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMICS_REQUEST: {
            return {
                ...state,
                isLoaded: true
            }
        }
        case FETCH_COMICS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                isLoaded: false,
                notFound: false
            }
        }
        case FETCH_COMICS_ERROR: {
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
