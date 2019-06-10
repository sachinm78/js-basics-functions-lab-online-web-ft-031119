// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  //returns the number of blocks given a value
  if (blocks <= 42) {
    return 42 - blocks;
  } else {
    return blocks - 42;
  }
}
 
 
function distanceFromHqInFeet(blocksTravelled) {
  blocksTravelled = distanceFromHqInBlocks(blocks)
  return blocksTravelled * 264;
}