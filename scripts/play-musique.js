// script/send-data.js
function fetchData() {
  const title = document.querySelector('title').innerText;
  const url = window.location.href;

  return {
    title: title,
    url: url
  }
}

function displayData(data) {
  console.log(`un deux test play-musique ${data.title} on ${data.url}`)
}





displayData(fetchData());
