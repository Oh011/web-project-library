
let books = JSON.parse(window.localStorage.getItem('books')) || [];


let last_sign=JSON.parse(window.localStorage.getItem('last-sign')) || null


let borrowed_books = JSON.parse(window.localStorage.getItem('borrowed')) || [];


let  added_books = JSON.parse(window.localStorage.getItem('added')) || [];







 for(var i=0 ; i<books.length ; ++i){
        let p=document.getElementById(`slider-${books[i].category.toLowerCase()}`)
        let book=document.createElement("div")
    
        book.setAttribute("class","book");
        book.setAttribute("data-id",books[i].id)
        
        
        if(last_sign.admin=="false"){
    
            book.innerHTML=`  
    
            <div class="image" >
            <img src="imgs/library books/silentpatient.png" alt="">
          </div>
          
          
          <div class="info">
          
            <div class="book-name"><span>Book Name:</span>${books[i].name}</div>
          
            <div class="author">
              <span>Book Author: ${books[i].author} </span>.
            </div>
          
            
              <button class="borrow" data-borrowed="${books[i].borrowed}" >Borrow</button>
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
            
              <div class="book-name"><span>Book Name:</span>${books[i].name}</div>
            
              <div class="author">
                <span>Book Author: ${books[i].author} </span>.
              </div>
            
              <button id="edit"><a href="edit_book.html">Edit</a></button>
              <button class="delete">Delete</button>
              <div class="error-delete"></div>
            
            </div>
            
            `
    
            p.prepend(book);
        }
        
    
      }



const animation_slider=document.querySelectorAll(".slider .book")

let counter=0;


function left(){


    if(counter===0){
        counter=animation_slider.length/3 -1;
    }

    else{

        counter--;
    }
    scroll();

}


function right(){


    if(counter=== animation_slider.length /3 -1){

        counter=0;
    }
    else{
        counter++;

    }

    scroll();
}


function scroll(){

    animation_slider.forEach(function(item){


        item.style.transform= `translateX(-${counter*1250}px)`
    })
}




if(last_sign.admin=="false"){




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


    let current_button=document.querySelectorAll(".borrow")
    
   

    

    
    current_button.forEach(function(ele){


        ele.addEventListener("click",function(){

            

            let y=ele.nextElementSibling;
          
            
                if(ele.getAttribute("data-borrowed") =="true"){
                
                
                    y.innerHTML="borrowed";
                    
            
                    setTimeout(function(){
                       y.innerHTML="";
                        //    y.style.color="red"
                    },4000)
                
                }
            
                else{
                   

                
                    
                  
                  


                    let info_div=ele.parentElement;
      
                    let book_div=info_div.parentElement ;
                    let book_id=book_div.getAttribute("data-id");
      


                   


                    for(var i=0 ; i<books.length ; ++i){

                        if(books[i].id==book_id){

                            let new_borrowed=new borrowed(books[i].id , books[i].name
                            , books[i].author, books[i].category, last_sign.name , last_sign.pass)

                            books[i].borrowed="true";
                            window.localStorage.setItem("books",JSON.stringify(books))


                            borrowed_books.push(new_borrowed);
                            window.localStorage.setItem("borrowed",JSON.stringify(borrowed_books));
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
                    location.href="book.html"
                    return false;

        }
    }
})




let delete_button=document.querySelectorAll(".delete")








if(delete_button!=null){


    delete_button.forEach(function(current_button){
    


    
    
    
        current_button.addEventListener("click",function(){
    
    
            let info_div=current_button.parentElement;
        
            let src_div=info_div.parentElement;
            
            // console.log(src_div)
            
            
            let so_div=src_div.parentElement;
          
        
    
            let y=current_button.nextElementSibling;
            
            
            for(var i=0 ; i<books.length ; ++i){
                
                if(books[i].id==src_div.getAttribute("data-id") ){
                    
                    if(books[i].borrowed=="true"){
                        y.innerHTML="can not delete";
                        
                        setTimeout(function(){
                            y.innerHTML=""
                        },3000)
                        break;
    
                    }
                
                   
                so_div.removeChild(src_div);
                    let temp=books[i].id;
    
                    books=books.filter(function(ele ,ind){
    
                        return books[ind].id!=temp;
    
                    })
    
                    added_books=added_books.filter(function(ele,ind){
                        return added_books[ind].id!=temp;
                    })
    
                    window.localStorage.setItem('books',JSON.stringify(books));
                    window.localStorage.setItem("added",JSON.stringify(added_books));
    
                    break;
                }
    
    
            }
    
    
    
    
           
    
    
        })
        
    })

}




