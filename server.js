console.log('_____1. Be Polite, Greet the User______');

const express = require('express');
const app = express();

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello There, ${name} !<h2>`);
  });

  
  console.log('_____2. Rolling the Dicer______');
  
  app.get('/roll/:number', (req, res) => {
      const number = req.params.number;
      
    // Check if the parameter is a valid number
    if (isNaN(number)) {
        res.send('You must specify a number.');
    } else {
        const dice = parseInt(number, 10); // Convert the parameter to an integer
        const randomRoll = Math.floor(Math.random() * (dice + 1));
        res.send(`You rolled a ${randomRoll}.`);
    }
});



console.log('________3. I Want THAT One!_______________________');

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:index', (req, res) => {

  const index = parseInt(req.params.index, 10);
     
  if (isNaN(index) || index < 0 || index >= collectibles.length) {
    res.send(`This item is not yet in stock. Check back soon!`);
  }
   else {
      const product = collectibles[index];
     
    res.send(`So, you want the ${[product.name]}? For ${product.price} £, it can be yours!`);
  }
    
  });
  

  console.log('________4. Filter Shoes by Query Parameters!_______________________');

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


  app.get('/shoes/', (req, res) => {
       
    productList ='';
    shoes.forEach((product) => {
      productList += `<br> Brand: ${product.name}: Value: ${product.price} £, Type: ${product.type}<br>`;
    })
    res.send(productList);
     
});



// ____________________listeners____________________________//


app.listen(3000, () => {
  console.log('Express is listening on port 3000')
})
