
//ADD YOUR FIREBASE LINKS HERE
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
  uname = localStorage.getItem('user_name');
   document.getElementById('welcome').innerHTML = 'Welcome '+ uname +' ! ';
    
   function add_room(){
     rname =     document.getElementById('room_name').value;
     firebase.database().ref("/").child(rname).update({
           ROOM : 'created'
     });
     localStorage.setItem('str_name',rname );
     window.location = "kwitter_page.html";
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     cl = "<div id="+Room_names+" onclick ='redirect(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += cl;

      //End code
      });});}
getData();
function redirect(name){
      localStorage.setItem('str_name',name );
     window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem('room_name')
      localStorage.removeItem('str_name')
      window.location = "index.html"
}


