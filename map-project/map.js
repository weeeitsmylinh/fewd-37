//nav menu animation
var nav = document.querySelector("#nav-button");
nav.addEventListener("click",clickNavButton);
var navMenu = document.querySelector("#menu");
var content = document.querySelector("#content");

function clickNavButton(event){
  var open = navMenu.style.left == "0px";
  var close = navMenu.style.left == "-200px";

  if (open == true) {
    navMenu.style.left = "-200px";
    content.style.left = "0px";
  }
  else {
    navMenu.style.left = "0px";
    content.style.left = "200px";
  }
}


//removed because too small: ["Saint Lucia", "LC"]
//define map arrays

var pageSettings = {
  africa: {
    countryListName: ["Burkina Faso",	"Djibouti",	"Burundi",	"Benin",	"South Africa",	"Botswana",	"Algeria",	"Ethiopia",	"Rwanda",	"Tanzania",	"Eq. Guinea",	"Namibia",	"Niger",	"Nigeria",	"Tunisia",	"Liberia",	"Lesotho",	"Zimbabwe",	"Togo",	"Chad",	"Eritrea",	"Libya",	"Guinea-Bissau",	"Zambia",	"Côte d'Ivoire",	"W. Sahara",	"Cameroon",	"Egypt",	"Sierra Leone",	"Congo",	"Central African Rep.",	"Angola",	"Dem. Rep. Congo",	"Gabon",	"Guinea",	"Gambia",	"Somaliland",	"Cape Verde",	"Ghana",	"Swaziland",	"Madagascar",	"Morocco",	"Kenya",	"S. Sudan",	"Mali",	"Comoros",	"São Tomé and Principe",	"Malawi",	"Somalia",	"Senegal",	"Mauritania",	"Uganda",	"Sudan",	"Mozambique"],
    countryListAbbrev: ["BF",	"DJ",	"BI",	"BJ",	"ZA",	"BW",	"DZ",	"ET",	"RW",	"TZ",	"GQ",	"NA",	"NE",	"NG",	"TN",	"LR",	"LS",	"ZW",	"TG",	"TD",	"ER",	"LY",	"GW",	"ZM",	"CI",	"EH",	"CM",	"EG",	"SL",	"CG",	"CF",	"AO",	"CD",	"GA",	"GN",	"GM",	"XS",	"CV",	"GH",	"SZ",	"MG",	"MA",	"KE",	"SS",	"ML",	"KM",	"ST",	"MW",	"SO",	"SN",	"MR",	"UG",	"SD",	"MZ"],
    mapName: 'africa_mill',
  },
  asia: {
    countryListName: ["Bangladesh",	"Mongolia",	"Brunei",	"Bahrain",	"Bhutan",	"Hong Kong",	"Jordan",	"Palestine",	"Lebanon",	"Lao PDR",	"Taiwan",	"Turkey",	"Sri Lanka",	"Timor-Leste",	"Turkmenistan",	"Tajikistan",	"Thailand",	"N. Cyprus",	"Nepal",	"Pakistan",	"Philippines",	"United Arab Emirates",	"China",	"Afghanistan",	"Iraq",	"Japan",	"Iran",	"Armenia",	"Syria",	"Vietnam",	"Georgia",	"Israel",	"India",	"Azerbaijan",	"Indonesia",	"Oman",	"Kyrgyzstan",	"Uzbekistan",	"Myanmar",	"Singapore",	"Cambodia",	"Cyprus",	"Qatar",	"Korea",	"Dem. Rep. Korea",	"Kuwait",	"Kazakhstan",	"Saudi Arabia",	"Malaysia",	"Yemen"],
    countryListAbbrev: ["BD",	"MN",	"BN",	"BH",	"BT",	"HK",	"JO",	"PS",	"LB",	"LA",	"TW",	"TR",	"LK",	"TL",	"TM",	"TJ",	"TH",	"XC",	"NP",	"PK",	"PH",	"AE",	"CN",	"AF",	"IQ",	"JP",	"IR",	"AM",	"SY",	"VN",	"GE",	"IL",	"IN",	"AZ",	"ID",	"OM",	"KG",	"UZ",	"MM",	"SG",	"KH",	"CY",	"QA",	"KR",	"KP",	"KW",	"KZ",	"SA",	"MY",	"YE"],
    mapName: 'asia_mill',
  },
  europe: {
    countryListName: ["Belgium",	"France",	"Bulgaria",	"Denmark",	"Croatia",	"Germany",	"Bosnia and Herz.",	"Hungary",	"Jersey",	"Finland",	"Belarus",	"Greece",	"Russia",	"Netherlands",	"Portugal",	"Norway",	"Liechtenstein",	"Latvia",	"Lithuania",	"Luxembourg",	"Faeroe Is.",	"Poland",	"Kosovo",	"Switzerland",	"Andorra",	"Estonia",	"Iceland",	"Albania",	"Italy",	"Guernsey",	"Czech Rep.",	"Isle of Man",	"United Kingdom",	"Aland",	"Ireland",	"Spain",	"Montenegro",	"Moldova",	"Romania",	"Serbia",	"Macedonia",	"Slovakia",	"Malta",	"Slovenia",	"San Marino",	"Ukraine",	"Sweden",	"Austria"],
    countryListAbbrev: ["BE",	"FR",	"BG",	"DK",	"HR",	"DE",	"BA",	"HU",	"JE",	"FI",	"BY",	"GR",	"RU",	"NL",	"PT",	"NO",	"LI",	"LV",	"LT",	"LU",	"FO",	"PL",	"XK",	"CH",	"AD",	"EE",	"IS",	"AL",	"IT",	"GG",	"CZ",	"IM",	"GB",	"AX",	"IE",	"ES",	"ME",	"MD",	"RO",	"RS",	"MK",	"SK",	"MT",	"SI",	"SM",	"UA",	"SE",	"AT"],
    mapName: 'europe_mill',
  },
  northAmerica: {
    countryListName: ["Puerto Rico",	"Dominican Rep.",	"Nicaragua",	"Panama",	"Canada",	"El Salvador",	"Haiti",	"Trinidad and Tobago",	"Jamaica",	"Guatemala",	"Honduras",	"Belize",	"Bahamas",	"Costa Rica",	"United States",	"Greenland",	"Mexico",	"Cuba"],
    countryListAbbrev: ["PR",	"DO",	"NI",	"PA",	"CA",	"SV",	"HT",	"TT",	"JM",	"GT",	"HN",	"BZ",	"BS",	"CR",	"US",	"GL",	"MX",	"CU"],
    mapName: 'north_america_mill',
  },
  oceania: {
    countryListName: ["Guam",	"Palau",	"Kiribati",	"New Caledonia",	"Niue",	"New Zealand",	"Australia",	"Papua New Guinea",	"Solomon Is.",	"Fr. Polynesia",	"Fiji",	"Micronesia",	"Samoa",	"Vanuatu"],
    countryListAbbrev: ["GU",	"PW",	"KI",	"NC",	"NU",	"NZ",	"AU",	"PG",	"SB",	"PF",	"FJ",	"FM",	"WS",	"VU"],
    mapName: 'oceania_mill',
  },
  southAmerica: {
    countryListName: ["Paraguay",	"Colombia",	"Venezuela",	"Chile",	"Suriname",	"Bolivia",	"Ecuador",	"Argentina",	"Guyana",	"Brazil",	"Peru",	"Uruguay",	"Falkland Is."],
    countryListAbbrev: ["PY",	"CO",	"VE",	"CL",	"SR",	"BO",	"EC",	"AR",	"GY",	"BR",	"PE",	"UY",	"FK"],
    mapName: 'south_america_mill',
  },
  worldMap: {
    countryListName: ["Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bosnia and Herz.", "Brunei", "Bolivia", "Japan", "Burundi", "Benin", "Bhutan", "Jamaica", "Botswana", "Brazil", "Bahamas", "Belarus", "Belize", "Russia", "Rwanda", "Serbia", "Timor-Leste", "Turkmenistan", "Tajikistan", "Romania", "Guinea-Bissau", "Guatemala", "Greece", "Eq. Guinea", "Guyana", "Georgia", "United Kingdom", "Gabon", "Guinea", "Gambia", "Greenland", "Ghana", "Oman", "Tunisia", "Jordan", "Croatia", "Haiti", "Hungary", "Honduras", "Puerto Rico", "Palestine", "Portugal", "Paraguay", "Panama", "Papua New Guinea", "Peru", "Pakistan", "Philippines", "Poland", "Zambia", "W. Sahara", "Estonia", "Egypt", "South Africa", "Ecuador", "Italy", "Vietnam", "Solomon Is.", "Ethiopia", "Somalia", "Zimbabwe", "Spain", "Eritrea", "Montenegro", "Moldova", "Madagascar", "Morocco", "Uzbekistan", "Myanmar", "Mali", "Mongolia", "Macedonia", "Malawi", "Mauritania", "Uganda", "Malaysia", "Mexico", "Israel", "France", "Somaliland", "Finland", "Fiji", "Falkland Is.", "Nicaragua", "Netherlands", "Norway", "Namibia", "Vanuatu", "New Caledonia", "Niger", "Nigeria", "New Zealand", "Nepal", "Kosovo", "Côte d'Ivoire", "Switzerland", "Colombia", "China", "Cameroon", "Chile", "N. Cyprus", "Canada", "Congo", "Central African Rep.", "Dem. Rep. Congo", "Czech Rep.", "Cyprus", "Costa Rica", "Cuba", "Swaziland", "Syria", "Kyrgyzstan", "Kenya", "S. Sudan", "Suriname", "Cambodia", "El Salvador", "Slovakia", "South Korea", "Slovenia", "Dem. Rep. Korea", "Kuwait", "Senegal", "Sierra Leone", "Kazakhstan", "Saudi Arabia", "Sweden", "Sudan", "Dominican Rep.", "Djibouti", "Denmark", "Germany", "Yemen", "Algeria", "United States", "Uruguay", "Lebanon", "Lao PDR", "Taiwan", "Trinidad and Tobago", "Turkey", "Sri Lanka", "Latvia", "Lithuania", "Luxembourg", "Liberia", "Lesotho", "Thailand", "Fr. S. Antarctic Lands", "Togo", "Chad", "Libya", "United Arab Emirates", "Venezuela", "Afghanistan", "Iraq", "Iceland", "Iran", "Armenia", "Albania", "Angola", "Argentina", "Australia", "Austria", "India", "Tanzania", "Azerbaijan", "Ireland", "Indonesia", "Ukraine", "Qatar", "Mozambique"],
    countryListAbbrev: ["BD", "BE", "BF", "BG", "BA", "BN", "BO", "JP", "BI", "BJ", "BT", "JM", "BW", "BR", "BS", "BY", "BZ", "RU", "RW", "RS", "TL", "TM", "TJ", "RO", "GW", "GT", "GR", "GQ", "GY", "GE", "GB", "GA", "GN", "GM", "GL", "GH", "OM", "TN", "JO", "HR", "HT", "HU", "HN", "PR", "PS", "PT", "PY", "PA", "PG", "PE", "PK", "PH", "PL", "ZM", "EH", "EE", "EG", "ZA", "EC", "IT", "VN", "SB", "ET", "SO", "ZW", "ES", "ER", "ME", "MD", "MG", "MA", "UZ", "MM", "ML", "MN", "MK", "MW", "MR", "UG", "MY", "MX", "IL", "FR", "XS", "FI", "FJ", "FK", "NI", "NL", "NO", "NA", "VU", "NC", "NE", "NG", "NZ", "NP", "XK", "CI", "CH", "CO", "CN", "CM", "CL", "XC", "CA", "CG", "CF", "CD", "CZ", "CY", "CR", "CU", "SZ", "SY", "KG", "KE", "SS", "SR", "KH", "SV", "SK", "KR", "SI", "KP", "KW", "SN", "SL", "KZ", "SA", "SE", "SD", "DO", "DJ", "DK", "DE", "YE", "DZ", "US", "UY", "LB", "LA", "TW", "TT", "TR", "LK", "LV", "LT", "LU", "LR", "LS", "TH", "TF", "TG", "TD", "LY", "AE", "VE", "AF", "IQ", "IS", "IR", "AM", "AL", "AO", "AR", "AU", "AT", "IN", "TZ", "AZ", "IE", "ID", "UA", "QA", "MZ"],
    mapName: 'world_mill',
  }
}

