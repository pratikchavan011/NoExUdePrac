const fs = require('fs');

const requestHandler = (req, res) => {
    const { url, method, headers } = req;
  
    // console.log("\n-------------\n", url, method, headers, "\n-------------\n")
  
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
      // console.log('req', req)
      const body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      });
  
      return req.on('end', () => {
        const parsedBody = (Buffer.concat(body).toString().split('='))[1];
        fs.writeFile('./message.txt', `\n${parsedBody}`, {
          flag: 'a'
        }, (_err) => {
          res.statusCode = 302;
          res.setHeader('location', '/');
          return res.end();
        });
      });
  }
    else if (url === "/about") return res.end("About Page");
    else return res.end("Server Response");
  }

module.exports = requestHandler;