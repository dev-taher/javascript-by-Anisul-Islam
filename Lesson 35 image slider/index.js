var photos = ["img/2.jpg","img/3.jpg","img/4.jpg","img/6.jpg"];

var imgTag = document.querySelector("img");


var count = 0;

function next(){
  count++;
  if(count>=photos.length){
      count = 0;
      imgTag.src = photos[count];
  }else{
      imgTag.src = photos[count];
  }
}
function prev(){
    count--;
    if(count<0 ){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}