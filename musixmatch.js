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
//make container for results
searchDiv.append($("<div>").attr("id","resultsDiv"));
var resultsDiv =$("#resultsDiv");

//turn search input into searchSong
$("#searchbtn").on("click",function(event){
    event.preventDefault();
    var searchSong = $("#searchbox").val().trim();
    $("#searchbox").val(" ");
    search();
  

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
        console.log(data.message.body.track_list[0].track.track_name);
        // var song = `data.message.body.track_list[0].track.track_name`;
        // var artist = `data.message.body.track_list[0].track.artist_name`;
        $("#resultsDiv").html(`<h5>Search Result</h5><br> Song:${data.message.body.track_list[0].track.track_name} <br>Artist:${data.message.body.track_list[0].track.artist_name}`);
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
    random();
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
          //console.log(data); 
          console.log(data.message.body.track_list);
          var trackList = data.message.body.track_list;

          var songName = [];
          var artistName = [];

          for (var i = 0; i < trackList.length; i++){
              console.log(i);
           
            songName [i]= data.message.body.track_list[i].track.track_name
            artistName [i]= data.message.body.track_list[i].track.artist_name
    $("#resultsDiv").append($("<p>").text("Song:" + songName));
    $("#resultsDiv").append($("<p>").text("Artist:" + artistName))
};
//calls for loop function to make list of songs
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
      }
        
      })
    }
