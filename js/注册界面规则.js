window.onload = function () {
    var userName = document.getElementById("userName");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var postcode = document.getElementById("postcode");
    var id = document.getElementById("id");

    userName.onblur = function user(){
        var result = this.value.match(/[\w]{6,14}/);
        if (result == null){
            document.getElementById("span1").innerText="用户名不符合规则";
        }else{
            document.getElementById("span1").innerText="√";
        }
    }

    password.onblur = function(){
        var result = this.value.match(/[a-z0-9A-Z]{6,14}/);
        if (result == null){
            document.getElementById("span2").innerText="密码不符合规则";
        }else{
            document.getElementById("span2").innerText="√";
        }
    }

    password2.onblur = function(){
        var pwdvalue = password.value;
        if (pwdvalue != this.value){
            document.getElementById("span3").innerText="两次密码不一致";
        }else{
            document.getElementById("span3").innerText="√";
        }
    }

    email.onblur = function () {
        var result = this.value.match(/[a-z0-9A-Z]{5,11}(@163|@qq|@126)(\.com|\.cn|\.org)/);
        if (result == null){
            document.getElementById("span4").innerText="邮箱不符合规则";
        }else{
            document.getElementById("span4").innerText="√";
        }
    }

    phone.onblur = function(){
        var result = this.value.match(/\+86([0-9]{11})/);
        if (result == null){
            document.getElementById("span5").innerText="手机号不符合规则";
        }else{
            document.getElementById("span5").innerText="√";
        }
    }
    postcode.onblur = function(){
        var result = this.value.match(/[0-9]{6}/);
        if (result == null){
            document.getElementById("span6").innerText="邮政编码不符合规则";
        }else{
            document.getElementById("span6").innerText="√";
        }
    }
    id.onblur = function(){
        var result = this.value.match(/[0-9]{17}(x|([0-9]{1}))/);
        if (result == null){
            document.getElementById("span7").innerText="身份证号不符合规则";
        }else{
            document.getElementById("span7").innerText="√";
        }
    }
}
