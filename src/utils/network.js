import axios from 'axios'
import {API_KEY, URL_CHARACTERS, URL_COMICS} from '../constans/constans'

export const getApiSeriesAll = async (urls) => {

    const resultsUrl = await urls.map(element => {
        return axios.get(element, {
            params: {
                apikey: API_KEY,
            }
        })
    })

    const allPromise = await Promise.all(resultsUrl)

    return allPromise

    // console.log(resultsUrl)

    // resultsUrl.forEach(element => {
    //     element.then(res => {
    //         console.log(res)
    //     })
    // })


    // const da = Promise.all(resultsUrl)
    //      .then(value => {
    //          return value.data
    //      })

    // da.then(res => console.log(res))

}

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

export const getApiComics = async (title) => {
    const res = await axios.get(`${URL_COMICS}`, {
        params: {
            apikey: API_KEY,
            title,
            limit: 30
        }
    })
    console.log(res.data)
    return res.data.data.results
}