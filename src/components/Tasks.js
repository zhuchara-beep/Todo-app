import React, { useEffect, useCallback } from "react"

import { getTasksByProject, addTask } from "../api/tasks"

function Tasks(props) {
    const [tasks, setTasks] = React.useState([]);
    const [loadingTasks, setLoadingTasks] = React.useState(false);

    useEffect(() => {
        if (props.projectId) {
            setLoadingTasks(true);
            getTasksByProject(props.projectId)
                .then(response => {
                    setTasks(response);
                    setLoadingTasks(false);
                })
                .catch(e => {
                    setLoadingTasks(false);
                })
        }
    }, [props.projectId]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "0px 15px"
            }}
        >
            {loadingTasks ? (
                <span>Загрузка задач...</span>
            ) : tasks.length > 0 ? (
                tasks.map(item => <div key={item.id}>{item.content}</div>)
            ) : (
                <div>Нет задач</div>
            )}
        </div>
    )
}

export default Tasks