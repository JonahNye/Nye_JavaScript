/* Activity 1 */






/*Activity 2  */
var start = prompt("Ready to play?", "yes or no").toLowerCase();
var given = "";
if (start === "no") {
  Alert("Darn");}
else if (start == "yes") {
  do {
    var pleasetype = prompt("Please type a word").toLowerCase();
    given = given += pleasetype + " ";
  } while ((repeat = prompt("How about another round, eh?").toLowerCase() === "yes")
)
  console.log(given);
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
