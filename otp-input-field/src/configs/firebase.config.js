// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//const firebaseConfig = {
//    apiKey: "AIzaSyDDHYQ_-ZFxTBBAaBqcVlt7l0yexdfxOgE",
//    authDomain: "otp-field-input-project.firebaseapp.com",
//    projectId: "otp-field-input-project",
//    storageBucket: "otp-field-input-project.appspot.com",
//    messagingSenderId: "458966329131",
//    appId: "1:458966329131:web:93ead7329bbd4d7e11476e",
//    measurementId: "G-8YQRC6XLEH"
//};

const firebaseConfig = {
    apiKey: "AIzaSyB52Hx55Fzbvfo4aXlDd-NIYT2k35fqm-E",
    authDomain: "test-5797b.firebaseapp.com",
    projectId: "test-5797b",
    storageBucket: "test-5797b.appspot.com",
    messagingSenderId: "711875569855",
    appId: "1:711875569855:web:deb5cdc1ae9ab9a84d3e0a",
    measurementId: "G-0LDZPVSZJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)