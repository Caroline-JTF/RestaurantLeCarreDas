//-----------------------------------------
// SCRIPT RESERVATION 


$("#alert").hide()

$("#btn").submit(function(cli){
    cli.preventDefault();
})

$("#btn").on("click", function(){
    $("#alert").show(1000)
})

function displayYear (){
    let date = new Date();
    let copyright = document.getElementById('copyright');

    date = date.getFullYear();

    return copyright.innerText = date;
}

displayYear();