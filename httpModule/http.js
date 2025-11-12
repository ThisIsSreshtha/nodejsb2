const http = require('http');

const server = http.createServer((req, res) => {
   /* try{
        res.end('This is Node.js backend server');
    }
    catch(err){
        console.error('Error while creating server', err);
    }
});  */

  try{
        res.end('This is Node.js backend server');
    }

server.listen(8000, () =>console.log('Server is running on port 8000'));
