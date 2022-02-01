arr =[2,4,6,8,10];
arr2 =[3,5,7,9,22];

function mul(value, total){
  total = value * total;
  return total;
}

var out = arr.reduce(mul);
console.log(out);