// This is just me excerising a few things I've learned without watching a tutorial.


// Declared a function to show what item was picked up.
function pickUp(item) {
    console.log(`You picked up a ${item}`);
    return item;
}

// list of things on the floor
ontheFloor = ["sword", "garbage", "corpse"];

console.log("You see a few things on the floor what do you pick up?");
console.log("You see a " + ontheFloor + ".");

// A function that returns what's on the floor.

function floorItems() {
    return ontheFloor;
}


console.log("The floor has the following items: " + floorItems() + ".");

// Assigning variable to position of the items in the ontheFloor list.
let sword = ontheFloor[0];
let trash = ontheFloor[1];
let corpse = ontheFloor[2];

// Variable to show player's choice in what they picked up.
let playerPickUp = corpse;


// Made list of whats in the players inventory.
playerInventory = ["water bottle"];

// Made a switch statement to base off what the player picked up that is no longer on the floor and now added to the player's inventory.
switch (playerPickUp) {
    case sword:
        pickUp(sword);
        sword = ontheFloor.splice(0, 1);
        console.log(ontheFloor);
        sword = playerInventory.unshift(sword);
        console.log(playerInventory);
        break;
    case trash:
        pickUp(trash);
        sword = ontheFloor.splice(1, 1);
        console.log(ontheFloor);
        trash = playerInventory.unshift(trash);
        console.log(playerInventory);
        break;
    case corpse:
        pickUp(corpse);
        sword = ontheFloor.splice(2, 2);
        console.log(ontheFloor);
        corpse = playerInventory.unshift(corpse);
        console.log(playerInventory);
        break;
    default:
        console.log(`Invalid Entry.`);
}






