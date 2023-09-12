const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get('/', (req,res) => {

        res.send('<h1> Press Here! </h1>');

});

server.listen(4040, () => {
	console.log("Server on 4040 port");
});
