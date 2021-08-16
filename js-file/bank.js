document.getElementById('login-submit').addEventListener('click', function () {
    // get uesr Email 
    const emailFild = document.getElementById('uesr-email');
    const uesrEmail = emailFild.value;
    // get uesr passwor
    const passworFild = document.getElementById('uesr-password');
    const uesrPass = passworFild.value;
//   check email and password

    if (uesrEmail== 'istu@mail.com' && uesrPass =='abcd' ){
        window.location.href = 'banking.html'
    }

});

