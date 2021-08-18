import React from "react";
import styles from './Main.module.css'
import {getApiCharactersOfName} from "../../utils/network";
import Character from "./Character";
// import Loader from "../Loader";

const Main = () => {
    const [requestText, setRequestText] = React.useState('Iron man')
    const [imgUrl, setImgUrl] = React.useState(null)
    const [character, setCharacter] = React.useState([])
    const [notFound, setNotFound] = React.useState(false)

    const request = React.useCallback(() => {
        if (requestText !== '') {
            getApiCharactersOfName(requestText)
                .then((res) => {
                    if (!res) {
                        setNotFound(true)
                        console.log('такого персонажа нет!')
                    } else {
                        setNotFound(false)
                        const results = res.data.results[0]
                        const image = results.thumbnail.path + '.jpg'
                        setImgUrl(image)
                        setCharacter([
                            {title: 'Name', data: results.name},
                            {title: 'Description', data: results.description}
                        ])
                    }
                })
        }
    }, [])

    console.log('render')

    React.useEffect(() => {
        request()
    }, [])

    const handleOnChange = (event) => setRequestText(event.target.value)

    const handleOnClick = React.useCallback(event => {
        event.preventDefault()
        request()
    }, [])

    return (
        <form className={styles.container}>
            <h1 className={styles.header}>Find character</h1>
            <div className={styles.search_wrapper}>
                <input className={styles.input} onChange={handleOnChange}
                       value={requestText} type="text"/>
                <button className={styles.button_search} onClick={handleOnClick}>Search</button>
            </div>
            <p className={styles.subheader}>for example - Hulk</p>
            <Character
                character={character}
                imgUrl={imgUrl}
                notFound={notFound}
            />
        </form>
    )
}

export default Main