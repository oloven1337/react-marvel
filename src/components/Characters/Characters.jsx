import React from "react";
import styles from './Characters.module.css'
import {getApiCharactersOfName} from "../../utils/network";
import Character from "./Character";
import SearchBar from "../../UI/SearchBar/SearchBar";

const Characters = () => {
    const [requestText, setRequestText] = React.useState('Iron man')
    const [imgUrl, setImgUrl] = React.useState(null)
    const [character, setCharacter] = React.useState([])
    const [notFound, setNotFound] = React.useState(false)
    const [series, setSeries] = React.useState([])

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
                        setSeries(results.series.items)
                        setCharacter([
                            {title: 'Name', data: results.name},
                            {title: 'Description', data: results.description}
                        ])
                    }
                })
        }
    }, [requestText])

    React.useEffect(() => {
        request()
    }, [])


    const handleOnChange = (event) => setRequestText(event.target.value)

    const handleOnClick = React.useCallback(event => {
        event.preventDefault()
        request()
    }, [request])

    return (
        <div className={styles.container}>
            {/*// {<SearchBar*/}
            {/*// handleOnChange={handleOnChange}*/}
            {/*// requestText={requestText}*/}
            {/*// handleOnClick={handleOnClick}/>}*/}

            <form>
                <h1 className={styles.header}>Find character</h1>
                <div className={styles.search_wrapper}>
                    <input className={styles.input} onChange={handleOnChange}
                           value={requestText} type="text"/>
                    <button className={styles.button_search} onClick={handleOnClick}>Search</button>
                </div>
                <p className={styles.subheader}>for example - Hulk</p>

            </form>
            <Character
                character={character}
                imgUrl={imgUrl}
                notFound={notFound}
                series={series}
            />
        </div>
    )
}

export default Characters