var index;

//puts map on page + selecting functions
$(function(){
  map = new jvm.Map({
         map: pageSettings[region]["mapName"],
         container: $("#map"),

  //set attribute for regions selected
  regionStyle: {
    selected: {
      fill: '#b08f04'
    }
  },

  //cheat mode - shows country tags if checked
  onRegionTipShow: function(e, el, code){
    var checkbox = document.querySelector("#cheat-mode");
    if (checkbox.checked == true){
          return true;
        }
      else{

            return false;
          }
        },

  //if correct country is clicked, set as selected
  onRegionClick: function(e, code) {
    if (code == getCurrentAbbrev()) {
      startGame.textContent = correct[Math.floor(Math.random() * correct.length)];
      startGame.style.pointerEvents = "none";
      startGame.style.color = "white";
      map.setSelectedRegions(code);
      guessCounter.textContent = "0";
      pageSettings[region]["countryListName"].splice(index, 1);
      pageSettings[region]["countryListAbbrev"].splice(index, 1);
      clickStartGame();



    } else {
      startGame.textContent = wrong[Math.floor(Math.random() * wrong.length)];
      startGame.style.color = "#a11f1f";
      startGame.style.pointerEvents = "none";
      guessIncorrectly();

      }
    },

  });
});

//start game
var startGame = document.querySelector("#start-game");
startGame.addEventListener("click",clickStartGame);
var guessCountryDiv = document.querySelector("#country-name");
var guessDiv = document.querySelector("#guesses")


