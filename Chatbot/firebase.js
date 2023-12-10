// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9US9mLbq0KoY2XKB8sy8--CsfDlqRsw0",
  authDomain: "traveltrek-53a65.firebaseapp.com",
  databaseURL: "https://traveltrek-53a65-default-rtdb.firebaseio.com",
  projectId: "traveltrek-53a65",
  storageBucket: "traveltrek-53a65.appspot.com",
  messagingSenderId: "918824419458",
  appId: "1:918824419458:web:2a5479f06f8df3042c349b",
  measurementId: "G-LYNQCV1WDT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 //invokes firebase authentication.
 const auth = firebase.auth();
 
 window.onload = function() {
  const auth = firebase.auth();

  auth.signOut().then(() => {
    // Sign-out successful.
    console.log('User signed out on page load.');
  }).catch((error) => {
    // An error happened.
    console.error('Error signing out:', error);
  });
};

 document.querySelector("#show-register").addEventListener("click", () => {
   showRegistration();
 });

 const showRegistration = () => {
   document.querySelector("#registration-page").classList.remove("hide");
   document.querySelector("#login-page").classList.add("hide");
   document.querySelector("#homepage").classList.add("hide");
 };

 document.querySelector("#show-login").addEventListener("click", () => {
   showLogin();
 });

 const showLogin = () => {
   document.querySelector("#registration-page").classList.add("hide");
   document.querySelector("#login-page").classList.remove("hide");
   document.querySelector("#homepage").classList.add("hide");
 };

 document.querySelector("#signout").addEventListener("click", () => {
   signOut();
 });

 const register = () => {
   const email = document.querySelector("#registration-email").value;
   const reemail = document.querySelector("#registration-reemail").value;
   const password = document.querySelector("#registration-password").value;

   if (email.trim() == "") {
     alert("Enter Email");
   } else if (password.trim().length < 7) {
     alert("Password must be at least 7 characters");
   } else if (email != reemail) {
     alert("emails do not match");
   } else {
     auth
       .createUserWithEmailAndPassword(email, password)
       .catch(function (error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         alert(errorMessage);
         // ...
       });
   }
 };

 document.querySelector("#register").addEventListener("click", () => {
   register();
 });

 //register when you hit the enter key
 document
   .querySelector("#registration-password")
   .addEventListener("keyup", (e) => {
     if (event.keyCode === 13) {
       e.preventDefault();

       register();
     }
   });

 const login = () => {
   const email = document.querySelector("#login-email").value;
   const password = document.querySelector("#login-password").value;

   if (email.trim() == "") {
     alert("Enter Email");
   } else if (password.trim() == "") {
     alert("Enter Password");
   } else {
     authenticate(email, password);
   }
 };

 document.querySelector("#login").addEventListener("click", () => {
   login();
 });

 //sign in when you hit enter
 document
   .querySelector("#login-password")
   .addEventListener("keyup", (e) => {
     if (event.keyCode === 13) {
       e.preventDefault();

       login();
     }
   });

 const authenticate = (email, password) => {
   const auth = firebase.auth();
   auth.signInWithEmailAndPassword(email, password);
   firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .catch(function (error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       alert("Username or Password Incorrect. Please try again later.");
     });
 };

 const showHomepage = () => {
   document.querySelector("#registration-page").classList.add("hide");
   document.querySelector("#login-page").classList.add("hide");
   document.querySelector("#homepage").classList.remove("hide");
 };

 const signOut = () => {
   firebase
     .auth()
     .signOut()
     .then(function () {
       location.reload();
     })
     .catch(function (error) {
       alert("error signing out, check network connection");
     });
 };

 auth.onAuthStateChanged((firebaseUser) => {
   if (firebaseUser) {
     // User is logged in, remove "hide" class
     document.querySelector("#login-page").classList.add("hide");
     document.querySelector('.chat-container').classList.remove('hide');
     window.addEventListener('beforeunload', () => {
      // Log out the user when the window closes
      firebase.auth().signOut()
      .then(() => {
        // Clear any local storage or cookies related to user authentication
        localStorage.clear();
        cookies.remove('user_token');
      })
      .catch((error) => {
        // Handle any errors during logout
        console.error(error);
      });
    });
   } else {
    // User is not logged in, add "hide" class if needed
    document.querySelector('.chat-container').classList.add('hide');
  }
 });

 document
   .querySelector("#forgot-password")
   .addEventListener("click", () => {
     const email = document.querySelector("#login-email").value;
     if (email.trim() == "") {
       alert("Enter Email");
     } else {
       forgotPassword(email);
     }
   });

 const forgotPassword = (email) => {
   auth
     .sendPasswordResetEmail(email)
     .then(function () {
       alert("email sent");
     })
     .catch(function (error) {
       alert("invalid email or bad network connection");
     });
 };

const messageHistory = document.querySelector('.message-history');
const inputField = document.getElementById('chat-input-field');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const userMessage = inputField.value;

  // Display user message
  const userMessageElement = document.createElement('div');
  userMessageElement.classList.add('message', 'user-message');
  userMessageElement.innerText = `User: ${userMessage}`;
  messageHistory.appendChild(userMessageElement);

  // Clear input field
  inputField.value = '';

  // Generate computer response
  const computerMessage = generateComputerResponse(userMessage);

  // Display computer message
  const computerMessageElement = document.createElement('div');
  computerMessageElement.classList.add('message', 'computer-message');
  computerMessageElement.innerText = `Computer: ${computerMessage}`;
  messageHistory.appendChild(computerMessageElement);
});


function generateComputerResponse(userMessage) {
  // Replace this with your actual logic for generating computer responses
  // This is just a simple example
  return `Hello! I received your message: ${userMessage}`;
}