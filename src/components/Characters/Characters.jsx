import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Character from './Character'
import SearchBar from '../../UI/SearchBar/SearchBar'
import { getCharacter } from '../../store/actions/characters'
import { isLoaded, notFound, data } from '../../store/selectors/characters'

import styles from './Characters.module.css'


const Characters = () => {
    const [requestText, setRequestText] = React.useState('Iron man')

    const dispatch = useDispatch()
    const isLoadedSelector = useSelector(isLoaded)
    const notFoundSelector = useSelector(notFound)
    const { name, thumbnail = '', series, description } = useSelector(data)
    const imgUrl = thumbnail.path + '.jpg'

    React.useEffect(() => {
        dispatch(getCharacter(requestText))
    }, [dispatch])

    const handleOnChange = (event) => setRequestText(event.target.value)

    const handleOnClick = (event) => {
        event.preventDefault()

        dispatch(getCharacter(requestText))
    }

    return (
        <div className={styles.container}>
            {<SearchBar
                handleOnChange={handleOnChange}
                requestText={requestText}
                handleOnClick={handleOnClick}/>}
            <p className={styles.subheader}>for example - Hulk</p>
            <Character
                name={name}
                imgUrl={imgUrl}
                isLoadedSelector={isLoadedSelector}
                series={series}
                notFound={notFoundSelector}
                description={description}
            />
        </div>
    )
}

export default Characters
