const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method, headers } = req;

  console.log(url, method, headers)

  if (url === "/" || url === "/home") {
      res.setHeader("content-type", 'text/html');
      res.write("<html>");
      res.write("<head><title>Home</title></head>");
      res.write(`<body>
        <h1>Home Page</h1> 
        <hr /> 
        <form method='post' action='/message'>
            <label>messsage :<input type='text' name='massage' /></label>
            <button type='submit'>Submit</button>
        </form>
      </body>`);
      res.write("</html>");
      return res.end();
    }
  else if (url === "/message" && method==='POST'){
       return res.end("About Page");
    //    return res.end("About Page");
}
  else if (url === "/about") return res.end("About Page");
  else return res.end("Server Response");
});

server.listen(5000);
