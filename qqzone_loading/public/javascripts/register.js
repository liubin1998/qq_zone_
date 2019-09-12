function toValid() {
    let userLength=document.getElementById("user").value.length;
    let passValue =document.getElementById("pass").value;
    let passVerValue = document.getElementById("pass_ver").value;
    if(userLength <= 8)
    {
        document.getElementById("user_err").innerHTML = "用户名长度必须大于8";
        return false;
    }else{
        document.getElementById("user_err").innerHTML ="";
    }
    if(passValue.length <= 8)
    {
        document.getElementById("pass_err").innerHTML = "密码长度必须大于8";
        return false;
    }else{
        document.getElementById("pass_err").innerHTML ="";
    }
    if(passValue != passVerValue)
    {
        document.getElementById("pass_ver_err").innerHTML = "两次密码必须一致";
        return false;
    }else{
        document.getElementById("pass_ver_err").innerHTML ="";

    }
    return true;
}