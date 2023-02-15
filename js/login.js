document.getElementById('btn-submit').addEventListener('click',function(){
    const emailAdd = document.getElementById('user-email');
    const userEmail = emailAdd.value;

    const passwordField = document.getElementById('user-password');
    const userPass = passwordField.value;

    if(userEmail === 'mybank@gmail.com' && userPass === 'amarbank')
    {   
        window.location.href="bank.html";
        
    }
    else {
        alert('Invalid User');
    }    

})