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


//Quand une musique se termine, passe à la suite
audio.addEventListener('ended', function () {
    i = ++i < playlist.length ? i : 0;
    SetCurrentMusic();
    audio.src = playlist[i];
    audio.play();
}, true);
audio.volume = 1;
audio.loop = false;
audio.src = playlist[0];





/* Mets à jour le titre de la musique actuel
function AddTheCurrentMusic() {
  var musique = "Musique 1";

  document.getElementById("current title name").innerHTML = musique;
}

AddTheCurrentMusic();
*/



/* Tentative de l'envoi d'un message vers popup.js EN CONSTRUCTION

console.log("Envoi d'un message vers popup.js");
chrome.runtime.sendMessage({
    msg: "something_completed",
    data: {
        subject: "Loading",
        content: "Just completed!"
    }
});

console.log("Message envoyé vers popup.js");

console.log("Réception du message en background");

chrome.runtime.sendMessage({text: "popup opened"});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "something_completed") {
            //  To do something
            console.log(request.data.subject)
            console.log(request.data.content)
        }
    }
);

console.log("Message receptionné");
*/

// Envoi les infos en réponse à la demande du popup

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Background received : " + request.msg);
        //Envoi le titre en cours
        sendResponse({msg: playlist[i]});
        console.log("Background sended: " + playlist[i]);
    });


// Messages en background

console.log('La playlist contient ' + playlist.length + ' sons : ');
console.log('Liste des musiques : ' + playlist);




// Affiche les infos de la musique en train d'être jouée
function SetCurrentMusic() {
  var musiquenumero = i+1;
  console.log("Lancement de la musique numéro " + musiquenumero + " !");
  }

// Informations sur la playlist


// Playlist play
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "playlist play") {
      console.log("Button Play pressed");
      SetCurrentMusic();
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
        i = --i > 0 ? i : 0;
        audio.src = playlist[i];
        SetCurrentMusic();
        audio.play();
    }
  });

// Playlist next
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "playlist next") {
      console.log("Button Next pressed")
      i = ++i < playlist.length ? i : 0;
      audio.src = playlist[i];
      SetCurrentMusic();
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
