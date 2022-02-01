arr =[2,4,6,8,10];
arr2 =[3,5,7,9,22];

function even(value){
    if( (value%2) == 0){
      return true;
    }else{

      return false;
    }
}

var out = arr.filter(even);
var out2 = arr2.filter(even);

console.log(out);
console.log(out2);


