const http = require("http");

const hostname = "127.0.0.1";
const port = 3030;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hola Harry Zapata Soto");
});

server.listen(port, hostname, () => {
	console.log(`El servidor se ejecuta en http://${hostname}:${port}/`);
	console.log("Harry Franshesco Zapata Soto");
});
