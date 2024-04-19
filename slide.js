


const books=document.querySelectorAll(".slider .book")

let counter=0;


function left(){


    if(counter===0){
        counter=books.length/3 -1
    }

    else{

        counter--;
    }
    scroll();

}


function right(){


    if(counter=== books.length /3 -1){

        counter=0;
    }
    else{
        counter++;

    }

    scroll();
}


function scroll(){

    books.forEach(function(item){


        item.style.transform= `translateX(-${counter*1250}px)`
    })
}


let x=document.getElementById("borrow")

let y=document.getElementById("error-borrow")

console.log(x)
console.log(y)


x.onclick=function(){
    
    if(x.getAttribute("data-borrowed") =="true"){
    
    
        y.innerText="can not borrow";
        y.style.color="red"

        setTimeout(function(){
           y.innerText="";
               y.style.color="red"
        },4000)
    
    }

    else{
        y.innerText="";
        y.style.color="red"
    }

  

}    





