var age = prompt("What is your age?");
var is_subscribed = confirm("Are you subscribed?");




if (age < 18 && is_subscribed == false) {
    console.log( "The user is younger than 18 and is not subscribed");
}

else if (age >= 18 && is_subscribed == false) {
    console.log("The user is 18 and older and not subscribed");
}

else if (age < 18 && is_subscribed == true) {
    console.log("The user is younger than 18 and is subscribed");
}
else {
    console.log("The user is 18 and older and is subscribed");
}