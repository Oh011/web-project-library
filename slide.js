
let arr = JSON.parse(window.localStorage.getItem('books')) || [];








if(location.pathname!="/C:/web-project-library/profile_user.html"){

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
          
            
              <button class="borrow" data-borrowed="${arr[i].borrowed}" >Borrow</button>
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
              <div class="error-delete"></div>
            
            </div>
            
            `
    
            p.prepend(book);
        }
        
    
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




    class borrowed{

        constructor(i,a,b,c,d,e){

            this.id=i;
            this.bookname=a;
            this.author=b;
            this.category=c;
            this.owner_username=d;
            this.pass=e;
        }
    }


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
                    let arr_books = JSON.parse(window.localStorage.getItem('books')) || [];

                    console.log(arr_books);
                    
                    let arr_user = JSON.parse(window.localStorage.getItem('last-sign')) || null;

                    console.log(arr_user)


                    let info_div=ele.parentElement;
      
                    let book_div=info_div.parentElement ;
                    let book_id=book_div.getAttribute("data-id");
                    let lb = JSON.parse(window.localStorage.getItem('borrowed')) || [];


                    console.log(book_id)


                    for(var i=0 ; i<arr_books.length ; ++i){

                        if(arr_books[i].id==book_id){

                            let bor=new borrowed(arr_books[i].id , arr_books[i].name
                            , arr_books[i].author, arr_books[i].category, arr_user.name , arr_user.pass)

                            arr_books[i].borrowed="true";
                            window.localStorage.setItem("books",JSON.stringify(arr_books))


                            lb.push(bor);
                            window.localStorage.setItem("borrowed",JSON.stringify(lb));
                            break;



                        }
                    }


                    y.innerHTML="";
                    ele.setAttribute("data-borrowed","true")

                   
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