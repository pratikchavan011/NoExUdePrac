const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method, headers } = req;

  console.log(url, method, headers)

  if (url === "/" || url === "/home") {
      res.setHeader("content-type", 'text/html');
      res.write("<h1>Home Page</h1>");
      res.end();
    }
  else if (url === "/about") res.end("About Page");
  else res.end("Server Response");
});

server.listen(5000);
