firebase.initialize({
    projectName: 'zane_simple_login'
});

var database = firebase.database();

$("#btn-login").click(function() {
    database.ref('usernames').on('value', async function(data) {
        for (var user in data) {
            if ($("#login-username").val() == user) {
                if (data[user].userPassword == $("#login-password").val()) {
                    await completeLogin()
                    return(false)
                }
            }
        }
        alert("Login Information Not Found")
    })
})

function completeLogin() {
    var today = new Date().toISOString().slice(0, 10)
    localStorage.setItem("loginUsername", $("#login-username").val())
    localStorage.setItem("loginKey", today)
    window.location = 'https://website-development-final-5398252.codehs.me/index.html'
}