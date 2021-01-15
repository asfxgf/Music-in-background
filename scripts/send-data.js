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


/*
// script/send-data.js

//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

function fetchData() {
    const title = "coucou";
    const url = "coucou url";
  //const title = document.querySelector('title').innerText;
  //const url = window.location.href;

  return {
    title: title,
    url: url
  }
}

function sendData() {

// Authentication
  const url = 'https://api.airtable.com/v0/appmKBfWeaeltuii4/Playlist';
  //var base = new Airtable({apiKey:'keyNsWhs7GZ7EsjjX'}).base('appmKBfWeaeltuii4');

  var Airtable = require('airtable');
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: 'keyNsWhs7GZ7EsjjX'
  });

  const base = require('airtable').base('appmKBfWeaeltuii4');

  //var airtable = new Airtable({endpointUrl: 'https://api-airtable-com-8hw7i1oz63iz.runscope.net/'});
  //var base = Airtable.base('appmKBfWeaeltuii4');

  // create record

  base("Playlist").create([
    {
      "fields": {
        "Title": "test Airtable API",
        "URLYOUTUBE": "https://www.youtube.com/?hl=fr&gl=FR"
      }
    }
  ]);
  console.log("musique ajoutée à la table Playlist");
};
/*
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

sendData();

},{"airtable":3}]},{},[202]);


*/
