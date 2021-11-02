// // java script - header - sticky header - 4 drop down menus
// fetch('https://streetviewpublish.googleapis.com/$discovery/rest?version=v1')
//   .then(response => response.json())
//   .then(data => console.log(data));
// fetch('https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21')
//   .then(response => response.json())
//   .then(data => console.log(data));
// fetch('https://api.housinganywhere.com/v1')
//   .then(response => response.json())
//   .then(data => console.log(data));


//   document.querySelector("#form").addEventListener("submit", (event) => {
//     event.preventDefault();

//     // collect form data
const bedroom = document.querySelector("#bedrooms").value;
const bathrooms = document.querySelector("#bathrooms").value;
const services = document.querySelector("#service").value;
const zip = document.querySelector("#zip").value;

console.log(bedroom,bathrooms,services,zip)
//     // use the data to construct a url query .then()

//         //do stuff with data

//   });;


fetch("https://covid-19-statistics.p.rapidapi.com/reports?region_name=US&q=US%20California", {
"method": "GET",
"headers": {
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    "x-rapidapi-key": "50bfd5e59dmsh8c894a8811452bep172e1ejsnbaab7a0b6b6b"
}
})
.then(response => response.json())
.then(data =>{
console.log(data)
})
.catch(err => {
console.error(err);
});

