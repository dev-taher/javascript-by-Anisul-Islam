var view1 = document.getElementsByTagName("a")[0];

var view2 = document.getElementsByTagName("a")[1].innerHTML = "Hi youtube" ;

view1.style.textDecoration = "none" ;

view1.style.color = "blue" ;
view1.style.fontSize = "24px" ;
view1.href= "https://youtube.com "

var hello = document.getElementsByTagName("h1")[0].innerHTML = "Say Hello" ;


var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading 3");
heading3.appendChild(text);

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);

var heading2 = document.getElementsByTagName("h1")[2];
myDiv.removeChild(heading2);

var heading0 = document.createElement("h1");
var text0 = document.createTextNode("This is heading 0");
heading0.appendChild(text0);
var heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0,heading1);