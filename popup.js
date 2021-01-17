// popup.js


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
    currenttitlename.innerHTML = titreHumain;
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

function listenClickAirtableList() {
  const buttonAirtableList = document.getElementById('Airtable-list');


  buttonAirtableList.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/airtable-list.js'
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
listenClickAirtableList();


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

