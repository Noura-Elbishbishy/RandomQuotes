
var quotes = [ 
 "It is during our darkest moments that we must focus to see the light."
 ,"The best way to predict your future is to create it."
 ,"Happiness is the best makeup."
 ,"The only way to do great work is to love what you do."
 , "Wherever you go, no matter what the weather, always bring your own sunshine."
 , "A day without laughter is a day wasted."
 ,"If you want to live a happy life, tie it to a goal, not to people or things."
 ,"If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes."
 ,"Happiness is not by chance, but by choice."
 ,"Spread love everywhere you go. Let no one ever come to you without leaving happier."
 ,"Life is what happens when you're busy making other plans." 
 ,"The future belongs to those who believe in the beauty of their dreams."
 , "Every day may not be good, but there is something good in every day." 
] 
// x = 0
// function showNewQuote() {
//   var i = document.getElementById("demo").innerHTML = quotes[x];
// x = (x + 1) % quotes.length;
// }
x = 0
function showNewQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length); //math.floor w math.random both R functions,Math.random() de btgenerte random number 0:1 "decimal"
   //math.floor htakhod al float number w t2rbo l nearest int
  document.getElementById("demo").innerHTML = quotes[randomNumber]; 
}