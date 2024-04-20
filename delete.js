

let bt=document.querySelectorAll(".delete")




let my_div=bt[0].parentElement;

let src_div=my_div.parentElement;


let so_div=src_div.parentElement;





bt.forEach(function(x){
    
    let my_div=x.parentElement;
    
    let src_div=my_div.parentElement;
    
    // console.log(src_div)
    
    
    let so_div=src_div.parentElement;
    let arr=JSON.parse(window.localStorage.getItem('books')) || [];
    
    
    x.addEventListener("click",function(){

        so_div.removeChild(src_div);


        for(var i=0 ; i<arr.length ; ++i){

            if(arr[i].id==src_div.getAttribute("data-id")){

                let temp=arr[i].id;

                arr=arr.filter(function(ele ,ind){

                    return arr[ind].id!=temp;

                })

                break;
            }


        }


        window.localStorage.setItem('books',JSON.stringify(arr));


    })
    
})