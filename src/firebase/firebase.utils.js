import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDojZn_MRzRr9sx8UAu5QaoGYiUNFP981E",
  authDomain: "fashion-shop-7e3cc.firebaseapp.com",
  databaseURL: "https://fashion-shop-7e3cc.firebaseio.com",
  projectId: "fashion-shop-7e3cc",
  storageBucket: "fashion-shop-7e3cc.appspot.com",
  messagingSenderId: "12895512113",
  appId: "1:12895512113:web:f014adda2a36685b"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase