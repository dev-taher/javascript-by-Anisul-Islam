/* var myVar = document.querySelectorAll(".my-button")[0].addEventListener("click",function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked" ;
});

var myVar = document.querySelectorAll(".my-button")[1].addEventListener("click",function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked" ;
});

var myVar = document.querySelectorAll(".my-button")[2].addEventListener("click",function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + "is clicked" ;
}); */



var len = document.querySelectorAll(".my-button").length;
console.log(len);

for(var i = 0; i<len ; i++){
    var myVar = document.querySelectorAll(".my-button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + "is clicked" ;
    });
}
