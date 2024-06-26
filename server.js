const express = require('express');
var dispatcher = require('./dispatcher.js');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.use('/static', express.static('./www'))
app.use('/css', express.static('./www/css'))
app.use('/assets', express.static('./www/assets'))

app.get('/', function(req, res) {
    
    try {
        console.log(req.url);
        dispatcher.dispatch(req, res);
    } catch(err) {
        console.log(err);
    }
    
   //var dir=__dirname + '/www'
   //res.sendFile(path.join(dir , '/index.html'));
});
  


app.listen(port);
console.log('Server started at http://localhost:' + port);
