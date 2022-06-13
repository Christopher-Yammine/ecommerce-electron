
let signin=document.getElementById("signin");
signin.addEventListener('click',login);


function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    let data =new FormData();
    data.append("email",email);
    data.append("password",password);

    axios({
        method:"post",
        url:"http://127.0.0.1:8000/api/login",
        data:data
    }).then(function(response){
        if(response.data.user){
            console.log(response);
        }
        else {
            document.getElementById('msg').innerText="username/password incorrect"
            setTimeout(() => {
                document.getElementById('msg').innerText=""
            }, 2000);
        }

            
        
    }).catch(function(err){
        document.getElementById('msg').innerText="username/password incorrect"
        setTimeout(() => {
            document.getElementById('msg').innerText=""
        }, 2000);
        
    })

}