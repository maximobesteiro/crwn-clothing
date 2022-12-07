import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDchmXH6Es6k0fWeWJ-NyBN7tHo77s8YP4',
  authDomain: 'crwn-clothing-db-90f5d.firebaseapp.com',
  projectId: 'crwn-clothing-db-90f5d',
  storageBucket: 'crwn-clothing-db-90f5d.appspot.com',
  messagingSenderId: '105062453150',
  appId: '1:105062453150:web:31bf26723a56c75788508f'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log('Firebase app has been initialized', firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.error('Error creating the user', error.message);
    }
  }

  return userDocRef;
};
