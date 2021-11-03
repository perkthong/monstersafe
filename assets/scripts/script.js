//   document.querySelector("#form").addEventListener("submit", (event) => {
//     event.preventDefault();

document
  .querySelector("#COVID-search-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const stateName = document.querySelectorAll("#stateInitial").value;

    fetch(
      `https://api.covidactnow.org/v2/state/TX.json?apiKey=bf076c55a54247e998486f5cc1ba1acc`,
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
        // console.log("*****", data.data);
        // let template = "";
        // data.data.forEach((datum) => {
        //     template += `
        //         <div>
        //             <h3>State</h3>
        //             <p>State: ${datum.province}</p>
        //             <p>Death: ${datum.deaths}</p>
        //             <p>Recovered: ${datum.recovered}</p>
        //             <h3>City</h3>
        //             <p>City Name: ${datum.region.cities[0].name}</p>
        //             <p>Death: ${datum.region.cities[0].deaths}</p>
        //             <p>Recovered: ${datum.region.cities[0].recovered}</p>
        //         </div>
        //     `;
        // });
        // console.log(template);
        // document.querySelector("#data-insert").innerHTML = template;

      })
      .catch((err) => {
        console.error(err);
      })
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
