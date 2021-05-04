// function addStyle(){
//     var myVar = document.querySelector("#para2");
//     // myVar.style.color = "red ";
//     // myVar.style.fontSize = "24px";
//     // myVar.style.fontWeight = "700";
//     // myVar.style.fontStyle = "italic ";
//     myVar.classList.add("para-style");
// }
// function removeStyle(){
//     var myVar = document.querySelector("#para2");
//     myVar.classList.remove("para-style");
// }

var myVar = document.querySelector("#paraId");
function addStyle(){
    myVar.classList.add("para-style");
}
function removeStyle(){
    myVar.classList.remove("para-style");
}