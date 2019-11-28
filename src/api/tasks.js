import { db } from "../firebase"

export function getTasksByProject(projectId) {
    return db
        .collection("projects")
        .doc(projectId)
        .collection("tasks")
        .get()
        .then(querySnapshot =>
            querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
}

export function getMaxOrderTasks(projectId) {
    return db
        .collection("projects")
        .doc(projectId)
        .collection("tasks")
        .orderBy("order", "desc")
        .limit(1)
        .get()
        .then(tasks => (tasks.docs.length > 0 ? tasks.docs[0].data().order + 1 : 1));
}

export async function addTask(projectId, payload = {}) {
    const {
        completed = false,
        content = "",
        date = new Date(),
        priority = 1
    } = payload;

    const order = await getMaxOrderTasks(projectId);

    const data = {
        completed,
        content,
        date,
        priority,
        order
    };

    const newTask = await db
        .collection("projects")
        .doc(projectId)
        .collection("tasks")
        .add(data);

    return { id: newTask.id, ...data }
}