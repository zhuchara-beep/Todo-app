// import TaskForm from './TaskForm'
import {addTask} from "../api/tasks";
import React from "react";

export function TaskForm(props) {

    const [content, setContent] = React.useState('');
    const [completed, setCompleted] = React.useState(false);
    const [date, setDate] = React.useState(new Date());
    const [priority, setPriority] = React.useState('1');

    const handleSubmit = e => {
        e.preventDefault();
        addTask(props.projectId, {
            content,
            completed,
            date,
            priority
        }).then((res) => {
            props.onTaskAdded && props.onTaskAdded(res);
        });

    };

    return (
        <div
            style={{
                width: 'fit-content',
                height: 'fit-content',
                border: '1px solid rgb(51, 51, 51)',
                padding: '7px',
                'margin-top': '10px'
            }}
        >
            <span>Добавить задачу в проект</span>
            <form onSubmit={handleSubmit}>
                Текст задачи: <input type="text" value={content} onChange={e => setContent(e.target.value)}/><br/>
                Выполнена: <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)} /><br/>
                Дата выполнения задачи: <input type="text" value={date} onChange={e => setDate(e.target.value)} /><br/>
                Приоритет:
                <select value={priority} onChange={e => setPriority(e.target.value)}>
                    <option value='1'>Нормально</option>
                    <option value='2'>Важно</option>
                    <option value='3'>Срочно</option>
                </select><br/>
                <button type="submit">Создать</button>
            </form>
        </div>
    );
}