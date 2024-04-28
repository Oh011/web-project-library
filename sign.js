



let pass_lock=document.getElementById("pass-lock");



//user info
//=====================================================================================

const password = document.getElementById('password');                                

const username=document.getElementById("username");

const email=document.getElementById("email");

const confirm_password=document.getElementById("confirm-password");

const is_admin=document.getElementById('is_admin');


//===================================================================================



//book info
//======================================================================================

const book_id = document.getElementById('book_id');

const book_name = document.getElementById('book_name');

const book_author=document.getElementById("book_author");

const od_book_id=document.getElementById("old_book_id")

let category_book=document.getElementById("category");

//==========================================================================================


//progra data
let users = JSON.parse(window.localStorage.getItem('user')) || [];


let books = JSON.parse(window.localStorage.getItem('books')) || [];

let borrowed_books = JSON.parse(window.localStorage.getItem('borrowed')) || [];

let added_books = JSON.parse(window.localStorage.getItem('added')) || [];

let last_sign = JSON.parse(window.localStorage.getItem('last-sign')) || null;


//===================================================================================


// program classes

class user{
    
  constructor(x,y,z,e){

    this.name=x;
    this.pass=y;
    this.admin=z;
    this.email=e;

  }
}


class book{

  constructor(id,name,author,category){

    this.id=id;
    this.name=name;
    this.author=author;
    this.category=category;
    this.borrowed="false"
    

  }
}



class added{

  constructor(i,a,b,c,d,e){

      this.id=i;
      this.bookname=a;
      this.author=b;
      this.category=c;
      this.adder_username=d;
      this.pass=e;
  }
}

//=====================================================================



  if(pass_lock!=null && password!=null){

    pass_lock.onclick=function(){
      
      if(password.type=="password"){
        password.type="text";
      }
    
      else{
        password.type="password";
      }
    }

  }  
  



//=================================================================

// forms

const sign_in_form = document.getElementById('sign-in-form');


const sign_up_form=document.getElementById("sign-up-form");

const add_book_form=document.getElementById("add-book-form");


const edit_book_form=document.getElementById("edit-book-form");


//====================================================================================




if(sign_in_form!=null){

  sign_in_form.onsubmit=function(event){


    let user_valid=true;
    let pass_valid=true;



  const username_val = document.getElementById('username').value.trim();
  const password_val = document.getElementById('password').value.trim();



  // Check if the input fields are empty



  if (username_val === '') {
    // If the username field is empty, show an error message
    document.getElementById('error1').innerText = 'Please enter a username.';
    user_valid=false
  } 

  else{
    document.getElementById('error1').innerText = '';
    user_valid=true;

  }

  if (password_val=== '') {
    // If the password field is empty, show an error message
    document.getElementById('error2').innerText = 'Please enter a password.';
    pass_valid=false;
  } 


  else if( password_val.length<8){

    document.getElementById('error2').innerText = 'password is short';
    pass_valid=false;
  } 
  

  else{
    document.getElementById('error2').innerText = '';
    pass_valid=true;
  }





  if(user_valid===false || pass_valid===false){
 
    event.preventDefault();
    return;
  }





  for(var i=0 ; i<users.length ; ++i){




    if(users[i].name==username_val && users[i].pass==password_val){

      const new_user=new user(users[i].name,users[i].pass,users[i].admin,users[i].email);
      window.localStorage.setItem("last-sign",JSON.stringify(new_user));

      if(users[i].admin=="true"){
        

    window.location.href="index_admin.html"
    return false ;
      }

      else{

        window.location.href="index_user.html"
        return false;

      }
    }

  }


  event.preventDefault();
  document.getElementById("not-found").innerText="wrong password or user name";



  }

      


}







  



