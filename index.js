// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  //returns the number of blocks given a value
  if (blocks <= 42) {
    return 42 - blocks;
  } else {
    return blocks - 42;
  }
}
 
 
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}