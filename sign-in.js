

const username = document.getElementById('username');
const password = document.getElementById('password');
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
  
    if (password_val=== '') {
      // If the password field is empty, show an error message
      document.getElementById('error2').innerText = 'Please enter a password.';
      pass_valid=false;
    } 
  
  
    else if( password_val.length<8){
  
      document.getElementById('error2').innerText = 'password is short';
      pass_valid=false;
    } 
    
  
  
  
  
    if(user_valid===false || pass_valid===false){
      console.log("omar")
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






  