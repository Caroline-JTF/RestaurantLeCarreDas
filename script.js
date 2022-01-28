//-----------------------------------------
// SCRIPT RESERVATION 


$("#alert").hide()

$("#btn").submit(function(cli){
    cli.preventDefault();
})

$("#btn").on("click", function(){
    $("#alert").show(1000)
})