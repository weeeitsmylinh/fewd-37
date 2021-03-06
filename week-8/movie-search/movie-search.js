// Handle the form submission: go to OMDB and get results
$("#movie-search-form").submit(formSubmitted);
var searchBox = document.querySelector("#query");

//Gets IMDB data
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
  $('li').remove();
  document.getElementById("movie-search-form").reset();

}

//creates movie list
function resultsReceived(results) {


  for (var i = 0; i < results["Search"].length; i++) {

      //check if result is a movie
      var movieType = results["Search"][i]["Type"];

      if (movieType == "movie") {

       var movieTitle = results["Search"][i]["Title"];
       var movieYear = results["Search"][i]["Year"];
       var moviePoster = results["Search"][i]["Poster"];
       var movieID = results["Search"][i]["imdbID"];

       //make li
      //  var $li = $("<li>").addClass("movie").appendTo("ul");
       var $li = $("<li>");
       $li.addClass("movie").appendTo("ul");

      //  var li = document.createElement("li");
      //  li.className = "movie";
      //  var parent = document.querySelector("ul");
      //  parent.appendChild(li);

       //make poster
       var $poster = $("<img>");
       $poster.attr("src",moviePoster).appendTo($li);

      //  var poster = document.createElement("img");
      //  li.appendChild(poster);
      //  poster.setAttribute("src", moviePoster);

       //make title
       var $title = $("<div>");
       $title.addClass("movie-title").appendTo($li);
       var $titleLink = $("<a>");
       $titleLink.attr("href","http://www.imdb.com/title/"+movieID).text(movieTitle).appendTo($title);

      //  var title = document.createElement("div");
      //  title.className = "movie-title";
      //  li.appendChild(title);
      //  var titleLink = document.createElement('a');
      //  titleLink.setAttribute("href","http://www.imdb.com/title/"+movieID);
      //  title.appendChild(titleLink);
      //  titleLink.textContent = movieTitle;

       //make release date
       var $releaseDate = $("<div>");
       $releaseDate.addClass("movie-release-date").text(movieYear).appendTo($li);


      //
      //  var releaseDate = document.createElement("div");
      //  releaseDate.className = "movie-release-date";
      //  li.appendChild(releaseDate);
      //  releaseDate.textContent = movieYear;

       searchBox.value = "";

     }
   }
}
