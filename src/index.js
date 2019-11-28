import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Lesson1 from './Lesson1';
// import App from './App';
import Lesson2 from './Lesson2';
import {BrowserRouter} from "react-router-dom";
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import * as serviceWorker from './serviceWorker';

// const store = createStore();

ReactDOM.render(
    // <App appName={'TodoList App'}/>
    // <Lesson1 appName={'TodoList App'}/>
    //<Provider store={store}>
        <BrowserRouter>
            <Lesson2 appName={'TodoList App'}/>
        </BrowserRouter>,
    // </Provider>,
    document.getElementById('root')
);
