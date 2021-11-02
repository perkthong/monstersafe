
//   document.querySelector("#form").addEventListener("submit", (event) => {
//     event.preventDefault();

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
//     // collect form data
const state = document.querySelector("#state").value;
const latitude = document.querySelector("#latitude").value;
const longitude = document.querySelector("#longitude").value;

console.log(state,latitude,longitude);


//   });;

