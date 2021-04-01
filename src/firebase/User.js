import { db } from './FirebaseConfig'

export const getUser = async(uid) => {
    let user;
    await db.collection('users').doc(uid).get().then((doc) => {
      if (doc.exists) {
        user = doc.data();
      }
    });
    return user;
}

export const writeUserPartialData = (userDB, user) => {
  db.collection("users").doc(userDB.uid).set(user);
}