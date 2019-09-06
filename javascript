//create array of food

$(documtime).ready(function(){
    let foods = ["cheese","milk","eggs","bacon","cereal"];

    this will be a function to make the buttons and a them to page

    function populateButtons(arraytouse, classToadd, areasToddTo){
            $(areasToddTo). empty();
            for (let i=0; i< arraytouse.length; i++){
                let a = $("<button>");
                a.addClass(classToadd);
                a.attr("data-type",arrayTouse(1));

                a.text(arrayTousesz[i]);
                $(areaToaddTo).append(a);


                
            }
        }
        //creat a function that will populate the images from the giphy api
$(document.onabort("click", "food-button",function(){
    $("#images").empty();
    $(".food-button").removeClass("active");
    $(this).addClass("active");

    let type = $(this).attr("data-type");
    let queryURl ="http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key+4mBY6JdK8yDOpriVZhTAJ0FBI4NBUk1R=10";

    //ajax calls
    $.ajax({
        url:queryUrl,
        method: "Get"
    })
    .then(function(response){
        let results = response.data;


        for (var i = 0; i < results.length; i++) {
            let foodDiv = $("<div class>\"food-item\">");
            let rating = results[i].rating;
            let p = $("<p>.text("Rating: + rating);
            let animated = results [i] .images, fixed_height,url;


            let foodImage = $("<img>");
            foodImage.attr("src", still);
            foodImage.attr("data-still", still);
            foodImage.attr("data-animate", animate);
            foodImage.attr("data-state", "still");
            foodImage. addClass("food-Image");

            foodDiv.append(p);
            foodDiv.append (foodImage)

            $("#image").apped(foodDiv);
        }
    });
})

//set the state from still to animated when cicking

$(document).on("click", "food-image", function(){
    let state = $(this).attr("data-state");

    if (state === "still")}
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state","animate");
}
else (
    $(this).attr("src", $(this).attr("data-still"));
)
});

${"#add-food"}.on{"click", function(event){
    event.preventDefault();
    let newfood = $("input").eq(0).val();

    if(newfood. lenght > 2( {
        food.push(newfood);

    }
populateButtons(foods, "food-button","#food-buttons");



});

populateButtons(foods, "food-button","#food-buttons");

});
