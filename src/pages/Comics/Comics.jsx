import React from 'react'

import SearchBar from '../../UI/SearchBar/SearchBar'
import Loader from '../../components/Loader'
import Modal from '../../components/Modal/Modal'
import { getComics } from '../../store/actions/comics'
import { useDispatch, useSelector } from 'react-redux'
import { data, isLoadedSelector } from '../../store/selectors/comics'

import styles from './Comics.module.css'

const Comics = () => {
    const [requestText, setRequestText] = React.useState('Hulk')
    const [modal, setModal] = React.useState(false)
    const [comicsData, setComicsData] = React.useState({})

    const dispatch = useDispatch()
    const isLoaded = useSelector(isLoadedSelector)
    const comics = useSelector(data)

    const handleOnChange = (e) => setRequestText(e.target.value)

    React.useEffect(() => {
        dispatch(getComics(requestText))
    }, [dispatch])

    const handleOnClick = (e) => {
        e.preventDefault()
        dispatch(getComics(requestText))
    }

    const handlerElement = (element) => {
        setModal(true)
        setComicsData(element)
    }

    if (isLoaded) {
        return <Loader/>
    }

    return (
        <div>
            <div className={styles.container}>
                {<SearchBar
                    handleOnChange={handleOnChange}
                    requestText={requestText}
                    handleOnClick={handleOnClick}/>}
                <p className={styles.subheader}>for example - Hulk</p>
                {comics ? (
                    <div className={styles.wrapper}>
                        {comics.map((element) => (
                            <div onClick={() => handlerElement(element)} className={styles.element} key={element.id}>
                                <img className={styles.img} src={element.images[0]?.path + '.jpg'} alt=""/>
                                <h4>{element.title}</h4>
                            </div>
                        ))}
                    </div>
                ) : 'Loading...'}
            </div>
            {modal && (
                <Modal
                    active={modal}
                    setModal={setModal}
                    data={comicsData}
                />
            )}
        </div>
    )
}

export default Comics
