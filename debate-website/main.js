//firebase stuff
var config = {
    apiKey: "AIzaSyBC-uuFpUSzewBOmf1qlc6AzM0ttJO9tH4",
    authDomain: "debate-website-fd686.firebaseapp.com",
    databaseURL: "https://debate-website-fd686.firebaseio.com",
    storageBucket: "debate-website-fd686.appspot.com",
};

firebase.initializeApp(config);

//pro stuff
var database = firebase.database().ref();

function pushPMessage(event) {
    pushMessage(event, "Pro");
}

function pushCMessage(event) {
    pushMessage(event, "Con");
}


function pushMessage(event, type) {
    if (event.keyCode == 13) {
        var arg = $("#" + type).val();
        database.push({type: type, text: arg});
        $("#" + type).val("");
    }
}

$("#Pro").keypress(pushPMessage);
$("#Con").keypress(pushCMessage);


function showMessage(msg) {
    var showAllMessage = msg.val();
    var showAllMessageContent = showAllMessage.text;
    
    var showAllMessageEl = $("<div/>").addClass("showAllMessage");
    var showAllMessageContentEl = $("<span/>").text(": " + showAllMessageContent);
    
    var msgSpan = $("<span/>").text(showAllMessage.type);
    //msgSpan.addClass("labelPro");
    if (showAllMessage.type == "Pro") {
        msgSpan.addClass("labelPro");
    } else {
        msgSpan.addClass("labelCon");
    }
    
    msgSpan.text = showAllMessage.type;
    showAllMessageEl.append(msgSpan);
    showAllMessageEl.append(showAllMessageContentEl);
    $("#element").append(showAllMessageEl);
    
    console.log(msgSpan);
    
    // var msgSpan = document.createNewElement("span");
    // msgSpan.text = showAllMessage.type;
    
    
    //showAllMessageEl.
    //append()
    
}

//document.createElement("span")

database.on("child_added", showMessage);

$("#clear").on("click", clearFunction);

function clearFunction() {
    database.remove();
}

database.on("child_removed", function(){
    $("#element").empty();
});



//eeeeeeeeeeeeeeeeeeeeeeeEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeeeeeeeeeeeeeeeeeeEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEe