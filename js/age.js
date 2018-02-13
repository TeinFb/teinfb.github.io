var birthdate = new Date("1991/03/11");
var cur = new Date();
var diff = cur-birthdate; // This is the difference in milliseconds
var toto = Math.floor(diff/31557600000); // Divide by 1000*60*60*24*365.25
console.log(age);
$('.age')span.html(Math.round(age)+' ans');
