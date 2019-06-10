// Code your solution in this file!

function distanceFromHqInBlocks (blocks) {
  //returns the number of blocks given a value
  if (blocks <= 42) {
    return 42 - blocks;
  } else {
    return blocks - 42;
  }
}
 
function distanceFromHqInFeet (feet) {
  distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
  
}