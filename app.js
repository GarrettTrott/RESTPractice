const express = require('express');
const app = express();

app.get("/greetings", (req, res)=> {
  res.json({greeting: "Hello World"})
})

// Send a GET request to /quotes READ a list of quotes 
app.get("/quotes", (req, res)=> {
  res.json(data)
})

// Send a GET request to /quotes/:id READ(view) a quote
app.get("/quotes/:id", (req, res)=> {
  const quote = data.quotes.find(quote => quote.id == req.params.id)
  res.json(quote)
})
// Send a POST Request to /quotes CREATE a new quote 

// Send a PUT request to /quotes/:id UPDATE (edit) a quote

// Send a DElETE request /quotes/:id to DELETE a quote

// Send a GET request to /quotes/quote/random READ (view) a random quote


app.listen(3000, () => console.log('Quote API listening on port 3000!'));


const data = {
  quotes: [
    {
      id: 8721,
      quote: "We must accept finite disappointment, but we must never lose infinite hope.",
      author: "Martin Luther King"
    },
    {
      id: 5779,
      quote: "Use what you’ve been through as fuel, believe in yourself and be unstoppable!",
      author: "Yvonne Pierre"
    },
    {
      id: 3406,
      quote: "To succeed, you have to do something and be very bad at it for a while. You have to look bad before you can look really good.",
      author: "Barbara DeAngelis"
    }
  ]
}