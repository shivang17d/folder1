$(document).on('pagecreate', '#home', function () {
    $('.add-to-cart').on('click', function () {
        var item = {
            id: $(this).data('id'),
            name: $(this).data('name'),
            price: $(this).data('price')
        };

        // Store the selected item in the cart
        var cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            cartItems = JSON.parse(cartItems);
        } else {
            cartItems = [];
        }
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        alert('Item added to cart!');
    });
});

$(document).on('pagebeforeshow', '#cart', function () {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        cartItems = JSON.parse(cartItems);
        var $cartItemsList = $('#cart-items');
        $cartItemsList.empty();

        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            $cartItemsList.append('<li><h2>' + item.name + '</h2><p>Price: $' + item.price + '</p></li>');
        }
        $cartItemsList.listview('refresh');
    }
});

$(document).on('click', '#clear-cart', function () {
    localStorage.removeItem('cartItems');
    $('#cart-items').empty();
    alert('Cart cleared!');
});
