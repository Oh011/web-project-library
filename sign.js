



if(location.pathname=="/C:/web-project-library/sign%20in.html"|| 
location.pathname=="/C:/web-project-library/sign%20up.html"){
  
  let pass_l=document.getElementById("pass-lock");
  const password = document.getElementById('password');
  
  
  pass_l.onclick=function(){
    
    if(password.type=="password"){
      password.type="text";
    }
  
    else{
      password.type="password";
    }
  }
}



class user{
    
  constructor(x,y,z,e){

    this.name=x;
    this.pass=y;
    this.admin=z;
    this.email=e;

  }
}



if(location.pathname=="/C:/web-project-library/sign%20in.html")

{



  const username = document.getElementById('username');

const is_admin=document.getElementById('is_admin');





// Get the form element
const form = document.getElementById('sign-in-form');




// Add an event listener for form submission


  form.onsubmit=function(event){


    let user_valid=true;
    let pass_valid=true;
  // Prevent the form from submitting normally


  // Get the values of the input fields
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


  let arr = JSON.parse(window.localStorage.getItem('user')) || [];

  console.log(arr)



  for(var i=0 ; i<arr.length ; ++i){

    console.log(arr[i].name)


    if(arr[i].name==username_val && arr[i].pass==password_val){

      const us=new user(arr[i].name,arr[i].pass,arr[i].admin,arr[i].email);
      window.localStorage.setItem("last-sign",JSON.stringify(us));

      if(arr[i].admin=="true"){
        

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
  document.getElementById("not-found").innerText="wrong pass or name";





  
  //   if(is_admin.checked){
  
  
  
  //   window.location.href="index_admin.html"
  //   return false;

  // }
  
  
  // else{
  
  
  //   window.location.href="index_user.html"
  //   return false;
  // }

  }

      


}




else if(location.pathname=="/C:/web-project-library/sign%20up.html"){


  
const username = document.getElementById('username');
const password = document.getElementById('password');
const email=document.getElementById("email");
const confirm_password=document.getElementById("confirm-password");

const is_admin=document.getElementById('is_admin');


username.focus();


username.onblur=function(){

  password.focus();
}




const form=document.getElementById("sign-up-form");

let arr = JSON.parse(window.localStorage.getItem('user')) || [];

console.log(username)
console.log(password)
console.log(confirm_password)
console.log(email)
console.log(form)



form.onsubmit=function(event){

  let user_valid=true;
  let pass_valid=true;
  let conf_pas=true;
  let email_conf=true;
// Prevent the form from submitting normally


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

  for(var i=0 ; i<arr.length ; ++i){

    if(arr[i].name==username_val){
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

  document.getElementById('error3').innerText = 'confirm pass is wrong';
  conf_pas=false;

}

else if(confirm_pass_val===''){

  document.getElementById('error3').innerText = 'confirm pass is required';
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

let z=""

  if(is_admin.checked){

     z="true"
  }

    else  {
     
      z="false"

    }





  const us=new user(username_val,password_val,z,email_val);
  
  arr.push(us)
  window.localStorage.setItem("user",JSON.stringify(arr));
  window.localStorage.setItem("last-sign",JSON.stringify(us));
  





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



else if(location.pathname=="/C:/web-project-library/add_book.html"){

  console.log("kakakaaa")


const book_id = document.getElementById('book_id');
const book_name = document.getElementById('book_name');
const book_author=document.getElementById("book_author");






const form=document.getElementById("add-book-form");



form.onsubmit=function(event){
  
  let bookid_valid=true;
  let bookname_valid=true;
  let book_author_valid=true;
  let found=false;
  
  



  const bookid_val = document.getElementById('book_id').value.trim();
  const bookname_val = document.getElementById('book_name').value.trim();
  const bookauthor_val=document.getElementById("book_author").value.trim();


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

    let arr = JSON.parse(window.localStorage.getItem('books')) || [];


    for(var i=0 ; i<arr.length ; ++i){

      if(arr[i].id==bookid_val){
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

  let cat=document.getElementById("category").value;
  
  let add = JSON.parse(window.localStorage.getItem('added')) || [];
  
  let arr_user = JSON.parse(window.localStorage.getItem('last-sign')) || null;

  let us_added=new added(bookid_val,bookname_val,bookauthor_val,cat,arr_user.name,arr_user.pass)
  add.push(us_added);

  window.localStorage.setItem("added",JSON.stringify(add))

  let arr = JSON.parse(window.localStorage.getItem('books')) || [];
  
  let b=new book(bookid_val,bookname_val,bookauthor_val,cat)
  
  arr.push(b)
  window.localStorage.setItem("books",JSON.stringify(arr))


  window.location.href="index_admin.html"
  return false;
}

}





}



else if(location.pathname=="/C:/web-project-library/edit_book.html"){

console.log('hi edit');

const od_book_id=document.getElementById("old_book_id")
const book_id = document.getElementById('book_id');
const book_name = document.getElementById('book_name');
const book_author=document.getElementById("book_author");



let arr = JSON.parse(window.localStorage.getItem('books')) || [];
let lb = JSON.parse(window.localStorage.getItem('borrowed')) || [];
console.log(arr);
console.log(lb);





  const form=document.getElementById("edit-book-form");




  form.onsubmit=function(event){


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


    



    for(var i=0 ; i<arr.length ; ++i){

      if(arr[i].id == old_id_val){
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
  


    for(var i=0 ; i<arr.length ; ++i){

      if( arr[i].id==bookid_val && bookid_val!=old_id_val){
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

console.log("yes")
  let new_pslb=0;



  console.log(lb);


  for(var i=0 ; i<lb.length ; ++i){

    if(lb[i].id == old_id_val){
      new_pslb=i;
      break;
    }
  }





  let cat=document.getElementById("category").value;
  


  arr[new_pos].name=bookname_val;
  arr[new_pos].id=bookid_val;
  arr[new_pos].author=bookauthor_val;
  arr[new_pos].category=cat;

  lb[new_pslb].bookname= bookname_val;
  lb[new_pslb].id= bookid_val;
  lb[new_pslb].category= cat;
  lb[new_pslb].author= bookauthor_val;

  window.localStorage.setItem('borrowed',JSON.stringify(lb));
  

  window.localStorage.setItem('books',JSON.stringify(arr));


  window.location.href="index_admin.html"
  return false;
  
}

  }





}
  