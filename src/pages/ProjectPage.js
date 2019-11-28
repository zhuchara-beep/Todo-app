import React, {Component} from 'react';

import {getTask} from '../api/tasks';
import {getProject} from '../api/projects';

import ProjectContext from '../contexts/ProjectContext';
import Tasks from '../components/Tasks';

export default class ProjectPage extends Component {
    state = {
        project: [],
        tasks: [],
        loading: false,
        error: ''
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        this.setState({loading: true});

        /*getProject(id)
            .then(response => {
                this.setState({project: response, error: ''});
                return getTask(id);
            })
            .then(response =>
                this.setState({tasks: response, error: ''})
            )
            .finally(() =>
                this.setState({loading: false})
            )
            .catch(response => {
                this.setState({error: response.message});
                console.error(response);
            });*/

        Promise.all([getProject(id), getTask(id)])
            .then(([project, tasks]) => this.setState({project: project, tasks: tasks, error: ''}))
            .finally(() => this.setState({loading: false}))
            .catch(error => {
                this.setState({error: error.message});
                console.log(error);
            });
    }

    render() {
        return (
            <ProjectContext.Provider value={this.state.project}>
                <>
                    {this.state.loading ? <h2>Загрузка...</h2> : (
                        <>
                            <div className="project-info">
                                <span>Название проекта: {this.state.project.name}</span>
                                <span>Идентификатор проекта: {this.state.project.id}</span>
                                <span>Количество комментариев: {this.state.project.comment_count}</span>
                            </div>
                            <ol className="task-info">
                                {this.state.tasks.map(item =>
                                    <li key={item.id}>
                                        <span>ID задачи: {item.id}</span>
                                        <span>Содержание: {item.content}</span>
                                        <span>Количество комментариев: {item.comment_count}</span>
                                        <span>Номер: {item.order}</span>
                                        <span>Приоритет: {item.priority}</span>
                                        <span>Ссылка на задачу: {item.url}</span>
                                    </li>
                                )}
                            </ol>
                            {this.state.error && <span>{this.state.error}</span>}
                            <Tasks/>
                        </>
                    )}

                </>
            </ProjectContext.Provider>
        );
    }
}