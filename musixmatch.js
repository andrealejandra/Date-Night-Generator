//create content for music results column
var musicResult = $("#music");

//div for search by song name
musicResult.append("<div>").attr("id","searchDiv");
var searchDiv =$("#searchDiv");
searchDiv.text("Song Search: ");
searchDiv.append($("<input>").attr("id","searchbox"));
<<<<<<< HEAD
$("#searchDiv").append($("<button>").attr("id","searchbtn").text("Search by Song Name"));
=======
$("#searchDiv").append($("<button>").addClass("btn").attr("id","searchbtn").text("Search by Song Name"));
>>>>>>> 44e996ea2ab69c9f1885c05286fd7500d251b75d

//div for random playlist search button
searchDiv.append($("<div>").attr("id","randomDiv"));
var randomDiv = $("#randomDiv");
<<<<<<< HEAD
randomDiv.append($("<button>").attr("id","random").text("Random Playlist"));
randomDiv.append($("<hr>"));
=======
randomDiv.append($("<button>").addClass("btn").attr("id","random").text("Random Playlist"));
randomDiv.append($("<hr>"));
//make container for results
searchDiv.append($("<div>").attr("id","resultsDiv"));
var resultsDiv =$("#resultsDiv");
>>>>>>> 44e996ea2ab69c9f1885c05286fd7500d251b75d

//turn search input into searchSong
$("#searchbtn").on("click",function(event){
    event.preventDefault();
    var searchSong = $("#searchbox").val().trim();
    $("#searchbox").val(" ");
<<<<<<< HEAD
    search();
    randomDiv.append($("<p>").attr("id","results").text("Is this what you were looking for?"));

//this function should only be triggered when the search button is pressed
function search(){
    event.preventDefault();
=======
    search(searchSong);
    resultsDiv.append($("<button>").addClass("btn").attr("id","redobtn").text("Search Again"));     

});

//this function should only be triggered when the search button is pressed
function search(searchSong){
    event.preventDefault();
    resultsDiv.empty();
  
>>>>>>> 44e996ea2ab69c9f1885c05286fd7500d251b75d

$.ajax({
    type: "GET",
    data: {
        apikey:"200a4593b9277ce9ffb162e74cb71ea0",
        q_track: searchSong,
<<<<<<< HEAD
        page_size: 1,
=======
        page_size: 5,
>>>>>>> 44e996ea2ab69c9f1885c05286fd7500d251b75d
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "http://api.musixmatch.com/ws/1.1/track.search",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function(data) {
<<<<<<< HEAD
        console.log(data); 
=======
        console.log(data);
        console.log(data.message.body.track_list[0].track.track_name);
        
        var song = data.message.body.track_list[0].track.track_name;
        var artist = data.message.body.track_list[0].track.artist_name;

        //add search again button, append ajax result, and add favorite button
        resultsDiv.append($("<p>").text("Song:" + song));
        resultsDiv.append($("<p>").text("Artist:" + artist));

        //add favorites button
        resultsDiv.append($("<button>").addClass("btn").attr("id","favTrack").text("Favorite"));     

>>>>>>> 44e996ea2ab69c9f1885c05286fd7500d251b75d
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    }  
    
});
<<<<<<< HEAD

};
});
//random lyrics to guide search parameters
randomLyricArray = ["love","loved","waiting for you","date","beautiful","two of us","mine","crazy about you","in love"];

// pulls random lyric from array
var randomLyric = randomLyricArray[Math.floor(Math.random() * randomLyricArray.length)];
=======
    //add to local storage -- not working
    $("#favTrack").on("click",function(event){
        console.log("favorites clicked!");
    
        resultsDiv.append($("<p>").text("Added to favorites!"));
        console.log(song + artist );
        localStorage.setItem("songandartist",song + artist );

    });
};
//random lyrics to guide search parameters
randomLyricArray = ["love","loved","waiting for you","date","lovin'","forever","yours","beautiful","two of us","mine","crazy about you","in love"];

>>>>>>> 44e996ea2ab69c9f1885c05286fd7500d251b75d

//console.log(randomLyric);


$("#random").on("click", (function(event){
<<<<<<< HEAD
    event.preventDefault();
    randomDiv.append($("<p>").attr("id","results").text("Spontaneity! I like it."));
    random ();
}));
//ajax call with the parameters of amount of tracks (5) with each song containing a random lyric from the randomLyric array
function random(){
=======
    resultsDiv.empty();
    
    for ( var i = 0; i < 6 ; i++) {
        event.preventDefault();
        randomPlaylist();

};
}));



//ajax call with the parameters of a random lyric from the randomLyric array
function randomPlaylist(){

// pulls random lyric from array
var randomLyric = randomLyricArray[Math.floor(Math.random() * randomLyricArray.length)];

>>>>>>> 44e996ea2ab69c9f1885c05286fd7500d251b75d

    $.ajax({
      type: "GET",
      data: {
          apikey:"200a4593b9277ce9ffb162e74cb71ea0",
          q_lyrics:randomLyric,
<<<<<<< HEAD
          page_size: 5,
=======
          page_size: 1,
>>>>>>> 44e996ea2ab69c9f1885c05286fd7500d251b75d
          format:"jsonp",
          callback:"jsonp_callback"
      },
      url: "http://api.musixmatch.com/ws/1.1/track.search",
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
      contentType: 'application/json',
      success: function(data) {
<<<<<<< HEAD
          console.log(data); 
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
      }    
    });
   };
=======
          //console.log(data); 
          //console.log(data.message.body.track_list);
           
        songName = data.message.body.track_list[0].track.track_name;
        artistName = data.message.body.track_list[0].track.artist_name;

    resultsDiv.append($("<p>").text("Song:" + songName));
    resultsDiv.append($("<p>").text("Artist:" + artistName));
    resultsDiv.append($("<button>").addClass("btn favTrack").text("Favorite"));
},


    //   error: function(jqXHR, textStatus, errorThrown) {
    //       console.log(jqXHR);
    //       console.log(textStatus);
    //       console.log(errorThrown);
    //   }
        
      });

//add to local storage
$(".favTrack").on("click",function(event){
    console.log("favorites clicked!");

    resultsDiv.append($("<p>").text("Added to favorites!"));
    console.log(songName + artistName );
    localStorage.setItem("songandartist",songName + artistName );
})

    };


>>>>>>> 44e996ea2ab69c9f1885c05286fd7500d251b75d

