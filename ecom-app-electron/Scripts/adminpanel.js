const { default: axios } = require("axios");

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
   window.onload=function(){
    
   
    let btn=document.getElementById("btn");
    let btn1=document.getElementById("btn1");

    function displayCat(){
        let data=new FormData();
        axios({
            method:"get",
            url:"http://127.0.0.1:8000/api/getCategories",
            data:data
        }).then(function(response){
            
           
            let row='';
       
            for (let i=0;i<response.data.categories.length;i++){
                row+=`<option value="${response.data.categories[i].id}">${response.data.categories[i].name}</option>`
            }
            document.getElementById('categoryId').innerHTML='';
            document.getElementById('categoryId').innerHTML+=row;
           
         

        })
    }

    function addCategory(){
        let cat=document.getElementById('category').value;
        let id=window.location.href.split('id=')[1];
        data =new FormData();
        data.append("name",cat);
        data.append("user_id",id);
        axios({
            method:"post",
            url:"http://127.0.0.1:8000/api/addCategory",
            data:data
        }).then(function(response){
            displayCat();
            document.getElementById('category').value='';
        })
    }

   


    function addItem(){
    let id=window.location.href.split('id=')[1];
    let item=document.getElementById("itemname").value;
    let desc=document.getElementById("desc").value;
    let category=document.getElementById("categoryId").value;
    let disp=base64String;
    data= new FormData();
    data.append("user_id",id);
    data.append("name",item);
    data.append("description",desc);
    data.append("picture",disp);
    data.append("category_id",category);
    axios({
        method:"post",
        url:"http://127.0.0.1:8000/api/addItem",
        data:data
    }).then(function(response){
        console.log(response);
        document.getElementById("itemname").value='';
        document.getElementById("desc").value='';
        document.getElementById('display').innerHTML='';
    })
}
// auto-fired functions and eventlisteners
btn.addEventListener('click',addItem);
btn1.addEventListener('click',addCategory);

displayCat(); 


}