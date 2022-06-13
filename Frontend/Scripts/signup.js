let base64String = "";
function imageUploaded() {
	var file = document.querySelector(
		'input[type=file]')['files'][0];

	var reader = new FileReader();
	
	
	reader.onload = function () {
       
		base64String = reader.result;
		var disp=document.getElementById('display');
        disp.innerHTML='';
		disp.innerHTML=`<img src="`+base64String+`">`
	}
	reader.readAsDataURL(file);

}
let back=document.getElementById('back');
back.addEventListener('click',function(){
    window.location.href="../index.html";
});
let btn=document.getElementById('btn');
btn.addEventListener('click',signup);
function signup(){
    fname=document.getElementById('fname').value;
    lname=document.getElementById('lname').value;
    email=document.getElementById('email').value;
    pass=document.getElementById('password').value;
    gender=document.getElementById('gender').value;
    disp=base64String;
    let data=new FormData();
    data.append("name",fname)
    data.append("lastname",lname)
    data.append("gender",gender)
    data.append("email",email)
    data.append("password",pass)
    data.append("profile_pic",disp)

    axios({
        method:"post",
        url:"http://127.0.0.1:8000/api/register",
        data:data
    }).then(function(response){
        console.log(response);
        window.location.href="../index.html";
    }).catch(function(err){
        console.log(err)
    })
}