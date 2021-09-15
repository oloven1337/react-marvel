import React from 'react'

import Header from '../components/Header/'
import { BrowserRouter, Route } from 'react-router-dom'
import Characters from '../pages/Characters'
import Main from '../pages/Main'
import Comics from '../pages/Comics'

import styles from './App.css'

export function App() {
    return (
        <div className={styles.container}>
            <BrowserRouter>
                <Header/>
                <Route path="/" exact component={Main}/>
                <Route path="/characters" component={Characters}/>
                <Route path="/comics" component={Comics}/>
            </BrowserRouter>
        </div>
    )
}
