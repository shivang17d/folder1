$(document).on('pagecreate', '#home', function () {
    $('#search-form').on('submit', function (event) {
        event.preventDefault();

        var location = $('#location').val();
        var priceRange = $('#price-range').val();
        var rating = $('#rating').val();

        // Perform a search based on the user's requirements
        var searchResults = performSearch(location, priceRange, rating);

        // Display the search results
        displaySearchResults(searchResults);
    });
});

function performSearch(location, priceRange, rating) {
    // Replace this with your actual search logic
    // This is a placeholder example that returns dummy data

    var searchResults = [
        { name: 'Hotel A', location: 'Location A', price: '$100', rating: '4 Stars' },
        { name: 'Hotel B', location: 'Location B', price: '$80', rating: '3 Stars' },
        { name: 'Hotel C', location: 'Location C', price: '$120', rating: '4 Stars' },
        { name: 'Hotel D', location: 'Location D', price: '$150', rating: '5 Stars' },
    ];

    // Apply filters based on user's requirements
    if (location) {
        searchResults = searchResults.filter(function (hotel) {
            return hotel.location.toLowerCase().indexOf(location.toLowerCase()) !== -1;
        });
    }

    if (priceRange) {
        searchResults = searchResults.filter(function (hotel) {
            var price = parseInt(hotel.price.substring(1)); // Remove the dollar sign and convert to number
            var range = parseInt(priceRange);
            return price <= range * 50;
        });
    }

    if (rating) {
        searchResults = searchResults.filter(function (hotel) {
            var hotelRating = parseInt(hotel.rating.substring(0, 1)); // Get the first character as the rating
            return hotelRating >= parseInt(rating);
        });
    }

    return searchResults;
}

function displaySearchResults(searchResults) {
    var $hotelList = $('#hotel-list');
    $hotelList.empty();

    if (searchResults.length > 0) {
        for (var i = 0; i < searchResults.length; i++) {
            var hotel = searchResults[i];
            var listItem = '<li>' +
                '<h2>' + hotel.name + '</h2>' +
                '<p><strong>Location:</strong> ' + hotel.location + '</p>' +
                '<p><strong>Price:</strong> ' + hotel.price + '</p>' +
                '<p><strong>Rating:</strong> ' + hotel.rating + '</p>' +
                '</li>';

            $hotelList.append(listItem);
        }
    } else {
        $hotelList.append('<li>No results found.</li>');
    }

    $hotelList.listview('refresh');
}
