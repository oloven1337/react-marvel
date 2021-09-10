import React from 'react'
import cn from 'classnames'
import close from '../img/close.svg'
import styles from './Modal.module.css'

const Modal = ({ active, setModal, data }) => {
    const { description, images, urls, title } = data

    return (
        <div className={active ? cn(styles.modal, styles.active) : styles.modal} onClick={() => setModal(false)}>
            <div className={styles.modal_content} onClick={event => event.stopPropagation()}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>{title}</h3>
                    <img className={styles.img} src={images[0].path + '.jpg'} alt="img"/>
                </div>
                <div className={styles.wrapper}>
                    <p className={styles.description}>
                        {description ? description : 'There is no data about the comic :('}
                    </p>
                    <a className={styles.buy_link} href={urls[0].url} target="_blank" rel="noreferrer">BUY</a>
                </div>
                <img onClick={() => setModal(false)} className={styles.close_modal} src={close} alt="close"/>
            </div>
        </div>
    )
}

export default Modal
