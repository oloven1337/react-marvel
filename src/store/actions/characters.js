import { FETCH_CHARACTER_REQUEST, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_ERROR } from '../action-types'
import { getApiCharactersOfName } from '../../utils/network'

export const getCharacter = (USERS_URL) => async (dispatch) => {
    try {
        dispatch({
            type: FETCH_CHARACTER_REQUEST
        })

        const response = await getApiCharactersOfName(USERS_URL)
        const data = await response.data.results[0]

        dispatch({
            type: FETCH_CHARACTER_SUCCESS,
            payload: data
        })

    } catch (e) {
        dispatch({
            type: FETCH_CHARACTER_ERROR
        })
    }
}
