import React, {useEffect, useCallback} from "react"

import {getProjects} from "../api/projects"

import ProjectForm from '../components/ProjectForm'

function MainPage(props) {

    const [projects, setProjects] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);


    useEffect(() => {
        setLoading(true);
        getProjects()
            .then(response => {
                setProjects(response);
                setLoading(false);
            })
            .catch(e => {
                setError(e.message);
                setLoading(false);
            })
    }, []);

    const onClick = useCallback(
        item => {
            props.history.push(`/project/${item.id}`)
        },
        [props.history]
    );

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: "wrap",
        }}>
            {loading ? (
                <div>Загрузка...</div>
            ) : error ? (
                <div>Ошибка запроса: {error}</div>
            ) : (
                projects.map(item => (
                    <div key={item.id} onClick={() => onClick(item)} style={{
                        width: '300px',
                        height: '300px',
                        border: '1px solid #333',
                        padding: '10px'
                    }}>
                        <span>{item.name}</span>
                    </div>
                ))
            )}
            <ProjectForm onProjectAdded={data => setProjects([...projects, data])}/>
        </div>
    )
}

export default MainPage