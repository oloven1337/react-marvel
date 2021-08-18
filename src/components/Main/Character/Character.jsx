import React from "react";
import notFoundImg from '../../../img/batman.jpg'
import styles from "./Character.module.css";

const Character = ({character, imgUrl, notFound }) => {

    if (notFound) {
        return (
            <div className={styles.wrapper}>
                <img className={styles.img} src={notFoundImg} alt=""/>
                <h2 className={styles.name}>There is no such character</h2>
            </div>
        )
    }

    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={imgUrl} alt=""/>
            <div>
                {character.length ? (
                        <div className={styles.wrapper_biography}>
                            <h2 className={styles.name}>{character[0].data}</h2>
                            <p className={styles.biography_text}> {character[1].data}</p>
                        </div>
                    )
                    : <span className={styles.title}>Find your favorite hero!</span>
                }
            </div>
        </div>
    )
}

export default React.memo(Character)