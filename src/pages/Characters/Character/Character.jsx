import React from 'react'

import notFoundImg from '../../../assets/batman.jpg'
import styles from './Character.module.css'
import Loader from '../../../components/Loader'

const Character = ({ name, imgUrl, notFound, series, description, isLoadedSelector }) => {

    if (isLoadedSelector) {
        return <Loader/>
    }

    if (notFound) {
        return (
            <div className={styles.wrapper}>
                <img className={styles.img} src={notFoundImg} alt=""/>
                <h2 className={styles.name}>There is no such character</h2>
            </div>
        )
    }
    return (
        <>
            <div className={styles.wrapper}>
                {imgUrl ? <img className={styles.img} src={imgUrl} alt=""/> : <Loader/>}
                <div>
                    {name
                        ? (
                            <div className={styles.wrapper_biography}>
                                <h2 className={styles.name}>{name}</h2>
                                <p className={styles.biography_text}> {description}</p>
                            </div>
                        )
                        : <div className={styles.loader}>
                            <Loader/>
                        </div>
                    }
                </div>
            </div>
            {/*<Series series={series}/>*/}
        </>
    )
}

export default React.memo(Character)
