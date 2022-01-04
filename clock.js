// JavaScript Document



document.title = "Digital clock";
      // started here
var d = new Date();
console.log(d.getDate());

var dates =
 [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

console.log("todays date is" + dates[d.getDate()]);
console.log("the hour is " + d.getHours())
console.log("the minutes" + d.getMinutes());
console.log("the seconds is" + d.getSeconds());
//var time = today.getHours() + ":" + today
var today = new Date();
var time = today.getHours() + ":" + today
console.log(new Date());
date = document.querySelector('.date');
hours = document.querySelector('.hours');
minutes = document.querySelector('.minutes');
sec = document.querySelector('.sec');

setInterval(function(){
	var dt = new Date();
	
	
	
	d = dt.getDate();
	h = dt.getHours();
	m = dt.getMinutes();
	s = dt.getSeconds();
	
	date.textContent = d;
	hours.textContent = h;
	minutes.textContent = m;
	sec.textContent = s;
},1000);

document.addEventListener("DOMContentLoaded", function(){
 console.log(this); //returns #document
});
