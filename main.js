  // Initialize Firebase
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-Tw4gWsCM_kbrxJ3D99ON2joCRyIhoGc",
    authDomain: "contactform-28bc3.firebaseapp.com",
    databaseURL: "https://contactform-28bc3.firebaseio.com",
    projectId: "contactform-28bc3",
    storageBucket: "contactform-28bc3.appspot.com",
    messagingSenderId: "56744531715",
    appId: "1:56744531715:web:2b9313cc2df5887464fb36"
  };
  firebase.initializeApp(firebaseConfig);


// reference messages collection from firebase database 
var messagesRef = firebase.database().ref('mess');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
    e.preventDefault();
 
  // get value
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var bodytemp  = getInputVal('bodytemp');

             
  var d = new Date();
  var cdate = d.toLocaleString(); 
  
  // Save Message
  saveMessage(name, phone, bodytemp, cdate);


// show alert  'block = display'
document.querySelector('.alert').style.display = 'block';

//hide alert after 3 seconds
setTimeout(function() {
  document.querySelector('.alert').style.display = 'none';
}, 3000);

//clear form 
  document.getElementById('contactForm').reset();
}

//function to get form value
function getInputVal(id){
    return document.getElementById(id).value;
}


var onComplete = function(error) {
  if (error) {
      console.log('Operation failed');
  } else {
      console.log(' Operation completed');
  }
};


//Save messages to firebase
function saveMessage(name,phone,bodytemp,cdate){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
      name: name,
      phone: phone,
      bodytemp: bodytemp,
      cdate: cdate,
        }, onComplete);
     
        location.replace("form_submit.html");
      
}





