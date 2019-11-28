import React from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.timer = null;
        this.state = {
            tick: 0,
            itemsIndex: -1,
            projects: [
                {
                    name: 'Проект 1',
                    items: [
                        {name: 'Задача 1.1'},
                        {name: 'Задача 1.2'},
                        {name: 'Задача 1.3'}
                    ],
                },
                {
                    name: 'Проект 2',
                    items: [
                        {name: 'Задача 2.1'},
                        {name: 'Задача 2.2'},
                        {name: 'Задача 2.3'}
                    ],
                },
            ]
        };

        this.addProject  = this.addProject.bind(this);
        this.addTask     = this.addTask.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((state) => {
                return {tick: state.tick + 1}
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    declOfNum(number, titles) {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    addTask() {
        const {projects} = this.state;
        projects[this.state.itemsIndex].items.push(
            {name: `Задача ${this.state.itemsIndex + 1}.${projects[this.state.itemsIndex].items.length + 1}`}
        );
        this.setState({projects});
    }

    addProject() {
        const {projects} = this.state;
        projects.push(
            {
                name: `Проект ${this.state.projects.length + 1}`,
                items: [
                    {name: `Задача ${this.state.projects.length + 1}.1`},
                    {name: `Задача ${this.state.projects.length + 1}.2`},
                    {name: `Задача ${this.state.projects.length + 1}.3`}
                ],
            }
        );
        this.setState({projects});
    }

    render(props) {
        const index = this.state.itemsIndex;

        return (
            <div className='App'>
                <div className='App-projects'>
                    <h1>{this.props.appName}</h1>
                    <h2>С момента запуска прошло {this.state.tick} секунд(ы\а)</h2>
                    <ul>
                        {this.state.projects.map(({name: projectName}, i) =>
                            <li key={i} onClick={() => this.setState({itemsIndex: i})}
                                className={'App-link' + (index === i ? ' App-selected' : '')}>
                                {projectName}
                            </li>
                        )}
                    </ul>
                    <button className='App-button' onClick={this.addProject}>Добавить проект</button>
                </div>
                {(index >= 0 && this.state.projects[index]) && (
                    <div className='App-tasks'>
                        <ul className='App-tasks-list'>
                            {this.state.projects[index].items.map(({name}, i) =>
                                <li key={i}>{name}</li>
                            )}
                        </ul>
                        <button className='App-button' onClick={this.addTask}>Добавить задачу</button>
                    </div>
                )}
            </div>
        );
    }
}
