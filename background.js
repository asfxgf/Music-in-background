// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="#C3413B"'
  });
});


//Code quand on clique sur la popup
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "popup opened") {
        console.log ("Popup says it was opened.");
        // Run your script from here
    }
});




// PLaylist fonction

var audio = new Audio(),
    i = 0;
var playlist = new Array('musique/313-amour-de-jeunesse-clip-officiel.mp3', 'musique/moji-x-sboy-regarde-moi-audio.mp3', 'musique/sia-snowman-cover-by-jfla.mp3');

audio.addEventListener('ended', function () {
    i = ++i < playlist.length ? i : 0;
    console.log(i);
    console.log(playlist[i]);
    audio.src = playlist[i];
    audio.play();
}, true);
audio.volume = 1;
audio.loop = false;
audio.src = playlist[0];


function NumberOfSongs() {
  console.log('La playlist contient ' + playlist.length + ' sons');
}

NumberOfSongs();


function PlaylistAll() {
  console.log(playlist);
}


// Playlist play
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "playlist play") {
      console.log("Button Play pressed");
      console.log(playlist[i]);
      audio.play();
    }
});

// Playlist pause
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "playlist pause") {
      console.log("Button Pause pressed");
      audio.pause();
    }
});

// Playlist previous
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "playlist previous") {
      console.log("Button Previous pressed");
      i = --i < playlist.length ? i : 0;
      console.log(i);
      audio.src = playlist[i];
      console.log(playlist[i]);
      audio.play();
    }
});

// Playlist next
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "playlist next") {
      console.log("Button Next pressed")
      i = ++i < playlist.length ? i : 0;
      console.log(i);
      audio.src = playlist[i];
      console.log(playlist[i]);
      audio.play();
    }
});

//--------------------------313----------------------------------------


// Ajout de la musique 313
  var audio_element = document.createElement("audio");
  audio_element.src = "musique/313-amour-de-jeunesse-clip-officiel.mp3";





// Lancer 313
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "313 play") {
      audio_element.play();
    }
});

// Pause 313
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "313 pause") {
      audio_element.pause();
    }
});

// Reset 313
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "313 reset") {
      audio_element.currentTime =0;
      audio_element.play();
    }
});

// Lire 313 en boucle
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "313 loop") {
      audio_element.currentTime =0;
      audio_element.loop =true;
    }
});





//--------------------------Regarde Moi----------------------------------------

// Ajout de la musique Regarde Moi
  var audio_element1 = document.createElement("audio");
  audio_element1.src = "musique/moji-x-sboy-regarde-moi-audio.mp3";

// Lancer Regarde Moi
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "regarde_moi play") {
      audio_element1.play();
    }
});

// Pause Regarde Moi
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "regarde_moi pause") {
      audio_element1.pause();
    }
});

// Reset Regarde Moi
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "regarde_moi reset") {
      audio_element1.currentTime =0;
      audio_element1.play();
    }
});

// Lire Regarde Moi en boucle
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "regarde_moi loop") {
      audio_element1.currentTime =0;
      audio_element1.loop =true;
    }
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "regarde_moi") {
      var audio_element = document.createElement("audio");
      audio_element.src = "musique/moji-x-sboy-regarde-moi-audio.mp3";
      audio_element.play();
    }
});

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "omido_lsd") {
      var audio_element = document.createElement("audio");
      audio_element.src = "musique/omido_lsd.mp3";
      audio_element.play();
    }
});

/* Permet de lancer une musique dans les documents au lancement

  var audio_element = document.createElement("audio");
  audio_element.src = "musique/omido-lsd.mp3";

  audio_element.play();
*/



/* Tests lancer une musique en background au clique

 function listenOmido() {
  const button = document.getElementById('omido');


  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'musique/omido-lsd.mp3'
    });
  })
}

listenOmido();
*/
