import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD7MwIrsM4kCYSMt0jE3n95_RcvaK0Ar_Y",
    authDomain: "chatbox-a06cf.firebaseapp.com",
    projectId: "chatbox-a06cf",
    storageBucket: "chatbox-a06cf.appspot.com",
    messagingSenderId: "504890814998",
    appId: "1:504890814998:web:1e3859d64731ec5f15bb37",
    measurementId: "G-7GX8R05YXS"
  };

  firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();