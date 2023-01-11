fetch('https://phone-specs-api.azharimm.dev/latest')           //api for the get request
  .then(response => response.json())
  .then(data => console.log(data));