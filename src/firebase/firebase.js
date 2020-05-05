import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBCCn--Z9FYtLbcEecIJOu1K_1ixOl4diE",
    authDomain: "e-tech-203b2.firebaseapp.com",
    databaseURL: "https://e-tech-203b2.firebaseio.com",
    projectId: "e-tech-203b2",
    storageBucket: "e-tech-203b2.appspot.com",
    messagingSenderId: "1013795873941",
    appId: "1:1013795873941:web:ad263822345f6632c2279c",
    measurementId: "G-0TNYHG228X"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;