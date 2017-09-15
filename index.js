const express = require('express');//create express library
const app = express();//call express function create app object

//create handlers associated with app
app.get('/', (req, res) => {
  res.send({ hi : 'there' });
});//get(), first argument is '/', second argument is arrow function(with two argument inside)


//Dynamic figure out which port we need listen to
const PORT = process.env.PORT || 5000;
//whenever HeroKu run the application, it has the ability to inject the variable "env"
//heroku send us the runtime configuration, only want to tell us the port until the
//very last second when the app start to excute by Heroku
app.listen(PORT);//instruct express to tell Node to listen incoming traffic on port 5000
//test: localhost:5000





