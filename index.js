const express = require("express");
const app = express();


app.get("/", function(req, res) {
    res.send("<html><head>Servidor iniciado</head><body><h1>Servidor iniciado</h1><p>Navegue entre as rotas: /rota1, /rota2 e /rota3</p></body></html>")
})


app.get("/rota1", function(req, res) {
    res.send("<html><head>Rota 1</head><body><h1>Rota 1</h1><p>Esta é a rota 1</p></body></html>")
})

app.get("/rota2", function(req, res) {
    res.send("<html><head>Rota 2</head><body><h1>Rota 2</h1><p>Esta é a rota 2</p></body></html>")
})

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
  });