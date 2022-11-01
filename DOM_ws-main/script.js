// var plus = document.getElementsByClassName("plus");
// var minus = document.getElementsByClassName("minus");
// var p = document.getElementsByTagName("p");
console.log(document);
var plus = document.querySelectorAll(".plus");
console.log(plus);
var minus = document.querySelectorAll(".minus");
console.log(minus);

function inc(e) {
  var btn = e.target;
  console.log(btn);
  var div = btn.parentElement;
  console.log(div.parentElement.parentElement);
  var tr = div.parentElement.parentElement;
  var unitPrice = Number(tr.querySelector(".unitPrice").innerHTML);
  var price = tr.querySelector(".price");
  console.log(unitPrice.innerHTML);
  var p = div.querySelector("p");
  console.log(p);
  p.innerHTML++;
  price.innerHTML = p.innerHTML * unitPrice;
  somme();
}

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", inc);
}
function ince(e) {
  var btn = e.target;
  console.log(btn);
  var div = btn.parentElement;
  var tr = div.parentElement.parentElement;

  console.log(div);
  var unitPrice = Number(tr.querySelector(".unitPrice").innerHTML);
  var price = tr.querySelector(".price");
  console.log(unitPrice.innerHTML);

  var p = div.querySelector("p");
  console.log(p);
  if (p.innerHTML > 0) {
    p.innerHTML--;
    price.innerHTML = p.innerHTML * unitPrice;
    somme();
  }
}
for (let i = 0; i < minus.length; i += 1) {
  minus[i].addEventListener("click", ince);
}

var like = document.getElementsByClassName("like");
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    if (like[i].style.color == "red") {
      like[i].style.color = "#424242";
    } else {
      like[i].style.color = "red";
    }
  });
}
var all = document.getElementById("total");
var total = Number(all.innerHTML);
console.log(typeof total);
//
var prices = document.querySelectorAll(".price");
console.log(prices);

function somme() {
  var s = 0;
  for (let i = 0; i < prices.length; i++) {
    s = s + Number(prices[i].innerHTML);
  }
  all.innerHTML = s;
}
var deleteBtns = document.getElementsByClassName("delete");
function del(e) {
  var btn = e.target;
  var tr = btn.parentElement.parentElement.parentElement.parentElement;
  var price = tr.querySelector(".price");
  price.innerHTML = 0;
  tr.remove();
  console.log(tr);
  somme();
}
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", del);
}
