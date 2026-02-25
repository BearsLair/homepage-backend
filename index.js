const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 8080;

const server = http.createServer((req, res) => {
  console.log("req.url", req.url);
  console.log("req.method", req.method);

  if (req.url === "/" && req.method === "GET") {
    fs.readFile("index.html", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });

      if (err) {
        console.log(err);
        return;
      }
      // res.end goes inside readFile method
      res.end(data);
    });
  } else if (req.url === "/about" && req.method === "GET") {
    fs.readFile("about.html", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });

      if (err) {
        console.log(err);
        return;
      }
      res.end(data);
    });
  } else if (req.url === "/contact-me" && req.method === "GET") {
    fs.readFile("contact-me.html", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });

      if (err) {
        console.log(err);
        return;
      }
      res.end(data);
    });
  } else {
    fs.readFile("404.html", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });

      if (err) {
        console.log(err);
        return;
      }
      res.end(data);
    });
  }
});

// Note to self: Remember to put the port in the parentheses, idiot!!!
server.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
