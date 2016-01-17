//Country Names, Abbreviations, Regions, and Languages
    var index;
    var countryListName = ["Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bosnia and Herz.", "Brunei", "Bolivia", "Japan", "Burundi", "Benin", "Bhutan", "Jamaica", "Botswana", "Brazil", "Bahamas", "Belarus", "Belize", "Russia", "Rwanda", "Serbia", "Timor-Leste", "Turkmenistan", "Tajikistan", "Romania", "Guinea-Bissau", "Guatemala", "Greece", "Eq. Guinea", "Guyana", "Georgia", "United Kingdom", "Gabon", "Guinea", "Gambia", "Greenland", "Ghana", "Oman", "Tunisia", "Jordan", "Croatia", "Haiti", "Hungary", "Honduras", "Puerto Rico", "Palestine", "Portugal", "Paraguay", "Panama", "Papua New Guinea", "Peru", "Pakistan", "Philippines", "Poland", "Zambia", "W. Sahara", "Estonia", "Egypt", "South Africa", "Ecuador", "Italy", "Vietnam", "Solomon Is.", "Ethiopia", "Somalia", "Zimbabwe", "Spain", "Eritrea", "Montenegro", "Moldova", "Madagascar", "Morocco", "Uzbekistan", "Myanmar", "Mali", "Mongolia", "Macedonia", "Malawi", "Mauritania", "Uganda", "Malaysia", "Mexico", "Israel", "France", "Somaliland", "Finland", "Fiji", "Falkland Is.", "Nicaragua", "Netherlands", "Norway", "Namibia", "Vanuatu", "New Caledonia", "Niger", "Nigeria", "New Zealand", "Nepal", "Kosovo", "Côte d'Ivoire", "Switzerland", "Colombia", "China", "Cameroon", "Chile", "N. Cyprus", "Canada", "Congo", "Central African Rep.", "Dem. Rep. Congo", "Czech Rep.", "Cyprus", "Costa Rica", "Cuba", "Swaziland", "Syria", "Kyrgyzstan", "Kenya", "S. Sudan", "Suriname", "Cambodia", "El Salvador", "Slovakia", "Korea", "Slovenia", "Dem. Rep. Korea", "Kuwait", "Senegal", "Sierra Leone", "Kazakhstan", "Saudi Arabia", "Sweden", "Sudan", "Dominican Rep.", "Djibouti", "Denmark", "Germany", "Yemen", "Algeria", "United States", "Uruguay", "Lebanon", "Lao PDR", "Taiwan", "Trinidad and Tobago", "Turkey", "Sri Lanka", "Latvia", "Lithuania", "Luxembourg", "Liberia", "Lesotho", "Thailand", "Fr. S. Antarctic Lands", "Togo", "Chad", "Libya", "United Arab Emirates", "Venezuela", "Afghanistan", "Iraq", "Iceland", "Iran", "Armenia", "Albania", "Angola", "Argentina", "Australia", "Austria", "India", "Tanzania", "Azerbaijan", "Ireland", "Indonesia", "Ukraine", "Qatar", "Mozambique"];
    var countryListAbbrev = ["BD", "BE", "BF", "BG", "BA", "BN", "BO", "JP", "BI", "BJ", "BT", "JM", "BW", "BR", "BS", "BY", "BZ", "RU", "RW", "RS", "TL", "TM", "TJ", "RO", "GW", "GT", "GR", "GQ", "GY", "GE", "GB", "GA", "GN", "GM", "GL", "GH", "OM", "TN", "JO", "HR", "HT", "HU", "HN", "PR", "PS", "PT", "PY", "PA", "PG", "PE", "PK", "PH", "PL", "ZM", "EH", "EE", "EG", "ZA", "EC", "IT", "VN", "SB", "ET", "SO", "ZW", "ES", "ER", "ME", "MD", "MG", "MA", "UZ", "MM", "ML", "MN", "MK", "MW", "MR", "UG", "MY", "MX", "IL", "FR", "XS", "FI", "FJ", "FK", "NI", "NL", "NO", "NA", "VU", "NC", "NE", "NG", "NZ", "NP", "XK", "CI", "CH", "CO", "CN", "CM", "CL", "XC", "CA", "CG", "CF", "CD", "CZ", "CY", "CR", "CU", "SZ", "SY", "KG", "KE", "SS", "SR", "KH", "SV", "SK", "KR", "SI", "KP", "KW", "SN", "SL", "KZ", "SA", "SE", "SD", "DO", "DJ", "DK", "DE", "YE", "DZ", "US", "UY", "LB", "LA", "TW", "TT", "TR", "LK", "LV", "LT", "LU", "LR", "LS", "TH", "TF", "TG", "TD", "LY", "AE", "VE", "AF", "IQ", "IS", "IR", "AM", "AL", "AO", "AR", "AU", "AT", "IN", "TZ", "AZ", "IE", "ID", "UA", "QA", "MZ"];
    var countryRegion =['Asia', 'Europe', 'Africa', 'Europe', 'Africa', 'Caribbean', 'South America', 'Asia', 'Oceania', 'Europe', 'Asia', 'Middle East', 'Asia', 'Caribbean', 'Europe', 'Europe', 'Central America', 'Africa', 'Asia', 'South America', 'Europe', 'Africa', 'South America', 'Asia', 'Europe', 'Africa', 'Africa', 'Asia', 'Africa', 'North America', 'Africa', 'Africa', 'South America', 'Asia', 'South America', 'Central America', 'Europe', 'Caribbean', 'Middle East', 'Europe', 'Africa', 'Europe', 'Africa', 'Caribbean', 'Caribbean', 'Asia', 'South America', 'Middle East', 'Central America', 'Africa', 'Africa', 'Europe', 'Africa', 'South America', 'Oceania', 'Oceania', 'Europe', 'Europe', 'South America', 'Africa', 'Africa', 'Asia', 'Europe', 'Africa', 'Europe', 'North America', 'Caribbean', 'Central America', 'Africa', 'Africa', 'South America', 'Caribbean', 'Central America', 'Europe', 'Europe', 'Asia', 'Asia', 'Middle East', 'Middle East', 'Europe', 'Middle East', 'Europe', 'Africa', 'Caribbean', 'Asia', 'Middle East', 'Asia', 'Africa', 'Oceania', 'Europe', 'Middle East', 'Asia', 'Asia', 'Europe', 'Middle East', 'Africa', 'Africa', 'Africa', 'Europe', 'Europe', 'Europe', 'Europe', 'Africa', 'Africa', 'Asia', 'Asia', 'Africa', 'Europe', 'Oceania', 'Africa', 'Africa', 'Central America', 'Europe', 'Europe', 'Asia', 'Europe', 'Africa', 'Africa', 'Asia', 'Africa', 'Oceania', 'Asia', 'Europe', 'Oceania', 'Oceania', 'Central America', 'Africa', 'Africa', 'Asia', 'Europe', 'Europe', 'Middle East', 'Asia', 'Oceania', 'Central America', 'Oceania', 'South America', 'South America', 'Asia', 'Europe', 'Europe', 'Caribbean', 'Middle East', 'Europe', 'Africa', 'Europe', 'Europe', 'Africa', 'Caribbean', 'Caribbean', 'Caribbean', 'Europe', 'Africa', 'Middle East', 'Africa', 'Africa', 'Africa', 'Asia', 'Europe', 'Europe', 'Oceania', 'Africa', 'Africa', 'Africa', 'Asia', 'Africa', 'Europe', 'Asia', 'Africa', 'South America', 'Africa', 'Europe', 'Europe', 'Middle East', 'Asia', 'Asia', 'Africa', 'Asia', 'Caribbean', 'Africa', 'Oceania', 'Caribbean', 'Africa', 'Middle East', 'Asia', 'Oceania', 'Africa', 'Europe', 'Middle East', 'Europe', 'North America', 'South America', 'Asia', 'Oceania', 'Europe', 'South America', 'Asia', 'Middle East', 'Africa', 'Middle East', 'Africa', 'Africa'];
    var countryIndexCode;

    var startGame = document.querySelector("#start-game");
    startGame.addEventListener("click",clickStartGame);

    function clickStartGame(event) {
      console.log("start!")
      index = getRandomIndex();
      countryIndexCode = getCurrentAbbrev();
      getCurrentName();
    }

    function getRandomIndex() {
      var randomNumber = Math.floor(Math.random() * countryListName.length);
      push()
    }

    function getCurrentName(){
      var guessCountry = countryListName[index];
      guessCountryDiv = document.querySelector("#country-name");
      guessCountryDiv.textContent = guessCountry;
    }

    function getCurrentAbbrev() {
       return countryListAbbrev[index];
    }

    // function checkForRepeat(event){
    //   console.log("button working?");
    //   var selectedRegions = map.getSelectedRegions();
    //
    //   for (var i = 0; i <= selectedRegions.length; i++) {
    //     console.log("does this work?");
    //     if (getCurrentAbbrev() != selectedRegions[i]) {
    //       clickStartGame();
    //     }
    //     else {
    //       getRandomIndex();
    //     }
    //   }
    //   }





  $(function(){
    window.map = new jvm.Map({
      container: $("#world-map"),

      regionsSelectable: false,

      regionStyle: {
        selected: {
          fill: '#b08f04'
        }
      },

      onRegionClick: function(e, code) {
        if (code == getCurrentAbbrev()) {
          console.log("you win!")

          // var selectRegion = document.querySelector("[data-code='" + countryIndexCode + "']");
          // selectRegion.setAttribute("fill",'#b08f04');

          startGame.textContent = "Correct! Try another!";
          startGame.disabled = false;
          map.setSelectedRegions(code)

          clickStartGame();


        } else {
          console.log("try again...")
          startGame.textContent = "Try Again";
          startGame.disabled = true;


        }
      },

      onRegionSelected: function(e, code, isSelected, selectedRegions) {
        console.log(e, code, isSelected, selectedRegions)


      }
    });
  });
    //map.getSelectedRegions()

    // $("#world-map").vectorMap(map);

    // $('#world-map').vectorMap({
    //   // onRegionTipShow: function(e, el, code){
    //   //   return false;
    //   // },
    //   //
    //   // onRegionOut: function(e, code){
    //   //   return false;
    //   // },
    //   : true,
    //   //
    //   // onRegionOver: function(e, code){
    //   //   return false;
    //   // },
    //   //
    //   // onRegionSelected: function(e, code){
    //   //   return false;
    //   // },
    //   //
    //   // onMarkerOver: function(e, tip, code){
    //   //   return false;
    //   // },
    //   //
    //   // onMarkerOut: function(e, code){
    //   //   return false;
    //   // },
    //   //
    //   // onMarkerClick: function(e, code){
    //   //   return false;
    //   // },
    //   //
    //   // onMarkerOver: function(e, code){
    //   //   return false;
    //   // },
    //   //
    //   // onViewportChange: function(e, scale){
    //   //   return false;
    //   // },
    //
    //   onRegionSelected: function(e, code, isSelected, selectedRegions) {
    //     e.stopPropagation()
    //   },
    //
    //   onRegionClick: function(e, code){
    //     console.log(e);
    //     if (code == getCurrentAbbrev()) {
    //       console.log("you win!")
    //       var selectRegion = document.querySelector("[data-code='" + countryIndexCode + "']");
    //       selectRegion.setAttribute("fill",'#b08f04');
    //       $(selectRegion).unbind();
    //       startGame.textContent = "Correct! Try another!";
    //       startGame.disabled = false;
    //       clickStartGame();
    //
    //     } else {
    //       console.log("try again...")
    //       startGame.textContent = "Try Again";
    //       startGame.disabled = true;
    //     }
    //   }
    //
    //
    // });



  // $(function(){
  //   $('#world-map').vectorMap({
  //     onRegionClick: function (event, code) {
  //      var map = $('#world-map').vectorMap('get', 'mapObject');
  //      var name = map.getRegionName(code);
  //     },
  //
  //   });
  //
  // });

// document.querySelector("[data-code='US']")
// var button = document.querySelector("button");
// button.addEventListener("click",getCountryName);
// //
// //
// //
// function addColor(){
//
//   var selectRegion = document.querySelector("[data-code='" + countryIndexCode + "']");
//   selectRegion.setAttribute("fill","blue");
// }


// function getRandomCountry() {
//   return Math.random(
//
//   )
// }


  // $(function(){
  //   $('#world-map').vectorMap({
  //     map: 'world_mill',
  //     backgroundColor: 'black',
  //     series:{
  //       regions: [{
  //         attribute: 'fill',
  //       }]}
  //   })
  // })


  //   function getCountryName(){
  //     var map = $('#world-map').vectorMap('get', 'mapObject');
  //     var country = map.getRegionName('AE');
  //     var countryName = document.querySelector("#name");
  //     countryName.textContent = country;
  //
  // }
    //
    // function getCountryName(){
    //   var map = $('#world-map').vectorMap('get', 'mapObject');
    //   for (var i = 0; i < map.length; i++) {
    //         var country = map.getRegionName(i);
    //         var countryName = document.querySelector("#name");
    //         countryName.textContent = country;
    //   }
    // }

      //
