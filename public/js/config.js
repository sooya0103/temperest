// Initialize Firebase

var firebaseConfig = {
    //firestore コンソールからコピー＆ペーストしてください。
    apiKey: "AIzaSyBwCrjFIighHA6jM2jC4fgX4wTQmFbBcpY",
    authDomain: "tenperest-ebe55.firebaseapp.com",
    projectId: "tenperest-ebe55",
    storageBucket: "tenperest-ebe55.appspot.com",
    messagingSenderId: "324467705573",
    appId: "1:324467705573:web:4b7f1b76f8c549a1ce360c",
    measurementId: "G-C26Y3N44KK"

};

// Retrieve an instance of Firebase Messaging so that it can handle background messages.

firebase.initializeApp(firebaseConfig);