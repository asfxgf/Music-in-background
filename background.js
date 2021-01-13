// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="#C3413B"'
  });
});

// Ensemble des musiques ajoutées.
  var audio_element = document.createElement("audio");
  audio_element.src = "musique/313-amour-de-jeunesse-clip-officiel.mp3";


chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "popup opened") {
        console.log ("Popup says it was opened.");
        // Run your script from here
    }
});

// Lancer la musique
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "313 play") {
      audio_element.play();
    }
});

// Pause la musique
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "313 pause") {
      audio_element.pause();
    }
});

// Reset la musique
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "313 reset") {
      audio_element.currentTime =0;
      audio_element.play();
    }
});

// Lire la musique en boucle
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "313 loop") {
      audio_element.currentTime =0;
      audio_element.loop =true;
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
