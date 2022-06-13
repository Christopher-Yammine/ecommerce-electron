
displayItems();

function displayItems(){
    let mainc=document.getElementById("mainc");
    mainc.innerHTML='';
    let data=new FormData();
    let headers={
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer' + localStorage.getItem("token")
    }
    axios({
        headers:headers,
        method:"get",
        url:"http://127.0.0.1:8000/api/user/getAllItems",
        data:data
    }).then(function(response){
        console.log(response)
        let n=1;
        let row='';
        for (let i=0;i<Math.ceil(response.data.items.length/4);i++){
            for(let j=n;j<response.data.items.length+1;j++){
                row+=`<div class="item">
                <img src="${response.data.items[j-1].picture}">
                <div class="titles">
                    <h1>${response.data.items[j-1].name}</h1>
                    <h1>${response.data.items[j-1].catName}</h1>
                </div>
                <div class="description">
                    <h3>${response.data.items[j-1].description}</h3>
                </div>
                <div class="liked">
                    <span id="heart"><i id=${response.data.items[j-1].id} class="fa fa-heart-o" aria-hidden="true" ></i> </span>
                
                </div>
                
            </div>`;
               
            if (j%4==0) {
                n=j+1;
                break;
                } 
            
            }
            mainc.innerHTML+='<div class="rows">'+row+'</div>'
        }
        let like=document.getElementsByClassName('fa');
        for(let i=0;i<like.length;i++){

          
        
            
            like[i].addEventListener('click',function(event){
                addLike(event.currentTarget.id);
                if(event.currentTarget.classList.contains('fa-heart-o')){
                    event.currentTarget.classList.remove('fa-heart-o');
                    event.currentTarget.classList.add('fa-heart');
                    likeUpdated(event.currentTarget.id);
                    
                } else{
                    event.currentTarget.classList.add('fa-heart-o');
                    event.currentTarget.classList.remove('fa-heart');
                    unLike(event.currentTarget.id);
                }
                ;
            })

            
        }
        function addLike(id){
            let data=new FormData();
            let headers={
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem("token")
            }
            data.append("id_user",window.localStorage.getItem("id"));
            data.append("id_item",id);
            data.append("liked",1);
            axios({
                headers:headers,
                method:"post",
                url:"http://127.0.0.1:8000/api/user/addLike",
                data:data
            }).then(function(response){
                console.log(response)
            }).catch(function(err){
                console.log(err.response.data.message);
            })
        }
        function likeUpdated(id){
            let data=new FormData();
            let headers={
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem("token")
            }
            data.append("id_user",window.localStorage.getItem("id"));
            data.append("id_item",id);
            data.append("liked",1);
            axios({
                headers:headers,
                method:"post",
                url:"http://127.0.0.1:8000/api/user/updateLike",
                data:data
            }).then(function(response){
                console.log(response)
            })
        }
        function unLike(id){
            let data=new FormData();
            let headers={
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem("token")
            }
            data.append("id_user",window.localStorage.getItem("id"));
            data.append("id_item",id);
            data.append("liked",0);
            axios({
                headers:headers,
                method:"post",
                url:"http://127.0.0.1:8000/api/user/updateLike",
                data:data
            }).then(function(response){
                console.log(response)
            })
        }

    
    })
}
