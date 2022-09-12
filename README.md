# Wishlistings

Welcome to Wishlistings README

Created using Express and MongoDB this website is part public wishlist and part store. Intended for users to track what items are on their wishlist and what items they can purchase for other users.
____________ 

## Technologies Used

- Javascript, Express, Mongoose, HTML, CSS

## Screenshots

### Initial Page
![Initial](.public/assets/Welcome_Screen.png)

### Auth Page
![Form](.public/assets/Signup.png)

### Index Page
![Final](.public/assets/Index_Page.png)

## Geting started

 - Take a look around the index page after entering the website from the welcome screen. Then signup or login to add, edit, update, and delete items from the wishlist!

 - [Heroku](https://wishlistings-ga.herokuapp.com/)

## Future Enhancements

- Add an add to cart window separate from the rest of the page for the user to view items that they want to purchasefor later

- Find a way to sort items by type, owner, or availability

- Further refinement of the styling on the page and showing the user that items have been purchased

### Pseudo-Coding

- Add add to cart button

- use DOM manipulation to give the items added to cart a new class class="inCart"

- add checkout button similar to a buy edit button that changes the isPurchased value in the mongoDB document

- once isPurchased = true use flounder tags to add a new class to items that have been purchased to indicate they are no longer needed to be bought