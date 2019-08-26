// Exo 1
var cF = document.querySelector("footer");
let count = 0
var oFc = function()
{
    count += 1;
    console.log(`click number ${count}`);

};
cF.addEventListener("click", oFc);
// cF : clicker Footer, oFC : on Footer clicker

//Exo 2
let cH = document.getElementsByClassName("navbar-toggler-icon");
var oHc = function()
{
  let x = document.getElementById("navbarHeader").classList.toggle("collapse");
  console.log(x);
};
 cH[0].addEventListener("click", oHc);
// cH : clicker Hamburger, oHc : on Hamburger Clicker

//Exo 3
let cBs = document.getElementsByClassName("btn-outline-secondary");
console.log(cBs[0]);
let redColor = function()
{
  var cCt = document.getElementsByClassName("card-text");
  cCt[0].style.color = "red";
};
cBs[0].addEventListener("click", redColor);
// cB : clicker Button secondary, cC : clicker Card text

//Exo 4
console.log(cBs[1]);
let defaultColor = function()
{
  var cCt = document.getElementsByClassName("card-text");
  if (cCt[1].style.color === 'green')
      cCt[1].style.color = 'black';
  else
      cCt[1].style.color = 'green';
};
cBs[1].addEventListener("click", defaultColor);
// cBs : clicker Button secondary, cC : clicker Card text

//Exo 5
//link = document.querySelector('link');
//console.log(link.href);
let cHeader = document.querySelector("header");
console.log(cHeader);
let onHdrClk = function()
{
  x = document.styleSheets[0];
  if (x.disabled === false)
      x.disabled = true;
  else
      x.disabled = false;
};
cHeader.addEventListener("dblclick", onHdrClk);

//Exo 6

//Exo 7

//Exo 8

//Exo 9
