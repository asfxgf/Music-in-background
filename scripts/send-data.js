// script/send-data.js

//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

function fetchData() {
  const title = "coucou";
  //const title = document.querySelector('title').innerText;
  const url = "coucou url";
  //const url = window.location.href;

  return {
    title: title,
    url: url
  }
}

function sendData(data) {

  const url = 'https://api.airtable.com/v0/appmKBfWeaeltuii4/Playlist';
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyNsWhs7GZ7EsjjX'}).base('appmKBfWeaeltuii4');

  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer keyNsWhs7GZ7EsjjX"
     },
    body: JSON.stringify({
        "records": [
      {
        "fields": {
        "Titre": "test POSTMAN via Extension",
        "URLYOUTUBE": "https://www.youtube.com/?hl=fr&gl=FR"
      }
    }
  ]
  })

  })
};

sendData(fetchData());
