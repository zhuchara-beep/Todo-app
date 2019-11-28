import * as firebase from "firebase/app"
import "firebase/firestore"
import firebaseConfig from "./fireBaseConfig"

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export default firebaseApp