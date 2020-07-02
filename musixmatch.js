//create content for music results column
var musicResult = $("#music");

//div for search by song name
musicResult.append("<div>").attr("id","searchDiv");
var searchDiv =$("#searchDiv");
searchDiv.text("Song Search: ");
searchDiv.append($("<input>").attr("id","searchbox"));
$("#searchDiv").append($("<button>").attr("id","searchbtn").text("Search by Song Name"));

//div for random playlist search button
searchDiv.append($("<div>").attr("id","randomDiv"));
var randomDiv = $("#randomDiv");
randomDiv.append($("<button>").attr("id","random").text("Random Playlist"));
randomDiv.append($("<hr>"));

//turn search input into searchSong
$("#searchbtn").on("click",function(event){
    event.preventDefault();
    var searchSong = $("#searchbox").val().trim();
    $("#searchbox").val(" ");
    search();
    randomDiv.append($("<p>").attr("id","results").text("Is this what you were looking for?"));

//this function should only be triggered when the search button is pressed
function search(){
    event.preventDefault();

$.ajax({
    type: "GET",
    data: {
        apikey:"200a4593b9277ce9ffb162e74cb71ea0",
        q_track: searchSong,
        page_size: 1,
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "http://api.musixmatch.com/ws/1.1/track.search",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function(data) {
        console.log(data); 
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    }  
    
});

};
});
//random lyrics to guide search parameters
randomLyricArray = ["love","loved","waiting for you","date","beautiful","two of us","mine","crazy about you","in love"];

// pulls random lyric from array
var randomLyric = randomLyricArray[Math.floor(Math.random() * randomLyricArray.length)];

//console.log(randomLyric);


$("#random").on("click", (function(event){
    event.preventDefault();
    randomDiv.append($("<p>").attr("id","results").text("Spontaneity! I like it."));
    random ();
}));
//ajax call with the parameters of amount of tracks (5) with each song containing a random lyric from the randomLyric array
function random(){

    $.ajax({
      type: "GET",
      data: {
          apikey:"200a4593b9277ce9ffb162e74cb71ea0",
          q_lyrics:randomLyric,
          page_size: 5,
          format:"jsonp",
          callback:"jsonp_callback"
      },
      url: "http://api.musixmatch.com/ws/1.1/track.search",
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
      contentType: 'application/json',
      success: function(data) {
          console.log(data); 
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
      }    
    });
   };

