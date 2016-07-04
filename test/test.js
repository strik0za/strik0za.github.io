var returnWorks;
var testRandom = ['1', '2', '3', '4'];
function rand() {
    //console.log("work");
    returnWorks = testRandom[Math.floor(Math.random() * testRandom.length)];
    //console.log(returnWorks);
    var anything = document.createElement("p");
    var node = document.createTextNode(returnWorks);
    anything.appendChild(node);
    var rando = document.getElementById("whatever");
    rando.appendChild(anything);
}

rand();
// var element = document.getElementById("div1");
// element.appendChild(para);

//var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
