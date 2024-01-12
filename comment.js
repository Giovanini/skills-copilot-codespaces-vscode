const http = require('http');
// create a web server
// 1. create a server
const server = http.createServer();

// 2. register request event
server.on('request', (req, res) => {
    // handle request logic here
});

// 3. bind port number, start server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
