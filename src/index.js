import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Lesson1 from './Lesson1';
// import App from './App';
import Lesson2 from './Lesson2';
import {BrowserRouter} from "react-router-dom";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // <App appName={'TodoList App'}/>
    // <Lesson1 appName={'TodoList App'}/>
    <BrowserRouter>
        <Lesson2 appName={'TodoList App'}/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
