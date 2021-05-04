// document.querySelector("button").addEventListener("click" , myFuntion);

// function myFuntion (){
//     alert ("Hello");
// }

// document.querySelector("button").addEventListener("click" , function (){
//     alert ("HI ")
// });


// document.querySelector("h1").addEventListener("click" , function (){
//     alert ("HI ")
// });

var myVAr = document.querySelector("h1");

myVAr.addEventListener("mouseover" ,function(){
    myVAr.classList.add("my-style");
})

myVAr.addEventListener("mouseout" ,function(){
    myVAr.classList.remove("my-style");
})