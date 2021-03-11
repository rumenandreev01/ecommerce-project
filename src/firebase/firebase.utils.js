import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCrj8UzKKofOVT8bIK71WFcx-fqMsdelYU",
    authDomain: "crwn-db-b203c.firebaseapp.com",
    projectId: "crwn-db-b203c",
    storageBucket: "crwn-db-b203c.appspot.com",
    messagingSenderId: "586630105952",
    appId: "1:586630105952:web:41398a3da59f318ccb2c05",
    measurementId: "G-P6HFCZ9L15"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth){
        return
      }

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log(error.message)
        }

      }
      return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;
