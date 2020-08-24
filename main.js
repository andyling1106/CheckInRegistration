
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBajmTv95bdeGcMkfniNzNmz7_ekW7XGzo",
    authDomain: "clockme-8430c.firebaseapp.com",
    databaseURL: "https://clockme-8430c.firebaseio.com",
    projectId: "clockme-8430c",
    storageBucket: "clockme-8430c.appspot.com",
    messagingSenderId: "774557927646",
    appId: "1:774557927646:web:74ec3bdb8c4ba79ff51a4f",
    measurementId: "G-0KFB9H62EK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// reference messages collection from firebase database 
var messagesRef = firebase.database().ref('clockme');

document.getElementById('clockme').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
    e.preventDefault();
 


  // get value
  var passno = getInputVal('passno');
  var name = getInputVal('name');
  var latitude = getInputVal("latitude");
  var longtitude = getInputVal("longtitude");
   
  var d = new Date();
  var cdate = d.toLocaleString(); 
  


  // Save Message
  saveMessage(passno,name,cdate,latitude,longtitude);


// show alert  'block = display'
document.querySelector('.alert').style.display = 'block';

//hide alert after 3 seconds
setTimeout(function() {
  document.querySelector('.alert').style.display = 'none';
}, 3000);

//clear form 
  document.getElementById('clockme').reset();
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
function saveMessage(passno,name,cdate,latitude,longtitude){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    passno: passno,
      name: name,
        cdate: cdate,
        latitude: latitude,
        longtitude: longtitude,
                         }, onComplete);
             location.replace("form_submit.html");
      
}










