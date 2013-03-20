//alert("JavaScript works!");

/*
 * Mitchell VanBurenII
 * SDI Assignment 2
 * 1303
 *
 * This code will be just a more indepth and none static way to lower your car with
 * the brand coilovers and the amount that is preffered by the mechanic and why it is
 * preffered.  */
//****Variables****
var mechanic = " Mitchell";
var toolow = true;
var stockheight = 3.5;
var measurement = "inches";
var brand1 = "Racelands";
var brand2 = "FK";



//****Procedure****
console.log("Mechanic" + ": Hey, good to see you today! My name is" + mechanic + ",how may i help you out!?");
console.log("Mechanic" + ": Ok,Ok, i see that you are wanting to lower this. Lets check where the height at right now.");
 
 if(stockheight > 1.5){
 
    console.log("Mechanic" + ": We need to drop this a good bit" );
    console.log("Mechanic" + ": You are sitting at about " + stockheight + " " + measurement);
    
 }
 else{
    console.log(mechanic + ": Haha you dont need me, your just fine. Anything else i can do for ya!?");
    }
    
//****Boolean Function****

console.log("Mechanic"+ ": So lets think anout this, we have 2 brands we sale.");



var coilchoice = function (Brand) {
    
    var coil = Brand;
    var choice = true;
    if (choice == true ) {
    
    console.log ("Mechanic" + ": Yes! " + Brand + " Would be the perfect choice because of the drop!");
    
    return;

    }  

}

coilchoice ("RaceLands");

console.log("Mechanic" + ": Now that we have made our decision lets drop it!");


//****Number Function****

var prefHeight = 1.0;
var Racelands = 3.0;
console.log("Mechanic"+ ": Now we will drop this in increments just to be safe.");

var height = function (lowerIt) {
    
    for (stock = 3.5; stock > lowerIt; stock -= 0.5) {
        var remaining = stock - lowerIt;
        
       if (remaining > 0.5) {
       console.log("Mechanic"+ ": " + remaining + " Remaining!");
       console.log("Mechanic"+ ": Lower!");
    }
    else{
        console.log("Mechanic" + ": We Are THERE! CONGRATS!");
    }
    

    
}
}
height (0.5)

//****String Function****
console.log("Mechanic"+ ": Ok we are through! Lets go sign some paper work!");
console.log("Mechanic"+ ": Could you tell me your name please?");


var name = function (first, last) {
    var fullName = first + last;
    console.log("Client: My name is " + fullName);
    console.log("Client : I just wanted to say thank you for your services!")
}

name ("Johnny ", "Rocket")



//****Array Function****

var parts = [ "Coils", "Bolts/Misc"]
var price = [450, 50]

console.log("Mechanic: Hey, its not problem! So how would you like to pay for this today?");
console.log("Client: Could i get the price on the parts please?");
console.log("Mechanic: Oh yes, for sure thats my fault, it will be....." )
console.log("Mechanic: " + "$" + price[0] + " for the " + parts[0] + " and " + "$" + price[1] + " for the " + parts[1] + "." );
console.log("Client: Just cashed my check! Ill pay cash!");


var cost = function (total)  {

var allPayment = total


    
    for (i = 0; i< total; i +=50 ){
        console.log(total - i + " Remaining!");
        }

    console.log("Mechanic: Thank you for your bussiness! Come Back again sometime!");
    console.log("Mechanic: WOOOWOOOOWOO easy throwing those heavy bills, thats all i need!")
    console.log("Client: Your welcome! Thank you for the great hospitality and.....");
    
}
cost(500);

console.log("Making My Ride Stezzy!"); //This is going to be a code signature for me :)
