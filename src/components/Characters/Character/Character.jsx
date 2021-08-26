import React from "react";
import notFoundImg from '../../../img/batman.jpg'
import styles from "./Character.module.css";
import Loader from "../../Loader";
import Series from "../Series";

const Character = ({character, imgUrl, notFound, series}) => {
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
                    {character.length
                        ? (
                            <div className={styles.wrapper_biography}>
                                <h2 className={styles.name}>{character[0].data}</h2>
                                <p className={styles.biography_text}> {character[1].data}</p>
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