// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLNWBLuGQWgcJg4A825L9zCvpIK1cPRX0',
  authDomain: 'raccoon-53fee.firebaseapp.com',
  projectId: 'raccoon-53fee',
  storageBucket: 'raccoon-53fee.firebasestorage.app',
  messagingSenderId: '1050468845348',
  appId: '1:1050468845348:web:18ae1ff60dc5ca4f7015b1',
  measurementId: 'G-KL9YRJC2Y0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
