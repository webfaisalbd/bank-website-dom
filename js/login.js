document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // window.location.href = 'banking.html';

    // check email and password
    if (userEmail == 'admin' && userPassword == 'admin') {
        window.location.href = 'banking.html';
    }

});


