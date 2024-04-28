

let last_sign = JSON.parse(window.localStorage.getItem('last-sign')) || null;

let borrowed_books = JSON.parse(window.localStorage.getItem('borrowed')) || [];


let books=JSON.parse(window.localStorage.getItem('books')) || [];



let added_books = JSON.parse(window.localStorage.getItem('added')) || [];



let user_type=""


    if(last_sign.admin=="false"){

       user_type="user"
    }

    else{
        user_type="admin" 
    }



let books_type="";


    if(last_sign.admin=="false"){

       books_type="Borrowed Books"
    }

    else{

        books_type="added books"
    }



if(last_sign.admin=="true"){

    document.body.innerHTML=`


<nav class="nav-bar">
<div class="nav-left">
    <h1><a href="added_booksmin_index.html">Bibleoticha<span>.</span></a></h1>
</div>
<div class="nav-center">
    <ul>
        <li class="homee"><a href="index_admin.html" class="home">Home</a></li>
        <li><a href="add_book.html">Add Book</a></li>
        <li><a href="list_books.html">view list of books</a></li>
        <li><a href="sign in.html">Sign in</a></li>
        <li><a href="profile.html">Profile</a></li>
        <li class="log-out">
            <a href="index.html">Log Out</a>
        </li>
    </ul>
</div>
<div class="nav-right">
   <a href="contact us.html"> <i class="fa-solid fa-phone"></i></a>
</div>
</nav>





<div class="about-profile">


<div class="info">

    <h4>Profile Status</h4>

   <p><span>User Name:</span> ${last_sign.name}</p> 
   <p><span>Email:</span>${last_sign.email}.</p>
   <p><span>User Type:</span>${user_type}</p>


</div>





    <div class="left">

        <div class="inside-left">

            <div class="img-inside-left">


                <div class="icons-img-inside-left">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-github"></i>

                </div>

            </div>


    </div>





</div>

</div> 




<h2 class="book-title">${books_type}</h2>

<main class="main1">


<div class="slider" id="slider">






  
  <div class="arrow">
    
    <button class="left" onclick="left()"> &lt </button>
    <button class="right"  onclick="right()"> &gt </button>
  </div>

  </div>


  


  </main>





  






  <footer>
    <div class="container5">
        <div class="about">
            <div class="in-about">
                <img src="imgs/bookicon3jpg.jpg" style="border-radded_booksius: 50%;" alt="">
                <h2>Bibleoticha<span>.</span></h2>
            </div>
            <p>Bibleoticha is an online library madded_bookse to make you comforeturn_buttonable while readded_booksing books</p>
            <h3>Social Media</h3>
            <ul class="social-icons">
                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-whatsapp"></i></a></li>
            </ul>
        </div>
       
        <div class="footer-detail">
            <h3>Get in Touch</h3>
            <ul>
                <li>
                    <i class="fa-solid fa-location-dot"></i>
                    <span>Ahmed Zewail Street - Giza - Egypt</span>
                </li>
  
                <li>
                    <i class="fa-solid fa-envelope"></i>
                    <a href="">bibleoticha@gmail.com</a>
                </li>
  
                <li>
                    <i class="fa-solid fa-phone"></i>
                    <a href="">+01011121314</a>
                </li>
            </ul>
        </div>
    </div>
  </footer> 
  


`

}    


else{


    document.body.innerHTML=`


    <nav class="nav-bar">
    <div class="nav-left">
        <h1><a href="added_booksmin_index.html">Bibleoticha<span>.</span></a></h1>
    </div>
    <div class="nav-center">
        <ul>
            <li class="homee"><a href="index_user.html" class="home">Home</a></li>        
            <li><a href="list_books_user.html">view list of books</a></li>
            <li><a href="sign in.html">Sign in</a></li>
            <li><a href="profile.html">Profile</a></li>
            <li class="log-out">
                <form>
                    <input type="submit" value="Log Out" class="log-out">
                </form>
    </li>
        </ul>
    </div>
    <div class="nav-right">
       <a href="contact us.html"> <i class="fa-solid fa-phone"></i></a>
    </div>
    </nav>
    
    
    
    
    
    <div class="about-profile">
    
    
    <div class="info">
    
        <h4>Profile Status</h4>
    
       <p><span>User Name:</span> ${last_sign.name}</p> 
       <p><span>Email:</span>${last_sign.email}.</p>
       <p><span>User Type:</span>${user_type}</p>
    
    
    </div>
    
    
    
    
    
        <div class="left">
    
            <div class="inside-left">
    
                <div class="img-inside-left">
    
    
                    <div class="icons-img-inside-left">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-github"></i>
    
                    </div>
    
                </div>
    
    
        </div>
    
    
    
    
    
    </div>
    
    </div> 
    
    
    
    
    <h2 class="book-title">${books_type}</h2>
    
    <main class="main1">
    
    
    <div class="slider" id="slider">
    
    
    
    
    
    
      
     <diV class="arrow">
     <button class="left" onclick="left()"> &lt </button>
     <button class="right"  onclick="right()"> &gt </button>
     </diV>
        

    
      </div>
    
    
      
    
    
      </main>
    
    
    
    
    
      
    
    
    
    
    
    
      <footer>
        <div class="container5">
            <div class="about">
                <div class="in-about">
                    <img src="imgs/bookicon3jpg.jpg" style="border-radded_booksius: 50%;" alt="">
                    <h2>Bibleoticha<span>.</span></h2>
                </div>
                <p>Bibleoticha is an online library madded_bookse to make you comforeturn_buttonable while readded_booksing books</p>
                <h3>Social Media</h3>
                <ul class="social-icons">
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-whatsapp"></i></a></li>
                </ul>
            </div>
           
            <div class="footer-detail">
                <h3>Get in Touch</h3>
                <ul>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Ahmed Zewail Street - Giza - Egypt</span>
                    </li>
      
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="">bibleoticha@gmail.com</a>
                    </li>
      
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        <a href="">+01011121314</a>
                    </li>
                </ul>
            </div>
        </div>
      </footer> 
      
    
    
    `

    
}





