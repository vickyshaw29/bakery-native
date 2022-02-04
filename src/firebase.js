import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// just for the checking to go smooth I am writing these credentials here instaed of in a env file

const firebaseConfig = {
  apiKey: 'AIzaSyACzyj7tSWLOHuq2tdd2iZETZaHXvayuGg',
  authDomain: 'auth-development-1b1b1.firebaseapp.com',
  projectId: 'auth-development-1b1b1',
  storageBucket: 'auth-development-1b1b1.appspot.com',
  messagingSenderId: '33601906696',
  appId: '1:33601906696:web:068b4b6bb4ed434c4789bd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
