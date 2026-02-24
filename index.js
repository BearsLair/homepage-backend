const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer((req, res) => {
  fs.readFile("index.html", "utf-8", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (err) {
      console.log(err);
      return;
    }
    // res.end goes inside readFile method
    res.end(data);
  });
});

// Note to self: Remember to put the port in the parentheses, idiot!!!
server.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
