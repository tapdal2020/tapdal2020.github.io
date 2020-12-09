
// Spotify Now playing API call using Implicit Grant

// Get the hash of the url
const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';




const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = '7a7fb4b59ae24f26860b437d05b1e439';
const redirectUri = 'https://github.tamu.edu/pages/zwchristie/musication445.github.io/index.html';
const scopes = [
  'user-read-currently-playing'
];

// Set token
console.log("setting token");
_token1 = hash.access_token;


function doAjaxCall(){
  $.ajax({
    url: "https://api.spotify.com/v1/me/player/currently-playing",
    type: "GET",
    beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token1 );},


    success: function(data) {
      // Do something with the returned data
      try{
        if (data.is_playing = true) {
          songName = data.item.name;
          type = data.context.type;
          songId = data.item.id;
          artistNames = data.item.artists;

          if(artistNames.length > 1){
            for(var i = 0; i< artistNames.length;i++){
              if(i == 0){
                artistName = artistNames[i].name;
              }
              else{
                artistName = artistName + ","+ artistNames[i].name;
              }
            }
          }
          else{
            artistName = artistNames[0].name;
          }
          // $("#Now-Playing").append(data.item.name);
          // $("#Track-ID").append(data.item.id);
          // $("#Track-type").append(data.context.type);
        }
      }
      catch(err) {
        console.log("Error: " + err)
      }
        
        


    }
    
  });
}
