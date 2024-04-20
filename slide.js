
let arr = JSON.parse(window.localStorage.getItem('books')) || [];









for(var i=0 ; i<arr.length ; ++i){
    let p=document.getElementById(`slider-${arr[i].category.toLowerCase()}`)
    let book=document.createElement("div")

    book.setAttribute("class","book");
    book.setAttribute("data-id",arr[i].id)
    
    
    if(location.pathname=="/C:/web-project-library/list_books_user.html"){

        book.innerHTML=`  

        <div class="image" >
        <img src="imgs/library books/silentpatient.png" alt="">
      </div>
      
      
      <div class="info">
      
        <div class="book-name"><span>Book Name:</span>${arr[i].name}</div>
      
        <div class="author">
          <span>Book Author: ${arr[i].author} </span>.
        </div>
      
        
          <button class="borrow" data-borrowed="true" >Borrow</button>
          <div class="error-borrow"></div>
      
      </div>
      
        `
    p.prepend(book);

    }

    else{
        book.innerHTML=`  
        
        <div class="image" >
          <img src="imgs/library books/silentpatient.png" alt="">
        </div>
        
        
        <div class="info">
        
          <div class="book-name"><span>Book Name:</span>${arr[i].name}</div>
        
          <div class="author">
            <span>Book Author: ${arr[i].author} </span>.
          </div>
        
          <button id="edit"><a href="edit_book.html">Edit</a></button>
          <button class="delete">Delete</button>
        
        </div>
        
        `

        p.prepend(book);
    }
    

  }


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

if(location.pathname=="/C:/web-project-library/list_books_user.html"){


    let x=document.querySelectorAll(".borrow")
    
   
    
    console.log(x)

    
    x.forEach(function(ele){


        ele.addEventListener("click",function(){

            

            let y=ele.nextElementSibling;
            console.log(y);
            
                if(ele.getAttribute("data-borrowed") =="true"){
                
                
                    y.innerHTML="borrowed";
                    
            
                    setTimeout(function(){
                       y.innerText="";
                        //    y.style.color="red"
                    },4000)
                
                }
            
                else{
                    y.innerHTML="";
                   
                }
            
            }
        )

    })

}




let item=document.querySelectorAll(".image");



// console.log(item)
item.forEach(function(ele){



    ele.onclick=function(){

        let parent_ele=ele.parentElement;

        if(parent_ele.hasAttribute("data-id")){
            
                    window.localStorage.setItem("last-stored",parent_ele.getAttribute("data-id"));
                    location.href="book1.html"
                    return false;

        }
    }
})