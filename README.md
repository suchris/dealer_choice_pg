# dealer_choice_pg

## Application was deployed to heroku

https://dealer-choice-pg.herokuapp.com/

## Getting started

This web app allows user to save a recipe and view all saved recipes. Selecting a listed recipe will bring user to the recipe detail page to view video url if there's one available and any note about the recipe. 

1. Clone this repository.

   ```sh
   git clone https://github.com/suchris/dealers_choice_pg
   cd dealers_choice_pg
   ```

2. Install npm packages.

   ```sh
   npm install
   ```

3. Create a postgres database recipe_db, then run the following command to seed some data.

   ```sh
   npm run seed
   ```
   
4. Build client end.

   ```sh
   npm run build
   ```

5. Start server.

   ```sh
   npm run start
   ```
  
6. Visit http://localhost:3000 to interact with the client.

