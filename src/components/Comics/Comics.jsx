import React from "react";
import {getApiComics} from "../../utils/network"
import styles from './Comics.module.css'
import SearchBar from "../../UI/SearchBar/SearchBar";


const Comics = () => {

    const [requestText, setRequestText] = React.useState('')
    const [comics, setComics] = React.useState([])

    const handleOnChange = (e) => {
        setRequestText(e.target.value)
    }

    const request = () => {
        getApiComics(requestText).then(r => {
            setComics(r)
        })
    }
    console.log(comics)

    const handleOnClick = (e) => {
        e.preventDefault()
        request()
    }
    console.log(requestText)
    return (
        <div className={styles.container}>
            {<SearchBar
                handleOnChange={handleOnChange}
                requestText={requestText}
                handleOnClick={handleOnClick}/>}

            <div className={styles.wrapper}>

                {comics.map((element) => (
                    <div className={styles.element} key={element.id}>
                        <img className={styles.img} src={element.images[0].path + '.jpg'} alt=""/>
                        <h4>{element.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comics