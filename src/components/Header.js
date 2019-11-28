import React, {Component} from 'react';

import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.history.location.pathname !== '/' && this.props.history.location.pathname !== '/projects' && (
                    <Link to="/">Вернуться к проектам</Link>
                )}
            </div>
        );
    }
}

export default withRouter(Header);