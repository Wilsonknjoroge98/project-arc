// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAY_mKZG8KDxigm-c48KcI8uV_G0X3s7j4',
  authDomain: 'project-arc-6e764.firebaseapp.com',
  projectId: 'project-arc-6e764',
  storageBucket: 'project-arc-6e764.firebasestorage.app',
  messagingSenderId: '450679941695',
  appId: '1:450679941695:web:65c519a8c32a43e204e68a',
  measurementId: 'G-8BKVQQQ80B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

if (import.meta.env.MODE === 'development') {
  connectFirestoreEmulator(db, 'http://127.0.0.1:8080');
}
