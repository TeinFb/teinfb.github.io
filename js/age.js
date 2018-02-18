$(function(){
var birthdate = new Date("1991/03/11");
var cur = new Date();
var diff = cur-birthdate; // This is the difference in milliseconds
var test = Math.floor(diff/31557600000); // Divide by 1000*60*60*24*365.25
console.log(test);
$('.age').html(test+' ans');
});
