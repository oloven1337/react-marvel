import React from "react";
import {getApiComics} from "../../utils/network"
import styles from './Comics.module.css'
import SearchBar from "../../UI/SearchBar/SearchBar";
import Loader from "../Loader";
import Modal from "../../Modal/Modal";


const Comics = () => {
    const [requestText, setRequestText] = React.useState('Hulk')
    const [comics, setComics] = React.useState([])
    const [modal, setModal] = React.useState(false)
    const [comicsData, setComicsData] = React.useState({})

    const handleOnChange = (e) => {
        setRequestText(e.target.value)
    }

    const request = () => {
        getApiComics(requestText).then(r => {
            setComics(r)
        })
    }
    React.useEffect(() => {
        request()
    }, [])

    const handleOnClick = (e) => {
        e.preventDefault()
        request()
    }

    const handlerElement = (element) => {
        setModal(true)
        setComicsData(element)
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
                                <img className={styles.img} src={element.images[0].path + '.jpg'} alt=""/>
                                <h4>{element.title}</h4>
                            </div>
                        ))}
                    </div>
                ) : 'Loading...'}
            </div>
            {modal ?
                <Modal
                    active={modal}
                    setModal={setModal}
                    data={comicsData}
                />
                : null}
        </div>
    )
}

export default Comics
