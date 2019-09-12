//console.log("nice!!!!"); //在控制台上显示信息,记得带引号
// let s = "fmemg";
// let s_new = s.substring(1, 3);
// //alert(s_new);
// let a = 1;
// console.log(a);
// console.log(s);
// let list=[1,2,3,4];
// console.log(list);
// // let list=s.split("#");
// console.log(s);
// //alert(a);
// let str=list.join("");
// alert(str);
function tovalid(){
	let userLength = document.getElementById("user").value.length;
	let passValue = document.getElementById("pass").value;
	let passTwoValue = document.getElementById("pass_two").value;
	// if(userLength > 8 && passValue.length > 8 && passValue == passTwoValue){
	// 	return true;
	// }else{
	// 	return false;
	// }
	if(userLength <=8){
		document.getElementById("user_err").innerHTML = "用户名长度必须大于8";
		return false;
	}else{
		document.getElementById("user_err").innerHTML = "";
	}
	if(passValue.length <= 8){
		document.getElementById("pass_err").innerHTML = "密码长度必须大于8";
		return false;
	}
	else{
		document.getElementById("pass_err").innerHTML = "";
	}
	if(passValue != passTwoValue){
		document.getElementById("pass_two_err").innerHTML = "两个密码必须相同";
		return false;
	}
	else{
		document.getElementById("pass_two_err").innerHTML = "";
	}
	return true;
}