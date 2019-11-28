/*
import fetchApi from './fetchApi';

export async function getProjects() {
    return await fetchApi('projects');
}

export async function getProject(id) {
    return await fetchApi(`projects/${id}`);
}*/

import { db } from "../firebase"

export async function getProjects() {
    return await db
        .collection("projects")
        //.orderBy("order", "asc")
        .get()
        .then(querySnapshot =>
            querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        )
}

export async function getProject(id) {
    return await db
        .collection("projects")
        .doc(id)
        .get()
        .then(doc => ({...doc.data(), id: doc.id}))
}

export async function addProject(payload) {
    return await db.collection("projects").add({
        name: payload.name
    }).then(doc => getProject(doc.id));
}
