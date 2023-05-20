//YOUR FIREBASE LINKS
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


user_name=localStorage.getItem("user_name");

room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
