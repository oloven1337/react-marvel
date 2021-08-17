import React from "react";
import Header from "../Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Main from "../Main/Main";
import Characters from "../Characters";
import Comics from '../Comics'
import styles from './App.css'

function App() {

    return (
        <div className={styles.container}>
            <BrowserRouter>
                <Header/>
                <Route path='/' component={Main} exact/>
                <Route path='/characters' component={Characters}/>
                <Route path='/comics' component={Comics}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