if(sign_up_form!=null){


    
sign_up_form.onsubmit=function(event){

  let user_valid=true;
  let pass_valid=true;
  let conf_pas=true;
  let email_conf=true;



// Get the values of the input fields
const username_val = document.getElementById('username').value.trim();
const password_val = document.getElementById('password').value.trim();
const confirm_pass_val=document.getElementById("confirm-password").value.trim();
const email_val=document.getElementById("email").value.trim();


// Check if the input fields are empty



if (username_val === '') {
  // If the username field is empty, show an error message
  document.getElementById('error1').innerText = 'Please enter a username.';
  user_valid=false
} 

else{

  for(var i=0 ; i<users.length ; ++i){

    if(users[i].name==username_val){
      document.getElementById('error1').innerText = 'username already taken';
      user_valid=false;
      break;
    }
    else{
      document.getElementById('error1').innerText = '';
      user_valid=true;

    }
  }

}

if (password_val=== '') {
  // If the password field is empty, show an error message
  document.getElementById('error2').innerText = 'Please enter a password.';
  pass_valid=false;
} 


else if( password_val.length<8){

  document.getElementById('error2').innerText = 'password is short';
  pass_valid=false;
} 

else{

  
  document.getElementById('error2').innerText = '';
  pass_valid=true;

}


if(confirm_pass_val!==password_val){

  document.getElementById('error3').innerText = 'confirm password is wrong';
  conf_pas=false;

}

else if(confirm_pass_val===''){

  document.getElementById('error3').innerText = 'confirm password is required';
  conf_pas=false;

}

else{

  document.getElementById('error3').innerText = '';
  conf_pas=true;
}



  const re =
/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;



if(email_val===''){

  document.getElementById('error4').innerText = 'email is required';
 
  email_conf=false;

}

else if(!re.test(String(email_val).toLowerCase())){

  document.getElementById('error4').innerText = 'invalid email';
 
  email_conf=false;
}

else{

  
  document.getElementById('error4').innerText = '';
 
  email_conf=true;

}





if(user_valid===false || pass_valid===false || conf_pas===false || email_conf==false){
  
  event.preventDefault();
}


else{

let admin_status=""

  if(is_admin.checked){

     admin_status="true"
  }

    else  {
     
      admin_status="false"

    }





  const new_user=new user(username_val,password_val,admin_status,email_val);
  
  users.push(new_user);
  
  window.localStorage.setItem("user",JSON.stringify(users));
  window.localStorage.setItem("last-sign",JSON.stringify(new_user));
  





  if(is_admin.checked){


    window.location.href="index_admin.html";
    return false;
 
}


else{

  window.location.href="index_user.html";
  return false;
}

}


  }

}








if(add_book_form!=null){


  add_book_form.onsubmit=function(event){
  
    let bookid_valid=true;
    let bookname_valid=true;
    let book_author_valid=true;
    let found=false;
    
    
  
  
  
    const bookid_val = document.getElementById('book_id').value.trim();
    const bookname_val = document.getElementById('book_name').value.trim();
    const bookauthor_val=document.getElementById("book_author").value.trim();

    let category_val=document.getElementById("category").value;
  
  
    var te=/^[-+]?[0-9]+$/;
  
  
    
  
  
  
  
    
      if(bookid_val==''){
    
        document.getElementById('error1').innerText = 'Please enter a book id.';
        bookid_valid=false
    
      }
    
    
      else if(bookid_val <=0 )
      {
    
        document.getElementById('error1').innerText = 'invalid book id';
        bookid_valid=false
    
    }
    
    else if(! bookid_val.match(te)){
    
      document.getElementById('error1').innerText = 'only numbers';
      bookid_valid=false
    
    }
    
    else{
  
  
  
  
      for(var i=0 ; i<books.length ; ++i){
  
        if(books[i].id==bookid_val){
          found=true;
          break;
        }
      }
      
  
      if(found){
        
        document.getElementById('error1').innerText = 'registerd id';
        
      }
      
      
      else{
        document.getElementById('error1').innerText = '';
       
  
      }
  
    
    
    }
  
  
  
  
  if(bookname_val==''){
  
    document.getElementById('error2').innerText = 'Please enter a book name';
    bookname_valid=false
  
  }
  
  else if(bookname_val.length <5 )
  {
  
    document.getElementById('error2').innerText = 'invalid book name';
    bookname_valid=false
  
  }
  
  else{
  
    document.getElementById('error2').innerText = '';
    bookname_valid=true
  }
  
  
  if(bookauthor_val==""){
  
    
    document.getElementById('error3').innerText = 'Please enter a book author';
    book_author_valid=false
  
  }
  
  else if(bookauthor_val <5){
  
    document.getElementById('error3').innerText = 'invalid book author';
    book_author_valid=false
  }
  
  else{
  
    
    document.getElementById('error3').innerText = '';
    book_author_valid=true;
  
  }
  
  
  if((bookid_valid===false || bookname_valid===false || book_author_valid===false || found===true)){
  
    event.preventDefault();
  }
      
  else{
  
  
  
  
  
  
    let book_added=new added(bookid_val,bookname_val,bookauthor_val,category_val,last_sign.name,last_sign.pass)
    added_books.push(book_added);
  
    window.localStorage.setItem("added",JSON.stringify(added_books))
  
  
    let new_book=new book(bookid_val,bookname_val,bookauthor_val,category_val)
    
    books.push(new_book)
    window.localStorage.setItem("books",JSON.stringify(books))
  
  
    window.location.href="index_admin.html"
    return false;
  }
  
  
  


}

}












