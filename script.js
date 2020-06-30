const numDrinkBtns = 3;
isDrink = true;
var queryURL, btnVal, userInput;
var select = [false, false, false];


function pullAPI(queryURL){

$.ajax({
    url: queryURL,
    method: "GET",
    success: function(data, status, jqXHR){
        
    },
    error: function(jqXHR, textStatus, errorThrown) {
    }

    }).then(function(response){
    console.log(response);
        if (select[0] === true){
            var array = response.drinks;
            for(var i = 0; i < array.length; i++) {

                $("#drink-ing-list").append($("<button>").addClass("dI-btn").text(response.drinks[i].strIngredient1))
               
            }
            select[0] = false;
            
        }
        if (select[1] === true){
            
            var array = response.drinks;
            var index = Math.floor(Math.random()*(array.length-1))
            console.log(index);
            var finalDrink = array[index].strDrink;
            console.log(finalDrink)
            // APPEND DRINK NAME + IMAGES + RECIPE HERE
            select[1] = false;
            
        }



    })
}


function createLists(){

 $(".main-row").append($("<div>").addClass("dropdown").attr("id", "drink-ing-outer"));
    $("#drink-ing-outer").append($("<button>").addClass("dropBtn").attr("id", "drink-ing-btn").text("Drink by Ingredient"));
    $("#drink-ing-outer").append($("<div>")).attr("id", "drink-ing-list").addClass("dropdown-content");


}

createLists();

//Event listener for dropdown list activation
$(".container").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches("#drink-ing-btn"))
    {
        select[0] = true; 
        queryURL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
        pullAPI(queryURL);
    }

}))

//Event listener for dropdown list selection

$(".container").on("click", (function(event){
    event.preventDefault();
    if(event.target.matches(".dI-btn"))
    {
        select[1] = true; 
        var ingr = ($(event.target).text()).trim();
        console.log(ingr);
        queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingr;
        pullAPI(queryURL);
    }

}))