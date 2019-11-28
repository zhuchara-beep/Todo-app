import fetchApi from './fetchApi';

export async function getTask(idProject) {
    const tasks = await fetchApi('tasks');
    return tasks.filter(item =>
        Number.parseInt(item.project_id) === Number.parseInt(idProject)
    );
}