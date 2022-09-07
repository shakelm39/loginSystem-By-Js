let loginBtn = document.getElementById('loginBtn');
let msg = document.getElementById('msg');

loginBtn.addEventListener('click',function(){
	let acc_no = document.getElementById('acc_no').value;
	let pass = document.getElementById('pass').value;

	if (acc_no=='') {
		msg="<span style='color:red;'>Please Enter Account number!</span>";
	}else if(pass==""){
		msg="<span style='color:red;'>Please Enter Password!</span>";
	}
	else{
		if (acc_no=='123456' && pass == "123456") {
			msg="<span style='color:green;'>Login Success!</span>";
			
		}else {
			msg="<span style='color:red;'>Wrong Account number or Password!</span>";
		}
	
	}
	document.getElementById('msg').innerHTML= msg;
});

