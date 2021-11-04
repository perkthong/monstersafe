//   document.querySelector("#form").addEventListener("submit", (event) => {
//     event.preventDefault();

document
  .querySelector("#COVID-search-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    function myFunction() {
    var stateInitial = document.getElementById("state");
      document.getElementById("state").value =
    state.options[state.selectedIndex].text;
    }
    // console.log("*****",state);
    

    // const state = document.getElementById("#stateIntial").value;

    fetch(
      `https://api.covidactnow.org/v2/state/AL.json?apiKey=bf076c55a54247e998486f5cc1ba1acc`,
      // {
      //   method: "GET",
      //   headers: {
      //     "host": "api.covidactnow.org",
      //     "api-key": "bf076c55a54247e998486f5cc1ba1acc"
      //   }
      // }
      //   //`https://covid-19-statistics.p.rapidapi.com/reports?city_name=${cityName}&${stateName}`,
      //   //{
      //   //  method: "GET",
      //   //  headers: {
      //       "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      //       "x-rapidapi-key":
      //         "50bfd5e59dmsh8c894a8811452bep172e1ejsnbaab7a0b6b6b",
      //     },
      //   }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("*****", data.actuals);
        console.log("jajajja", data.actuals.cases);
        // var i = data.actuals[0]
        // for (i in data.actuals.length){
        //   console.log("hehe",i);
        // }
        let template = "";
          // data.actuals.forEach((datum) => {
          //   console.log("!!!!!",datum)
          // });
          template += `
            <div>
              <h3>State: Alabama</h3>
              <p>New Cases: ${data.actuals.newCases}</p>
              <p>Cases: ${data.actuals.cases}</p>
              <p>Deaths: ${data.actuals.deaths}</p>
              <p>Vaccines Administered: ${data.actuals.vaccinesAdministered}</p>
              <p>Negative Tests: ${data.actuals.negativeTests}</p>
              <p>ICU Beds Capacity: ${data.actuals.icuBeds.capacity}</p>
              <p>ICU Beds Current Total in Use: ${data.actuals.icuBeds.currentUsageTotal}</p>
              <img src="./assets/alabama.jpg">
            </div>
              `;
        // });
        console.log(template);
        document.querySelector("#data-insert").innerHTML = template;

      })
      .catch((err) => {
        console.error(err);
      })
    //    // collect form data
  });



  /// add back to template later

  // <p>State: ${datum.province}</p>
  //<p>Recovered: ${datum.recovered}</p>
  // <h3>City</h3>
  // <p>City Name: ${datum.region.cities[0].name}</p>
  // <p>Death: ${datum.region.cities[0].deaths}</p>
  // <p>Recovered: ${datum.region.cities[0].recovered}</p>





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
