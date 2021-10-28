// java script - header - sticky header - 4 drop down menus
fetch('https://streetviewpublish.googleapis.com/$discovery/rest?version=v1')
  .then(response => response.json())
  .then(data => console.log(data));
fetch('https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21')
  .then(response => response.json())
  .then(data => console.log(data));
