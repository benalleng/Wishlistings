
const $cartAdd = $('.cartAdd');
const $cart = $('.cart');

$cartAdd.on(function(event) {
const $newCartItem = $(`<li>
${console.log('hello')}
    </li>`);
    $(this).parent().addClass('cartItem')
    $cart.append($newCartItem);
    console.log('world');
});

$(this).parent().