function popup(message) {
  alert(message);
}
function swap(id) {
  if (id === "s20") {
    var image = document.getElementById(id);
    image.src =
      "https://www.gizmochina.com/wp-content/uploads/2020/02/Samsung-Galaxy-S20-Ultra-500x500.jpg";
  } else if (id === "12pro") {
    document.getElementById(id).src =
      "https://img.router-switch.com/media/customoptions/129/2/4/iphone-12-pro-max-blue.jpg";
  } else if (id === "note20") {
    document.getElementById(id).src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodTTvSgOnB_sBLbrxtNOLCJSWJcB_-TyW3Z43gW0thDUpDOHp7oapHls26YXq6D2xoyI&usqp=CAU";
  } else if (id === "nova7i") {
    document.getElementById(id).src =
      "https://www.pakmobizone.pk/wp-content/uploads/2020/07/Huawei-nova-7i-skyline-grey.png";
  } else {
    var image = document.getElementById("car"); //we can also store element in a variable for later and for multi-purpose use
    image.src =
      "https://img.mensxp.com/media/photogallery/2020/Aug/most-expensive-cars-in-the-world-1400x653_5f33cd506d2a7.jpeg?w=820&h=540&cc=1";
  }
}
function set(id) {
  if (id === "s20") {
    document.getElementById(id).src =
      "https://cdn.homeshopping.pk/product_images/x/761/7101w7I2tIL._SX679___21187_zoom.jpg";
  } else if (id === "12pro") {
    document.getElementById(id).src =
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021660000";
  } else if (id === "note20") {
    document.getElementById(id).src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyas7l38bhNegFMyg4GE-u0sFdz1_XpEAUBQ&usqp=CAU";
  } else if (id === "nova7i") {
    document.getElementById(id).src =
      "https://lahorecentre.com/wp-content/uploads/2020/07/black-i.jpg";
  } else {
    var image = document.getElementById("car");
    image.src =
      "https://d3nv2arudvw7ln.cloudfront.net/images/952/372/slide1_MainMenu%20HP%20CAR.jpg";
  }
}

function increment(counterFieldId){
    document.getElementById(counterFieldId).value++;
}
function decrement(counterFieldId){
    document.getElementById(counterFieldId).value--;
}
function makeFieldRed(counterFieldId){
    document.getElementById(counterFieldId).style.background = "red";
}
function makeFieldwhite(counterFieldId){
    document.getElementById(counterFieldId).style.background = "white";

}

function deleteRow(x){
  var i = x.parentNode.parentNode.rowIndex;
  document.getElementById('myTable').deleteRow(i);
}

var names = [
  "Ali",
  "Ahmed",
  "majid",
  "Rehan",
  "Arif",
  "Zain",
  "Hussain",
  "Amir",
  "ali",
  "Majid",
];
var classes = [10, 9, 9, 10, 7, 8, 9, 7, 10, 8];
document.write(
  "<table id = 'myTable'> <tr> <th>Index</th> <th>Name</th> <th>Class</th> <th></th></tr>"
);
for (var i = 0; i < names.length; i++) {
  document.write(
    "<tr id = '" +
      i +
      "'><td>" +
      i +
      "</td> <td>" +
      names[i] +
      "</td> <td>" +
      classes[i] +
      "</td> <td><button onclick = 'deleteRow(this)'>Delete</button></td></tr>"
  );
}
document.write("</table>");
