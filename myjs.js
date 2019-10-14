     window.onload = function () { 
            
   
     

}
     
          function loadItemNEW(pasta){
                  document.getElementById("title").innerHTML = pasta;
        var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //  document.getElementById("demo").innerHTML = this.responseText;
        var obj=this.responseText;
        var obj1 = JSON.parse(obj);
        //a0 = obj1.a0;
       // console.log(obj1[0].title);
       for (item of obj1) {
       if (item.title==pasta){
           document.getElementById("price").innerHTML = item.price;
          document.getElementById("description").innerHTML = item.summary;
           
                       var _img = document.getElementById('image');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
newImg.src = 'https://case1352.github.io/'+item.image;
           
       }
       }
      //  document.getElementById("price").innerHTML = obj1[0].price;
    }
};
xhttp.open("GET", "items.json", true);
xhttp.send();
            
     }
     
     function loadItem(){
                  var tt =  document.getElementById("title").innerHTML;
        var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //  document.getElementById("demo").innerHTML = this.responseText;
        var obj=this.responseText;
        var obj1 = JSON.parse(obj);
        //a0 = obj1.a0;
       // console.log(obj1[0].title);
       for (item of obj1) {
       if (item.title==tt){
           document.getElementById("price").innerHTML = item.price;
          document.getElementById("description").innerHTML = item.summary;
           
                       var _img = document.getElementById('image');
var newImg = new Image;
newImg.onload = function() {
    _img.src = this.src;
}
newImg.src = 'https://case1352.github.io/'+item.image;
           
       }
       }
      //  document.getElementById("price").innerHTML = obj1[0].price;
    }
};
xhttp.open("GET", "items.json", true);
xhttp.send();
            
     }
       function addComment(){
           console.log(document.getElementById("comment").value);
           var date1 = new Date().toLocaleString();
           document.getElementById("comments").innerHTML += date1 + " - " + document.getElementById("name").value + " - " + document.getElementById("comment").value + "<br/>";
           document.getElementById("comment").value="";
          document.getElementById("name").value="";
       }     
            
function rate(sd){
    //"★"
    if (sd == 1)  document.getElementById("rating").innerHTML="★";
   if (sd == 2)  document.getElementById("rating").innerHTML="★ ★";
   if (sd == 3)  document.getElementById("rating").innerHTML="★ ★ ★";
   if (sd == 4)  document.getElementById("rating").innerHTML="★ ★ ★ ★";
   if (sd == 5)  document.getElementById("rating").innerHTML="★ ★ ★ ★ ★";
     document.getElementById("rating").style.color="blue";
}
           