"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Meadow Green
   Date:   1-6-19

*/
runClock();

function runClock(){

var currentYear=new Date();

var dateStr=currentYear.toDateString();          // dateStr= 1/7/2020
var timeStr=currentYear.toLocaleTimeString();    //timeStr= 1:54:23 pm

//Display the current date and time
document.getElementById("dateNow").innerHTML= dateStr + "<br/>" + timeStr ;

var newYear= new Date("January 1, 2021");
var nextYear= currentYear.getFullYear()+1;
newYear.setFullYear(nextYear);

var daysLeft=(newYear - currentYear)/(1000*60*60*24);
var hrsLeft=(daysLeft - Math.floor(daysLeft))*24;
var minsLeft= (hrsLeft - Math.floor(hrsLeft))*60;
var secsLeft= (minsLeft - Math.floor(minsLeft))*60;


document.getElementById("days").textContent=Math.floor(daysLeft);
document.getElementById("hrs").textContent= Math.floor(hrsLeft);
document.getElementById("mins").textContent=Math.floor(minsLeft);
document.getElementById("secs").textContent=Math.ceil(secsLeft);
}




function calcArea(length, width){
   var area= length*width;
   return area;
}
var squareArea= calcArea(6,6);

console.log(squareArea);



function circleArea(radius){
   var area= Math.pow(radius, 2) + "pi";
   return area;
}
 var circArea= circleArea(4);
  console.log(circArea);




function distance(x1, y1, x2, y2){
   var dist= Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
   return dist;
}
var distanceVar= distance(1,1,4,5);
console.log(distanceVar);