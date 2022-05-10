//YOUR FIREBASE LINK
var firebaseConfig = {
      apiKey: "AIzaSyAc-vVUCzEKULYaxYLW4h7fuEGGXRcyEJA",
      authDomain: "practice-project-8ab39.firebaseapp.com",
      databaseURL: "https://practice-project-8ab39-default-rtdb.firebaseio.com",
      projectId: "practice-project-8ab39",
      storageBucket: "practice-project-8ab39.appspot.com",
      messagingSenderId: "336234157544",
      appId: "1:336234157544:web:04cd49a1a696b9d27a005d"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
user = localStorage.getItem('user_name')
function send(){
     msg =  document.getElementById('msg').value
     firebase.database().ref("/").child(rname).push({
     name : user,
     like : 0,
     message : msg
     });
}
function logout(){
      localStorage.removeItem('room_name')
      localStorage.removeItem('str_name')
      window.location = "index.html"
}

