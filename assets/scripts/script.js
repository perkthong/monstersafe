<<<<<<< HEAD
=======
//   document.querySelector("#form").addEventListener("submit", (event) => {
//     event.preventDefault();

>>>>>>> add-css
document
  .querySelector("#COVID-search-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

<<<<<<< HEAD
    function myFunction() {
    var stateInitial = document.getElementById("state");
      document.getElementById("state").value =
    state.options[state.selectedIndex].text;
    }
    
    var stateCode = document.getElementById("state").value;
    fetch(
      `https://api.covidactnow.org/v2/state/${stateCode}.json?apiKey=bf076c55a54247e998486f5cc1ba1acc`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("*****", data.actuals);
        console.log("stateLatLng_Coordinates", stateLocationMapping);

        var currLat
        var currLng
        for (i = 0; i < stateLocationMapping.length; i++) {
          var currState = stateLocationMapping[i]
          if (currState.stateCode == stateCode)
          currLat = parseFloat(currState.lat)
          currLng = parseFloat(currState.lng)
          console.log(currLat)
          console.log(currLng)
        } 
        
        let template = "";
        //Google Maps API// 
        function initMap(){
          var options = {
              zoom:6,
              center:{lat: currLat ,lng: currLng}
          } 
          

          var map = new google.maps.Map(document.getElementById('map'), options);
        };
      
          initMap()
          // console.log(options)
        //template for COVID stats//
          template += `
            <div>
              <h3>State: ${stateCode}</h3>
              <p>New Cases: ${data.actuals.newCases}</p>
              <p>Cases: ${data.actuals.cases}</p>
              <p>Deaths: ${data.actuals.deaths}</p>
              <p>Vaccines Administered: ${data.actuals.vaccinesAdministered}</p>
              <p>Negative Tests: ${data.actuals.negativeTests}</p>
              <p>ICU Beds Capacity: ${data.actuals.icuBeds.capacity}</p>
              <p>ICU Beds Current Total in Use: ${data.actuals.icuBeds.currentUsageTotal}</p>
              
            </div>
              `;
              
            
            
          
        // });
        console.log(template);
        document.querySelector("#data-insert").innerHTML = template;
        console.log(document.querySelector("#data-insert"))
      })
      .catch((err) => {
        console.error(err);
      })
    // collect form data
  });
=======
    const cityName = document.querySelector("#cityName").value;
    const stateName = document.querySelectorAll("#state").value;

    fetch('https://api.covidactnow.org/v2/states.json?apiKey=6e6605a3a3144a6db2a79a287aedd41d')
      .then((response) => response.json())
      .then((data) => {
        console.log("*****", data.data);

        let template = "";
        data.data.forEach((datum) => {
            template += `
                <div>
                    <h3>State</h3>
                    <p>State: ${datum.province}</p>
                    <p>Death: ${datum.deaths}</p>
                    <p>Recovered: ${datum.recovered}</p>
                    <h3>City</h3>
                    <p>City Name: ${datum.region.cities[0].name}</p>
                    <p>Death: ${datum.region.cities[0].deaths}</p>
                    <p>Recovered: ${datum.region.cities[0].recovered}</p>
                </div>
            `;
        });
        console.log(template);
        document.querySelector("#data-insert").innerHTML = template;

      })
      .catch((err) => {
        console.error(err);
      });
    //    // collect form data
  });

// const state = document.querySelector("#state").value;

// console.log(state, latitude, longitude);
// state = province
//latitude = lat
// longitude = long
//cities {name:""}

// variables for each state value equal to the state name
// user inputs their lat long
// compare to the lat and long of the nearest county
// show in main
//   });;
>>>>>>> add-css
