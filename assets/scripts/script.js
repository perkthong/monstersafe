document
  .querySelector("#COVID-search-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

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
        console.log("jajajja", data.actuals.cases);
        
        let template = "";
        //Google Maps API// 
        function initMap(){
          var options = {
              zoom:8,
              center:{lat:37.7749,lng:-122.4194}
          }

          var map = new google.maps.Map(document.getElementById('map'), options);
        };
        console.log(initMap());
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

      })
      .catch((err) => {
        console.error(err);
      })
    // collect form data
  });