/*

Si un dev vient un jour  à lire ce fichier, je m'en excuse d'avance.
Le code est mal organisé, mal refacto, et même pas fragmenté dans des fichiers séparés.
La vérité c'est que je ne pensais pas créer une extension avec autant de features.
Je me suis laissé prendre au jeu.
Je pourrais refactoriser à la demande :
deleglise.quentin@hotmail.fr
+33 77 31 76 86.
améliorer ce projet à la base.

*/

// Initialisation slider

// Déclaration des variables
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Est appelé quand il y a un changement de volume pour afficher la bonne valeur à jour
function SetVolumeValueOnOpen() {
  console.log("Demande de la valeur du volume au background");
  chrome.runtime.sendMessage({text: "whats volume value ?"}, function(response) {
  const volumevalue = response.msg * 100; // Remise à niveau de la bonne valeur du volume
  console.log("Réponse du background : " + volumevalue);
  slider.value = volumevalue;
  output.innerHTML = volumevalue;
  console.log("Mise à jour des elements HTML de volume effectuée");
  });
}

SetVolumeValueOnOpen();
//-----------------------SLIDER (BARRE SON)-----------------------

// Demande de changer le volume au background, la réponse permet de modifier le html de la page
function SendVolumeToBackground() {
  const slideronlistener = document.getElementById("myRange");
  const volume = document.getElementById('demo');
  slideronlistener.addEventListener('mouseup', () => {
    console.log("Envoi du nouveau volume au background : " + volume.innerHTML);
    chrome.runtime.sendMessage({text: "volumechanged", msg: volume.innerHTML}, function(response) {
      console.log("Volume modifié par le background");
      console.log("sauvegarde de la valeur de la slidebar");
    })});
  };

SendVolumeToBackground();


// Initialise les boutons des playlists et les events listeners liés

function AskForPlaylists() {
  chrome.runtime.sendMessage({text: "Please send playlists"}, function(response) {
    console.log("Reception des playlists...");
    console.log("Playlists received : " + response.msg);
    //Créer une variable qui stock la liste des playlists
    var all_playlists = response.msg;

    //Trouve où placer les boutons
    var findhtmlposition = document.getElementById("all playlists");
    //Itère pour chaque playlist de l'array
    all_playlists.forEach((playlist) => {
    // Créer un element html
    var newbutton = document.createElement("BUTTON");
    //Remplis le texte du boutton
    newbutton.innerHTML = playlist.name;
    newbutton.setAttribute("class", "playlist");
    newbutton.setAttribute("id", playlist.name);
    //Pose le boutton au bon endroit
    findhtmlposition.appendChild(newbutton);
    console.log("Boutton : " + playlist.name + " ajouté !");
    // Ajoute un micro à la playlist

    const button = document.getElementById(playlist.name);

    button.addEventListener('click', () => {
    // Informe que le bouton playlist gloabale a été cliqué
    console.log("Le bouton de la playlist : " + playlist.name + " a été cliqué");
    chrome.runtime.sendMessage({text: "custom playlist cliquée", msg: playlist.name}, function(response) {
    //Affiche la reçu par le background
    console.log("Message reçu suite à la demande de changement de custom playlist : " + response.msg);
    ChangeMusicOnOpen();
    UpdatePositionOnOpen();
    DisplayIndex();
    chrome.runtime.sendMessage({text: "playlist play"});
    })});
    });
  });
}

function SetThePlaylistCalled() {
  const button = document.getElementById('playlist globale');

  button.addEventListener('click', () => {
    // Informe que le bouton playlist gloabale a été cliqué
    console.log("Le bouton playlist globale a été cliqué");

    chrome.runtime.sendMessage({text: "playlist globale"}, function(response) {
    //Affiche la reçu par le background
    console.log("Popup received the new playlist order: " + response.msg);
    ChangeMusicOnOpen();
    UpdatePositionOnOpen();
    DisplayIndex();
    chrome.runtime.sendMessage({text: "playlist play"});
  })});
}






