



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





if(location.pathname=="/C:/web-project-library/sign%20in.html")

{



  const username = document.getElementById('username');

const is_admin=document.getElementById('is_admin');





// Get the form element
const form = document.getElementById('sign-in-form');




// Add an event listener for form submission


  
  form.addEventListener('submit', function(event) {
      
  
  
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
    }
  
  
    else{
  
  
      if(is_admin.checked){
  
  
  
      form.action="index_admin.html"
  }
  
  
  else{
  
    
    form.action  ="file:///C:/web-project-library/index_user.html"
  }
  
      
  
    }
  
  
  });

}



else if(location.pathname=="/C:/web-project-library/sign%20up.html"){


  
const username = document.getElementById('username');
const password = document.getElementById('password');
const email=document.getElementById("email");
const confirm_password=document.getElementById("confirm-password");

const is_admin=document.getElementById('is_admin');



const form=document.getElementById("sign-up-form");


console.log(username)
console.log(password)
console.log(confirm_password)
console.log(email)
console.log(form)


form.addEventListener("submit",function(event){
  
  console.log("hi")

  
  
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
  
  
    if(is_admin.checked){
  
  
  
    form.action="index_admin.html"
  }
  
  
  else{
  
  
  form.action="index_user.html"
  }
  
    
  
  }
  })
}



else if(location.pathname=="/C:/web-project-library/add_book.html"){

  console.log("kakakaaa")


const book_id = document.getElementById('book_id');
const book_name = document.getElementById('book_name');
const book_author=document.getElementById("book_author");






  const form=document.getElementById("add-book-form");




form.addEventListener("submit",function(event){


  
  let bookid_valid=true;
  let bookname_valid=true;
  let book_author_valid=true;





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
    document.getElementById('error1').innerText = '';
    bookid_valid=true;
  
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


if((bookid_valid===false || bookname_valid===false || book_author_valid===false)){

  event.preventDefault();
}
    
else{

  form.action="index_admin.html";
}






});




}



else if(location.pathname=="/C:/web-project-library/edit_book.html"){



const od_book_id=document.getElementById("old_book_id")
const book_id = document.getElementById('book_id');
const book_name = document.getElementById('book_name');
const book_author=document.getElementById("book_author");






  const form=document.getElementById("edit-book-form");




form.addEventListener("submit",function(event){


  
  let bookid_valid=true;
  let bookname_valid=true;
  let book_author_valid=true;
  let old_id_valid=true;





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
    document.getElementById('error1_o').innerText = '';
    old_id_valid=true;
  
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
    document.getElementById('error1').innerText = '';
    bookid_valid=true;
  
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


if((bookid_valid===false || bookname_valid===false || book_author_valid===false || old_id_valid===false)){

  event.preventDefault();
}
    
else{

  form.action="index_admin.html";
}






});




}
  