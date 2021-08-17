import React from "react";
import styles from './Main.module.css'
import hulk from '../../img/hulk.jpg'
import {getApiCharactersOfName} from "../../utils/network";

const Main = () => {

    const [query, setQuery] = React.useState('')
    const [state, setState] = React.useState('')
    const [imgUrl, setImgUrl] = React.useState(hulk)

    // const handleChangeSearch = (e) => {
    //     setState(e.target.value)
    // }

    //effect for search input delay
    React.useEffect(() => {
        const timeOutId = setTimeout(() => setState(query), 500)
        return () => clearTimeout(timeOutId)
    }, [query])
    //

    React.useEffect(() => {
        if (state !== '') {
            getApiCharactersOfName(state)
                .then((res) => {
                    if (!res) {
                        console.log('такого персонажа нет!')
                    } else {
                        console.log(res.data.results)
                        const image = res.data.results[0].thumbnail.path + '.jpg'
                        setImgUrl(image)
                    }
                })
        }
    }, [state])

    return (
        <div className={styles.container}>
            <input onChange={event => setQuery(event.target.value)} value={query} type="text"/>
            <h1>Main</h1>
            <img className={styles.img} src={imgUrl} alt=""/>
        </div>
    )
}

export default Main