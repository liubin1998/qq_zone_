function tovalid(){
	let userLength = document.getElementById("form_id").value.length;
	let passValue = document.getElementById("form_pass").value;
	let passTwoValue = document.getElementById("form_pass-two").value;
	// if(userLength > 8 && passValue.length > 8 && passValue == passTwoValue){
	// 	return true;
	// }else{
	// 	return false;
	// }
	if(userLength <=5){
		document.getElementById("user_err").innerHTML = "用户名长度必须大于5！！！";
		return false;
	}else{
		document.getElementById("user_err").innerHTML = "";
	}
	if(passValue.length <= 5){
		document.getElementById("pass_err").innerHTML = "密码长度必须大于5！！！";
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
	alert('注册成功！点击“确定”跳转到登录页面');
	return true;
}