if(edit_book_form!=null){



  edit_book_form.onsubmit=function(event){


  let bookid_valid=true;
  let bookname_valid=true;
  let book_author_valid=true;
  let old_id_valid=true;

  let found_new=false;
  let found_old=false;


  let new_pos=0;









  const bookid_val = document.getElementById('book_id').value.trim();
  const bookname_val = document.getElementById('book_name').value.trim();
  const bookauthor_val=document.getElementById("book_author").value.trim();
  const old_id_val=document.getElementById("old_book_id").value.trim()
  let category_val=document.getElementById("category").value;



  var te=/^[-+]?[0-9]+$/;


  

  if(old_id_val==''){

      
    document.getElementById('error1_o').innerText = 'Please enter a book id.';
    old_id_valid=false

  }

  else if(old_id_val <=0){

    
    document.getElementById('error1_o').innerText = 'invalid book id';
    old_id_valid=false
  }

  else if(! old_id_val.match(te)){
  
    document.getElementById('error1_o').innerText = 'only numbers';
    old_id_valid=false
  
  }

  else{


    



    for(var i=0 ; i<books.length ; ++i){

      if(books[i].id == old_id_val){
        found_old=true;
        new_pos=i;
        break;
      }
    }
    

    if(found_old){
      
      document.getElementById('error1_o').innerText = '';
      found_old=true;
      
    }
    
    
    else{
      document.getElementById('error1_o').innerText = 'id not found';
      found_old=false;
     

    }

    
  }




  
    if(bookid_val==''){
  
      document.getElementById('error1').innerText = 'Please enter a book id.';
      bookid_valid=false
  
    }
  
  
    else if(bookid_val <=0 )
    {
  
      document.getElementById('error1').innerText = 'invalid book id';
      bookid_valid=false
  
  }
  
  else if(! bookid_val.match(te)){
  
    document.getElementById('error1').innerText = 'only numbers';
    bookid_valid=false
  
  }
  
  else{
  


    for(var i=0 ; i<books.length ; ++i){

      if( books[i].id==bookid_val && bookid_val!=old_id_val){
        found_new=true;
        break;
      }
    }
    

    if(found_new){
      
      document.getElementById('error1').innerText = 'registerd';
      
    }
    
    
    else{

      document.getElementById('error1').innerText = '';
     

    }
  
  }




if(bookname_val==''){

  document.getElementById('error2').innerText = 'Please enter a book name';
  bookname_valid=false

}

else if(bookname_val.length <5 )
{

  document.getElementById('error2').innerText = 'invalid book name';
  bookname_valid=false

}

else{

  document.getElementById('error2').innerText = '';
  bookname_valid=true
}


if(bookauthor_val==""){

  
  document.getElementById('error3').innerText = 'Please enter a book author';
  book_author_valid=false

}

else if(bookauthor_val <5){

  document.getElementById('error3').innerText = 'invalid book author';
  book_author_valid=false
}

else{

  
  document.getElementById('error3').innerText = '';
  book_author_valid=true;

}


if((bookid_valid===false || bookname_valid===false || book_author_valid===false || old_id_valid===false || found_old==false
|| found_new==true)){

  event.preventDefault();
}
    
else{

console.log("comp")
  let new_pslb=0;
  let add_new=0;





  for(var i=0 ; i<borrowed_books.length ; ++i){

    if(borrowed_books[i].id == old_id_val){
      new_pslb=i;
      break;
    }
  }

  for(var i=0 ; i<added_books.length ; ++i){

    
    if(added_books[i].id == old_id_val){
      add_new=i;
      break;
    }

  }






  


  books[new_pos].name=bookname_val;
  books[new_pos].id=bookid_val;
  books[new_pos].author=bookauthor_val;
  books[new_pos].category=category_val;


  added_books[add_new].bookname=bookname_val;
  added_books[add_new].id=bookid_val;
  added_books[add_new].author=bookauthor_val;
  added_books[add_new].category=category_val;

  


  if(borrowed_books.length!=0){

    borrowed_books[new_pslb].bookname= bookname_val;
    borrowed_books[new_pslb].id= bookid_val;
    borrowed_books[new_pslb].category= category_val;
    borrowed_books[new_pslb].author= bookauthor_val;
  }

  window.localStorage.setItem('borrowed',JSON.stringify(borrowed_books));


  window.localStorage.setItem("added",JSON.stringify(added_books))
  

  window.localStorage.setItem('books',JSON.stringify(books));


  window.location.href="index_admin.html"
  return false;
  
}

  

}

 




}


 