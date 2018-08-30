



/* Activity 1 */
var givennumber = "Enter a number between 1 and 15, please.";
var answer = prompt(givennumber);

var sumcollector = 0;

if (answer < 16) {
for (var i=0; i<=answer; i++) {
    sumcollector +=i;
}}

alert(sumcollector);





/*Activity 2  */
var start = prompt("Ready to play?", "yes or no");
var given = "";
if (start === "no") {
  Alert(Darn);}
else if (start == "yes") {
  do {
    var pleasetype = prompt("Please type a word");
    given = given += pleasetype + " ";
  } while ((repeat = prompt("How about another round, eh?") === "yes")
)
  console.log(given);
}



/*Activity 3 */
var givenname = prompt("What's your name?");
var printname = prompt("Would you like to print your name?");

while (printname.toLowerCase() == "yes") {
     console.log("Hello. My name is " + givenname);
     printname = prompt("Would you like to print your name again?");
     if (printname == "yes") {
         givenname = givenname + "!";
     }
}





/* Activity 4  */
var currentTime = prompt("What time of day is it?", "morning, noon, or evening");

if (currentTime === "morning")
{
  alert("Since it is morning, you should be eating breakfast. We suggest eggs and toast.")
}

else if (currentTime === "noon")
{
  alert("Since it is noon, you should be eating lunch. We suggest a salad, but who am I to judge, I and just a computer with no tastebuds.")
}

else if (currentTime ==="evening")
{
  alert("Since it is evening, you should be eating dinner. We suggest chicken and rice.")
}
