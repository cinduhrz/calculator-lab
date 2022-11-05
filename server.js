 // needa do this to use .env variables
 // don't needa save this in a variable, just gotta use the config() function
 require('dotenv').config()
 
 const express = require('express')
 const app = express()


 // register a route called calcquery that takes in 2 params and 1 query for the operation
 app.get('/calcquery/:num1/:num2', (req, res) => {
    // res.send("you got this route!")
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    console.log(req.query)

    if (req.query.operation === "add") {
        // convert result to string
        // using .toString() method
        res.send("the sum is: " + (num1 + num2).toString())
    } else if (req.query.operation === "sub") {
        // convert result to string
        // using type coercion
        res.send("the subtracted value is: " + (num1 - num2))
    } else if (req.query.operation === "mul") {
        res.send("the multiplied value is: " + (num1 * num2))
    } else if (req.query.operation === "div") {
        res.send("the divided value is: " + (num1 / num2))
    } else if (req.query.operation === "exp") {
        res.send(`${num1} to the power of ${num2} is: ` + (num1**num2))
    } else {
        res.send("Please input an operation if there isn't one already. Otherwise, the operation is invalid.")
    }
 })

 app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
 })