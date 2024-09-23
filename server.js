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
        const max = parseInt(number, 10); // Convert the parameter to an integer
        const randomRoll = Math.floor(Math.random() * (max + 1));
        res.send(`You rolled a ${randomRoll}.`);
    }
});

console.log('_____3. I Want THAT One!______');

// ____________________listeners____________________________//

app.listen(3000, () => {
  console.log('Express is listening on port 3000')
})