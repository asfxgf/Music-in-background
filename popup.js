// popup.js


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


function listenOmido() {
  const buttonOmido = document.getElementById('omido');

buttonOmido.addEventListener('click', () => {
  chrome.tabs.executeScript({
      file: 'backgroundSongs.js'
    });
  })
}


//-----------------------Playlist-----------------------

function CallPlaylist_Play() {
  const button = document.getElementById('playlist play');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "playlist play"});
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
    });
  };

function CallPlaylist_Next() {
  const button = document.getElementById('playlist next');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "playlist next"});
    });
  };


//-----------------------313-----------------------

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









//-----------------------regarde-moi-----------------------

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

/* Aperçu de ce qu'il faut créer quand on ajoute un son

function CallRegarde_Moi() {
  const button = document.getElementById('regarde_moi');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "regarde_moi"});
    });
  };

function CallOmido_Lsd() {
  const button = document.getElementById('omido_lsd');

  button.addEventListener('click', () => {

    chrome.runtime.sendMessage({text: "omido_lsd"});
    });
  };

*/


chrome.runtime.sendMessage({text: "popup opened"});




listenClick();
listenClickPlay();
listenClickAirtableList();
listenOmido();



//---Playlist---
CallPlaylist_Play();
CallPlaylist_Pause();
CallPlaylist_Previous();
CallPlaylist_Next();

//---313---
Call313_Play();
Call313_Pause();
Call313_Reset();
Call313_Loop();


//---Regarde moi---
CallRegardeMoi_Play();
CallRegardeMoi_Pause();
CallRegardeMoi_Reset();
CallRegardeMoi_Loop();


//CallRegarde_Moi();
//CallOmido_Lsd();

