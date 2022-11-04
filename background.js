// background.js

// ICI CE SONT LES ELEMENTS MODIFIABLES :

// PLaylist fonction (voir le tutoriel pour remplir cette section)

// Index de toute les playlists non + musiques

/*
var all_playlists = [
  {name: 'playlist rock', list: ['musique/Lefa---Bitch.mp3']},
  {name: 'playlist jazz', list: ['musique/Lefa---Bitch.mp3']},
  {name: 'playlist rap', list: ['musique/Lefa---Bitch.mp3']}
];
*/

var all_playlists = [
    // Copier-coller la liste en bas
    //{name: 'Musique dambiance', list: ['musique/citrus-holy-henry.mp3','musique/Joey-Pecoraro---First-Kiss.mp3']},
    //{name: 'Rap', list: ['musique/Lefa---Bitch.mp3','musique/PLK-SCH-Hier.mp3','musique/Damso---Mosaïque-Solitaire.mp3','musique/La-carte-blanche-de-Damso.mp3']},
    //{name: 'Peace', list: ['musique/313-amour-de-jeunesse-clip-officiel.mp3','musique/Sia---Snowman.mp3','musique/Flume-&-Chet-Faker---Drop-the-Game.mp3','musique/Abhi-The-Nomad---Letter-For-God.mp3','musique/Lomepal---Trop-beau.mp3','musique/Cocoon.mp3','musique/guardin---i-think-youre-really-cool.mp3','musique/Roderick-Porter---Out-of-My-Mind.mp3','musique/Roderick-Porter---You.mp3','musique/UMI---Remember-Me.mp3','musique/Steam-Phunk---Sophie.mp3','musique/Roderick-Porter---ghost.mp3','musique/Moji-x-Sboy---Pas-comme-elles.mp3','musique/Moji-x-Sboy---Ma-go.mp3']},
    //{name: 'Chill', list: ['musique/Moji-x-Sboy-Regarde-moi.mp3','musique/Sia---Snowman.mp3','musique/Kailee-Morgue---F**K-U.mp3','musique/Yas---Empty-Crown.mp3','musique/Hippie-Sabotage---DIFFERENT.mp3','musique/Hippie-Sabotage---TRUST-NOBODY.mp3','musique/Abhi-The-Nomad---Letter-For-God.mp3','musique/Cocoon.mp3','musique/Hippie-Sabotage---DISTANCE.mp3','musique/guardin---i-think-youre-really-cool.mp3','musique/Roderick-Porter---Out-of-My-Mind.mp3','musique/Roderick-Porter---it-hurts.mp3','musique/guardin---take-away-the-pain.mp3']},
    //{name: 'Electro / Trap', list: ['musique/The-Tech-Thieves---Fake.mp3','musique/Hippie-Sabotage---DISTANCE.mp3','musique/Dance-with-Me.mp3','musique/Roderick-Porter---Introspection.mp3']},
    //{name: 'Sad mood', list: ['musique/YUZMV---Drogue.mp3']},
    {
        name: 'Ambiance', list: [
            'musique/alleluia.mp3',
            'musique/Asaf.mp3',
            'musique/Ehrling-No-Worries.mp3',
            'musique/I-Think-I-Like-When-It-Rains.mp3',
            'musique/Ma-belle.mp3',
            'musique/MBNN-&-Rowald Steyn.mp3',
            'musique/PLK-Monegasque.mp3',
            'musique/Tove-Lo-Habits.mp3',
            'musique/VANUPIE-ROCKADOWN.mp3'
        ]
    },
    {
        name: 'Rap', list: [
        'musique/2Spee-Gonzales.mp3',
        'musique/Bienvenue-a-la-Banane.mp3',
        'musique/Busta-flex.mp3',
        'musique/Eloquence.mp3',
        'musique/Faut-Quon-Taille.mp3',
        'musique/Fonik.mp3',
        'musique/FreezeRael.mp3',
        'musique/Hugo-TSR-Autour-de-moi.mp3',
        'musique/Hugo-TSR-Cendrier-plein-et-stylo-vide.mp3',
        'musique/Hugo-TSR-conclure.mp3',
        'musique/Hugo-TSR-convaincre.mp3',
        'musique/Hugo-TSR-Couleur-miroir.mp3',
        'musique/Hugo-TSR-En-marge.mp3',
        'musique/Hugo-TSR-Fenetre-sur-rue.mp3',
        'musique/Hugo-TSR-Iceberg.mp3',
        'musique/Hugo-TSR-La-Haut.mp3',
        'musique/Hugo-TSR-Objectif-lune.mp3',
        'musique/Hugo-TSR-Old-boy.mp3',
        'musique/Hugo-TSR-REI.mp3',
        'musique/Hugo-TSR-Sensei.mp3',
        'musique/HugoTSR-Coma.mp3',
        'musique/Jeff-Le-Nerf.mp3',
        'musique/katana.mp3',
        'musique/Kema.mp3',
        'musique/KMZ.mp3',
        'musique/Papi-Fredo.mp3',
        'musique/Pourquoi.mp3',
        'musique/Pyroman.mp3',
        'musique/Rabakar.mp3',
        'musique/Sear-Lui-Meme.mp3',
        'musique/Soso-TP.mp3',
        'musique/TSR-Crew-A-quoi-ca-rime.mp3',
        'musique/TSR-Crew-Bouteille-a-la-Seine.mp3',
        'musique/TSR-Crew-Champs-De-Vision.mp3',
        'musique/TSR-Crew-Crimes-Et-Sentiments.mp3',
        'musique/TSR-Crew-Des-reves-jen-ai-plus.mp3',
        'musique/TSR-CREW-Detenus.mp3',
        'musique/TSR-Crew-Freres-de-son.mp3',
        'musique/TSR-Crew-Ici.mp3',
        'musique/TSR-Crew-Le-monde-daujourdhui.mp3',
        'musique/TSR-Crew-Oublie-pas.mp3',
        'musique/TSR-Crew-Sans-Sommation-Partie-1.mp3',
        'musique/TSR-Crew-Sans-Sommation-Partie-3.mp3',
        'musique/TSR-Crew-Savane-Sur-Du-Ciment.mp3',
        'musique/TSR-Crew-Seum-Drogue-Millionnaire.mp3',
        'musique/Vald-Je-taime.mp3'
        ]
    },
        {
        name: 'Chill', list: [
        'musique/bedroom.mp3',
        'musique/Disiz-heureux.mp3',
        'musique/Else.mp3',
        'musique/Ideal-Woman-Celeste-cover.mp3',
        'musique/Kid-Cudi-Pursuit-Of-Happiness.mp3',
        'musique/Lefa-Fame.mp3',
        'musique/Lefa-Maniaque.mp3',
        'musique/Society.mp3'
        ]
    },
    {
        name: 'Sad', list: [
        'musique/Breezeblocks.mp3',
        'musique/Crawl.mp3',
        'musique/frank-sinatra.mp3',
        'musique/home-edward.mp3',
        'musique/home-matthew-hall.mp3',
        'musique/Hymn-for-the-weekend-cover.mp3',
        'musique/moonlight-polarrana.mp3',
        'musique/Please-Dont-Go.mp3',
        'musique/The-Neighbourhood.mp3',
        'musique/white-mustang-lana-del-rey.mp3'
        ]
    },
    //Copier-coller la liste en haut et retirer la dernière virgule qui dépasse.
];


