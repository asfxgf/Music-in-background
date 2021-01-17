// background.js


// PLaylist fonction

var playlist_globale = ['musique/313-amour-de-jeunesse-clip-officiel.mp3', 'musique/moji-x-sboy-regarde-moi-audio.mp3', 'musique/sia-snowman-cover-by-jfla.mp3'];
var playlist_1 = ['musique/sia-snowman-cover-by-jfla.mp3', 'musique/313-amour-de-jeunesse-clip-officiel.mp3'];
var playlist = ['musique/313-amour-de-jeunesse-clip-officiel.mp3', 'musique/moji-x-sboy-regarde-moi-audio.mp3', 'musique/sia-snowman-cover-by-jfla.mp3'];
var audio = new Audio(),
    i = 0;
var playlistlength = playlist.length.toString();


function playPlaylist() {
  //Quand une musique se termine, passe à la suite
  audio.addEventListener('ended', function () {
      i = ++i < playlist.length ? i : 0;
  // Affiche les infos de la musique en train d'être jouée
      SetCurrentMusic();
      audio.src = playlist[i];
      audio.play();
  }, true);
  audio.volume = 1;
  audio.loop = false;
  audio.src = playlist[0];
}

playPlaylist();

// Called when the user clicks on the browser action. (semble obsolète)
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="#C3413B"'
  });
});


//Affiche dans la console quand la popup est ouverte (Utile plus tard pour concatener)
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "popup opened") {
        console.log ("Popup says it was opened.");
        // Run your script from here
    }
});


//Affiche dans la console quand le bouton playlist globale est cliqué
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "playlist globale") {
      console.log ("Message reçu, la playlist globale est cliquée ");
      console.log("Changement des sons dans la playlist");
      playlist = playlist_globale;
      playlistlength = playlist.length;
      console.log("reinitialisation de la playlist");
      i = 0;
      console.log("Vérification des nouveaux sons : " + playlist);
      console.log("Activation de la nouvelle playlist et des informations");
      playPlaylist();
      // Informe d'une nouvelle playlist
      sendResponse({msg: "newplaylist"});
    }
});

//Affiche dans la console quand le bouton playlist 1 est cliqué
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "playlist 1") {
      console.log ("Message reçu, la playlist 1 est cliquée ");
      console.log("Changement des sons dans la playlist");
      //Change les musiques de la playlist
      playlist = playlist_1;
      //Met à jour le nombre de musiques dans la playlist
      playlistlength = playlist.length;
      console.log("reinitialisation de la playlist");
      i = 0;
      console.log("Vérification des nouveaux sons : " + playlist);
      console.log("Activation de la nouvelle playlist et des informations");
      // Reactive la fonction qui écoute le changement de musique
      playPlaylist();
      //Appui sur le bouton musique précédente
      chrome.runtime.sendMessage({text: "playlist previous"});
      // affiche l'audio actuel
      console.log("l'audio actuel est : " + audio);


      // Informe d'une nouvelle playlist
      sendResponse({msg: "newplaylist"});
    }
});




// Envoi le titre de la musique jouée en réponse à la demande du popup

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.msg == "Hello") {
        console.log("Background received : " + request.msg );
        console.log("Envoi de la musique en cours...");
        //Envoi le titre en cours
        sendResponse({msg: playlist[i]});
        console.log("Background sended: " + playlist[i]);
      }
    });


// Envoi la position du titre en réponse à la demande du popup

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.msg == "Hello Track") {
        console.log("Background received : " + request.msg);
        //Position du son actuel dans l'array
        var computerposition = playlist.indexOf(playlist[i]);
        //Position pour un humain (+1)
        var humanposition = computerposition + 1;
        //Text pour le popup
        var textforpopup = "N°" + humanposition + "/" + playlistlength;
        console.log("Envoi de la position du titre en cours : " + textforpopup);
        //Envoi le titre en cours
        sendResponse({msg: textforpopup});
        //Envoi le nombre de musiques dans la playlist
      }
    });


// Envoi la position du titre en réponse à la demande du popup

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.msg == "Hello Index") {
        console.log("Background received : " + request.msg);
        console.log("Envoi de la playlist : " + playlist);
        //Envoi une réponse
        sendResponse({msg: playlist});
      }
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
