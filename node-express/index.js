const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`El servidor se esta ejecutando en http://localhost:${port}`);
	console.log(`el resultado de 3+5 = ${3 + 5}`);
});