// Index de toutes les musiques
/*
var playlist_globale = [ // Old list, fiels still there
  'musique/313-amour-de-jeunesse-clip-officiel.mp3',
  'musique/Moji-x-Sboy-Regarde-moi.mp3',
  'musique/Lefa---Bitch.mp3',
  'musique/citrus-holy-henry.mp3',
  'musique/Sia---Snowman.mp3',
  'musique/PLK-SCH-Hier.mp3',
  'musique/Kailee-Morgue---F**K-U.mp3',
  'musique/The-Tech-Thieves---Fake.mp3',
  'musique/Yas---Empty-Crown.mp3',
  'musique/Hippie-Sabotage---DIFFERENT.mp3',
  'musique/Hippie-Sabotage---TRUST-NOBODY.mp3',
  'musique/Flume-&-Chet-Faker---Drop-the-Game.mp3',
  'musique/Abhi-The-Nomad---Letter-For-God.mp3',
  'musique/Lomepal---Trop-beau.mp3',
  'musique/Cocoon.mp3',
  'musique/Hippie-Sabotage---DISTANCE.mp3',
  'musique/Dance-with-Me.mp3',
  'musique/Joey-Pecoraro---First-Kiss.mp3',
  'musique/Roderick-Porter---Out-of-My-Mind.mp3',
  'musique/Roderick-Porter---You.mp3',
  'musique/Roderick-Porter---Introspection.mp3',
  'musique/Roderick-Porter---it-hurts.mp3',
  'musique/UMI---Remember-Me.mp3',
  'musique/Steam-Phunk---Sophie.mp3',
  'musique/guardin---take-away-the-pain.mp3',
  'musique/Roderick-Porter---ghost.mp3',
  'musique/Moji-x-Sboy---Pas-comme-elles.mp3',
  'musique/Moji-x-Sboy---Ma-go.mp3',
  'musique/Achile---Vie-normale.mp3',
  'musique/YUZMV---Drogue.mp3',
  'musique/Damso---Mosaïque-Solitaire.mp3',
  'musique/La-carte-blanche-de-Damso.mp3'
  ];
*/