function clickStartGame(event) {
  console.log("start!")
  index = getRandomIndex();
  countryIndexCode = getCurrentAbbrev();
  getCurrentName();
  removeTransparentDiv();
}

function getRandomIndex() {
  return Math.floor(Math.random() * pageSettings[region]["countryListName"].length);
}


function getCurrentName(){
  var guessCountry = pageSettings[region]["countryListName"][index];
  guessCountryDiv.textContent = guessCountry;
}

function getCurrentAbbrev() {
  if (pageSettings[region]["countryListAbbrev"].length == 0) {
    var div = document.createElement("div");
    div.textContent = "Congratulations! You actually won!";
    div.className = "congrats";
    var content = document.querySelector("#content");
    content.appendChild(div);
    // content.removeChild(startGame);
    // content.removeChild(guessCountryDiv);
    // content.removeChild(guessDiv);

  } else {
     return pageSettings[region]["countryListAbbrev"][index];
   }
}

function removeTransparentDiv(){
  var div = document.querySelector("#transparent");
  div.remove();
}

//outcome responses
var correct = ["Yay! Great job!", "Correct! Try another!", "Wow! You're a geographical genius!", "Congrats!", "I don't know how you do it!", "Did you guess? Doesn't matter, good job!"];
var wrong = ["Nope! Try again","Sorry...try again","Hmm you're not great at this", "Incorrect...", "I hope you find it soon..."];

//number of guesses
var guessCounter = document.querySelector("#guess-counter");


function guessIncorrectly(){
  var startingCount = guessCounter.textContent;
  var addGuess = parseInt(startingCount) + 1;
  guessCounter.textContent = addGuess;
}


// var hint = document.querySelector("#hint");
// hint.addEventListener("click",getHint);
//
// function getHint(event){
//   var hintText = document.querySelector("#gen-hint")
//   hintText.textContent = countryRegion[index];
// }
