import React from 'react';
import {addProject} from "../api/projects";


export default function ProjectForm() {

    const [name, setName] = React.useState('');

    const handleChange = (e) => setName(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        addProject({name}).then(res => {
            console.log(res);
        });
    }

    return (
        <div style={{
            width: '300px',
            height: '300px',
            border: '1px solid #333',
            padding: '10px'
        }}>
            <h3>Создать новый проект</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={handleChange}/>
                <button type='submit'>Создать</button>
            </form>
        </div>
    );
}