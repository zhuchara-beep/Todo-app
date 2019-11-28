import React, {Component} from 'react';
import {getProjects} from '../api/projects';
import ProjectForm from '../components/ProjectForm';

import {Link} from "react-router-dom";

function MainPage2(props) {

    // const [state, setState] = React.useState({
    //     loading: false,
    //     projects: [],
    //     error: ''
    // });

    const [projects, setProjects] = React.useState([]);
    const [loading, setLoading]   = React.useState(false);
    const [error, setError]       = React.useState('');

    React.useEffect(() => {
        setLoading(true);
        getProjects()
            .then(response => {
                setLoading(false);
                setProjects(response);
                setError('');
            })
            .catch(response => {
                setLoading(false);
                setError(response.message);
                console.error(response);
            });
        /*
        const fetching = async () => {
            try {
                const response = await getProjects();
                setLoading(false);
                setProjects(response);
                setError('');
            } catch(response) {
                setLoading(false);
                setError(response.message);
                console.error(response);
            }
        };
        fetching();
        */

        /*
        const timer = setTimeout(() => alert(1), 1000 );
        return () => {
            clearTimeout(timer);
        };
         */
    }, []);

    const onClick = React.useCallback((item) => {
        props.history.push(`/project/${item.id}`);
    }, [props.history]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            {loading ? <h2>Загрузка...</h2> : (
                <>
                    {projects.map(item => (
                        <div key={item.id} onClick={() => onClick(item)} style={{
                            width: '300px',
                            height: '300px',
                            border: '1px solid #333',
                            padding: '10px'
                        }}>
                            <span>{item.name}</span>
                        </div>
                    ))}

                    <ProjectForm/>

                    <span>{error}</span>
                </>
            )}
        </div>
    );
}

class MainPage extends Component {
    state = {
        loading: false,
        projects: [],
        error: ''
    };

    componentDidMount() {
        this.setState({loading: true});
        getProjects()
            .then(response => this.setState({projects: response, loading: false, error: ''}))
            .catch(response => {
                this.setState({loading: false, error: response.message});
                console.error(response);
            });
    }

    render() {
        return (
            <div>
                {this.state.loading ? <h2>Загрузка...</h2> : (
                    <>
                        <ul>
                            {this.state.projects.map(item => (
                                <li key={item.id}>
                                    <Link to={`/project/${item.id}`}><h2>{item.name}</h2></Link>
                                    <span>Количество комментариев: {item.comment_count}</span>
                                </li>
                            ))}
                        </ul>
                        <span>{this.state.error}</span>
                    </>
                )}
            </div>
        );
    }
}

export default MainPage2;