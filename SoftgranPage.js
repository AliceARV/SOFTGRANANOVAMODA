function enviar() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        nome: username,
        mensagem: msg,
        like: 0

    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
                console.log(firebaseMessageId);
                console.log(messageData);
                nome = messageData["nome"];
                mensagem = messageData["mensagem"];
                like = messageData["like"];
                nomeetag="<h4>"+ nome + "<img class='user_tick' src='icons8-xbox-x-100.png'> </h4>";
                mensageiro="<h4 class='message_h4'>" + mensagem + "</h4>";
                curtidor="<button class='btn btn-warning' id="+ firebaseMessageId+"value="+like+" onclick='updatelike(this.id)'>";
                span="<span class='glyphicon glyphicon-thumbs-up'> like: " + like + "</span> </button> <hr>";
                row= nomeetag + mensageiro + curtidor + span;
                document.getElementById("output").innerHTML += row;
            }
        });
    });
}
 getData();