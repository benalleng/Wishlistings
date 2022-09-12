# Wishlistings


____________ 

## Technologies Used

- Javascript, JQuery

- HTML, CSS

## Screenshots

### Initial Page
![Initial](.public/assets/Welcome_Screen.png)

### Auth Page
![Form](.public/assets/Signup.png)

### Index Page
![Final](.public/assets/Index_Page.png)

## Geting started

 - Take a look around the index page after entering the website from the welcome screen

 - [Netlify](https://im-feeling-hungry.netlify.app/)

## Future Enhancements

- Move the diet restrictions to tabs at the top of the page to give the user a clearer indication of what to type 

- Find a way to add previous searches to local storage to add a history function.

- Further expansion of the 

###### Pseudo-coding

- Present the user with an initial question of what food genre they want

- continue to ask  5-6 questions to narrow down the scope of what kind of food they want, each question getting more specific
    - Create an array and push the user's answers and then create a interpolated AJAX request

- Send a request to the API with the users answers and the present the user with a recipe that fits what the API returns
    - use an interpolated string with each user form completing the next part of the API request so that it can send a single request to the API
    - If there is more than one recipe after the questionaire, randomly select a recipe so that the user has some sense of variety if they answer the same questions multiple times

- Finally if the user refreshes the page list previous recipes on in local storage for the user to return to
    - make the entire image or recipe name clickable returning the user to the previously searched recipe

- BONUS: 
    - create an error code if not recipe exists or if more than one recipe exists present the user with more questions


## TODO
- README

### Pseudo-Coding

- Add add to cart button

- use DOM manipulation to give the items added to cart a new class class="inCart"

- add checkout button similar to a buy edit button that changes the isPurchased value in the mongoDB document

- once isPurchased = true use flounder tags to add a new class to items that have been purchased to indicate they are no longer needed to be bought