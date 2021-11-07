// document.

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
        

        var states = JSON.parse(localStorage.getItem("states")) || []
        var filteredStates = states.filter(function(state){
          return state.code === stateCode;
        })
        if(filteredStates.length <= 0) {
          var stateData = {
            code: stateCode,
            newCases: data.actuals.newCases,
            cases: data.actuals.cases,
            deaths: data.actuals.deaths
          }
          states.push(stateData)
          localStorage.setItem("states", JSON.stringify(states))
        };
        
        var currLat
        var currLng
        for (i = 0; i < stateLocationMapping.length; i++) {
          var currState = stateLocationMapping[i]
          if (currState.stateCode == stateCode) {
          currLat = parseFloat(currState.lat)
          currLng = parseFloat(currState.lng)
          console.log(currLat)
          console.log(currLng) }
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
      let temp2 = ""; 
      var di2 = document.createElement("div");
      template += temp2;
      di2.innerHTML = template; 
      // console.log(temp2); 
        
      // });
      // console.log(template);
      document.querySelector("#data-insert").appendChild(di2);

      })
      .catch((err) => {
        console.error(err);
      })
    // collect form data
  });
  var statesLocalStorage = JSON.parse(localStorage.getItem("states"));
  // console.log(statesLocalStorage);
  if (statesLocalStorage.length>0) {
    // do for loops for state in the storage
    // localStorage.forEach(i => console.log(i));
    for (var i=0; i< statesLocalStorage.length; i++){
      var s  = statesLocalStorage[i]
      console.log(s);
    };
    // var s  = statesLocalStorage[i];
  
    // console.log("yea");
    
      let template= "";
      let temp2 = "";
      template += `
            <div>
              <p> Home State <p>
              <h3>State: ${s.code}</h3>
              <p>New Cases: ${s.newCases}</p>
              <p>Cases: ${s.cases}</p>
              <p>Deaths: ${s.deaths}</p>
              <p>Vaccines Administered: 1</p>
              <p>Negative Tests: 1</p>
              <p>ICU Beds Capacity: 1</p>
              <p>ICU Beds Current Total in Use: 1</p>
            </div>
              `;
          temp2 += `
              <div>
                <p></p>
              </div>
                `;   
        var di2 = document.createElement("div");
        template += temp2;
        di2.innerHTML = template; 
        console.log(di2); 
          
        // });
        console.log(template);
        document.querySelector("#data-insert").appendChild(di2);
        console.log(di2);
      
  };