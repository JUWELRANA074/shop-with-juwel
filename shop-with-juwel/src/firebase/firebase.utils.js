import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
          apiKey: "AIzaSyAzk5IYNzqIF47vIeNyNsUs7t-aTugccSY",
          authDomain: "juwel-rana.firebaseapp.com",
          databaseURL: "https://juwel-rana.firebaseio.com",
          projectId: "juwel-rana",
          storageBucket: "juwel-rana.appspot.com",
          messagingSenderId: "1002893637848",
          appId: "1:1002893637848:web:a93d7f054e88474a4effad"      
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
     
  if (!userAuth) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayNme, email } = userAuth;
    const createdAd = new Date();

    try {
         await userRef.set({
           displayNme,
           email,
           createdAd,
           ...additionalData
         })
    }catch (error) {
      console.log('error creating user',error.message);
    }
  }

  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase ;

 