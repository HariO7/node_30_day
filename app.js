let str = "00000A";
let pattern = /[A-Fa-f0-9]+$/g;

let res = str.match(pattern);
if(res){
	console.log("It is a hexadecimal");
}else{
	console.log("Not a hexadecimal");
}