

let bt=document.querySelectorAll(".delete")









bt.forEach(function(x){
    


    
    
    
    x.addEventListener("click",function(){


        let my_div=x.parentElement;
    
        let src_div=my_div.parentElement;
        
        // console.log(src_div)
        
        
        let so_div=src_div.parentElement;
        let arr=JSON.parse(window.localStorage.getItem('books')) || [];
        let  ad = JSON.parse(window.localStorage.getItem('added')) || [];
    

        let y=x.nextElementSibling;
        
        
        for(var i=0 ; i<arr.length ; ++i){
            
            if(arr[i].id==src_div.getAttribute("data-id") ){
                
                if(arr[i].borrowed=="true"){
                    y.innerHTML="can not delete";
                    
                    setTimeout(function(){
                        y.innerHTML=""
                    },3000)
                    break;

                }
            
               
            so_div.removeChild(src_div);
                let temp=arr[i].id;

                arr=arr.filter(function(ele ,ind){

                    return arr[ind].id!=temp;

                })

                ad=ad.filter(function(ele,ind){
                    return ad[ind].id!=temp;
                })

                window.localStorage.setItem('books',JSON.stringify(arr));
                window.localStorage.setItem("added",JSON.stringify(ad));

                break;
            }


        }




       


    })
    
})