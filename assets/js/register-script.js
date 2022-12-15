firebase.initialize({
    projectName: 'zane_simple_login'
});

var database = firebase.database();

$("#btn-register").click(function() {
    var usernameInput = $("#register-username").val()
    var passwordInput = $("#register-password").val
    database.ref().on('value', function(data){
        if (usernameInput.length < 4) {
            alert("Username must be 4 or more characters")
        }
        else {
            if (passwordInput.length < 1) {
                alert("Be sure to fill in all fields")
            }
            else {
                for (var user in data) {
                    if (user == $("#register-username").val()) {
                        alert("Username Already In Use")
                        return(false)
                    }
                }
                database.ref('usernames/' + usernameInput).set({
                    userPassword: passwordInput
                })
                window.location = 'https://website-development-final-5398252.codehs.me/login.html'
            }
            
        }
    })

})