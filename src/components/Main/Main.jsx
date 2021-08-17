import React from "react";
import styles from './Main.module.css'
import hulk from '../../img/hulk.jpg'
import {getApiCharactersOfName} from "../../utils/network";
import Character from "./Character";

const Main = () => {

    const [query, setQuery] = React.useState('')
    const [state, setState] = React.useState('')
    const [imgUrl, setImgUrl] = React.useState(hulk)
    const [character, setCharacter] = React.useState([])
    const [notFound, setNotFound] = React.useState(false)

    //effect for search input delay
    React.useEffect(() => {
        const timeOutId = setTimeout(() => setState(query), 300)
        return () => clearTimeout(timeOutId)
    }, [query])
    //

    React.useEffect(() => {
        if (state !== '') {
            getApiCharactersOfName(state)
                .then((res) => {
                    if (!res) {
                        setNotFound(true)
                        console.log('такого персонажа нет!')
                    } else {
                        setNotFound(false)
                        const image = res.data.results[0].thumbnail.path + '.jpg'
                        setImgUrl(image)
                        setCharacter([
                            {title: 'Name', data: res.data.results[0].name},
                            {title: 'Description', data: res.data.results[0].description}
                        ])
                        console.log(res.data.results[0])
                    }
                })
        }
    }, [state])

    console.log(character)

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Find character</h1>
            <div className={styles.search_wrapper}>
                <input className={styles.input} onChange={event => setQuery(event.target.value)}
                       value={query} type="text"/>
                <p className={styles.subheader}>for example - Hulk</p>
            </div>

            <Character character={character} imgUrl={imgUrl} notFound={notFound}/>
        </div>
    )
}

export default Main