var playlist_globale = [
    'musique/313-amour-de-jeunesse-clip-officiel.mp3',
    'musique/2Spee-Gonzales.mp3',
    'musique/alleluia.mp3',
    'musique/Asaf.mp3',
    'musique/bedroom.mp3',
    'musique/Bienvenue-a-la-Banane.mp3',
    'musique/Breezeblocks.mp3',
    'musique/Busta-flex.mp3',
    'musique/Crawl.mp3',
    'musique/Disiz-heureux.mp3',
    'musique/Ehrling-No-Worries.mp3',
    'musique/Eloquence.mp3',
    'musique/Else.mp3',
    'musique/Faut-Quon-Taille.mp3',
    'musique/Fonik.mp3',
    'musique/frank-sinatra.mp3',
    'musique/FreezeRael.mp3',
    'musique/home-edward.mp3',
    'musique/home-matthew-hall.mp3',
    'musique/Hugo-TSR-Autour-de-moi.mp3',
    'musique/Hugo-TSR-Cendrier-plein-et-stylo-vide.mp3',
    'musique/Hugo-TSR-conclure.mp3',
    'musique/Hugo-TSR-convaincre.mp3',
    'musique/Hugo-TSR-Couleur-miroir.mp3',
    'musique/Hugo-TSR-En-marge.mp3',
    'musique/Hugo-TSR-Fenetre-sur-rue.mp3',
    'musique/Hugo-TSR-Iceberg.mp3',
    'musique/Hugo-TSR-La-Haut.mp3',
    'musique/Hugo-TSR-Objectif-lune.mp3',
    'musique/Hugo-TSR-Old-boy.mp3',
    'musique/Hugo-TSR-REI.mp3',
    'musique/Hugo-TSR-Sensei.mp3',
    'musique/HugoTSR-Coma.mp3',
    'musique/Hymn-for-the-weekend-cover.mp3',
    'musique/I-Think-I-Like-When-It-Rains.mp3',
    'musique/ideal woman paula.mp3',
    'musique/Ideal-Woman-Celeste-cover.mp3',
    'musique/Jeff-Le-Nerf.mp3',
    'musique/katana.mp3',
    'musique/Kema.mp3',
    'musique/Kid-Cudi-Pursuit-Of-Happiness.mp3',
    'musique/KMZ.mp3',
    'musique/Lefa-Fame.mp3',
    'musique/Lefa-Maniaque.mp3',
    'musique/Ma-belle.mp3',
    'musique/MBNN-&-Rowald Steyn.mp3',
    'musique/moonlight-polarrana.mp3',
    'musique/Papi-Fredo.mp3',
    'musique/Please-Dont-Go.mp3',
    'musique/PLK-Monegasque.mp3',
    'musique/Pourquoi.mp3',
    'musique/Pyroman.mp3',
    'musique/Rabakar.mp3',
    'musique/Sear-Lui-Meme.mp3',
    'musique/Society.mp3',
    'musique/Soso-TP.mp3',
    'musique/The-Neighbourhood.mp3',
    'musique/Tove-Lo-Habits.mp3',
    'musique/TSR-Crew-A-quoi-ca-rime.mp3',
    'musique/TSR-Crew-Bouteille-a-la-Seine.mp3',
    'musique/TSR-Crew-Champs-De-Vision.mp3',
    'musique/TSR-Crew-Crimes-Et-Sentiments.mp3',
    'musique/TSR-Crew-Des-reves-jen-ai-plus.mp3',
    'musique/TSR-CREW-Detenus.mp3',
    'musique/TSR-Crew-Freres-de-son.mp3',
    'musique/TSR-Crew-Ici.mp3',
    'musique/TSR-Crew-Le-monde-daujourdhui.mp3',
    'musique/TSR-Crew-Oublie-pas.mp3',
    'musique/TSR-Crew-Sans-Sommation-Partie-1.mp3',
    'musique/TSR-Crew-Sans-Sommation-Partie-3.mp3',
    'musique/TSR-Crew-Savane-Sur-Du-Ciment.mp3',
    'musique/TSR-Crew-Seum-Drogue-Millionnaire.mp3',
    'musique/Vald-Je-taime.mp3',
    'musique/VANUPIE-ROCKADOWN.mp3',
    'musique/white-mustang-lana-del-rey.mp3'
  ];
