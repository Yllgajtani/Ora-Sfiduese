const express = require('express');
const app = express();

var users = [
    {id:1, name: "Filan Fisteku", email:"filanfisteku@gmail.com"},
    {id:1, name: "Filan Fisteku", email:"filanfisteku@gmail.com"},
];

app.get('/hello', (req, res) => {
    res.json(users);
});

app.listen(3000,
    console.log("Serveri eshte online ne porten 3000")
)
