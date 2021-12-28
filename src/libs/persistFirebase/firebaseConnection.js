/**
 * Useful Docs
 * [Google Console](https://console.firebase.google.com/u/0/project/re-template/database/re-template-default-rtdb/data/~2F)
 *
 * [DataSnapshot | JavaScript SDK  |  Firebase](https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot?authuser=0)
 * [Set | JavaScript SDK  |  Firebase](https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=0#set)
 * [Get | JavaScript SDK  |  Firebase](https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=0#get)
 */
import { initializeApp } from "firebase/app";
import { getFirestore, doc } from "firebase/firestore";

import { createFBStorageAPI } from "./createFBStorageAPI";

export function setupFirebaseConnection( firebaseConfig ) {
    const firebaseApp = initializeApp( firebaseConfig );
    const db = getFirestore();

    return doc( db, "state", "state" );
}

export const initRealtimeFirebaseDB = ( firebaseConfig, throttleTime ) => {
    const dbRef = setupFirebaseConnection( firebaseConfig );
    return createFBStorageAPI( dbRef, throttleTime );
};