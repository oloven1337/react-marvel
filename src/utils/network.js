import axios from 'axios'
import {API_KEY, URL_CHARACTERS, URL_COMICS} from '../constans/constans'

export const getApiCharactersOfName = async (name) => {
    try {
        const res = await axios.get(URL_CHARACTERS, {
            params: {
                apikey: API_KEY,
                name: name
            }
        })

        if (!res.data.data.results.length) {
            console.error('Could not fetch.', res.status)
            return false
        } else {
            return res.data
        }

    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false
    }
}

export const getApiCharactersOfId = async (id) => {
    const res = await axios.get(`${URL_CHARACTERS}`, {
        params: {
            apikey: API_KEY,
            id
        }
    })
    return res.data
}

export const getApiComicsOfId = async (id) => {
    const res = await axios.get(`${URL_COMICS}`, {
        params: {
            apikey: API_KEY,
            id
        }
    })
    return res.data
}