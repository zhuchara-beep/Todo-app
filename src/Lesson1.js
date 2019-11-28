import React from 'react';
// import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modify <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default class Lesson1 extends React.Component {
    constructor(props) {
        super(props);

        this.timer = null;
        this.state = {
            tick: 0,
            items: [
                {name: 'Item1'},
                {name: 'Item2'},
                {name: 'Item3'}
            ]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('Mounted');
        this.timer = setInterval(() => {
            this.setState((state) => {return {tick: state.tick + 1}})
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updated', prevState, this.state);
    }

    componentWillUnmount() {
        console.log('Will unmount');
        clearInterval(this.timer);
    }

    handleClick() {
        this.setState(
            {items:
                    [...this.state.items, {name: `Item${this.state.items.length + 1}`}]
            });
    }

    render(props) {
        return (
            <>
                <h1>{this.props.appName}</h1>
                <h2>Прошло {this.state.tick} секунд</h2>
                <ul>
                    {this.state.items.map(({name}, i) => <li key={i}>{name}</li>)}
                </ul>
                <button onClick={this.handleClick}>Добавить</button>
            </>
        );
    }
}
