let str = "Aa#";
let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,16}$/g;

let res = str.match(pattern);
if(res){
	console.log("It is a valild password");
}else{
	console.log("it is a invalid password");
}