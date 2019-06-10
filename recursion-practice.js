// Counting sheep
const numSheep = function(count){
  if(count === 0){
    console.log('All sheep jumbed over the fence');
    return;
  }
  console.log(`${count}: Another Sheep jump over the fence`);

  numSheep(count -1);
}

numsheep(5);

function powerCalculator(int, exp){
  if(exp < 0){
    return 'exponent should be greater than 0'
  }
  if(exp === 0){
    return 1;
  }

  const retValue = int * powerCalculator(int, exp -1);
  console.log(retValue);
  return retValue;
}

powerCalculator(10, 4);