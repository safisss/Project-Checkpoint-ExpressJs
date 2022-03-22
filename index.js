
const express = require("express");   //importation express dans un var express
const app = express();               // initialisation du app (instance du express)

const path = require("path");

const PORT = 5000;                          //// nasna3  Port (psq chaque serveur a un port spécifique) : 2 éme methode         

app.listen(PORT,() => console.log('Serveur Started on PORT ${PORT}'));
  

app.use(express.static(__dirname + "/public/css")); //fichier CSS

app.get('/', (req, res) => {
    res.send ('<h1 style="text-align:center; margin-top:100px; color:blue"> Welcome to my Express Application :)</h1>')
})


// app.use((req, res) => {
//     res.send('We are starting our express application')
// })



//app.get('/', (req, res) => {
    //     res.send('This is the home page')
    //     // console.log(req);
    // } )


 
//require the date 
const NewDate = require('./middleware/NewDate')

app.use(NewDate);


app.get("/Home", (req,res) => {
    res.sendFile(path.join(__dirname + '/public/Home.html'));
});



app.get('/OurServices', (req,res) =>{
        res.sendFile(path.join(__dirname + '/public/OurServices.html'));
    });


app.get('/ContactUs', (req,res) =>{
        res.sendFile(path.join(__dirname + '/public/ContactUs.html'));
    });
