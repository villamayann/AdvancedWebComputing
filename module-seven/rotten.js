	
	$(document).ready(function(){	
	$('#searchForm').submit(function(){
		var apikey = 'hcrurhsttexasrgfm2y6yahm';
		var baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0';
			// construct the uri with our apikey
		var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
		var query = $('#search_input').val();
		// send off the query
		  $.ajax({
			url: moviesSearchUrl + '&q=' + encodeURI(query),
			dataType: "jsonp",
			success: showMovies
		  });
				console.log(query); //check output
				return false; //To stop the form submission
		 
		
	function showMovies(response) {
        console.log('response', response);
        var movies = response.movies;
		  $('#found').append('Found ' + response.total + ' results'); //total number of results
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
			//code for appending the data on the div with id results
            $('#results').append('<h3>' + movie.title + '</h3>');
			//$('#results').append('<img src="' + movie.posters.thumbnail + '" />');
			//$('#results').append('<img src="' + movie.posters.detailed + '" />');
			$('#results').append('<img src="' + movie.posters.original + '" />');
			$('#results').append('<p> <strong>Year:</strong> ' + movie.year + '</p>');
			$('#results').append('<p> <strong>Audience Ratings:</strong> ' + movie.ratings.audience_rating+ '</p>');
			$('#results').append('<p> <strong>Critics Ratings:</strong> ' + movie.ratings.critics_rating+ '</p>');
			$('#results').append('<p> <strong>MPAA Ratings:</strong> ' + movie.mpaa_rating+ '</p>');
			$('#results').append('<p> <strong>Release date:</strong> ' + movie.release_dates.theater+ '<strong> in Theater</strong></p>');
			$('#results').append('<p> <strong>Release date:</strong> ' + movie.release_dates.dvd+ '<strong> in DVD</strong></p>');
			$('#results').append('<p> <strong>Synopsis:</strong> ' + movie.synopsis + '</p>');
           				}
				}
				
				 });  
			});