var playlist_1 = ['musique/feu-de-cheminée.mp3'];
var playlist = [
  'musique/313-amour-de-jeunesse-clip-officiel.mp3',
  'musique/Moji-x-Sboy-Regarde-moi.mp3',
  'musique/Lefa---Bitch.mp3',
  'musique/citrus-holy-henry.mp3',
  'musique/Sia---Snowman.mp3',
  'musique/PLK-SCH-Hier.mp3',
  'musique/Kailee-Morgue---F**K-U.mp3',
  'musique/The-Tech-Thieves---Fake.mp3',
  'musique/Yas---Empty-Crown.mp3',
  'musique/Hippie-Sabotage---DIFFERENT.mp3',
  'musique/Hippie-Sabotage---TRUST-NOBODY.mp3',
  'musique/Flume-&-Chet-Faker---Drop-the-Game.mp3',
  'musique/Abhi-The-Nomad---Letter-For-God.mp3',
  'musique/Lomepal---Trop-beau.mp3',
  'musique/Cocoon.mp3',
  'musique/Hippie-Sabotage---DISTANCE.mp3',
  'musique/Dance-with-Me.mp3',
  'musique/Joey-Pecoraro---First-Kiss.mp3',
  'musique/Roderick-Porter---Out-of-My-Mind.mp3',
  'musique/Roderick-Porter---You.mp3',
  'musique/Roderick-Porter---Introspection.mp3',
  'musique/Roderick-Porter---it-hurts.mp3',
  'musique/UMI---Remember-Me.mp3',
  'musique/Steam-Phunk---Sophie.mp3',
  'musique/guardin---take-away-the-pain.mp3',
  'musique/Roderick-Porter---ghost.mp3',
  'musique/Moji-x-Sboy---Pas-comme-elles.mp3',
  'musique/Moji-x-Sboy---Ma-go.mp3',
  'musique/Achile---Vie-normale.mp3',
  'musique/YUZMV---Drogue.mp3',
  'musique/Damso---Mosaïque-Solitaire.mp3',
  'musique/La-carte-blanche-de-Damso.mp3'
  ];
var audio = new Audio(),
    i = 0;
var playlistlength = playlist.length.toString();

audio.volume = 0.90;

function playPlaylist() {
  //Quand une musique se termine, passe à la suite
  audio.addEventListener('ended', function () {
      i = ++i < playlist.length ? i : 0;
  // Affiche les infos de la musique en train d'être jouée
      SetCurrentMusic(); // Affiche uniquement des infos ne mets rien à jour
      audio.src = playlist[i];
      audio.play();
  }, true);
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


//Affiche envoi les playlists
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "Please send playlists") {
        console.log("I WILL SEND PLAYLISTS");
        sendResponse({msg: all_playlists});
        console.log("Nombre de playlists envoyées : " + all_playlists.length);
    }
});


///// Fonction qui permet de chercher un ashe
function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}


//S'active quand une custom playlist a été cliquée
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "custom playlist cliquée") {
      console.log ("Message reçu, custom playlist : " + message.msg + " a été cliquée ");
      console.log("Changement des sons dans la playlist...");
      //Appel la fonction search pour trouver la playlist dans all_playlists
      var finded_playlist = search(message.msg, all_playlists);
      console.log("Playlist trouvée : " + finded_playlist["name"]);
      console.log("Musiques trouvées : " + finded_playlist["list"]);
      //
      playlist = finded_playlist["list"];
      console.log("PLAYLIST DESORMAIS : " + playlist);
      playlistlength = playlist.length.toString();
      console.log("reinitialisation de la playlist");
      i = 0;
      console.log("Vérification des nouveaux sons : " + playlist);
      console.log("Activation de la nouvelle playlist et des informations");
      playPlaylist();
      // Informe d'une nouvelle playlist
      sendResponse({msg: "newplaylistlancé"});
    }
});




//Affiche dans la console quand la popup est ouverte (Utile plus tard pour concatener)
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "popup opened") {
        console.log ("Popup says it was opened.");
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



// EN CONSTRUCTION : Modifie le volume du son et renvoie pour l'html du slider
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "whats volume value ?") {
      volumevalue = audio.volume;
      console.log("volume value : " + volumevalue);
      sendResponse({msg: volumevalue});
    }
});


// EN CONSTRUCTION : Modifie le volume du son et renvoie pour l'html du slider
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "volumechanged") {
      const volumenow = message.msg / 100;
      audio.volume = volumenow;
      console.log("volume now : " + volumenow);
      sendResponse({msg: volumenow});
    }
});



// Messages en background

console.log('La playlist contient ' + playlist.length + ' sons : ');
console.log('Liste des musiques : ' + playlist);




// Affiche les infos de la musique en train d'être jouée
function SetCurrentMusic() {
  var musiquenumero = i+1;
  console.log("Lancement de SetCurrentMusic :  " + musiquenumero + " !");
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





// Lire Regarde Moi en boucle
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if (message.text == "regarde_moi loop") {
      audio_element1.currentTime =0;
      audio_element1.loop =true;
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