//


//------------------------MAJ POPUP ELEMENTS DYNAMIQUES---------------------



// Ping...Pong qui met à jour le titre de la musique reçue via le background

function ChangeMusicOnOpen() {
  chrome.runtime.sendMessage({msg: "Hello"}, function(response) {
    //Récupération de la musique en cours via le background
    console.log("Popup received Music: " + response.msg);
    //Récupère un element html du popup
    var currenttitlename = document.getElementById("current title name");
    var titreHumain = response.msg.slice(8, -4);
    //Ajoute la musique à l'element html
    currenttitlename.innerHTML = "▶▷▶▷  " + titreHumain + "  ◁◀◁◀";
    console.log("Musique en cours : " + titreHumain);
    });
  }



// Ping...Pong qui met à jour la position de la musique dans la playlist (x/3)

function UpdatePositionOnOpen() {
  chrome.runtime.sendMessage({msg: "Hello Track"}, function(response) {
    //Affiche la position reçue
    console.log("Popup received Position: " + response.msg);
    //Récupère un element html du popup
    var currentposition = document.getElementById("position in playlist");
    //Ajoute la position de la musique à l'element html
    currentposition.innerHTML = response.msg;
    });
  }



// Ping...Pong qui met à jour l'index de la playlist

function DisplayIndex() {
  chrome.runtime.sendMessage({msg: "Hello Index"}, function(response) {
    //Affiche l'index reçu via le background
    console.log("Popup received Index: " + response.msg);
    //Récupère un element html du popup

    var playlist = response.msg;

    console.log("la playlist en brut : " + playlist);

    //Efface l'index existant
    var songs = document.querySelectorAll("#index-li");
    songs.forEach((song) => {
      song.remove();
      console.log(songs);
    })
    //Itère sur chaque item de la playlist la fonction "displayOnIndex"
    playlist.forEach(displayOnIndex);
    });
  }

//Utilisé sur chaque musique de la playlist pour afficher correctement l'index
function displayOnIndex(item, index) {
  var item = item;
  var index = index;
  console.log("ITEEEEEEEEMMMM : " + item);
  console.log("INDEXXXXXXXXXX : " + index);
  var indexHumain = index + 1;
  //Coupe les mots indésirables sur le titre de la musiqe
  var itemHumain = item.slice(8, -4);
  //Trouve l'index dans le popuphtml
  var indexhtml = document.getElementById("index");
  //Met en forme les musiques (fonctionnel mais pas joli)
  //  document.getElementById("index").innerHTML += indexHumain + ":" + itemHumain + "<br>";
  //  console.log("indexhumain : " + indexHumain + " item : " + item);

  // Tentative de faire quelque chose de plus joli à display dans le popup

  //Créer une ligne <li> avec le nom d'une musique
  var newmusique = document.createElement("li");
  //Rempli la ligne <li> Par du contenu dynamique (numéro + titre de la musique)
  newmusique.innerHTML = indexHumain + "/ " + itemHumain;
  //Donne un id "index-li "au <li>
  newmusique.id = "index-li";
  indexhtml.appendChild(newmusique);
  console.log("Nouvel ajout dans l'index : " + indexHumain + "/ " + itemHumain);
}



//-----------------------Obselète-----------------------

function listenClick() {
  const button = document.getElementById('send-data');


  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/send-data.js'
    });
  })
}

function listenClickPlay() {
  const buttonPlay = document.getElementById('run-musique');

  buttonPlay.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/play-musique.js'
    });
  })
}


//-----------------------Playlist-----------------------

function CallPlaylist_Play() {
  const button = document.getElementById('playlist play');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "playlist play"});
    //Actualise la musique du popup
    ChangeMusicOnOpen();
    UpdatePositionOnOpen();
    });
  };

function CallPlaylist_Pause() {
  const button = document.getElementById('playlist pause');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "playlist pause"});
    });
  };

