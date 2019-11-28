import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Container from './components/Container';

import MainPage2 from './pages/MainPage';
import ProjectPage from './pages/ProjectPage';

export default class Lesson2 extends Component {
    render(props) {
        return (
            <div>
                <Header title={this.props.appName}/>
                <Container>
                    <Switch>
                        <Route exact path={["/", '/projects']} component={MainPage2}/>
                        <Route exact path="/project/:id" component={ProjectPage}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}
