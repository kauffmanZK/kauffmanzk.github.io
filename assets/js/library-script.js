var currentGame = ""

$(".dropdownGameOne").click('value', function(){
    $(".divGame").hide()
    $(".divGameOne").slideToggle()
    $(".commentDiv").show()
    currentGame = 'gameOne'
    showComments()
})
$(".dropdownGameTwo").click('value', function(){
    $(".divGame").hide()
    $(".divGameTwo").slideToggle()
    $(".commentDiv").show()
    currentGame = 'gameTwo'
    showComments()
})

$(".dropdownGameThree").click('value', function(){
    $(".divGame").hide()
    $(".divGameThree").slideToggle()
    $(".commentDiv").show()
    currentGame = 'gameThree'
    showComments()
})
$(".dropdownGameFour").click('value', function(){
    $(".divGame").hide()
    $(".divGameFour").slideToggle()
    $(".commentDiv").show()
    currentGame = 'gameFour'
    showComments()
})
$(".dropdownGameFive").click('value', function(){
    $(".divGame").hide()
    $(".divGameFive").slideToggle()
    $(".commentDiv").show()
    currentGame = 'gameFive'
    showComments()
})

//Comment Section
firebase.initialize({
    projectName: 'zane_simple_login'
});

var database = firebase.database();

$(".commentDiv").hide()

$("#commentSubmit").click(async function() {
    var today = new Date().toISOString().slice(0, 10)
    if (localStorage.loginUsername) {
        database.ref('games/' + currentGame + '/comments').on('value', function(data) {
            var commentInput = "(" + today + ") " + localStorage.loginUsername + ': ' + $("#commentInput").val()
            var num = 0
            console.log(data)
            for (var count in data) {
                num = num + 1
            }
            //database.ref('games/' + currentGame + '/comments').set({
            database.ref('games/' + currentGame + '/comments/' + num).set({
               comment: commentInput
            })
            showComments()
        })
    }
    else {
        alert('You must log in to leave comments')
    }
    
})

function asyncForLoop() {
    
}

function showComments() {
    database.ref('games/' + currentGame + '/comments').on('value', function(data) {
        $(".commentDisplay").text(' ')
        for (var comment in data) {
            $(".commentDisplay").append(data[comment].comment + '<br><br>')
        }
    })
}