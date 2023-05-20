
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyD4Ipat6FCAbdMM8r34EiZY-9e1PDHVQwY",
      authDomain: "practice-c94-c306c.firebaseapp.com",
      databaseURL: "https://practice-c94-c306c-default-rtdb.firebaseio.com",
      projectId: "practice-c94-c306c",
      storageBucket: "practice-c94-c306c.appspot.com",
      messagingSenderId: "703437693747",
      appId: "1:703437693747:web:4f3b063083c30e63d51446"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding rom name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}