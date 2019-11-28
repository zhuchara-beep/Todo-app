import { db } from "../firebase"

/**
 * Получить список проектов
 */
export function getProjects() {
    return db
        .collection("projects")
        .orderBy("order", "asc")
        .get()
        .then(querySnapshot =>
            querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
}

/**
 * Получить данные по проекту
 * @param {*} id
 */
export function getProject(id) {
    return db
        .collection("projects")
        .doc(id)
        .get()
        .then(doc => ({ ...doc.data(), id: doc.id }));
}

/**
 * Добавить новый проект в конец списка
 * @param {*} payload
 */
export async function addProject(payload) {
    const projectsRef = db.collection("projects");

    const lastProject = await projectsRef
        .orderBy("order", "desc")
        .limit(1)
        .get();
    const order =
        lastProject.docs.length > 0 ? lastProject.docs[0].data().order + 1 : 1;

    const newProject = await projectsRef.add({ name: payload.name, order });

    return { id: newProject.id, name: payload.name, order }
}

/**
 * Удалить проект
 * @param {*} id
 */
export function removeProject(id) {
    return db.collection("projects").doc(id).delete()
}