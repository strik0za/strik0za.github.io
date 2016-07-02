var showRandomResolution;
var Resolution = ["Food Is Generally Good", "Man is Evil", "College Does More Harm Than Good", "Spiderman is Superior to Batman"];
function randomResolution() {
    showRandomResolution = Resolution[Math.floor(Math.random() * Resolution.length)];
    var show = document.createElement("p");
    var showShow = document.createTextNode(showRandomResolution);
    show.appendChild(showShow);
    var noMas = document.getElementById("element");
    noMas.appendChild(show);
}

randomResolution();

// var returnWorks;
// var testRandom = ['1', '2', '3', '4'];
// function rand() {
//     //console.log("work");
//     returnWorks = testRandom[Math.floor(Math.random() * testRandom.length)];
//     //console.log(returnWorks);
//     var anything = document.createElement("p");
//     var node = document.createTextNode(returnWorks);
//     anything.appendChild(node);
//     var rando = document.getElementById("whatever");
//     rando.appendChild(anything);
// }

// rand();
var config = {
    apiKey: "AIzaSyCRlUIU5WvhRE951elcMgg0cUbCfm3vd1E",
    authDomain: "chat-app-77b76.firebaseapp.com",
    databaseURL: "https://chat-app-77b76.firebaseio.com",
    storageBucket: "chat-app-77b76.appspot.com",
};
firebase.initializeApp(config);

var argData = firebase.database().ref();

// function pushOpinion(event) {
//     if (event.keyCode == 13) {
//         var proArg = $('#pro_argument').val();
//         var conArg = $('#con_argument').val();
//         argData.push({proArg: proArg, conArg: conArg});
//         $('#pro_argument').val('');
//         $('#con_argument').val('');
//     }
// }

// argData.on("child_added", showOpinion);

// function showMessage(msg) {
//     var proMessage = msg.val();
//     var proMessageSender = text("Pro: ")
//     var messageContent = message.proArg;
    
//     var messageEl = $("<div/>").addClass("message");    
//     var senderEl = $("<span/>").text(messageSender + ": ");
//     var contentEl = $("<span/>").text(messageContent);
    
//     messageEl.append(senderEl);
//     messageEl.append(contentEl);    
//     $('#messages').append(messageEl);
// }

// $('#pro_argument').keypress(pushMessage);
// $('#con_argument').keypress(pushMessage);


$("#Pro-Argument").on("click", proArgument);
function proArgument() {
    argData.push({opinion: true});
}

$("#Con-Argument").on("click", conArgument);
function conArgument() {
    argData.push({opinion: false});
}

