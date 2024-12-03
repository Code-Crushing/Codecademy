let tempObj = {
    _num: 22,
    set num(numIn) { 
      _num = numIn;
    }
  };

console.log(tempObj)

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1
