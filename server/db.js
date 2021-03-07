const pg = require("pg");

const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/recipe_db"
);

const syncAndSeed = async () => {
  const SQL = `
    DROP TABLE IF EXISTS recipe;

    CREATE TABLE recipe(
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      videoUrl VARCHAR(200), 
      note TEXT
    );
    
    INSERT INTO recipe(title, videoUrl, note) VALUES ('Chinese Steam Chicken', 'https://www.youtube.com/watch?v=7S6iv9V_adE', '
    Ingredients:
      * 1.4 kg Whole Chicken
      * 1.5 tbps Coarse Salt  
      * 2 Shalots
      * 2 Slice of Ginger
      * 1 tbp Shaoxing Cooking Wine');
    
    INSERT INTO recipe(title, videoUrl, note) VALUES ('Indian Lamb Curry', 'https://www.youtube.com/watch?v=CX2CDP2wPyc', '
    Ingredients:
      * 500g Lamb / Mutton
      * 50ml Olive Oil 
      * 2 Small Onions or 1 Large
      * 3 Tomatoes
      * 1 tsp Salt
      * 1 tsp Ginger Paste 
      * 1 tsp Garlic Paste
      * 1 tsp Chilli Powder
      * 1 tsp Coriander Powder
      * 1 tsp Turmeric Powder (Haldi)
      * 1/2 tsp Garam Masala
      * 1 tsp Fenugreek Seeds (Methi) 
      * 500ml Water 
      * Coriander

    Method:
      1. In a pan, heat up the olive oil 
      2. Add the onions and cook for 5 minutes until softened
      3. Add the ginger paste and the garlic paste 
      4. Sauté for 1 minute 
      5. Add the chopped tomatoes and cook for 5 minutes until softened
      6. Add the salt, turmeric powder, chilli powder and coriander powder
      7. Cook the spices for 3-4 minutes 
      8. Add the lamb or mutton and mix to incorporate the spices
      9. Cook for 8-10 minutes then add the water
      10. Cover with a lid and cook for 45-60 minutes, if the meat is not cooked then add a little more water and cook further
      11. Add the garam masala, dried fenugreek and coriander 
      12. Mix to combine 
      13. Serve with homemade naan or steamed rice and enjoy!');

    INSERT INTO recipe(title, videoUrl, note) VALUES ('How to Make French Toast!! Classic Quick and Easy Recipe', 'https://www.youtube.com/watch?v=r1ZLSbQ0r0I', '
    Ingredeints:
      * 6 sliced Texas toast or thick cut bread
      * 2 large eggs
      * 1/4 cup milk or cream
      * 1 tsp sugar
      * 1/4 tsp cinnamon
      * pinch of salt
      * splash of vanilla extract
      * butter and vegetable oil for cooking');
  `;

  await client.query(SQL);
};

module.exports = { client, syncAndSeed };
