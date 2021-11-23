// function with variables
function makeMadLib(e){
    e.preventDefault();
  
    let noun = $("#noun").val();
    let adjective = $("#adjective").val();
    let person = $("#person").val();

    $("#story").append("There once was a human named " + person + ". They love to visit " + adjective + " " + noun + ".");
}

// function execution
$("#lib-button").on("click", function(e){
    makeMadLib(e);
});