function CallPlaylist_Previous() {
  const button = document.getElementById('playlist previous');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "playlist previous"});
    // Actualise la musique du popup
    ChangeMusicOnOpen();
    UpdatePositionOnOpen();
    });
  };

function CallPlaylist_Next() {
  const button = document.getElementById('playlist next');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "playlist next"});
    // Actualise la musique du popup
    ChangeMusicOnOpen();
    UpdatePositionOnOpen();
    });
  };










  //-----------------------Custom Playlist-----------------------

// Lance la playlist globale et refresh les infos du popup

function CallPlaylistGlobal() {
  const button = document.getElementById('playlist globale');

  button.addEventListener('click', () => {
    // Informe que le bouton playlist gloabale a été cliqué
    console.log("Le bouton playlist globale a été cliqué");
    //chrome.runtime.sendMessage({text: "playlist_1"});
    chrome.runtime.sendMessage({text: "playlist globale"}, function(response) {
    //Affiche la reçu par le background
    console.log("Popup received the new playlist order: " + response.msg);
    ChangeMusicOnOpen();
    UpdatePositionOnOpen();
    DisplayIndex();
    chrome.runtime.sendMessage({text: "playlist play"});
  })});
}


// Lance la playlist 1 et refresh les infos du popup

function CallPlaylist_1() {
  const button = document.getElementById('playlist 1');

  button.addEventListener('click', () => {
    // Informe que le bouton playlist 1 a été cliqué
    console.log("Le bouton playlist 1 a été cliqué");
    //chrome.runtime.sendMessage({text: "playlist_1"});
    chrome.runtime.sendMessage({text: "playlist 1"}, function(response) {
    //Affiche la reçu par le background
    console.log("Popup received the new playlist order: " + response.msg);
    ChangeMusicOnOpen();
    UpdatePositionOnOpen();
    DisplayIndex();
    chrome.runtime.sendMessage({text: "playlist play"});
  })});
}


//-----------------------313 (obsolete)-----------------------

function Call313_Play() {
  const button = document.getElementById('313 play');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "313 play"});
    });
  };

function Call313_Pause() {
  const button = document.getElementById('313 pause');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "313 pause"});
    });
  };

function Call313_Reset() {
  const button = document.getElementById('313 reset');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "313 reset"});
    });
  };

function Call313_Loop() {
  const button = document.getElementById('313 loop');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "313 loop"});
    });
  };






//-----------------------regarde-moi (obsolete)-----------------------

function CallRegardeMoi_Play() {
  const button = document.getElementById('regarde_moi play');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "regarde_moi play"});
    });
  };

function CallRegardeMoi_Pause() {
  const button = document.getElementById('regarde_moi pause');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "regarde_moi pause"});
    });
  };

function CallRegardeMoi_Reset() {
  const button = document.getElementById('regarde_moi reset');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "regarde_moi reset"});
    });
  };

function CallRegardeMoi_Loop() {
  const button = document.getElementById('regarde_moi loop');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "regarde_moi loop"});
    });
  };





















listenClick();
listenClickPlay();
//listenClickAirtableList();




//-----------------------Initialisation-----------------------

AskForPlaylists();



//-----------------------PopUp MAJ-----------------------

ChangeMusicOnOpen(); // Affiche la musique en cours à l'ouverture
UpdatePositionOnOpen(); // Affiche la position de la musique en cours dans la playlist
DisplayIndex(); // Affiche l'index des musiques


//-----------------------Playlist-----------------------

CallPlaylist_Play();
CallPlaylist_Pause();
CallPlaylist_Previous();
CallPlaylist_Next();

//-----------------------Custom Playlist-----------------------

CallPlaylistGlobal()
CallPlaylist_1();


//-----------------------313 obsolète-----------------------

Call313_Play();
Call313_Pause();
Call313_Reset();
Call313_Loop();

//-----------------------Regarde_moi (obsolète)-----------------------

CallRegardeMoi_Play();
CallRegardeMoi_Pause();
CallRegardeMoi_Reset();
CallRegardeMoi_Loop();
//CallRegarde_Moi();

