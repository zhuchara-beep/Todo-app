import React, { useEffect, useCallback } from "react"

import { getProjects } from "../api/projects"
import Tasks from "../components/Tasks"
import Sidebar from '../components/Sidebar'

function ProjectPage(props) {
    const [projects, setProjects] = React.useState([]);
    const [loadingProjects, setLoadingProjects] = React.useState(false);

    const { id: projectId } = props.match.params;

    useEffect(() => {
        setLoadingProjects(true);
        getProjects()
            .then(response => {
                setProjects(response);
                setLoadingProjects(false);
            })
            .catch(e => {
                setLoadingProjects(false);
            })
    }, []);

    const onClick = useCallback(
        item => {
            props.history.push(`/project/${item.id}`);
        },
        [props.history]
    );

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                padding: "40px 0px"
            }}
        >
            <Sidebar>
                {loadingProjects && <span>Загрузка...</span>}
                {projects.map(item => (
                    <div
                        key={item.id}
                        style={item.id === projectId ? { border: "1px solid #333" } : null}
                        onClick={() => onClick(item)}
                    >
                        {item.name}
                    </div>
                ))}
            </Sidebar>
            <Tasks projectId={projectId} />
        </div>
    )
}

export default ProjectPage