const firebaseConfig = {
  apiKey: "AIzaSyCFXJ-iGt5jShkWEnUN8eHwiu0IZmd-Qfc",
  authDomain: "softgran-d949b.firebaseapp.com",
  databaseURL: "https://softgran-d949b-default-rtdb.firebaseio.com",
  projectId: "softgran-d949b",
  storageBucket: "softgran-d949b.appspot.com",
  messagingSenderId: "1044307507557",
  appId: "1:1044307507557:web:fbe14098963a63c2bb898c"
};
firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";

}

function getData() 
{  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
