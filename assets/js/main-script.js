var today = new Date().toISOString().slice(0, 10)
if (localStorage.loginUsername) {
    console.log(today)
    if (localStorage.loginKey == today) {
        $(".noLogin").hide()
        $(".yesLogin").show()
        $(".loginUsernameDisplay").text('Signed in as: ' + localStorage.loginUsername)
    }
    else {
        logout()
    }
}
else {
    $(".noLogin").show()
    $(".yesLogin").hide()
}

$(".logoutButton").click(function() {
    logout()
})

function logout() {
    localStorage.removeItem('loginUsername')
    localStorage.removeItem('loginKey')
    window.location = 'https://website-development-final-5398252.codehs.me/index.html'
}