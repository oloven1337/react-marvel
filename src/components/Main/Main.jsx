import React from "react";
import styles from './Main.module.css'
import hulk from '../../img/hulk.jpg'
import {getApiCharactersOfName} from "../../utils/network";
import Character from "./Character";

const Main = () => {
    const [requestText, setRequestText] = React.useState('')
    const [imgUrl, setImgUrl] = React.useState(hulk)
    const [character, setCharacter] = React.useState([])
    const [notFound, setNotFound] = React.useState(false)

    const handleOnChange = (event) => setRequestText(event.target.value)

    const handleOnClick = event => {
        event.preventDefault()

        if (requestText !== '') {
            getApiCharactersOfName(requestText)
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
                    }
                })
        }
    }

    return (
        <>
            <form className={styles.container}>
                <h1 className={styles.header}>Find character</h1>
                <div className={styles.search_wrapper}>
                    <input className={styles.input} onChange={handleOnChange}
                           value={requestText} type="text"/>
                    <button className={styles.button_search} onClick={handleOnClick}>Search</button>
                </div>
                <p className={styles.subheader}>for example - Hulk</p>
                <Character character={character} imgUrl={imgUrl} notFound={notFound}/>
            </form>
        </>
    )
}

export default Main