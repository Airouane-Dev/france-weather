import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCc5i0IFbJ2bx8sYNlWoGtvPqsuWTv9HJw",
    authDomain: "france-weather.firebaseapp.com",
    projectId: "france-weather",
    storageBucket: "france-weather.appspot.com",
    messagingSenderId: "1087328023700",
    appId: "1:1087328023700:web:c6a1024a38d3dec87db081",
    measurementId: "G-5SZ5HKLL37"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
