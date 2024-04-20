

let arr_user = JSON.parse(window.localStorage.getItem('last-sign')) || null;
console.log(arr_user.admin)


console.log(location.pathname)

let ty=""


    if(arr_user.admin=="false"){

       ty="user"
    }

    else{
        ty="admin" 
    }



let h="";


    if(arr_user.admin=="false"){

       h="Borrowed Books"
    }

    else{

        h="Added Books"
    }


// console.log(h)


document.body.innerHTML=`


<nav class="nav-bar">
<div class="nav-left">
    <h1><a href="admin_index.html">Bibleoticha<span>.</span></a></h1>
</div>
<div class="nav-center">
    <ul>
        <li class="homee"><a href="index_admin.html" class="home">Home</a></li>
        <li><a href="about_us.html">About Us</a></li>
        <li><a href="add_book.html">Add Book</a></li>
        <li><a href="sign in.html">Sign in</a></li>
        <li><a href="profile_admin.html">Profile</a></li>
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

   <p><span>User Name:</span> ${arr_user.name}</p> 
   <p><span>Email:</span>${arr_user.email}.</p>
   <p><span>User Type:</span>${ty}</p>


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




<h2 class="book-title">${h}</h2>

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
                <img src="imgs/bookicon3jpg.jpg" style="border-radius: 50%;" alt="">
                <h2>Bibleoticha<span>.</span></h2>
            </div>
            <p>Bibleoticha is an online library made to make you comfortable while reading books</p>
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




if(arr_user.admin=="false"){


    let lb = JSON.parse(window.localStorage.getItem('borrowed')) || [];
    
    
    
    for(var i=0 ; i<lb.length ; ++i){
    
    
        if(lb[i].owner_username==arr_user.name){
    
            let s=document.getElementById(`slider`);
            let book=document.createElement("div")
    
            book.setAttribute("class","book");
            book.setAttribute("data-id",lb[i].id);
    
    
    
            
            book.innerHTML=`  
    
            <div class="image" >
            <img src="imgs/library books/silentpatient.png" alt="">
          </div>
          
          
          <div class="info">
          
            <div class="book-name"><span>Book Name:</span>${lb[i].bookname}</div>
          
            <div class="author">
              <span>Book Author: ${lb[i].author} </span>.
            </div>
        
            <div>
            <span>bokk Category : </span>${lb[i].category}
            </div>
              
            <button class="return">Return</button>
          
          </div>
          
            `
        s.prepend(book);
    
        }
    }


    let rt=document.querySelectorAll(".return");



    rt.forEach(function(ele){

        let my_div=ele.parentElement;
    
        let src_div=my_div.parentElement;

        let so_div=src_div.parentElement;

        let arr=JSON.parse(window.localStorage.getItem('books')) || [];
        let lb = JSON.parse(window.localStorage.getItem('borrowed')) || [];

      

        ele.addEventListener("click",function(){


            for(var i=0 ; i<arr.length ; ++i){

                if(arr[i].id==src_div.getAttribute("data-id") ){
                         
                    arr[i].borrowed="false"

                    lb=lb.filter(function(it,ind){

                        return lb[ind].id!=src_div.getAttribute("data-id");
                    });

                    window.localStorage.setItem('books',JSON.stringify(arr));
                    window.localStorage.setItem("borrowed",JSON.stringify(lb));
                    so_div.removeChild(src_div);
                    break;

            }


        }})
    })

   

}    



else{

    let  ad = JSON.parse(window.localStorage.getItem('added')) || [];

    console.log(ad)
    console.log(ad.length)


    for(var i=0 ; i<ad.length ; ++i){
    
    
        console.log("yes")
        if(ad[i].adder_username==arr_user.name){

    
            let s=document.getElementById(`slider`);
            let book=document.createElement("div")
    
            book.setAttribute("class","book");
            book.setAttribute("data-id",ad[i].id);
    
    
    
            
            book.innerHTML=`  
    
            <div class="image" >
            <img src="imgs/library books/silentpatient.png" alt="">
          </div>
          
          
          <div class="info">
          
            <div class="book-name"><span>Book Name:</span>${ad[i].bookname}</div>
          
            <div class="author">
              <span>Book Author: ${ad[i].author} </span>.
            </div>
        
            <div>
            <span>bokk Category : </span>${ad[i].category}
            </div>
              
            <button id="edit"><a href="edit_book.html">Edit</a></button>
            <button class="delete">Delete</button>
            <div class="error-delete"></div>
          
          </div>
          
            `
        s.prepend(book);
    
        }
    }

}