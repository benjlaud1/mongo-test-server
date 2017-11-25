var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 4000));

app.use(express.static(path.join( __dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    console.log('====================================');
    console.log('index hit');
    console.log('====================================');
    res.sendFile('views/index.html');
})

app.listen(app.get('port'), function(){
    console.log('====================================');
    console.log('Server running on port: ', app.get('port'));
    console.log('====================================');
});
