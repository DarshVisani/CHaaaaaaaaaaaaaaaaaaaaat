//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCSySJev2-XlO1LIZCgcrmkpkDNNP4KIbg",
      authDomain: "robo-chat-app--class-93-97.firebaseapp.com",
      projectId: "robo-chat-app--class-93-97",
      storageBucket: "robo-chat-app--class-93-97.appspot.com",
      messagingSenderId: "880013283645",
      appId: "1:880013283645:web:1e786b11823cfabb0af554"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()  {
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
