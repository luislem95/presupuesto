// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD004uA_LyOqYdKwE9vUoLqHljCuclev0A",
  authDomain: "presupuesto-e7591.firebaseapp.com",
  projectId: "presupuesto-e7591",
  storageBucket: "presupuesto-e7591.appspot.com",
  messagingSenderId: "424784283168",
  appId: "1:424784283168:web:ced9ce4b978ae796861e45",
  measurementId: "G-VPGQW77DC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, analytics, auth };
export const database = getFirestore();
