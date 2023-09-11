// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, set, onValue, child, get, push, update, onChildAdded } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiAS-_DlZOv43aU24OFRa7T8HqCwcYeck",
    authDomain: "tlos-ca726.firebaseapp.com",
    databaseURL: "https://tlos-ca726-default-rtdb.firebaseio.com",
    projectId: "tlos-ca726",
    storageBucket: "tlos-ca726.appspot.com",
    messagingSenderId: "1098148836598",
    appId: "1:1098148836598:web:bd403d6b25aee23bab28d7",
    measurementId: "G-EHNBM815LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const msgRef = ref(db, "/msgs");

const msgScreen = document.getElementById("messages"); //the <ul> that displays all the <li> msgs
const msgForm = document.getElementById("messageForm"); //the input form
const msgInput = document.getElementById("msg-input"); //the input element to write messages
const msgBtn = document.getElementById("msg-btn"); //the Send button

const updateMsgs = data =>{
    const {name, text} = data.val(); //get name and text
  
    //load messages, display on left if not the user's name. Display on right if it is the user.
    const msg = `<li class="${name == username ? "msg my": "msg"}"><span class = "msg-span">
      <i class = "name">${name}: </i>${text}
      </span>
    </li>`
  
    msgScreen.innerHTML += msg; //add the <li> message to the chat window
  
    //auto scroll to bottom
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
    window.scrollTo(0,document.body.scrollHeight);
}


function init() {
    username = prompt("Enter Username");
    onChildAdded(msgRef, updateMsgs);
}

document.addEventListener('DOMContentLoaded', init);

let username = '';

function sendMessage(e){
    e.preventDefault();
    const text = msgInput.value;
  
    if(!text.trim()) return alert('Please type a message'); //no msg submitted
    const msg = {
        name: username,
        text: text
    };
  
    push(msgRef, msg);
    msgInput.value = "";
}  

msgForm.addEventListener('submit', sendMessage);