if(last_sign.admin=="false"){



    
    
    
    for(var i=0 ; i<borrowed_books.length ; ++i){
    
    
        if(borrowed_books[i].owner_username==last_sign.name){
    
            let s=document.getElementById(`slider`);
            let book=document.createElement("div")
    
            book.setAttribute("class","book");
            book.setAttribute("data-id",borrowed_books[i].id);
    
    
    
            
            book.innerHTML=`  
    
            <div class="image" >
            <img src="imgs/library books/silentpatient.png" alt="">
          </div>
          
          
          <div class="info">
          
            <div class="book-name"><span>Book Name:</span>${borrowed_books[i].bookname}</div>
          
            <div class="author">
              <span>Book Author: ${borrowed_books[i].author} </span>.
            </div>
        
            <div>
            <span>book Category : </span>${borrowed_books[i].category}
            </div>
              
            <button class="return">Return</button>
          
          </div>
          
            `
        s.prepend(book);
    
        }
    }


    let return_button=document.querySelectorAll(".return");






    return_button.forEach(function(ele){

        let my_div=ele.parentElement;
    
        let src_div=my_div.parentElement;

        let so_div=src_div.parentElement;

        
        
        
        ele.addEventListener("click",function(){

          


            for(var i=0 ; i<books.length ; ++i){

                if(books[i].id==src_div.getAttribute("data-id") ){
                         
                    books[i].borrowed="false"

                    borrowed_books=borrowed_books.filter(function(it,ind){

                        return borrowed_books[ind].id!=src_div.getAttribute("data-id");
                    });

                    

                    window.localStorage.setItem('books',JSON.stringify(books));
                    window.localStorage.setItem("borrowed",JSON.stringify(borrowed_books));
                    so_div.removeChild(src_div);
                    break;

            }


        }})
    })

   

}    



else{



    console.log(added_books)
    console.log(added_books.length)


    for(var i=0 ; i<added_books.length ; ++i){
    
    
        console.log("yes")
        if(added_books[i].adder_username==last_sign.name){

    
            let s=document.getElementById(`slider`);
            let book=document.createElement("div")
    
            book.setAttribute("class","book");
            book.setAttribute("data-id",added_books[i].id);
    
    
    
            
            book.innerHTML=`  
    
            <div class="image" >
            <img src="imgs/library books/silentpatient.png" alt="">
          </div>
          
          
          <div class="info">
          
            <div class="book-name"><span>Book Name:</span>${added_books[i].bookname}</div>
          
            <div class="author">
              <span>Book Author: ${added_books[i].author} </span>.
            </div>
        
            <div>
            <span>book Category : </span>${added_books[i].category}
            </div>
              
            <button id="edit"><a href="edit_book.html">Edit</a></button>
            <button class="delete">Delete</button>
            <div class="error-delete"></div>
          
          </div>
          
            `
        s.prepend(book);
    
        }
    }



    let delete_button=document.querySelectorAll(".delete")








if(delete_button!=null){


    delete_button.forEach(function(current_button){
    


    
    
    
        current_button.addEventListener("click",function(){
    
    
            let info_div=current_button.parentElement;
        
            let src_div=info_div.parentElement;
            
            // console.log(src_div)
            
            
            let so_div=src_div.parentElement;
            let books=JSON.parse(window.localStorage.getItem('books')) || [];
            let  ad = JSON.parse(window.localStorage.getItem('added')) || [];
        
    
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

}

















const books_slider=document.querySelectorAll(".slider .book")

let counter=0;


function left(){


    if(counter===0){
        counter=books_slider.length/3 -1
    }

    else{

        counter--;
    }
    scroll();

}


function right(){


    if(counter=== books_slider.length /3 -1){

        counter=0;
    }
    else{
        counter++;

    }

    scroll();
}


function scroll(){

    books_slider.forEach(function(item){


        item.style.transform= `translateX(-${counter*1250}px)`
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

