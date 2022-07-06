const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser({extended: true}))
// app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index")
})

app.post("/calculate", (req,res) => {
    // const { no1, operator, no2 } = req.body;
    const no1 = Number(req.body.no1);  
    const no2 = Number(req.body.no2);  
    const operator = req.body.operator;  

    // console.log(no1, operator, no2);
    if(operator === "plus"){
        res.send(`<h1>Answer: ${no1+no2}</h1> <a href="/">Back to home </a>`)
    }
    else if(operator === "minus"){
        res.send(`<h1>Answer: ${no1-no2}</h1> <a href="/">Back to home </a>`)
    }
    else if(operator === "multiply"){
        res.send(`<h1>Answer: ${no1*no2}</h1> <a href="/">Back to home </a>`)
    } 
    else if(operator === "divide"){
        res.send(`<h1>Answer: ${no1/no2}</h1> <a href="/">Back to home </a>`)
    }
    else{
        res.json("Invalid Credentials")
    }
})

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})