import { FETCH_COMICS_REQUEST, FETCH_COMICS_SUCCESS } from '../action-types'
import { getApiComics } from '../../utils/network'

export const getComics = (title) => dispatch => {
    try {
        dispatch({
            type: FETCH_COMICS_REQUEST
        })
        const res = getApiComics(title)
        res.then((r) => {
            dispatch({
                type: FETCH_COMICS_SUCCESS,
                payload: r
            })
        })

    } catch (e) {

    }
}
