
let arr_user = JSON.parse(window.localStorage.getItem('last-sign')) || null;

let arr = JSON.parse(window.localStorage.getItem('books')) || [];

console.log(arr)





for(var i=0 ; i<arr.length ; ++i){


    if(arr[i].id==localStorage.getItem("last-stored")){


        if(arr_user.admin=="true"){

            document.body.innerHTML=`
            <nav class="nav-bar">
            <div class="nav-left">
                <h1><a href="admin_index.html">Bibleoticha<span>.</span></a></h1>
            </div>
            <div class="nav-center">
                <ul>
                <li class="homee"><a href="index.html" class="home">Home</a></li>
                <li><a href="about_us.html">About Us</a></li>
                <li><a href="sign in.html">Sign in</a></li>
                <li><a href="add_book.html">Add Book</a></li>
                <li><a href="list_books.html">view list of books</a></li>
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
    
    
    
    
    
        <div class="book-container">
    
            
            <div class="book-info">
                
                
                <p>Book id: ${arr[i].id}</p>
                <p>Book name : ${arr[i].name}</p>
                <p>book authour: ${arr[i].author}</p>
                <p>book category: ${arr[i].category}</p>
                
                <h3>Book description:</h3>
                
                
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur sapiente quae sint, voluptate quasi, 
                    deserunt voluptatibus soluta impedit nesciunt quam vel officia necessitatibus aspernatur blanditiis exercitationem 
                    eligendi, earum quod ad omnis nihil veniam numquam dolores iste. Asperiores in beatae numquam, repellat quis incidunt
                    veritatis minus facilis iusto ipsum enim praesentium, nesciunt quos atque suscipit soluta saepe itaque. Ullam officia 
                    facilis sunt possimus at dolorem nihil, dolor impedit</p>
                    
                    
                </div>
                <div class="book-img">
        
                    <img src="imgs/library books/gameofthrones.png">
        
        
                </div>
            </div>
            
    
        
    
        <footer  class="">
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


        }


        else{


            document.body.innerHTML=`
            <nav class="nav-bar">
            <div class="nav-left">
                <h1><a href="admin_index.html">Bibleoticha<span>.</span></a></h1>
            </div>
            <div class="nav-center">
                <ul>
                <li class="homee"><a href="index_user.html" class="home">Home</a></li>
                <li><a href="list_books_user.html">View  List Of Books</a></li>
                <li><a href="about_us.html">About Us</a></li>
                <li><a href="sign in.html">Sign in</a></li>
                <li><a href="profile.html">Profile</a></li>
                <li><a href="">Log Out</a></li>
        </li>
                </ul>
            </div>
            <div class="nav-right">
               <a href="contact us.html"> <i class="fa-solid fa-phone"></i></a>
            </div>
        </nav>
    
    
    
    
    
        <div class="book-container">
    
            
            <div class="book-info">
                
                
                <p>Book id: ${arr[i].id}</p>
                <p>Book name : ${arr[i].name}</p>
                <p>book authour: ${arr[i].author}</p>
                <p>book category: ${arr[i].category}</p>
                
                <h3>Book description:</h3>
                
                
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur sapiente quae sint, voluptate quasi, 
                    deserunt voluptatibus soluta impedit nesciunt quam vel officia necessitatibus aspernatur blanditiis exercitationem 
                    eligendi, earum quod ad omnis nihil veniam numquam dolores iste. Asperiores in beatae numquam, repellat quis incidunt
                    veritatis minus facilis iusto ipsum enim praesentium, nesciunt quos atque suscipit soluta saepe itaque. Ullam officia 
                    facilis sunt possimus at dolorem nihil, dolor impedit</p>
                    
                    
                </div>
                <div class="book-img">
        
                    <img src="imgs/library books/gameofthrones.png">
        
        
                </div>
            </div>
            
    
        
    
        <footer  class="">
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



        }



    }
}