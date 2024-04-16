


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
  
  if (password_val=== '') {
    // If the password field is empty, show an error message
    document.getElementById('error2').innerText = 'Please enter a password.';
    pass_valid=false;
  } 
  
  
  else if( password_val.length<8){
  
    document.getElementById('error2').innerText = 'password is short';
    pass_valid=false;
  } 


  if(confirm_pass_val!==password_val){

    document.getElementById('error3').innerText = 'confirm pass is wrong';
    conf_pas=false;

  }

  else if(confirm_pass_val===''){

    document.getElementById('error3').innerText = 'confirm pass is required';
    conf_pas=false;

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