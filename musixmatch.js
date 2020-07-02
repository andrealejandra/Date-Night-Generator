


randomLyricArray = ["love","loved","waiting for you","date","beautiful","two of us","mine","crazy about you","in love"];

for (var i = 0; i < randomLyricArray.length; i++) {

    var randomLyric = randomLyricArray[Math.floor(Math.random() * randomLyricArray.length)];

    // pulls random lyric from array -- WORKS!
    console.log(randomLyric);
};

//pulling undefined
queryURL = "https://api.musixmatch.com/ws/1.1/matcher.track.get?format=jsonp&callback=callback&f_has_lyrics="+randomLyric+"&apikey=200a4593b9277ce9ffb162e74cb71ea0";

function randomDateSong(){
$.ajax({
    
    method: "GET",
    data: {
        apiKey: "200a4593b9277ce9ffb162e74cb71ea0",
        f_has_lyrics: randomLyric,
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "https://api.musixmatch.com/ws/1.1/track.search",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function(data) {
            console.log(data); 

    var randomSong = callback.f_has_lyrics;
    var musicDiv = $(".music-content");
    musicDiv.append($("<p>").text("Random Date Track: "+ randomSong));
},

    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    }    

});
}
