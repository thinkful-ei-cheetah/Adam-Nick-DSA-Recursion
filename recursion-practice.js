const numSheep = function(count){
  if(count === 0){
    console.log('All sheep jumbed over the fence');
    return;
  }
  console.log(`${count}: Another Sheep jump over the fence`);

  numSheep(count -1);
}

numsheep(5);

