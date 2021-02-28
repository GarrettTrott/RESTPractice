const express = require('express');
const app = express();

app.get("/greetings", (req, res)=> {
  res.json({greeting: "Hello World"})
})

// Send a GET request to /quotes READ a list of quotes 

// Send a GET request to /quotes/:id READ(view) a quote

// Send a POST Request to /quotes CREATE a new quote 

// Send a PUT request to /quotes/:id UPDATE (edit) a quote

// Send a DElETE request /quotes/:id to DELETE a quote

// Send a GET request to /quotes/quote/random READ (view) a random quote


app.listen(3000, () => console.log('Quote API listening on port 3000!'));


